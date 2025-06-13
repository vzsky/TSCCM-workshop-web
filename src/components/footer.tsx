import { Box, Container, Text, Stack, IconButton, Heading } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button } from './button';

export const Footer = () => (
  <>
    {/* Call to Action */}
    <Box py={16} bg="brand.500" color="white">
      <Container maxW="container.xl">
        <Stack gap={6} align="center" textAlign="center">
          <Heading size="xl">
            Define Thailand's future of ICU meaningfully with AI together.
          </Heading>
          <Button variant="white">Register Now</Button>
        </Stack>
      </Container>
    </Box>
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
          <IconButton aria-label="Facebook" size="sm" colorScheme="facebook">
            <FaFacebook />
          </IconButton>
          <IconButton aria-label="Twitter" size="sm" colorScheme="twitter">
            <FaTwitter />
          </IconButton>
          <IconButton aria-label="Instagram" size="sm" colorScheme="pink">
            <FaInstagram />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  </>
);
