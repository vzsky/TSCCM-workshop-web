import { Heading, Box, Container, Stack, Text, Image, SimpleGrid } from "@chakra-ui/react";

export const Sponsors = () => (
    <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
            <Stack gap={12}>
                <Heading textAlign="center" size="xl" color="brand.500">
                Sponsors of the Event
                </Heading>
                <Text textAlign="center" color="gray.600" maxW="3xl" mx="auto">
                These frontier organizations who are shaping the future of ICU in Thailand are sponsoring our event.
                </Text>

                <SimpleGrid columns={{ base: 2, md: 3, lg: 4 }} gap={8}>
                {/* Sponsor 1 */}
                <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" textAlign="center">
                    <Image
                    src="https://via.placeholder.com/200x100"
                    alt="Sponsor 1"
                    mx="auto"
                    mb={4}
                    />
                    <Text fontWeight="bold" color="brand.500">Bangkok Hospital</Text>
                    <Text fontSize="sm" color="gray.600">Platinum Sponsor</Text>
                </Box>

                {/* Sponsor 2 */}
                <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" textAlign="center">
                    <Image
                    src="https://via.placeholder.com/200x100"
                    alt="Sponsor 2"
                    mx="auto"
                    mb={4}
                    />
                    <Text fontWeight="bold" color="brand.500">Siriraj Hospital</Text>
                    <Text fontSize="sm" color="gray.600">Gold Sponsor</Text>
                </Box>

                {/* Sponsor 3 */}
                <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" textAlign="center">
                    <Image
                    src="https://via.placeholder.com/200x100"
                    alt="Sponsor 3"
                    mx="auto"
                    mb={4}
                    />
                    <Text fontWeight="bold" color="brand.500">Chulalongkorn Hospital</Text>
                    <Text fontSize="sm" color="gray.600">Silver Sponsor</Text>
                </Box>

                {/* Sponsor 4 */}
                <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" textAlign="center">
                    <Image
                    src="https://via.placeholder.com/200x100"
                    alt="Sponsor 4"
                    mx="auto"
                    mb={4}
                    />
                    <Text fontWeight="bold" color="brand.500">Mahidol University</Text>
                    <Text fontSize="sm" color="gray.600">Academic Partner</Text>
                </Box>
                </SimpleGrid>
            </Stack>
        </Container>
    </Box>
)