"use client"

import { BookOpen, Pin, Eye, GitFork, Star, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function RepoHeader() {
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
            Unwatch
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] border-l-0 text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] rounded-l-none px-2 h-8"
          >
            1
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
            0
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
            0
          </Button>
        </div>
      </div>
    </div>
  )
}
