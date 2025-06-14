import { Box, Container, Heading, Text, Stack, Image, SimpleGrid, VStack } from '@chakra-ui/react';

const speakers = [
  {
    name: 'Anupol Panitchote, MD',
    title:
      'Division of Critical Care, Department of Medicine, Faculty of Medicine, Khon Kaen University, Khon Kaen, Thailand',
    descriptions: [
      'Deputy Dean of Artificial intelligence and data science',
      'Associate Professor and intensivist at the Division of Critical Care, Department of Medicine, Research interest: data science, AI, health informatics, critical care medicine',
      'Research interest: data science, AI, health informatics, critical care medicine',
    ],
    imageSrc: '/static/Panitchote.avif',
  },
  {
    name: 'Tanuwong Viarasilpa, MD',
    title:
      'Division of Critical Care, Department of Medicine, Siriraj Hospital, Mahidol University, Bangkok, Thailand',
    descriptions: [
      'Instructor and intensivist at the Division of Critical Care, Department of Medicine, Siriraj Hospital, Mahidol University, Bangkok, Thailand',
      'Special interest in neurocritical care',
    ],
    imageSrc: '/static/Viarasilpa.avif',
  },
  {
    name: 'Sitthichok Chaichulee, PhD',
    title:
      'Department of Biomedical Sciences and Biomedical Engineering, Faculty of Medicine, Prince of Songkla University, Thailand',
    descriptions: [
      'Deputy Director of Digital Innovation and Data Analytics',
      'esearch interests: Artificial Intelligence, Medical Image Processing, Big Data Analysis, Health Informatics, Interoperability in Healthcare',
    ],
    imageSrc: '/static/Chaichulee.avif',
  },
  {
    name: 'Preut Assawaworrarit, MD',
    title:
      'Division of Critical Care, Department of Medicine, Faculty of Medicine, Chulalongkorn University, Bangkok, Thailand',
    descriptions: [
      'Lecturer and intensivist',
      'Research interests: Critical care medicine, medical informatics',
    ],
    imageSrc: '/static/Assawaworrarit.avif',
  },
  {
    name: 'Evelyn Goh',
    title: 'PhD Researcher in AI and Biomedical Engineering, National University of Singapore',
    descriptions: [
      'Specializing in AI applications for public health and clinical usage.',
      'Bridging deep learning, epidemiology, and clinical translation across Southeast Asia.',
    ],
    imageSrc: '/static/Goh.jpg',
  },
  {
    name: 'Dr. Robert Kim',
    title: 'Emergency Medicine Specialist, Seoul National University Hospital',
    descriptions: [
      'A leading expert in pediatric critical care, Dr. Wong has developed innovative treatment protocols for critically ill children. She serves on several international critical care committees.',
    ],
    imageSrc: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
  },
];

const Speaker = ({
  name,
  title,
  descriptions,
  imageSrc,
}: {
  name: string;
  title: string;
  descriptions: string[];
  imageSrc: string;
}) => (
  <Box textAlign="center">
    <Box mx="auto" w="200px" h="200px" borderRadius="full" overflow="hidden" mb={4} boxShadow="lg">
      <Image src={imageSrc} alt={name} objectFit="cover" w="100%" h="100%" />
    </Box>
    <Heading size="md" mb={2} color="brand.500">
      {name}
    </Heading>
    <Text color="gray.600" fontWeight="medium" mb={2}>
      {title}
    </Text>
    <Box
      as="ul"
      pl={6}
      color="gray.500"
      fontSize="sm"
      textAlign="left"
      mb={2}
      listStyleType="disc"
      listStylePosition="outside"
    >
      {descriptions.map((desc, index) => (
        <Box as="li" key={index} mb={1}>
          {desc}
        </Box>
      ))}
    </Box>
  </Box>
);

export const Speakers = () => (
  <Box py={16} bg="white">
    <Container maxW="container.xl">
      <Stack gap={12}>
        <Heading textAlign="center" size="xl" color="brand.500">
          Featured Speakers
        </Heading>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {speakers.map((speaker) => (
            <Speaker key={speaker.name} {...speaker} />
          ))}
        </SimpleGrid>
      </Stack>
    </Container>
  </Box>
);
