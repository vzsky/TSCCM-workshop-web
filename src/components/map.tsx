import { Box, Heading, Stack, Container, Text } from '@chakra-ui/react';

export const Map = () => (
  <Box py={16} bg="brand.50">
    <Container maxW="container.xl">
      <Stack gap={8}>
        <Heading textAlign="center" size="xl" color="brand.500">
          Venue Location
        </Heading>

        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          height={{ base: '300px', md: '400px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.910686508!2d100.5399879!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8a0f1a3d3f%3A0x7c2e1f1c3c3c3c3c!2sQueen%20Sirikit%20National%20Convention%20Center!5e0!3m2!1sen!2sth!4v1647888888888!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>

        <Stack gap={4} textAlign="center">
          <Heading size="md" color="gray.700">
            Queen Sirikit National Convention Center
          </Heading>
          <Text color="brand.600">
            60 Ratchadaphisek Road, Khlong Toei, Bangkok 10110, Thailand
          </Text>
          <Text color="brand.600">
            Located in the heart of Bangkok, easily accessible by BTS Skytrain and MRT Subway
          </Text>
        </Stack>
      </Stack>
    </Container>
  </Box>
);
