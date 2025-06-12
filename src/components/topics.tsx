import { Heading, Text, Box, Container, SimpleGrid } from "@chakra-ui/react"

export const Topics = () => (
    <Box py={16} bg="gray.50">
    <Container maxW="container.xl">
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Heading size="md" mb={4} color="brand.500">Roles of AI in Intensive Care</Heading>
        <Text color="gray.600">
            Enhance ICU care with AI-driven diagnostics, predictive analytics, and automated decision support systems.
        </Text>
        </Box>

        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Heading size="md" mb={4} color="brand.500">Future Education and Research in AI Era</Heading>
        <Text color="gray.600">
            Transform medical learning and discovery through AI-powered data analysis and personalized education tools.
        </Text>
        </Box>

        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Heading size="md" mb={4} color="brand.500">Smart ICU Initiatives in Thailand</Heading>
        <Text color="gray.600">
            Get to know how hospitals implement AI-based monitoring and intelligent systems to advance critical care in Thailand.
        </Text>
        </Box>

        <Box p={6} bg="white" borderRadius="lg" boxShadow="sm">
        <Heading size="md" mb={4} color="brand.500">AI Policy Development</Heading>
        <Text color="gray.600">
            Take part in establishing ethical frameworks and regulations for responsible AI adoption in healthcare.
        </Text>
        </Box>
    </SimpleGrid>
    </Container>
    </Box>
)