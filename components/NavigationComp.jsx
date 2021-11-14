import React from 'react';
import {  Box, HStack } from 'native-base';
import NavigationButton from './NavigationButton';


const NavigationComp = props => {
    return (
        <Box 
            width='85%' height={60} shadow={5} 
            bg={{
                linearGradient: {
                colors: ["indigo.300", "indigo.400"],
                start: [0, 0],
                end: [1, 0],
                },
            }} 
            position="absolute"
            rounded={40} 
            alignSelf='center'  
            bottom={10}  
            alignItems='center'
            zIndex={9999}
        >
            <HStack space={5} >
                <NavigationButton iconName='home' activeRoute="Home" navigateTo='Home' /> 
                <NavigationButton iconName='person-circle' activeRoute="Profile" navigateTo='Profile' /> 
                <NavigationButton iconName='menu' activeRoute="Menu" navigateTo='Menu' /> 
            </HStack>
        </Box>
    )
}

export default NavigationComp