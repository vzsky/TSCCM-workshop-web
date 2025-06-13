import { Box, Container, Grid, Heading, Text, VStack } from '@chakra-ui/react';

const ColorSwatch = ({ color, shade }: { color: string; shade: string }) => (
  <Box
    bg={`${color}.${shade}`}
    p={4}
    borderRadius="md"
    height="100px"
    display="flex"
    flexDirection="column"
    justifyContent="flex-end"
  >
    <Text color={parseInt(shade) < 500 ? 'gray.800' : 'white'} fontSize="sm">
      {color}.{shade}
    </Text>
  </Box>
);

const ColorPalette = ({ name, color }: { name: string; color: string }) => (
  <VStack gap={4} alignItems="stretch">
    <Heading size="md">{name}</Heading>
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
        <ColorSwatch key={shade} color={color} shade={shade.toString()} />
      ))}
    </Grid>
  </VStack>
);

export default function PalettePage() {
  return (
    <Container maxW="container.xl" py={10}>
      <VStack gap={10} alignItems="stretch">
        <Heading>Color Palette</Heading>
        <ColorPalette name="Brand Colors" color="brand" />
        <ColorPalette name="Accent Colors" color="accent" />
      </VStack>
    </Container>
  );
}
