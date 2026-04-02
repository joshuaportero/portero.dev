import { ProjectList } from "@/components/project-list"
import { RepoHeader } from "@/components/repo-header"
import { Sidebar } from "@/components/sidebar"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#010409]/80 relative selection:bg-blue-500/30 flex items-center justify-center p-0 md:p-4">
      {/* Premium ambient glows */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1f6feb]/15 via-[#0d1117]/0 to-transparent blur-3xl z-0" />

      <main className="relative z-10 w-[1280px] max-w-full flex flex-col text-[#e6edf3] h-[100dvh] md:h-auto">
        <div className="bg-[#010409]/80 backdrop-blur-md p-4 sm:p-6 md:p-8 border-0 md:border border-white/10 rounded-none md:rounded-2xl flex flex-col gap-6 md:gap-8 h-full md:h-[85vh] overflow-y-auto">
          <RepoHeader />

          <div className="flex flex-col-reverse lg:flex-row gap-8 pb-8 md:pb-0">
            <div className="flex-1 min-w-0">
              <ProjectList />
            </div>
            <aside className="w-full lg:w-[296px] shrink-0">
              <Sidebar />
            </aside>
          </div>
        </div>
      </main>
    </div>
  )
}
