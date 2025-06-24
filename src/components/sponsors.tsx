import { Heading, Box, Container, Text, SimpleGrid, Image } from '@chakra-ui/react'

const sponsors = [
  {
    name: 'SWITTEK GROUP',
    image: '/static/SWITTEK_GROUP.png',
  },
  {
    name: 'CIS IMAGING',
    image: '/static/CIS_IMAGING.jpg',
  },
  {
    name: 'Placeholder 3',
    image: 'https://via.placeholder.com/200x100',
  },
  {
    name: 'Placeholder 4',
    image: 'https://via.placeholder.com/200x100',
  },
]

export const Sponsors = () => (
  <Box py={16} bg="white">
    <Container maxW="container.xl">
      <div style={{ display: 'flex', gap: '40px' }}>
        {/*Left*/}
        <div style={{ flex: 1 }}>
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
        </div>

        {/*Right*/}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'stretch',
            textAlign: 'center',
            padding: '10 px',
          }}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              textAlign: 'left',
              height: 'auto',
              width: '100%',
              maxWidth: '800px',
              marginLeft: '100px',
            }}
          >
            <Heading textAlign="left" size="5xl" color="brand.500">
              Sponsors of the Event
            </Heading>
            <Text textAlign="left" color="gray.600" fontSize="xl">
              <br />
              These frontier organizations who are shaping the future of ICU
              <br />
              in Thailand are sponsoring our event.
            </Text>
          </div>
        </div>
      </div>
    </Container>
  </Box>
)
