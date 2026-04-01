"use client"

import {
  Menu,
  Search,
  Plus,
  ChevronDown,
  Terminal,
  Bell,
  GitPullRequest,
  CircleDot,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function GitHubHeader() {
  return (
    <header className="bg-[#010409] border-b border-[#30363d] px-4 py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden text-[#e6edf3] hover:bg-[#21262d]">
            <Menu className="h-5 w-5" />
          </Button>
          
          {/* GitHub Logo */}
          <a href="#" className="text-[#e6edf3] hover:text-[#e6edf3]/80">
            <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>

          <span className="hidden lg:flex items-center gap-1 text-sm font-semibold">
            <a href="#" className="text-[#e6edf3] hover:underline">joshuaportero</a>
            <span className="text-[#8b949e]">/</span>
            <a href="#" className="text-[#e6edf3] hover:underline">portfolio</a>
          </span>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-[720px]">
          <div className="relative w-full max-w-[400px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
            <input
              type="text"
              placeholder="Type / to search"
              className="w-full bg-[#0d1117] border border-[#30363d] rounded-md py-1.5 pl-9 pr-3 text-sm text-[#e6edf3] placeholder:text-[#8b949e] focus:outline-none focus:border-[#388bfd] focus:ring-1 focus:ring-[#388bfd]"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-[#30363d] rounded px-1.5 py-0.5 text-xs text-[#8b949e]">/</div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="md:hidden text-[#e6edf3] hover:bg-[#21262d]">
            <Search className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:flex items-center gap-1 border-r border-[#30363d] pr-2 mr-1">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="text-[#e6edf3] hover:bg-[#21262d] h-8 px-2">
                  <Plus className="h-4 w-4" />
                  <ChevronDown className="h-3 w-3 ml-0.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#161b22] border-[#30363d]">
                <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">New repository</DropdownMenuItem>
                <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">Import repository</DropdownMenuItem>
                <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">New project</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button variant="ghost" size="icon" className="hidden md:flex text-[#e6edf3] hover:bg-[#21262d]">
            <CircleDot className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hidden md:flex text-[#e6edf3] hover:bg-[#21262d]">
            <GitPullRequest className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-[#e6edf3] hover:bg-[#21262d]">
            <Bell className="h-5 w-5" />
          </Button>

          {/* Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-[#21262d] rounded-full p-0 h-8 w-8">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
                  J
                </div>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#161b22] border-[#30363d] w-[200px]">
              <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">
                <Terminal className="h-4 w-4 mr-2" />
                Your profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">Your repositories</DropdownMenuItem>
              <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">Your projects</DropdownMenuItem>
              <DropdownMenuItem className="text-[#e6edf3] focus:bg-[#21262d]">Settings</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
