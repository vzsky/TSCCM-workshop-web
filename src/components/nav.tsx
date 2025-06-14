import { Box, Flex, Heading, Stack, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';

export const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <ChakraLink
    px={2}
    py={1}
    color="white"
    as={Link}
    _hover={{
      textDecoration: 'none',
      color: 'accent.100',
    }}
    href={href}
  >
    {children}
  </ChakraLink>
);

export const Navbar = () => (
  <Box bg={'brand.500'} px={4} boxShadow="sm">
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
      <Flex alignItems={'center'}>
        <ChakraLink
          href="/"
          as={Link}
          color="white"
          _hover={{
            textDecoration: 'none',
            color: 'accent.100',
          }}
        >
          <Heading size="lg">TSCCM 2025</Heading>
        </ChakraLink>
      </Flex>

      <Flex alignItems={'center'}>
        <Stack direction={'row'} gap={7}>
          <NavLink href="#register">Register</NavLink>
        </Stack>
      </Flex>
    </Flex>
  </Box>
);
