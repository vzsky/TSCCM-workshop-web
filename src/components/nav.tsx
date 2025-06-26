import { Box, Flex, Heading, Stack, Link as ChakraLink } from '@chakra-ui/react'
import Link from 'next/link'
import { LinkProps } from '@chakra-ui/react'
import { REGISTRATION_LINK } from '../constants'

export const NavLink = ({ children, href }: LinkProps) => (
  <ChakraLink
    px={2}
    py={1}
    color="brand.100"
    as={Link}
    _hover={{
      textDecoration: 'none',
      color: 'white',
    }}
    href={href}
  >
    {children}
  </ChakraLink>
)

export const Navbar = () => (
  <Box bg={'brand.500'} px={4} boxShadow="sm">
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Flex alignItems={'center'}>
        <NavLink href="/">
          <Heading size="lg">TSCCM 2025</Heading>
        </NavLink>
      </Flex>

      <Flex alignItems={'center'}>
        <Stack direction={'row'} gap={7}>
          <NavLink href={REGISTRATION_LINK}>Register</NavLink>
        </Stack>
      </Flex>
    </Flex>
  </Box>
)
