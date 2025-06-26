import { Box, Stack, Container } from '@chakra-ui/react'

export const MapIFrame = () => (
  <iframe
    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=King+Chulalongkorn+Memorial+Hospital`}
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
)

export const Map = () => (
  <Box px={0} mx={0}>
    <Container maxW="container.xl" px={0} mx={0}>
      <Stack gap={8}>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          height={{ base: '160px', md: '200px' }}
        >
          <MapIFrame />
        </Box>
      </Stack>
    </Container>
  </Box>
)
