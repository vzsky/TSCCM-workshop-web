import { Heading, Box, Container, Text, Stack, SimpleGrid, Image } from '@chakra-ui/react'

const sponsors = [
  {
    name: 'SWITTEK GROUP',
    image: '/static/SWITTEK_GROUP.png',
  },
  {
    name: 'CIS IMAGING',
    image: '/static/CIS_IMAGING.jpg',
  },
]

export const Sponsors = () => (
  <Box py={16} bg="white">
    <Container maxW="container.xl">
      <Stack direction={{ base: 'column', lg: 'row' }} gap={{ base: 50, lg: 20 }} align="center">
        {/*Left*/}
        <Box flex="1">
          <SimpleGrid columns={{ base: 2, md: 2, lg: 2 }} gap={6}>
            {sponsors.map((sponsor) => (
              <Box
                key={sponsor.name}
                p={6}
                bg="white"
                borderRadius="lg"
                boxShadow="sm"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="200px"
                _hover={{
                  boxShadow: 'md',
                  transform: 'scale(1.001)',
                  bg: 'gray.50', // optional: subtle background change
                }}
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.name}
                  maxH="100%"
                  maxW="100%"
                  objectFit="contain"
                />
                {/* <Text fontWeight="bold" color="brand.500">{sponsor.name}</Text> */}
              </Box>
            ))}
          </SimpleGrid>
        </Box>

        {/*Right*/}
        <Box
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: 0, md: 8 }}
        >
          <Heading textAlign="left" size="3xl" color="brand.500" mb={4}>
            Sponsors of the Event
          </Heading>
          <Text textAlign="left" color="gray.600" fontSize="xl">
            These frontier organizations who are shaping the future of ICU in Thailand are
            sponsoring our event.
          </Text>
        </Box>
      </Stack>
    </Container>
  </Box>
)
