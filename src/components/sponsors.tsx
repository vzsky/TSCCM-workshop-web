import { Heading, Box, Container, Stack, Text, Image, SimpleGrid } from '@chakra-ui/react'

const sponsors = [
  {
    name: 'Placeholder 1',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    name: 'Placeholder 2',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    name: 'Placeholder 3',
    image: 'https://via.placeholder.com/200x100',
  },
]

export const Sponsors = () => (
  <Box py={16} bg="white">
    <Container maxW="container.xl">
      <Stack gap={12}>
        <Heading textAlign="center" size="3xl" color="brand.500">
          Sponsors of the Event
        </Heading>
        <Text textAlign="center" color="gray.600" maxW="3xl" mx="auto">
          These frontier organizations who are shaping the future of ICU in Thailand are sponsoring
          our event.
        </Text>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={8}>
          {sponsors.map((sponsor) => (
            <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" textAlign="center">
              <Image src={sponsor.image} alt="Sponsor 1" mx="auto" mb={4} />
              <Text fontWeight="bold" color="brand.500">
                {sponsor.name}
              </Text>
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
)
