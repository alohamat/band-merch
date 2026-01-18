import Navbar from "./Navbar"

type DashboardLayoutProps = {
    children: React.ReactNode;
    bg?: DashboardBg;
}
type DashboardBg = "purple" | "blue" | "green" | "black"

const gradientMap: Record<DashboardBg, string> = {
  purple: "bg-linear-to-br from-black to-purple-900",
  blue: "bg-linear-to-br from-black to-blue-900",
  green: "bg-linear-to-br from-black to-emerald-900",
  black: "bg-black",
}


export default function DashboardLayout({ children, bg }: DashboardLayoutProps) {
    return (
        <div className={`min-h-screen flex animated-bg ${gradientMap[bg ?? "black"]}`}>

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  )
}
