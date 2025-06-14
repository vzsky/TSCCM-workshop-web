import { Button as ChakraButton } from '@chakra-ui/react'
import { ComponentProps } from 'react'

type ButtonVariant = 'primary' | 'outline'

type ButtonProps = {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
} & Omit<ComponentProps<typeof ChakraButton>, 'variant'>

export const Button = ({ children, variant = 'primary', ...props }: ButtonProps) => {
  const variants: Record<ButtonVariant, ComponentProps<typeof ChakraButton>> = {
    primary: {
      bg: 'brand.500',
      color: 'white',
      _hover: {
        bg: 'brand.600',
      },
    },
    outline: {
      bg: 'white',
      color: 'brand.500',
      border: '2px solid',
      borderColor: 'brand.500',
      _hover: {
        bg: 'brand.50',
      },
    },
  }

  return (
    <ChakraButton size="lg" {...variants[variant]} {...props}>
      {children}
    </ChakraButton>
  )
}
