import { Box, Container, Heading, Text, Button, Stack } from '@chakra-ui/react';

import { Footer } from '../components/footer';
import { Speakers } from '../components/speakers';
import { Topics } from '../components/topics';
import { Sponsors } from '../components/sponsors';

export default function Page() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="brand.500" color="white">
        <Container maxW="container.xl" py={20} height="100vh">
          <Stack gap={6} align="center" textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              Data Warehouse and AI in Intensive Care Medicine
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl">
              Interactive Workshop
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} gap={4}>
              <Button
                size="lg"
                bg="white"
                color="brand.500"
                _hover={{
                  bg: 'whiteAlpha.900',
                }}
              >
                Register Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="white"
                borderColor="white"
                _hover={{
                  bg: 'whiteAlpha.200',
                }}
              >
                View Schedule
              </Button>
            </Stack>
          </Stack>

          {/* Date and Venue */}
          <Box py={8}>
            <Container maxW="container.xl">
              <Stack align="center" gap={2}>
                <Text fontSize="xl" fontWeight="bold" color="brand.500">
                  July 19, 2025
                </Text>
                <Text fontSize="lg">King Chulalongkorn Memorial Hospital</Text>
              </Stack>
            </Container>
          </Box>
        </Container>
      </Box>

      <Topics />

      <Speakers />

      <Sponsors />

      {/* Call to Action */}
      <Box py={16} bg="brand.500" color="white">
        <Container maxW="container.xl">
          <Stack gap={6} align="center" textAlign="center">
            <Heading size="xl">
              Define Thailand's future of ICU meaningfully with AI together.
            </Heading>
            <Button
              size="lg"
              bg="white"
              color="brand.500"
              _hover={{
                bg: 'whiteAlpha.900',
              }}
            >
              Register Now
            </Button>
          </Stack>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
