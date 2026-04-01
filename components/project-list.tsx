"use client"

import { GitBranch, Tag, Search, ChevronDown, FolderOpen, FileCode, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

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

  const filteredProjects = projects.filter(
    (project) =>
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="border border-[#30363d] rounded-md overflow-hidden">
      {/* Branch/Tag Selector */}
      <div className="flex flex-wrap items-center gap-2 p-3 bg-[#161b22] border-b border-[#30363d]">
        <Button
          variant="outline"
          size="sm"
          className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] h-8"
        >
          <GitBranch className="h-4 w-4 mr-1" />
          main
          <ChevronDown className="h-3 w-3 ml-1" />
        </Button>

        <div className="flex items-center gap-4 text-sm text-[#8b949e]">
          <span className="flex items-center gap-1">
            <GitBranch className="h-4 w-4" />
            <span className="font-semibold text-[#e6edf3]">3</span> Branches
          </span>
          <span className="flex items-center gap-1">
            <Tag className="h-4 w-4" />
            <span className="font-semibold text-[#e6edf3]">0</span> Tags
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
          <Button
            variant="outline"
            size="sm"
            className="bg-[#21262d] border-[#30363d] text-[#c9d1d9] hover:bg-[#30363d] hover:border-[#8b949e] h-8"
          >
            Add file
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
          <Button
            size="sm"
            className="bg-[#238636] hover:bg-[#2ea043] text-white h-8"
          >
            <span className="mr-1">{"<>"}</span> Code
            <ChevronDown className="h-3 w-3 ml-1" />
          </Button>
        </div>
      </div>

      {/* Latest Commit Info */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
        <div className="h-6 w-6 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-medium">
          J
        </div>
        <span className="text-sm">
          <span className="font-semibold text-[#e6edf3]">joshuaportero</span>
          <span className="text-[#8b949e] ml-2">Updated portfolio with new projects</span>
        </span>
        <span className="text-xs text-[#8b949e] ml-auto hidden sm:block">a87d173 · last week</span>
        <span className="text-sm text-[#8b949e] flex items-center gap-1 hidden sm:flex">
          <span className="text-[#58a6ff]">14 Commits</span>
        </span>
      </div>

      {/* Project List */}
      <div className="divide-y divide-[#21262d]">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              className="flex items-center gap-3 px-4 py-2 hover:bg-[#161b22] group"
            >
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
                    className="px-2 py-0.5 text-xs bg-[#21262d] text-[#8b949e] rounded-full"
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

      {/* README Section */}
      <div className="border-t border-[#30363d]">
        <div className="flex items-center gap-2 px-4 py-3 bg-[#161b22] border-b border-[#30363d]">
          <FileCode className="h-4 w-4 text-[#8b949e]" />
          <span className="text-sm font-semibold text-[#e6edf3]">README</span>
          <span className="text-xs px-1.5 py-0.5 bg-[#388bfd33] text-[#58a6ff] rounded">md</span>
        </div>
        <div className="px-6 py-8 text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-lg bg-[#21262d] mb-4">
            <FileCode className="h-8 w-8 text-[#8b949e]" />
          </div>
          <h3 className="text-lg font-semibold text-[#e6edf3] mb-2">Welcome to my Portfolio</h3>
          <p className="text-sm text-[#8b949e] max-w-md mx-auto mb-4">
            Hi! I&apos;m Joshua Portero, a full-stack developer passionate about building great software.
            Browse through my projects above to see what I&apos;ve been working on.
          </p>
          <Button
            className="bg-[#238636] hover:bg-[#2ea043] text-white"
          >
            View Full README
          </Button>
        </div>
      </div>
    </div>
  )
}
