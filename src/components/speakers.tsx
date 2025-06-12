import { Box, Container, Heading, Text, Stack, Image, SimpleGrid } from '@chakra-ui/react';

const speakers = [
  {
    name: 'Dr. Sarah Johnson',
    title: 'Director of Critical Care, Bangkok Medical Center',
    description:
      'With over 15 years of experience in critical care medicine, Dr. Johnson specializes in advanced life support and emergency medicine. She has published numerous papers on critical care protocols in Southeast Asia.',
    imageSrc: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Michael Chen',
    title: 'Head of ICU, Singapore General Hospital',
    description:
      'Dr. Chen is a pioneer in implementing AI-driven critical care solutions. His research focuses on predictive analytics in ICU management and has led several international studies on critical care outcomes.',
    imageSrc: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Emily Wong',
    title: 'Professor of Critical Care Medicine, University of Hong Kong',
    description:
      'A leading expert in pediatric critical care, Dr. Wong has developed innovative treatment protocols for critically ill children. She serves on several international critical care committees.',
    imageSrc: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop',
  },
  {
    name: 'Dr. Robert Kim',
    title: 'Emergency Medicine Specialist, Seoul National University Hospital',
    description:
      'Dr. Kim specializes in disaster medicine and mass casualty management. He has led emergency response teams in multiple international crises and developed training programs for emergency medical teams.',
    imageSrc: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
];

const Speaker = ({
  name,
  title,
  description,
  imageSrc,
}: {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
}) => (
  <Box textAlign="center">
    <Box mx="auto" w="200px" h="200px" borderRadius="full" overflow="hidden" mb={4} boxShadow="lg">
      <Image src={imageSrc} alt={name} objectFit="cover" w="100%" h="100%" />
    </Box>
    <Heading size="md" mb={2}>
      {' '}
      {name}{' '}
    </Heading>
    <Text color="brand.500" fontWeight="medium" mb={2}>
      {title}
    </Text>
    <Text color="gray.600" fontSize="sm">
      {description}
    </Text>
  </Box>
);

export const Speakers = () => (
  <Box py={16} bg="white">
    <Container maxW="container.xl">
      <Stack gap={12}>
        <Heading textAlign="center" size="xl" color="brand.500">
          Featured Speakers
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
          {speakers.map((speaker) => (
            <Speaker key={speaker.name} {...speaker} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
