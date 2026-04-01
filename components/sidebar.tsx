"use client"

import { useEffect, useState } from "react"
import {
  Activity,
  Link as LinkIcon,
  Mail,
  MapPin,
  Settings,
} from "lucide-react"
import { SiGithub, SiInspire } from "@icons-pack/react-simple-icons"

const skills = [
  { name: "TypeScript", color: "#3178c6", percentage: 35 },
  { name: "Java", color: "#b07219", percentage: 25 },
  { name: "Python", color: "#3572a5", percentage: 20 },
  { name: "JavaScript", color: "#f1e05a", percentage: 12 },
  { name: "Go", color: "#00add8", percentage: 8 },
]

export function Sidebar() {
  const [githubFollowers, setGithubFollowers] = useState<number | null>(null)

  useEffect(() => {
    fetch("https://api.github.com/users/joshuaportero")
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.followers === "number") {
          setGithubFollowers(data.followers)
        }
      })
      .catch((err) => console.error("Failed to fetch GitHub followers", err))
  }, [])

  return (
    <div className="space-y-4">
      {/* About Section */}
      <div className="border-b border-[#30363d] pb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#e6edf3]">About</h3>
          <button className="text-[#8b949e] hover:text-[#58a6ff]">
            <Settings className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-[#e6edf3] mb-3">
          Full-stack developer passionate about creating impactful software solutions.
          Experienced in web development, cloud infrastructure, and game development.
        </p>
        <div className="space-y-2 text-sm">
          <a href="#" className="flex items-center gap-2 text-[#58a6ff] hover:underline">
            <LinkIcon className="h-4 w-4 text-[#8b949e]" />
            portero.dev
          </a>
          <div className="flex items-center gap-2 text-[#8b949e]">
            <MapPin className="h-4 w-4" />
            New Jersey, USA
          </div>
          <a href="mailto:joshua@portero.dev" className="flex items-center gap-2 text-[#8b949e] hover:text-[#58a6ff]">
            <Mail className="h-4 w-4" />
            joshua@portero.dev
          </a>
        </div>
      </div>

      {/* Social Networks */}
      <div className="border-b border-[#30363d] pb-6 mt-4">
        <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Connect</h3>
        <div className="flex flex-col gap-2.5">
          <a
            href="https://github.com/joshuaportero"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-2.5 rounded-lg border border-[#30363d] bg-[#0d1117] hover:border-[#8b949e] hover:bg-[#161b22] hover:shadow-[0_0_15px_rgba(88,166,255,0.1)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1f6feb]/0 via-[#1f6feb]/5 to-[#1f6feb]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 relative z-10 text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
              <div className="p-1.5 rounded-md bg-[#21262d] group-hover:bg-[#1f6feb]/20 text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors shadow-sm">
                <SiGithub className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[13px] font-semibold tracking-wide">GitHub</span>
            </div>
            <div className="text-[11px] text-[#8b949e] relative z-10 flex items-center">
              {githubFollowers !== null ? (
                <>
                  <span className="font-bold text-[#e6edf3] mr-1">0{githubFollowers}</span> Followers
                </>
              ) : (
                "Followers"
              )}
            </div>
          </a>
          
          <a
            href="https://linkedin.com/in/joshua-portero"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-2.5 rounded-lg border border-[#30363d] bg-[#0d1117] hover:border-[#8b949e] hover:bg-[#161b22] hover:shadow-[0_0_15px_rgba(88,166,255,0.1)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/0 via-[#58a6ff]/5 to-[#58a6ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex items-center gap-3 relative z-10 text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
              <div className="p-1.5 rounded-md bg-[#21262d] group-hover:bg-[#1f6feb]/20 text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors shadow-sm">
                <SiInspire className="h-[18px] w-[18px]" />
              </div>
              <span className="text-[13px] font-semibold tracking-wide">LinkedIn</span>
            </div>
            <div className="text-[11px] text-[#8b949e] relative z-10 flex items-center">
              <span className="font-bold text-[#e6edf3] mr-1">80+</span> Connections
            </div>
          </a>
        </div>
      </div>

      {/* Contributors Section */}
      <div className="border-b border-[#30363d] pb-4">
        <h3 className="text-sm font-semibold text-[#e6edf3] mb-2">Contributors <span className="text-[#8b949e]">1</span></h3>
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-medium">
            J
          </div>
          <div>
            <a target="_blank" href="https://github.com/joshuaportero" className="text-sm font-semibold text-[#e6edf3] hover:text-[#58a6ff]">joshuaportero</a>
            <p className="text-xs text-[#8b949e]">Joshua Portero</p>
          </div>
        </div>
      </div>

      {/* Languages/Skills Section */}
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Languages</h3>

      {/* Language Bar */}
      <div className="flex h-2 rounded-full overflow-hidden mb-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            style={{ width: `${skill.percentage}%`, backgroundColor: skill.color }}
            className="h-full"
          />
        ))}
      </div>

      {/* Language List */}
      <div className="space-y-1">
        {skills.map((skill) => (
          <div key={skill.name} className="flex items-center gap-2 text-sm">
            <span
              className="h-3 w-3 rounded-full"
              style={{ backgroundColor: skill.color }}
            />
            <span className="text-[#e6edf3]">{skill.name}</span>
            <span className="text-[#8b949e]">{skill.percentage}%</span>
          </div>
        ))}
      </div>
    </div>
  )
}
