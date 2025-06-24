import { Box, Flex, Stack, Container, Heading, Text, HStack, VStack, Icon } from '@chakra-ui/react'
import { Button } from './button'
import Link from 'next/link'
import { REGISTRATION_LINK } from '../constants'
import { MapIFrame } from './map'
import { FaPlus } from 'react-icons/fa'

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
        <Box
          flex={{ base: '1 1 100%', lg: '0 0 70%' }}
          w="100%"
          display="flex"
          alignItems={{ base: 'center', lg: 'flex-start' }}
          justifyContent="center"
        >
          <VStack w="100%" gap={8} align="stretch">
            {/* Top icon and subtitle */}
            <HStack justify="left" gap={3} display="flex">
              <Box
                bg="brand.500"
                borderRadius="full"
                p={2}
                display={{ base: 'flex', lg: 'none' }}
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaPlus} color="white" boxSize={6} />
              </Box>
              <Text
                color="gray.500"
                fontWeight={{ base: 'medium', lg: 'normal' }}
                fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
              >
                TSCCM 2025 Interactive Workshop
              </Text>
            </HStack>
            {/* Heading and description */}
            <Box display={'block'} textAlign={{ base: 'center', lg: 'left' }}>
              <Heading
                display={{ base: 'block', lg: 'none' }}
                fontSize="3xl"
                fontWeight="extrabold"
                color="brand.500"
                mb={4}
              >
                Data Warehouse and AI in Intensive Care Medicine
              </Heading>
              <Heading
                display={{ base: 'none', lg: 'block' }}
                fontSize={{ base: '3xl', lg: '5xl' }}
                fontWeight="extrabold"
                lineHeight="1.1"
              >
                Data Warehouse and AI in <br /> Intensive Care Medicine
              </Heading>

              <Text
                color="gray.600"
                mt={4}
                textAlign={{ base: 'center', lg: 'left' }}
                fontSize={{ base: 'lg', lg: '2xl' }}
              >
                Join us for a workshop on utilizing data warehouse and AI technologies to enhance
                intensive care medicine.
              </Text>
            </Box>
            {/* Buttons */}
            <Stack
              direction={{ base: 'column', md: 'row' }}
              gap={4}
              w="100%"
              display="flex"
              justify={{ base: 'center', lg: 'flex-start' }}
            >
              <Button
                width={{ base: '100%', md: 'auto' }}
                fontWeight="bold"
                fontSize="lg"
                as={Link}
                href={REGISTRATION_LINK}
              >
                Register Now
              </Button>
              <Button
                width={{ base: '100%', md: 'auto' }}
                fontWeight="bold"
                fontSize="lg"
                as={Link}
                href="/schedule"
              >
                View Schedule
              </Button>
            </Stack>
          </VStack>
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
          {/* Illustration Placeholder (desktop only) */}
          <Box
            display={{ base: 'none', lg: 'block' }}
            mb={8}
            alignSelf="flex-end"
            width="320px"
            height="240px"
            bg="gray.100"
            borderRadius="lg"
            boxShadow="md"
          >
            <MapIFrame />
          </Box>
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
            maxW={{ base: '100%', md: '500px' }}
            w={{ base: '100%', lg: 'auto' }}
            alignSelf={{ base: 'center', lg: 'flex-end' }}
            display={{ base: 'block', lg: 'block' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="brand.800" textAlign="center">
              July 19, 2025
            </Text>
            <Text fontSize="md" color="brand.500" textAlign="center">
              King Chulalongkorn Memorial Hospital
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  </Box>
)
