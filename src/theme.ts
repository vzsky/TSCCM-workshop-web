import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#f5f3fa' },
          100: { value: '#e9e3f5' },
          200: { value: '#d3c7eb' },
          300: { value: '#bdaae0' },
          400: { value: '#a78ed6' },
          500: { value: '#815ec2' },
          600: { value: '#6a4b9e' },
          700: { value: '#52387a' },
          800: { value: '#3b2557' },
          900: { value: '#231233' },
        },
        accent: {
          50: { value: '#fdf2f4' },
          100: { value: '#f9d9df' },
          200: { value: '#f3b3c0' },
          300: { value: '#ed8da1' },
          400: { value: '#e76782' },
          500: { value: '#833043' },
          600: { value: '#6a2736' },
          700: { value: '#511e29' },
          800: { value: '#38141c' },
          900: { value: '#1f0b0f' },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
