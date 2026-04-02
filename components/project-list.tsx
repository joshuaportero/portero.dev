"use client"

import { GitBranch, Tag, Search, ChevronDown, FolderOpen, FileCode, ExternalLink, History, MoreHorizontal, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

const projects = [
  {
    name: "atlas",
    description: "Core RPG plugin for quests, combat, progression, and world events",
    tech: ["Java", "Gradle"],
    updated: "last year",
    type: "folder",
    link: "#",
  },
  {
    name: "pixel-ui",
    description: "A modern React component library with pixel-perfect designs",
    tech: ["TypeScript", "React"],
    updated: "3 months ago",
    type: "folder",
    link: "#",
  },
  {
    name: "cloud-functions",
    description: "Serverless functions for handling API requests and webhooks",
    tech: ["Node.js", "Firebase"],
    updated: "6 months ago",
    type: "folder",
    link: "#",
  },
  {
    name: "data-viz",
    description: "Interactive data visualization dashboard built with D3.js",
    tech: ["JavaScript", "D3.js"],
    updated: "1 year ago",
    type: "folder",
    link: "#",
  },
  {
    name: "mobile-app",
    description: "Cross-platform mobile application for task management",
    tech: ["React Native", "TypeScript"],
    updated: "8 months ago",
    type: "folder",
    link: "#",
  },
  {
    name: "api-gateway",
    description: "RESTful API gateway with authentication and rate limiting",
    tech: ["Go", "Docker"],
    updated: "4 months ago",
    type: "folder",
    link: "#",
  },
  {
    name: "ml-models",
    description: "Machine learning models for sentiment analysis and prediction",
    tech: ["Python", "TensorFlow"],
    updated: "2 months ago",
    type: "folder",
    link: "#",
  },
  {
    name: "portfolio-site",
    description: "This portfolio website built with Next.js and Tailwind CSS",
    tech: ["Next.js", "TypeScript"],
    updated: "just now",
    type: "file",
    link: "#",
  },
]

export function ProjectList() {
  const [searchQuery, setSearchQuery] = useState("")
  const [commitData, setCommitData] = useState<any>(null)
  const [commitCount, setCommitCount] = useState<string>("14")
  const [branchCount, setBranchCount] = useState<number>(3)
  const [tagCount, setTagCount] = useState<number>(0)

  useEffect(() => {
    fetch("https://api.github.com/repos/joshuaportero/portero.dev/commits?per_page=1")
      .then((res) => {
        const link = res.headers.get("link")
        if (link) {
          const match = link.match(/page=(\d+)>; rel="last"/)
          if (match) setCommitCount(match[1])
        }
        return res.json()
      })
      .then((data) => {
        if (data && data.length > 0) setCommitData(data[0])
      })
      .catch((err) => console.error("Failed to fetch commits", err))

    fetch("https://api.github.com/repos/joshuaportero/portero.dev/branches")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setBranchCount(data.length)
      }).catch(err => console.error(err))

    fetch("https://api.github.com/repos/joshuaportero/portero.dev/tags")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setTagCount(data.length)
      }).catch(err => console.error(err))
  }, [])

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const authorName = commitData?.commit?.author?.name || "joshuaportero"
  const authorAvatarUrl = commitData?.author?.avatar_url
  const commitMessage = commitData?.commit?.message || "Updated portfolio with new projects"
  const shortCommitMessage = commitMessage.split('\n')[0]
  const commitSha = commitData?.sha?.substring(0, 7) || "a87d173"
  const commitDateRaw = commitData?.commit?.author?.date
  const commitDate = commitDateRaw ? new Date(commitDateRaw) : null

  let timeAgo = "last week"
  if (commitDate) {
    const seconds = Math.floor((new Date().getTime() - commitDate.getTime()) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) { timeAgo = Math.floor(interval) + " years ago" }
    else {
      interval = seconds / 2592000
      if (interval > 1) timeAgo = Math.floor(interval) + " months ago"
      else {
        interval = seconds / 86400
        if (interval > 1) timeAgo = Math.floor(interval) + " days ago"
        else {
          interval = seconds / 3600
          if (interval > 1) timeAgo = Math.floor(interval) + " hours ago"
          else {
            interval = seconds / 60
            if (interval > 1) timeAgo = Math.floor(interval) + " minutes ago"
            else timeAgo = Math.floor(seconds) + " seconds ago"
          }
        }
      }
    }
  }

  return (
    <div className="rounded-md overflow-hidden bg-[#0d1117]/50 backdrop-blur-sm ring-1 ring-white/10">
      {/* Branch/Tag Selector */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-white/[0.02] border-b border-white/10">

        <div className="flex items-center gap-4 text-sm text-[#8b949e]">
          <span className="flex items-center gap-2 hover:text-[#e6edf3]">
            <GitBranch className="h-4 w-4" />
            <span className="font-semibold text-[#e6edf3]">main</span>
            <ChevronDown className="h-3 w-3" />
          </span>
          <span className="flex items-center gap-2">
            <GitBranch className="h-4 w-4" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[#e6edf3]">{branchCount}</span> Branches
            </div>
          </span>
          <span className="flex items-center gap-2">
            <Tag className="h-4 w-4" />
            <div className="flex items-center gap-1">
              <span className="font-semibold text-[#e6edf3]">{tagCount}</span> Tags
            </div>
          </span>
        </div>

        <div className="flex-1" />

        <div className="hidden sm:flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8b949e]" />
            <input
              type="text"
              placeholder="Find a project..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[200px] bg-[#0d1117] border border-[#30363d] rounded-md py-1 pl-8 pr-3 text-sm text-[#e6edf3] placeholder:text-[#8b949e] focus:outline-none focus:border-[#388bfd]"
            />
          </div>
        </div>
      </div>

      {/* Latest Commit Info */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white/[0.01] border-b border-white/10 overflow-hidden md:gap-3 transition-colors hover:bg-white/[0.03]">
        <div className="h-6 w-6 rounded-full overflow-hidden bg-[#21262d] flex items-center justify-center shrink-0 ring-1 ring-white/10 shadow-[0_0_8px_rgba(88,166,255,0.15)]">
          <img src={authorAvatarUrl || "https://github.com/joshuaportero.png"} alt={authorName} className="h-full w-full object-cover" />
        </div>

        <div className="flex items-center flex-1 min-w-0">
          <span className="font-semibold text-sm text-[#e6edf3] shrink-0 mr-2 hover:text-[#58a6ff] hover:underline cursor-pointer">
            {authorName}
          </span>
          <span className="text-sm text-[#8b949e] truncate hover:text-[#58a6ff] hover:underline cursor-pointer">
            {shortCommitMessage}
          </span>
          <button className="shrink-0 ml-1 text-[#8b949e] hover:text-[#c9d1d9] bg-[#21262d] hover:bg-[#30363d] rounded px-1 hidden sm:block">
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <Check className="h-4 w-4 text-[#238636] shrink-0 hidden md:block" />
          <span className="text-xs text-[#8b949e] hidden sm:block font-mono">
            <span className="hover:text-[#58a6ff] hover:underline cursor-pointer">{commitSha}</span>
            <span className="mx-1">·</span>
            <span className="hover:text-[#58a6ff] hover:underline cursor-pointer">{timeAgo}</span>
          </span>

          <div className="flex items-center gap-1.5 ml-1 text-[#e6edf3] hover:text-[#58a6ff] cursor-pointer group hover:underline">
            <History className="h-4 w-4 text-[#8b949e] group-hover:text-[#58a6ff]" />
            <span className="text-xs font-semibold">{commitCount} Commits</span>
          </div>
        </div>
      </div>

      {/* Project List */}
      <div className="divide-y divide-white/5">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/[0.03] transition-all duration-300 group relative border-l-2 border-transparent hover:border-[#58a6ff]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/0 via-[#58a6ff]/5 to-[#58a6ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {project.type === "folder" ? (
                <FolderOpen className="h-4 w-4 text-[#8b949e] shrink-0" />
              ) : (
                <FileCode className="h-4 w-4 text-[#8b949e] shrink-0" />
              )}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[#58a6ff] group-hover:underline truncate">
                    {project.name}
                  </span>
                  <ExternalLink className="h-3 w-3 text-[#8b949e] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs text-[#8b949e] truncate mt-0.5">{project.description}</p>
              </div>

              <div className="hidden md:flex items-center gap-2 shrink-0">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs bg-white/5 text-[#8b949e] rounded-full ring-1 ring-white/10 group-hover:ring-[#58a6ff]/30 transition-colors"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <span className="text-xs text-[#8b949e] shrink-0 hidden sm:block">{project.updated}</span>
            </a>
          ))
        ) : (
          <div className="px-4 py-8 text-center text-sm text-[#8b949e]">
            No projects found matching "<span className="text-[#e6edf3]">{searchQuery}</span>"
          </div>
        )}
      </div>
    </div>
  )
}
