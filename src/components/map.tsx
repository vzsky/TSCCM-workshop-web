import { Box, Stack, Container } from '@chakra-ui/react'

export const Map = () => (
  <Box>
    <Container maxW="container.xl">
      <Stack gap={8}>
        <Box
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          height={{ base: '300px', md: '400px' }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.234964295624!2d100.5271963153526!3d13.73671750119747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2992e2e2e2e2f%3A0x7c2e1f1c3c3c3c3c!2sBhumisiri%20Mangkhalanusorn%20Building%2C%20King%20Chulalongkorn%20Memorial%20Hospital!5e0!3m2!1sen!2sth!4v1680000000000!5m2!1sen!2sth"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
      </Stack>
    </Container>
  </Box>
)
