"use client"

import { BookOpen } from "lucide-react"

export function RepoHeader() {

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-[#8b949e] shrink-0" />
        <h1 className="text-xl whitespace-nowrap flex items-center leading-none">
          <a href="https://github.com/joshuaportero" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline cursor-pointer font-normal">
            joshuaportero
          </a>
          <span className="text-[#8b949e] font-normal mx-1 tracking-tight">/</span>
          <a href="https://github.com/joshuaportero/portero.dev" target="_blank" rel="noreferrer" className="text-[#58a6ff] hover:underline cursor-pointer font-semibold">
            portero.dev
          </a>
        </h1>
        <div className="hidden md:flex flex-wrap items-center gap-2">
          <span className="shrink-0 px-2 py-0.5 text-xs font-medium text-[#58a6ff] border border-[#58a6ff]/30 bg-[#58a6ff]/10 rounded-full shadow-[0_0_10px_rgba(88,166,255,0.2)]">
            Public
          </span>
        </div>
      </div>
    </div >
  )
}
