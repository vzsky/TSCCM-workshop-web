import { Box, Flex, Stack, Container, Heading, Text } from '@chakra-ui/react'
import { Button } from './button'
import Link from 'next/link'
import { REGISTRATION_LINK } from '../constants'

export const HeadingComponent = () => (
  <Box bg="white" color="brand.500">
    <Container maxW="container.xl" height="100vh">
      <Flex
        direction={{ base: 'column', md: 'row' }}
        gap={8}
        height="100%"
        align={{ base: 'center', md: 'flex-end' }}
        justify={{ base: 'center', md: 'space-between' }}
        py={{ base: 10, md: 20 }}
      >
        {/* Left: Main content */}
        <Box flex={1} w="100%">
          <Stack
            gap={6}
            align={{ base: 'center', md: 'flex-start' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            <Text color="gray.500" fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>
              TSCCM 2025 Interactive Workshop
            </Text>
            <Heading
              fontSize={{ base: '3xl', md: '3xl', lg: '5xl' }}
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
                maxWidth={'300px'}
                as={Link}
                href={REGISTRATION_LINK}
              >
                Register Now
              </Button>
              <Button
                width={{ base: '100%', md: 'auto' }}
                maxWidth={'300px'}
                as={Link}
                href="/schedule"
              >
                View Schedule
              </Button>
            </Stack>
          </Stack>
        </Box>

        {/* Right: Date and Venue */}
        <Box flexShrink={0}>
          <Box
            border="2px solid"
            borderColor="brand.500"
            p={6}
            borderRadius="md"
            minW={{ base: 'auto', md: '260px' }}
          >
            <Stack align="flex-end" gap={2}>
              <Text fontSize="xl" fontWeight="bold">
                July 19, 2025
              </Text>
              <Text fontSize="lg">King Chulalongkorn Memorial Hospital</Text>
            </Stack>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
)
