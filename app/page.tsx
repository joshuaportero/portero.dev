import { GitHubHeader } from "@/components/github-header"
import { ProjectList } from "@/components/project-list"
import { RepoHeader } from "@/components/repo-header"
import { RepoNav } from "@/components/repo-nav"
import { Sidebar } from "@/components/sidebar"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <main className="max-w-[1280px] mx-auto px-4 md:px-6 py-4">
        <RepoHeader />
        <div className="flex flex-col lg:flex-row gap-6 mt-4">
          <div className="flex-1 min-w-0">
            <ProjectList />
          </div>
          <aside className="w-full lg:w-[296px] shrink-0">
            <Sidebar />
          </aside>
        </div>
      </main>
    </div>
  )
}
