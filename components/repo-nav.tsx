"use client"

import {
  Code2,
  CircleDot,
  GitPullRequest,
  Play,
  LayoutGrid,
  BookOpen,
  Shield,
  BarChart3,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { icon: Code2, label: "Code", active: true },
  { icon: CircleDot, label: "Issues", count: 0 },
  { icon: GitPullRequest, label: "Pull requests", count: 0 },
  { icon: Play, label: "Actions" },
  { icon: LayoutGrid, label: "Projects" },
  { icon: BookOpen, label: "Wiki" },
  { icon: Shield, label: "Security" },
  { icon: BarChart3, label: "Insights" },
  { icon: Settings, label: "Settings" },
]

export function RepoNav() {
  return (
    <nav className="overflow-x-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <ul className="flex items-center gap-2 -mb-px">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "relative flex items-center gap-2 px-3 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/5 rounded-t-md overflow-hidden group",
                  item.active
                    ? "text-[#e6edf3]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                )}
              >
                {/* Micro-animation border indicator */}
                <div className={cn(
                  "absolute bottom-0 left-0 w-full h-[2px] transition-transform duration-300 ease-in-out",
                  item.active ? "bg-[#f78166] scale-x-100" : "bg-[#f78166]/50 scale-x-0 group-hover:scale-x-100"
                )} />
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
                {item.count !== undefined && (
                  <span className={cn(
                    "hidden sm:inline px-2 py-0.5 rounded-full text-xs transition-colors",
                    item.active ? "bg-[#f78166]/10 text-[#f78166]" : "bg-white/5 text-[#e6edf3] group-hover:bg-white/10"
                  )}>
                    {item.count}
                  </span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
