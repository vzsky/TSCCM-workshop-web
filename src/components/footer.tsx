import { Box, Container, Text, Stack, IconButton } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export const Footer = () => (
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
);
