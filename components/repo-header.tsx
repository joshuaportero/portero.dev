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
        <BookOpen className="h-5 w-5 text-[#8b949e]" />
        <h1 className="text-xl font-semibold">
          <span className="text-[#58a6ff] hover:underline cursor-pointer">Portfolio</span>
        </h1>
        <span className="px-2 py-0.5 text-xs font-medium text-[#8b949e] border border-[#30363d] rounded-full">
          Public
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] h-8"
        >
          <Pin className="h-4 w-4 mr-1" />
          Unpin
        </Button>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-r-none h-8"
          >
            <Eye className="h-4 w-4 mr-1" />
            Watch
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] border-l-0 text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-l-none px-2 h-8"
          >
            {repoData?.subscribers_count ?? 1}
          </Button>
        </div>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-r-none h-8"
          >
            <GitFork className="h-4 w-4 mr-1" />
            Fork
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] border-l-0 text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-l-none px-2 h-8"
          >
            {repoData?.forks_count ?? 0}
          </Button>
        </div>

        <div className="flex items-center">
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-r-none h-8"
          >
            <Star className="h-4 w-4 mr-1" />
            Star
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] border-l-0 text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-l-none px-2 h-8"
          >
            {repoData?.stargazers_count ?? 0}
          </Button>
        </div>
      </div>
    </div>
  )
}
