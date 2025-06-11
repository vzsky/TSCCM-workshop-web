import { Box, Container, Stack, Heading, Text, Flex, Button } from "@chakra-ui/react";

export const TimeTable = () => (
    <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
            <Stack gap={8}>
                <Heading textAlign="center" size="xl" color="brand.500">
                Conference Schedule
                </Heading>
                
                {/* Day 1 */}
                <Box>
                <Heading size="md" mb={4} color="gray.700">Day 1 - March 15, 2025</Heading>
                <Stack gap={4}>
                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">08:00 - 09:00</Text>
                            <Text>Registration and Welcome Coffee</Text>
                        </Box>
                        <Text color="gray.500">Main Hall</Text>
                    </Flex>
                    </Box>

                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">09:00 - 10:30</Text>
                            <Text>Opening Ceremony</Text>
                            <Text fontSize="sm" color="gray.600">Keynote Speaker: Dr. John Smith</Text>
                        </Box>
                        <Text color="gray.500">Grand Ballroom</Text>
                    </Flex>
                    </Box>

                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">10:45 - 12:15</Text>
                            <Text>Workshop: Advanced Critical Care Techniques</Text>
                            <Text fontSize="sm" color="gray.600">Dr. Sarah Johnson & Dr. Michael Chen</Text>
                        </Box>
                        <Text color="gray.500">Workshop Room A</Text>
                    </Flex>
                    </Box>

                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">12:15 - 13:30</Text>
                            <Text>Lunch Break & Networking</Text>
                        </Box>
                        <Text color="gray.500">Dining Area</Text>
                    </Flex>
                    </Box>
                </Stack>
                </Box>

                {/* Day 2 */}
                <Box>
                <Heading size="md" mb={4} color="gray.700">Day 2 - March 16, 2025</Heading>
                <Stack gap={4}>
                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">09:00 - 10:30</Text>
                            <Text>Panel Discussion: Future of Critical Care</Text>
                            <Text fontSize="sm" color="gray.600">Moderated by Dr. Emily Wong</Text>
                        </Box>
                        <Text color="gray.500">Conference Hall</Text>
                    </Flex>
                    </Box>

                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">10:45 - 12:15</Text>
                            <Text>Research Presentations</Text>
                            <Text fontSize="sm" color="gray.600">Selected Abstracts</Text>
                        </Box>
                        <Text color="gray.500">Room B</Text>
                    </Flex>
                    </Box>

                    <Box p={4} bg="white" borderRadius="md" boxShadow="sm">
                    <Flex justify="space-between" align="center">
                        <Box>
                            <Text fontWeight="bold" color="brand.500">13:30 - 15:00</Text>
                            <Text>Interactive Workshop: Emergency Response</Text>
                            <Text fontSize="sm" color="gray.600">Dr. Robert Kim & Team</Text>
                        </Box>
                        <Text color="gray.500">Workshop Room C</Text>
                    </Flex>
                    </Box>
                </Stack>
                </Box>

                <Button
                    size="lg"
                    bg="brand.500"
                    color="white"
                    _hover={{
                        bg: 'brand.600',
                    }}
                    alignSelf="center"
                    mt={4}
                >
                    Download Full Schedule
                </Button>
            </Stack>
        </Container>
    </Box>
)