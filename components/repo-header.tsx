"use client"

import { BookOpen, Pin, Eye, GitFork, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function RepoHeader() {
  const [repoData, setRepoData] = useState<{
    subscribers_count: number
    forks_count: number
    stargazers_count: number
  } | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/repos/joshuaportero/portero.dev")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.stargazers_count === "number") {
          setRepoData({
            subscribers_count: data.subscribers_count,
            forks_count: data.forks_count,
            stargazers_count: data.stargazers_count,
          })
        }
      })
      .catch((err) => console.error("Failed to fetch repo data", err))
  }, [])

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-[#8b949e] shrink-0" />
        <h1 className="text-xl font-semibold whitespace-nowrap">
          <span className="text-[#58a6ff] hover:underline cursor-pointer">My Portfolio</span>
        </h1>
        <span className="shrink-0 px-2 py-0.5 text-xs font-medium text-[#58a6ff] border border-[#58a6ff]/30 bg-[#58a6ff]/10 rounded-full shadow-[0_0_10px_rgba(88,166,255,0.2)]">
          Public
        </span>
      </div>

      <div className="hidden md:flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#21262d]/50 border-white/10 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] h-8 group"
        >
          <Pin className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
          Unpin
        </Button>

        <div className="flex items-center group">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-r-none h-8 relative z-10"
          >
            <Eye className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
            Watch
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 border-l-0 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-l-none px-2 h-8"
          >
            {repoData?.subscribers_count ?? 1}
          </Button>
        </div>

        <div className="flex items-center group">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-r-none h-8 relative z-10"
          >
            <GitFork className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
            Fork
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 border-l-0 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-l-none px-2 h-8"
          >
            {repoData?.forks_count ?? 0}
          </Button>
        </div>

        <div className="flex items-center group">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 text-[#c9d1d9] hover:bg-[#21262d] hover:border-[#8b949e] hover:bg-white/10 transition-all duration-300 rounded-r-none h-8 relative z-10"
          >
            <Star className="h-4 w-4 mr-1 transition-transform group-hover:scale-110" />
            Star
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d]/50 border-white/10 border-l-0 text-[#c9d1d9] hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-l-none px-2 h-8"
          >
            {repoData?.stargazers_count ?? 0}
          </Button>
        </div>
      </div>
    </div>
  )
}
