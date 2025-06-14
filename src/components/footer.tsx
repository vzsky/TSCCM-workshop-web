import {
  Box,
  Container,
  Text,
  Stack,
  IconButton,
  Heading,
  HStack,
  Link as ChakraLink,
  VStack,
} from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button } from './button';
import { REGISTRATION_LINK, CRITICAL_CARE_LINK, TSCCM_LINK, EMAIL_LINK } from '../constants';
import Link from 'next/link';

export const Footer = () => (
  <Box bg={'brand.900'} color={'brand.200'} py={8}>
    <Container maxW={'container.xl'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        gap={8}
        justify="space-between"
        align="center"
      >
        {/* Left: Event Name & Tagline */}
        <VStack align="start" gap={1}>
          <Text fontWeight="bold" fontSize="xl" color="white">
            TSCCM 2025
          </Text>
          <Text fontSize="lg" color="brand.200">
            Data Warehouse & AI in Intensive Care Medicine
          </Text>
          <Button mt={4} as={Link} href={REGISTRATION_LINK}>
            Register Now
          </Button>
        </VStack>

        <HStack gap={10} mt={4}>
          <ChakraLink
            href={TSCCM_LINK}
            color="brand.200"
            _hover={{ color: 'white', textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            TSCCM 2025
          </ChakraLink>
          <ChakraLink
            href={CRITICAL_CARE_LINK}
            color="brand.200"
            _hover={{ color: 'white', textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Critical Care Thai
          </ChakraLink>
          <ChakraLink
            href={EMAIL_LINK}
            color="brand.200"
            _hover={{ color: 'white', textDecoration: 'underline' }}
          >
            Email Us
          </ChakraLink>
        </HStack>

        {/* Right: Social Icons
          <HStack gap={4}>
            <IconButton aria-label="Facebook" size="md" variant="ghost" color="brand.200" _hover={{ color: 'white', bg: 'brand.700' }}>
              <FaFacebook />
            </IconButton>
            <IconButton aria-label="Twitter" size="md" variant="ghost" color="brand.200" _hover={{ color: 'white', bg: 'brand.700' }}>
              <FaTwitter />
            </IconButton>
            <IconButton aria-label="Instagram" size="md" variant="ghost" color="brand.200" _hover={{ color: 'white', bg: 'brand.700' }}>
              <FaInstagram />
            </IconButton>
          </HStack> */}
      </Stack>

      <Text mt={8} textAlign="center" fontSize="sm" color="brand.300">
        © 2025 TSCCM. All rights reserved.
      </Text>
    </Container>
  </Box>
);
