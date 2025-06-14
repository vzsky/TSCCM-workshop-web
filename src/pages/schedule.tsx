import { Box, Container, Heading, Text, VStack, HStack } from '@chakra-ui/react';
import { Navbar } from '../components/nav';
import { Footer } from '../components/footer';
import { Button } from '../components/button';
import { REGISTRATION_LINK } from '../constants';
import Link from 'next/link';

interface ScheduleItem {
  time: string;
  title: string;
  speaker?: string;
}

const scheduleItems: ScheduleItem[] = [
  {
    time: '08:45',
    title: 'Opening Remarks and Welcome Message',
    speaker: 'Assoc. Prof. Chairat Permpikul, MD',
  },
  {
    time: '09:00',
    title: 'Foundations of AI and Machine Learning in Intensive Care',
    speaker: 'Assoc. Prof. Leo Anthony Celi, MD, MPH, MSc',
  },
  {
    time: '09:30',
    title: 'Data Anomalies, Bias, and Artifacts in ICU Datasets',
    speaker: 'TSCCM Data Workshop Team',
  },
  {
    time: '10:15',
    title: 'Primer on Large Language Model (LLM): Demonstration and Application',
    speaker: 'TSCCM Data Workshop Team',
  },
  {
    time: '11:00',
    title: 'Reimagination of Research and Education on AI',
    speaker: 'TSCCM Data Workshop Team',
  },
  {
    time: '13:00',
    title: 'Smart ICU Initiatives in Thailand',
    speaker:
      'Assoc. Prof. Anupol Panitchote, MD (Khon Kaen University), Asst. Prof. Sitthichok Chaichulee (Prince of Songkla University), Preut Assawaworrarit, MD (Chulalongkorn University), and Assoc. Prof. Tanuwong Viarasilpa, MD (Siriraj Hospital, Mahidol University)',
  },
  {
    time: '14:00',
    title: 'Smart ICU Platforms from Companies',
    speaker: 'TBA',
  },
  {
    time: '15:00',
    title: 'National Thai ICU Database - Trends and Opportunities',
    speaker: 'Assoc. Prof. Anupol Panitchote',
  },
  {
    time: '15:30',
    title: 'AI and Data Policy Development',
    speaker: 'Assoc. Prof. Leo Anthony Celi, MD, MPH, MSc',
  },
  {
    time: '16:30',
    title: 'Closing Session and Future Directions',
    speaker: 'TBA',
  },
  {
    time: '16:45',
    title: 'Recreational Activity: Muay Thai',
    speaker: 'TBA',
  },
];

const ScheduleItem = ({ time, title, speaker }: ScheduleItem) => (
  <Box py={4}>
    <HStack gap={8} alignItems="start">
      <Text fontWeight="bold" minW="80px" color="brand.500">
        {time}
      </Text>
      <VStack alignItems="start" gap={1}>
        <Text fontWeight="medium">{title}</Text>
        {speaker && (
          <Text fontSize="sm" color="accent.500">
            {speaker}
          </Text>
        )}
      </VStack>
    </HStack>
  </Box>
);

const InfoSection = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <Box>
    <Heading size="md" mb={4} color="brand.500">
      {title}
    </Heading>
    {children}
  </Box>
);

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={20}>
        <VStack gap={12} alignItems="stretch">
          {/* Hero Section */}
          <VStack gap={4} alignItems="center" textAlign="center">
            <Heading size="2xl" color="brand.500">
              Schedule
            </Heading>
            <Text fontSize="xl" color="accent.500" maxW="2xl">
              Join us for a day of insightful discussions and presentations on Data Warehouse and AI
              in Intensive Care Medicine
            </Text>
            <Button as={Link} href={REGISTRATION_LINK}>
              Register Now
            </Button>
          </VStack>

          {/* Description Section */}
          <InfoSection title="Description">
            <Text color="accent.500">
              Join our <em>Data Warehouse and AI in Intensive Care Medicine</em>, a special workshop
              hosted as a part of the 14th Critical Care Conference in Thailand, at the Bhumisiri
              Mangkhalanusorn Building, Chulalongkorn Hospital in Bangkok.
            </Text>
            <Text mt={4} color="accent.500">
              Reflecting on this year's theme, "Together in Critical Care," we will delve into the
              roles of AI and technology towards critical care. Our goal is to foster meaningful
              discussions, share cutting-edge knowledge, and explore innovative practices that
              improve patient outcomes using advanced technology in the AI era.
            </Text>
            <Text mt={4} color="accent.500">
              This workshop is designed for healthcare professionals, researchers, and anyone
              interested in the intersection of AI and critical care medicine. Whether you're a
              seasoned expert or just starting to explore this field, you'll find valuable insights
              and networking opportunities.
            </Text>
          </InfoSection>

          {/* Event Highlights Section */}
          <InfoSection title="Event Highlights">
            <VStack gap={6} alignItems="stretch">
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Primer on AI, LLM, and Data Bias Series
                </Text>
                <Text color="accent.500">
                  Spend two hours on the basics of technology behind artificial intelligence and
                  large language models. The topics also cover the biases and vulnerabilities of
                  these AI systems and how to mitigate them.
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Research, Education, and Policy Development in AI Era
                </Text>
                <Text color="accent.500">
                  Brainstorm and exchange ideas on integrating safe and inclusive AI-human systems
                  in the context of teaching and managing critical care.
                </Text>
              </Box>
              <Box>
                <Text fontWeight="bold" color="brand.500">
                  Success Stories
                </Text>
                <Text color="accent.500">
                  Listen to smart ICU initiatives from frontier hospitals all over Thailand and
                  cutting-edge solutions from partnered companies.
                </Text>
              </Box>
            </VStack>
          </InfoSection>

          {/* Contact Information Section */}
          <InfoSection title="Contact Information">
            <Text color="accent.500">
              Visit the main website for the conference at{' '}
              <Link href="https://www.tsccm2025.com">https://www.tsccm2025.com</Link> or send us an
              email to{' '}
              <Link href="mailto:tsccmconference@gmail.com">tsccmconference@gmail.com</Link>
            </Text>
          </InfoSection>

          {/* Event Location Section */}
          <InfoSection title="Event Location">
            <Text color="accent.500">
              Bhumisiri Mangkhalanusorn Building, Chulalongkorn Hospital, Bangkok, Thailand
            </Text>
          </InfoSection>

          {/* Date and Time Section */}
          <InfoSection title="Date and Time">
            <Text color="accent.500">February 15, 2025, 08:30 - 17:00</Text>
          </InfoSection>

          {/* Schedule Section */}
          <Box>
            <Heading size="lg" mb={6} color="brand.500">
              Schedule
            </Heading>
            <VStack gap={0} alignItems="stretch">
              {scheduleItems.map((item, index) => (
                <Box
                  key={index}
                  borderBottom="1px"
                  borderColor="accent.200"
                  _last={{ borderBottom: 'none' }}
                >
                  <ScheduleItem {...item} />
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
