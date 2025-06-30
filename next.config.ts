import type { NextConfig } from "next"
import path from "path"

const nextConfig: NextConfig = {
  // experimental: {
  //   alias: {
  //     "@": "./src",
  //   },
  // },
  // webpack: (config) => {
  //   config.resolve.alias["@"] = path.resolve(__dirname, "src")
  //   return config
  // },
  turbopack: {
    // ...
  },
}

export default nextConfig
