import { Box, Stack, Container, Heading, Text } from '@chakra-ui/react';
import { Button } from './button';
import Link from 'next/link';

export const HeadingComponent = () => (
  <Box bg="white" padding={20} color="brand.500" position="relative" height="100vh">
    <Container maxW="container.xl" height="100%" position="relative">
      {/* Main content positioned at bottom left */}
      <Box position="absolute" bottom="0" left="0">
        <Stack gap={6}>
          <Text fontSize={{ base: 'lg', md: 'xl' }}>TSCCM 2025 Interactive Workshop</Text>
          <Heading
            fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
            fontWeight="bold"
            lineHeight="1.2"
          >
            Data Warehouse and AI
            <br />
            in Intensive Care Medicine
          </Heading>
          <Stack direction={{ base: 'column', md: 'row' }} gap={4}>
            <Button>Register Now</Button>
            <Button as={Link} href="/schedule">
              View Schedule
            </Button>
          </Stack>
        </Stack>
      </Box>

      {/* Date and Venue positioned at bottom right */}
      <Box position="absolute" bottom="0" right="0">
        <Box border="2px solid" borderColor="brand.500" p={6} borderRadius="md">
          <Stack align="flex-end" gap={2}>
            <Text fontSize="xl" fontWeight="bold" color="brand.500">
              July 19, 2025
            </Text>
            <Text fontSize="lg">King Chulalongkorn Memorial Hospital</Text>
          </Stack>
        </Box>
      </Box>
    </Container>
  </Box>
);
