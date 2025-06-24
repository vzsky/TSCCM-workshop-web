import { Box, Flex, Stack, Container, Heading, Text } from '@chakra-ui/react'
import { Button } from './button'
import Link from 'next/link'
import { REGISTRATION_LINK } from '../constants'

export const HeadingComponent = () => (
  <Box bg="white" color="brand.500">
    <Container maxW="container.xl" height={{ base: 'auto', lg: '100vh' }} p={5}>
      <Flex
        direction={{ base: 'column', lg: 'row' }}
        height="100%"
        align={{ base: 'center', lg: 'stretch' }}
        justify={{ base: 'center', lg: 'space-between' }}
        gap={{ base: 8, lg: 0 }}
        py={{ base: 10, md: 20 }}
        px={{ base: 0, lg: 10 }}
      >
        {/* Left: Main content */}
        <Box flex={1} w="100%">
          <Stack
            gap={6}
            align={{ base: 'center', lg: 'flex-start' }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text color="gray.500" fontSize={{ base: 'lg', md: '2xl', lg: '2xl', xl: '3xl' }}>
              TSCCM 2025 Interactive Workshop
            </Text>
            <Heading
              fontSize={{ base: '3xl', md: '5xl', lg: '5xl', xl: '6xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Data Warehouse and AI
              <br />
              in Intensive Care Medicine
            </Heading>
            <Stack
              direction={{ base: 'column', md: 'row' }}
              gap={4}
              w={{ base: '100%', md: 'auto' }}
              justify="center"
              align="center"
            >
              <Button
                width={{ base: '100%', md: 'auto' }}
                maxWidth={{ base: '300px', lg: '400px', xl: '700px' }}
                as={Link}
                href={REGISTRATION_LINK}
                p={{ base: 4, lg: 6 }}
              >
                <Text fontSize={{ base: 'lg', lg: '2xl' }} textAlign="center">
                  Register Now
                </Text>
              </Button>
              <Button
                width={{ base: '100%', md: 'auto' }}
                maxWidth={'300px'}
                as={Link}
                href="/schedule"
                p={{ base: 4, lg: 6 }}
              >
                <Text fontSize={{ base: 'lg', lg: '2xl' }} textAlign="center">
                  View Schedule
                </Text>
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Right: Illustration and Date/Venue */}
        <Box
          flex={{ base: '1 1 100%', lg: '0 0 30%' }}
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-end"
          position="relative"
        >
          {/* Date and Venue Card */}
          <Box
            bg="white"
            border="1px solid"
            borderColor="brand.200"
            borderRadius="xl"
            boxShadow="sm"
            px={6}
            py={4}
            mt={{ base: 4, lg: 0 }}
            minW="260px"
            maxW={{ base: '300px', lg: '500px' }}
            w={{ base: '100%', lg: 'auto' }}
            alignSelf={{ base: 'center', lg: 'flex-end' }}
            display={{ base: 'block', lg: 'block' }}
          >
            <Text
              fontSize={{ base: 'xl', lg: '2xl' }}
              fontWeight="bold"
              color="brand.700"
              textAlign="center"
            >
              July 19, 2025
            </Text>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color="brand.500" textAlign="center">
              King Chulalongkorn Memorial Hospital
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
)
