// /components/snow/SnowFall.tsx
import "@/styles/snowfall.css"

const Snowfall = () => {
  const snowflakes = Array.from({ length: 50 })

  return (
    <div className="snow-container">
      {snowflakes.map((_, i) => {
        const size = Math.random() * 8 + 4 // 4px to 12px
        const duration = 3 + Math.random() * 5
        const delay = Math.random() * 5

        return (
          <div
            className="flake-wrapper"
            key={i}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          >
            <div
              className="snowflake"
              style={{
                left: `${Math.random() * 100}%`,
                width: `${size}px`,
                height: `${size}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Snowfall
