// /app/progression/page.tsx

import ProgressCircle from "@/components/progression/ProgressCircle"
// import Snowfall from "@/components/snow/SnowFall"

const Progression = () => {
  return (
    <>
      {/* <Snowfall /> */}
      <div className="flex flex-col items-center py-20 bg-gradient-to-b from-[var(--violet)] to-[var(--blue)]">
        <h2 className="text-white text-3xl font-righteous font-semibold w-full text-center">
          Project Progression Status
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4 py-6">
          <ProgressCircle percentage={70} title="Website">
            🟢 homepage <br /> 🟢 blog page <br /> 🟢 donation page <br />
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Account server">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="NEX">
            🟡 Under Review
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Splatoon">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Friends">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Mario Kart 7">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Mario Kart 8">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Friends (Wii U)">
            🟡 Development
          </ProgressCircle>
          <ProgressCircle percentage={20} title="Animal Crossing New Leaf">
            🟡 Development
          </ProgressCircle>
        </div>
      </div>
    </>
  )
}

export default Progression
