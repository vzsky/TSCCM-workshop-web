import { Link as ChakraLink, LinkProps } from '@chakra-ui/react'
import { ReactNode } from 'react'

interface InlineLinkProps extends LinkProps {
  children: ReactNode
}

export const InlineLink = ({ children, ...props }: InlineLinkProps) => (
  <ChakraLink
    display="inline"
    color="brand.500"
    _hover={{ textDecoration: 'underline', color: 'brand.700' }}
    {...props}
  >
    {children}
  </ChakraLink>
)
