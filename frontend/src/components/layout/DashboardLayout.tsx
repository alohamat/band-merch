import Navbar from "./Navbar"

type DashboardLayoutProps = {
    children: React.ReactNode;
    bg?: DashboardBg;
}
type DashboardBg = "purple" | "blue" | "orange" | "black"

const gradientMap: Record<DashboardBg, string> = {
  purple: "bg-linear-to-br from-black to-purple-900",
  blue: "bg-linear-to-br from-black to-blue-900",
  orange: "bg-linear-to-br from-black to-orange-900",
  black: "bg-black",
}


export default function DashboardLayout({ children, bg }: DashboardLayoutProps) {
    return (
        <div className={`min-h-screen flex w-fit md:w-full animated-bg ${gradientMap[bg ?? "black"]}`}>

      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="flex-1 p-6 mt-15">
          {children}
        </main>
      </div>
    </div>
  )
}
