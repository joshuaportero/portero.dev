"use client"

import { useEffect, useState } from "react"
import { fetchWithCache } from "@/lib/cache-fetch"
import Image from "next/image"
import {
  Link as LinkIcon,
  Mail,
  MapPin,
} from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"

export function Sidebar() {
  const [githubFollowers, setGithubFollowers] = useState<number>(0)

  useEffect(() => {
    fetchWithCache("https://api.github.com/users/joshuaportero")
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
      <div className="border-b border-white/10 pb-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-semibold text-[#e6edf3]">About</h3>
        </div>
        <p className="text-sm text-[#e6edf3] mb-3">
          I bring a strong work ethic and a commitment to adaptability. I take pride in being reliable, flexible, and motivated to continually develop my skills and knowledge. I am excited to pursue a role that provides opportunities for growth and long-term career advancements.
        </p>
        <div className="space-y-2 text-sm">
          <a href="#" className="flex items-center gap-2 text-[#58a6ff] text-sm hover:underline">
            <LinkIcon className="h-4 w-4 text-[#8b949e]" />
            portero.dev
          </a>
          <div className="flex items-center gap-2 text-[#8b949e]">
            <MapPin className="h-4 w-4" />
            New Jersey, USA
          </div>
          <a href="mailto:joshua@portero.dev" className="flex items-center gap-2 text-[#8b949e] text-sm hover:text-[#58a6ff]">
            <Mail className="h-4 w-4" />
            joshua@portero.dev
          </a>
        </div>
      </div>

      {/* Social Networks */}
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-3">Connect</h3>
      <div className="flex flex-col gap-2.5">
        <a
          href="https://github.com/joshuaportero"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-[#58a6ff]/50 hover:bg-white/[0.05] hover:shadow-[0_0_15px_rgba(88,166,255,0.15)] transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#1f6feb]/0 via-[#1f6feb]/5 to-[#1f6feb]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex items-center gap-3 relative z-10 text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
            <div className="p-1.5 rounded-md bg-[#21262d] group-hover:bg-[#1f6feb]/20 text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors shadow-sm">
              <SiGithub className="h-[18px] w-[18px]" />
            </div>
            <span className="text-sm font-semibold tracking-wide">GitHub</span>
          </div>
          <div className="text-sm text-[#8b949e] relative z-10 flex items-center">
            {githubFollowers !== null ? (
              <>
                <span className="font-bold text-[#e6edf3] mr-1 text-sm">{githubFollowers}</span> Followers
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
          className="group flex items-center justify-between p-2.5 rounded-lg border border-white/10 bg-white/[0.02] hover:border-[#58a6ff]/50 hover:bg-white/[0.05] hover:shadow-[0_0_15px_rgba(88,166,255,0.15)] transition-all duration-300 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#58a6ff]/0 via-[#58a6ff]/5 to-[#58a6ff]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="flex items-center gap-3 relative z-10 text-[#e6edf3] group-hover:text-[#58a6ff] transition-colors">
            <div className="p-1.5 rounded-md bg-[#21262d] group-hover:bg-[#1f6feb]/20 text-[#c9d1d9] group-hover:text-[#58a6ff] transition-colors shadow-sm">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-[18px] w-[18px]"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </div>
            <span className="text-sm font-semibold tracking-wide">LinkedIn</span>
          </div>
          <div className="text-sm text-[#8b949e] relative z-10 flex items-center">
            <span className="font-bold text-[#e6edf3] mr-1">80+</span> Connections
          </div>
        </a>
      </div>

      <div className="hidden lg:block pt-2 text-xs text-center text-[#8b949e]">
        &copy; {new Date().getFullYear()} Joshua Portero. All rights reserved.
      </div>
    </div>
  )
}
