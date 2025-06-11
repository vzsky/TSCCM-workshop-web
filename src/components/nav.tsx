import {
    Box,
    Flex,
    Heading,
    Stack,
    Link,
} from "@chakra-ui/react"

export const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: 'gray.200'
        }}
        href={href}
    >
        {children}
    </Link>
)

export const Navbar = () => (
    <Box bg={'gray.100'} px={4} boxShadow="sm">
    <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
        <Heading size="lg" color="brand.500">
            TSCCM 2025
        </Heading>
        </Flex>

        <Flex alignItems={'center'}>
        <Stack direction={'row'} gap={7}>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#program">Program</NavLink>
            <NavLink href="#registration">Registration</NavLink>
            <NavLink href="#contact">Contact</NavLink>
        </Stack>
        </Flex>
    </Flex>
    </Box>
)