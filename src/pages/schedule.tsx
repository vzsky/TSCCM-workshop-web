import { Box, Container, Heading, Text, VStack, HStack, Stack } from '@chakra-ui/react'
import { Navbar } from '../components/nav'
import { Footer } from '../components/footer'
import { Button } from '../components/button'
import { EMAIL_LINK, REGISTRATION_LINK, TSCCM_LINK } from '../constants'
import Link from 'next/link'
import { Map } from '../components/map'
import { FiCalendar, FiClock } from 'react-icons/fi'
import { InlineLink } from '../components/inline-link'

interface ScheduleItem {
  time: string
  title: string
  speaker?: string
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
]

const subHeadingSize = {
  base: 'xl',
  lg: '2xl',
} as const

const ScheduleItem = ({ time, title, speaker }: ScheduleItem) => (
  <Box px={8} py={4}>
    <Stack direction={{ base: "column", md: "row" }} gap={6} alignItems="start">
      <Text fontWeight="bold" minW="80px" color="brand.500">
        {time}
      </Text>
      <VStack alignItems="start" gap={1}>
        <Text fontWeight="medium">{title}</Text>
        {speaker && (
          <Text fontSize="sm" color="gray.500">
            {speaker}
          </Text>
        )}
      </VStack>
    </Stack>
  </Box>
)

const DescriptionSection = () => (
  <Box>
    <Heading size={subHeadingSize} mb={4} color="brand.500">
      Description
    </Heading>
    <Text color="gray.500">
      Join our <em>Data Warehouse and AI in Intensive Care Medicine</em>, a special workshop hosted
      as a part of the 14th Critical Care Conference in Thailand, at the Bhumisiri Mangkhalanusorn
      Building, Chulalongkorn Hospital in Bangkok.
    </Text>
    <Text mt={4} color="gray.500">
      Reflecting on this year's theme, "Together in Critical Care," we will delve into the roles of
      AI and technology towards critical care. Our goal is to foster meaningful discussions, share
      cutting-edge knowledge, and explore innovative practices that improve patient outcomes using
      advanced technology in the AI era.
    </Text>
    <Text mt={4} color="gray.500">
      This workshop is designed for healthcare professionals, researchers, and anyone interested in
      the intersection of AI and critical care medicine. Whether you're a seasoned expert or just
      starting to explore this field, you'll find valuable insights and networking opportunities.
    </Text>
  </Box>
)

const EventHighlightsSection = () => (
  <Box>
    <Heading size={subHeadingSize} mb={4} color="brand.500">
      Event Highlights
    </Heading>
    <VStack gap={6} alignItems="stretch">
      <Box>
        <Text fontWeight="bold" color="gray.700">
          Primer on AI, LLM, and Data Bias Series
        </Text>
        <Text color="gray.500">
          Spend two hours on the basics of technology behind artificial intelligence and large
          language models. The topics also cover the biases and vulnerabilities of these AI systems
          and how to mitigate them.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" color="gray.700">
          Research, Education, and Policy Development in AI Era
        </Text>
        <Text color="gray.500">
          Brainstorm and exchange ideas on integrating safe and inclusive AI-human systems in the
          context of teaching and managing critical care.
        </Text>
      </Box>
      <Box>
        <Text fontWeight="bold" color="gray.700">
          Success Stories
        </Text>
        <Text color="gray.500">
          Listen to smart ICU initiatives from frontier hospitals all over Thailand and cutting-edge
          solutions from partnered companies.
        </Text>
      </Box>
    </VStack>
  </Box>
)

const ContactSection = () => (
  <Box>
    <Heading size={subHeadingSize} mb={4} color="brand.500">
      Contact Information
    </Heading>
    <Text color="gray.500">
      Visit the main website for the conference at{' '}
      <InlineLink href={TSCCM_LINK}> {TSCCM_LINK.split('https://')[1]} </InlineLink> or send us an
      email to <InlineLink href={EMAIL_LINK}> {EMAIL_LINK.split('mailto:')[1]} </InlineLink>
    </Text>
  </Box>
)

const EventLocationSection = () => (
  <Box width="100%" borderColor="brand.500" borderWidth={1} borderRadius={16} backgroundColor="brand.50" p={8}>
    <Heading size={subHeadingSize} mb={4} color="brand.500" textAlign="left">
      Event Location
    </Heading>
    <VStack gap={3} width="100%" align="left">
      <Map />
      <Heading size="xl" mt={4} color="gray.700" textAlign="left">
        King Chulalongkorn Memorial Hospital
      </Heading>
      <Text color="brand.600" textAlign="left">
        Bhumisiri Mangkhalanusorn Bldg (12th floor)
      </Text>
      <Text color="brand.600" textAlign="left">
        1873 Rama IV Rd, Pathum Wan, Bangkok 10330, Thailand
      </Text>
    </VStack>
  </Box>
)

const DateAndTimeSection = () => (
  <Box width="100%" borderColor="brand.500" borderWidth={1} borderRadius={16} backgroundColor="brand.50" p={8}>
    <Heading size={subHeadingSize} mb={6} color="brand.500">
      Date and Time
    </Heading>
    <VStack align="flex-start" gap={4}>
      <HStack gap={4}>
        <Box as={FiCalendar} fontSize="xl" color="brand.800" />
        <Text fontSize="lg" color="gray.500">
          July 19, 2025
        </Text>
      </HStack>
      <HStack gap={4}>
        <Box as={FiClock} fontSize="xl" color="brand.800" />
        <Text fontSize="lg" color="gray.500">
          8:00 - 17:00
        </Text>
      </HStack>
    </VStack>
  </Box>
)

export default function SchedulePage() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl" py={20}>
        <VStack gap={12} alignItems="stretch">
          <VStack gap={4} alignItems="center" textAlign="center">
            <Heading textAlign="center" size="4xl" color="brand.500">
              Schedule
            </Heading>
            <Text fontSize="xl" color="gray.500" maxW="2xl">
              Join us for a day of insightful discussions and presentations on Data Warehouse and AI
              in Intensive Care Medicine
            </Text>
            <Button as={Link} href={REGISTRATION_LINK}>
              Register Now
            </Button>
          </VStack>

          <Stack direction={{ base: 'column', md: 'row' }} gap={12}>
            <VStack align="flex-start" pl={{base: 12, md: 32}} pr={{base: 12, md: 0}} gap={24} width={{ base: '100%', md: '60%' }}>
              <DescriptionSection />
              <EventHighlightsSection />
              <ContactSection />
            </VStack>

            <VStack align="flex-start" pr={{base: 0, md: 12}} gap={12} width={{ base: '100%', md: '40%' }}>
              <EventLocationSection />
              <DateAndTimeSection />
            </VStack>
          </Stack>

          <Box width="100%" mx="auto" mt={16} px={{ base: 12, md: 24}}>
            <Box backgroundColor="brand.500" borderRadius={16} p={16}>
              <Heading size={subHeadingSize} mb={8} color="white" fontSize="3xl" textAlign="start">
                Schedule
              </Heading>
              <VStack gap={4} alignItems="stretch">
                {scheduleItems.map((item, index) => (
                  <Box key={index} bg="gray.50" p={4} borderRadius="lg" boxShadow="sm">
                    <ScheduleItem {...item} />
                  </Box>
                ))}
              </VStack>
            </Box>
          </Box>
        </VStack>
      </Container>
      <Footer />
    </>
  )
}
