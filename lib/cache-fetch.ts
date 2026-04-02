export async function fetchWithCache(url: string, options?: RequestInit & { ttl?: number }): Promise<Response> {
  const cacheKey = `fetch_cache_${url}`
  const ttl = options?.ttl || 5 * 60 * 1000 // default 5 minutes TTL

  if (typeof window !== "undefined") {
    try {
      const cached = localStorage.getItem(cacheKey)
      if (cached) {
        const parsed = JSON.parse(cached)
        if (Date.now() - parsed.timestamp < ttl) {
          return {
            ok: true,
            status: 200,
            json: async () => parsed.data,
            headers: new Headers(parsed.headers || {}),
          } as unknown as Response
        }
      }
    } catch (e) {
      console.warn("Failed to read from cache", e)
    }
  }

  const res = await fetch(url, options)

  if (res.ok && typeof window !== "undefined") {
    try {
      const cloned = res.clone()
      const data = await cloned.json()

      const headersObj: Record<string, string> = {}
      cloned.headers.forEach((value, key) => {
        headersObj[key] = value
      })

      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          timestamp: Date.now(),
          data,
          headers: headersObj,
        })
      )
    } catch (e) {
      console.warn("Failed to set cache", e)
    }
  }

  return res
}
