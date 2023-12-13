import { Identity } from "./Identity"
import { DetailsSection } from "./details/DetailsSection"
export const Layout =() => {
  return (
    <div className="layout min-h-screen w-screen py-4 px-10 drop-shadow-2xl">
      <Identity />
      <div className="about bg-[#292929] m-2  border border-[#5c5c5c] rounded-2xl">
        <DetailsSection />
      </div>
    </div>
  )
}