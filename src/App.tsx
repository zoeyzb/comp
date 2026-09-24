import { SplineSceneBasic } from "@/components/ui/demo"

export default function App() {
  return (
    <main className="min-h-screen bg-[#08090d] px-4 py-8 text-white sm:px-6 md:py-12">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mb-6">
          <p className="text-sm font-medium text-neutral-500">Component demo</p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Interactive Spline scene
          </h1>
        </div>
        <SplineSceneBasic />
      </div>
    </main>
  )
}
