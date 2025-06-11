import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react"
import { Navbar } from "../components/nav"
import { Footer } from "../components/footer"
import { Speakers } from "../components/speakers"
import { Map } from "../components/map"
import { TimeTable } from "../components/timetable"

export default function Page() {
  return (
    <Box>
      <Navbar />

      <Box bg="brand.500" color="white">
        <Container maxW="container.xl" py={20}>
          <Stack gap={6} align="center" textAlign="center">
            <Heading
              fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
              fontWeight="bold"
              lineHeight="1.2"
            >
              14th Critical Care Conference
            </Heading>
            <Heading
              fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}
              color="whiteAlpha.900"
            >
              Together in Critical Care
            </Heading>
            <Text fontSize={{ base: 'lg', md: 'xl' }} maxW="2xl">
              Join us in Thailand for the most prestigious critical care conference of 2025.
              A platform for healthcare professionals to share knowledge, network, and advance critical care medicine.
            </Text>
            <Button
              size="lg"
              bg="white"
              color="brand.500"
              _hover={{
                bg: 'whiteAlpha.800',
              }}
            >
              Register Now
            </Button>
          </Stack>
        </Container>
      </Box>

      <TimeTable />

      <Speakers />

      <Map />

      <Footer />
    </Box>
  )
}
