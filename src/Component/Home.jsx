import { Box, Container, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const headingOptions = {
    pos: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'Uppercase',
    p: '4',
    size: '4xl'
}
const Home = () => {
    return (

        <Box>
            <MyCarousel />

            <Container maxW={'container.xl'} minH={'100vh'} p={'16'}>
                <Heading textTransform={'uppercase'} py={'21px'} w={'fit-content'} borderBottom={'2px solid'} m={'auto'}>Services</Heading>
                <Stack h={'full'} p={'center'} alignItems={'center'} direction={['column', 'row']} >
                    <Image src='https://st.depositphotos.com/2196544/2996/v/450/depositphotos_29962847-stock-illustration-detective-search.jpg' h={['40', '300']} filter={'hue-rotate(-130deg)'} />
                    <Text letterSpacing={'widest'} lineHeight={'190%'} p={['4','16']}textAlign={'center'}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Ipsa nulla eaque fuga modi, numquam totam quibusdam fugit facere. 
                         Tempora illum sed reiciendis laboriosam modi in at ex beatae rerum totam? 
                         Dolore corporis autem laudantium tenetur vero officia assumenda quam, 
                         velit similique, itaque quidem maiores ratione quo molestiae, 
                         repudiandae inventore. Velit rem officia debitis corrupti est maxime!
                    </Text>
                </Stack>
            </Container>
        </Box>
    )
}
const MyCarousel = () => (
    <Carousel autoPlay infiniteLoop interval={1000} showArrows={false} showStatus={false} showThumbs={false}>
        <Box w='full' h={'100vh'}>
            <Image src={'https://i.rtings.com/assets/pages/6dRuEBex/best-gaming-laptop-20220926-medium.jpg'} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >Wath The Feature</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={"https://www.benq.com/content/dam/b2c/en-sg/knowledge-center/What-makes-a-monitor-good-for-gaming-and-different-from-regular-screens/what-makes-a-monitor-good-for-gaming-and-different-from-regular-screens-eye-care-monitor-4k-monitor-4k-gaming-monitor-4k-hdr-monitor-usb-c-monitor-01.jpg"} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >Feature is Gaming</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={"https://assets.aboutamazon.com/dims4/default/ffd43f6/2147483647/strip/true/crop/1999x1125+1+0/resize/1320x743!/quality/90/?url=https%3A%2F%2Famazon-blogs-brightspot.s3.amazonaws.com%2Fa9%2F30%2F6c750c0442ea9b60c41a7a77f949%2Fprimegaming-pr-hero-2000x1125.jpg"} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} > Gaming on Console</Heading>
        </Box>

        <Box w='full' h={'100vh'}>
            <Image src={"https://www.analyticsinsight.net/wp-content/uploads/2021/10/How-Mobile-Games-Have-Helped-Develop-The-Gaming-Industry.jpg"} />
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions} >Night life is cool</Heading>
        </Box>

    </Carousel>
)


export default Home
