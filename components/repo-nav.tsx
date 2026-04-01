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
    <nav className="bg-[#010409] border-b border-[#30363d] overflow-x-auto">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <ul className="flex items-center gap-0 -mb-px">
          {navItems.map((item) => (
            <li key={item.label}>
              <button
                className={cn(
                  "flex items-center gap-2 px-3 py-3 text-sm font-medium transition-colors hover:bg-[#21262d] rounded-t-md",
                  item.active
                    ? "text-[#e6edf3] border-b-2 border-[#f78166]"
                    : "text-[#8b949e] hover:text-[#e6edf3]"
                )}
              >
                <item.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{item.label}</span>
                {item.count !== undefined && (
                  <span className="hidden sm:inline bg-[#30363d] text-[#e6edf3] px-2 py-0.5 rounded-full text-xs">
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
