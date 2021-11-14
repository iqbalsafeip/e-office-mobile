import {Text, Box, Button, Container, Heading, Image, VStack, Stack } from 'native-base';
import React from 'react';
import * as Animatable from 'react-native-animatable';


export default function Splash(props){
    return (
        <>
            <Box flex={3} bg='gray.100' justifyContent='center' alignItems='center' px={5} >
                <Box flex={0.8} bg='white' rounded={20} justifyContent='center' alignItems='center' width='100%' >
                    <Animatable.View animation='zoomIn' >
                        <Heading>E-Office</Heading>
                    </Animatable.View>
                    <Animatable.Image source={require('../assets/enter.png')} style={{ width: undefined,height: 300, aspectRatio: 1 }}  animation='zoomIn' />
                </Box>
            </Box>
            <Box style={{flex: 1, backgroundColor: '#f4f4f5', paddingHorizontal: 50}}  >
                <Stack space={5} >
                    <Text textAlign='center' >Lorem ipsum dolor sit amet</Text>
                    <Button   
                        bg='indigo.500' 
                        colorScheme='indigo' 
                        onPress={()=> props.navigation.replace('Login')}
                        py={3}
                        rounded={10}
                    >
                        <Text color='white'>Masuk</Text>
                    </Button>
                </Stack>
            </Box>
        </>
    )
}