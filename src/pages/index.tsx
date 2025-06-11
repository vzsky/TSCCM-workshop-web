import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  IconButton,
  Link,
  Image,
  SimpleGrid,
} from "@chakra-ui/react"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

const NavLink = ({ children, href }: { children: React.ReactNode; href: string }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'gray.200'
    }}
    href={href}
  >
    {children}
  </Link>
)

export default function Page() {
  return (
    <Box>
      {/* Navbar */}
      <Box bg={'gray.900'} px={4} boxShadow="sm">
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <Heading size="md" color="brand.500">TSCCM 2025</Heading>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} gap={7}>
              <NavLink href="#about">About</NavLink>
              <NavLink href="#program">Program</NavLink>
              <NavLink href="#registration">Registration</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </Stack>
          </Flex>
        </Flex>
      </Box>

      {/* Hero Section */}
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
                bg: 'whiteAlpha.900',
              }}
            >
              Register Now
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Timetable Section */}
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

      {/* Speakers Section */}
      <Box py={16} bg="white">
        <Container maxW="container.xl">
          <Stack gap={12}>
            <Heading textAlign="center" size="xl" color="brand.500">
              Featured Speakers
            </Heading>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={8}>
              {/* Speaker 1 */}
              <Box textAlign="center">
                <Box
                  mx="auto"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  overflow="hidden"
                  mb={4}
                  boxShadow="lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop"
                    alt="Dr. Sarah Johnson"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Heading size="md" mb={2}>Dr. Sarah Johnson</Heading>
                <Text color="brand.500" fontWeight="medium" mb={2}>
                  Director of Critical Care, Bangkok Medical Center
                </Text>
                <Text color="gray.600" fontSize="sm">
                  With over 15 years of experience in critical care medicine, Dr. Johnson specializes in 
                  advanced life support and emergency medicine. She has published numerous papers on 
                  critical care protocols in Southeast Asia.
                </Text>
              </Box>

              {/* Speaker 2 */}
              <Box textAlign="center">
                <Box
                  mx="auto"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  overflow="hidden"
                  mb={4}
                  boxShadow="lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=400&fit=crop"
                    alt="Dr. Michael Chen"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Heading size="md" mb={2}>Dr. Michael Chen</Heading>
                <Text color="brand.500" fontWeight="medium" mb={2}>
                  Head of ICU, Singapore General Hospital
                </Text>
                <Text color="gray.600" fontSize="sm">
                  Dr. Chen is a pioneer in implementing AI-driven critical care solutions. His research 
                  focuses on predictive analytics in ICU management and has led several international 
                  studies on critical care outcomes.
                </Text>
              </Box>

              {/* Speaker 3 */}
              <Box textAlign="center">
                <Box
                  mx="auto"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  overflow="hidden"
                  mb={4}
                  boxShadow="lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
                    alt="Dr. Emily Wong"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Heading size="md" mb={2}>Dr. Emily Wong</Heading>
                <Text color="brand.500" fontWeight="medium" mb={2}>
                  Professor of Critical Care Medicine, University of Hong Kong
                </Text>
                <Text color="gray.600" fontSize="sm">
                  A leading expert in pediatric critical care, Dr. Wong has developed innovative 
                  treatment protocols for critically ill children. She serves on several international 
                  critical care committees.
                </Text>
              </Box>

              {/* Speaker 4 */}
              <Box textAlign="center">
                <Box
                  mx="auto"
                  w="200px"
                  h="200px"
                  borderRadius="full"
                  overflow="hidden"
                  mb={4}
                  boxShadow="lg"
                >
                  <Image
                    src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop"
                    alt="Dr. Robert Kim"
                    objectFit="cover"
                    w="100%"
                    h="100%"
                  />
                </Box>
                <Heading size="md" mb={2}>Dr. Robert Kim</Heading>
                <Text color="brand.500" fontWeight="medium" mb={2}>
                  Emergency Medicine Specialist, Seoul National University Hospital
                </Text>
                <Text color="gray.600" fontSize="sm">
                  Dr. Kim specializes in disaster medicine and mass casualty management. He has led 
                  emergency response teams in multiple international crises and developed training 
                  programs for emergency medical teams.
                </Text>
              </Box>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Map Section */}
      <Box py={16} bg="gray.50">
        <Container maxW="container.xl">
          <Stack gap={8}>
            <Heading textAlign="center" size="xl" color="brand.500">
              Venue Location
            </Heading>
            
            <Box
              borderRadius="lg"
              overflow="hidden"
              boxShadow="lg"
              height={{ base: "300px", md: "400px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.910686508!2d100.5399879!3d13.7563309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29e8a0f1a3d3f%3A0x7c2e1f1c3c3c3c3c!2sQueen%20Sirikit%20National%20Convention%20Center!5e0!3m2!1sen!2sth!4v1647888888888!5m2!1sen!2sth"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Box>

            <Stack gap={4} textAlign="center">
              <Heading size="md" color="gray.700">
                Queen Sirikit National Convention Center
              </Heading>
              <Text color="gray.600">
                60 Ratchadaphisek Road, Khlong Toei, Bangkok 10110, Thailand
              </Text>
              <Text color="gray.600">
                Located in the heart of Bangkok, easily accessible by BTS Skytrain and MRT Subway
              </Text>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg={'gray.900'} color={'gray.200'}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          justifyContent={{ base: 'center', md: 'space-between' }}
          alignItems={{ base: 'center', md: 'center' }}
        >
          <Text>© 2024 TSCCM. All rights reserved</Text>
          <Stack direction={'row'} gap={6}>
            <IconButton
              aria-label="Facebook"
              size="sm"
              colorScheme="facebook"
            >
              <FaFacebook/>
            </IconButton>
            <IconButton
              aria-label="Twitter"
              size="sm"
              colorScheme="twitter"
            >
              <FaTwitter/>
            </IconButton>
            <IconButton
              aria-label="Instagram"
              size="sm"
              colorScheme="pink"
            >
              <FaInstagram/>
            </IconButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
