import { Heading, Text, Box, Container, HStack, Icon } from '@chakra-ui/react';
import { MdHealthAndSafety, MdSchool, MdLocalHospital, MdPolicy } from 'react-icons/md';

const FeatureCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => (
  <HStack gap={0} alignItems="stretch">
    <Box p={6} bg="white" borderRadius="lg" boxShadow="sm" flex="1">
      <Box display="flex" flexDirection="column" alignItems="center" textAlign="center" gap={4}>
        <Icon as={icon} w={10} h={10} color="brand.500" />
        <Heading size="md" color="brand.500">
          {title}
        </Heading>
        <Text color="gray.600">{description}</Text>
      </Box>
    </Box>
  </HStack>
);

export const Features = () => (
  <Box py={16} bg="gray.50">
    <Container maxW="container.xl">
      <HStack gap={3} alignItems="stretch">
        <FeatureCard
          icon={MdHealthAndSafety}
          title="Roles of AI in Intensive Care"
          description="Enhance ICU care with AI-driven diagnostics, predictive analytics, and automated decision support systems."
        />

        <FeatureCard
          icon={MdSchool}
          title="Future Education and Research in AI Era"
          description="Transform medical learning and discovery through AI-powered data analysis and personalized education tools."
        />

        <FeatureCard
          icon={MdLocalHospital}
          title="Smart ICU Initiatives in Thailand"
          description="Get to know how hospitals implement AI-based monitoring and intelligent systems to advance critical care in Thailand."
        />

        <FeatureCard
          icon={MdPolicy}
          title="AI Policy Development"
          description="Take part in establishing ethical frameworks and regulations for responsible AI adoption in healthcare."
        />
      </HStack>
    </Container>
  </Box>
);
