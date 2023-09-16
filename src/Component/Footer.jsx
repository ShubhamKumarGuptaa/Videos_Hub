import { Box, Button, HStack, Heading, Input, Stack, VStack,Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineGithub, AiOutlineInstagram, AiOutlineSend, AiOutlineYoutube} from 'react-icons/ai'

const Footer = () => {
  return(

   <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>
    <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']}>
                Suscribe to get Updates
            </Heading>
            <HStack borderBottom={'2px solid white'} py={'2'}>
                <Input placeholder='Enter Email Here...' border={'none'} borderRadius={'none'} outline={'none'} focusBorderColor='none' />
                <Button p={'0'} h={'10'} color={'purple'} variant={'ghost'} borderRadius={'0 20px 20px 0'} >
                    <AiOutlineSend/>
                </Button>
            </HStack>
        </VStack>
        <VStack w={'full'} borderLeft={['none','1px solid white']} borderRight={['none','1px solid white']}>
            <Heading textTransform={'uppercase'} textAlign={'center'}> VIDEO HUB</Heading>
            <Text>Alll rights received</Text>
        </VStack>
        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>Social Media</Heading>
            <Button variant={'link'} colorScheme="whiteAlpha.900" >
                <a href='https://youtube.com/@__RANDOM_GAMER__'>Youtube</a>
                <AiOutlineYoutube  size={'30px'}/>
            </Button>
            <Button variant={'link'} colorScheme="whiteAlpha.900" >
                <a href='https://www.instagram.com/__shubham._______/?hl=en'>Instagram</a>
                <AiOutlineInstagram  size={'30px'}/>
            </Button>
            <Button variant={'link'} colorScheme="whiteAlpha.900"  >
                <a href='https://github.com/'>Git Hub</a>
                <AiOutlineGithub size={'30px'}/>
            </Button>
        </VStack>
    </Stack>
  </Box>
  );
}

export default Footer
