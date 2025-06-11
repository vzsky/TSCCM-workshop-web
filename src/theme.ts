import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          500: {value: "#815ec2"},
        },
        accent: {
          500: {value: "#833043"},
        }
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
