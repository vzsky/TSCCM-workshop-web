import { Box } from '@chakra-ui/react'

import { Footer } from '../components/footer'
import { Speakers } from '../components/speakers'
import { Features } from '../components/features'
import { Sponsors } from '../components/sponsors'
import { HeadingComponent } from '../components/heading'

export default function Page() {
  return (
    <Box bg="white">
      <HeadingComponent />
      <Features />
      <Speakers />
      <Sponsors />
      <Footer />
    </Box>
  )
}
