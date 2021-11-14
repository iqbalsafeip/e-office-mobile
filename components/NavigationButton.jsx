import React from 'react';
import {  Button, Icon } from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import { useRoute, useNavigation } from '@react-navigation/native';


const NavigationButton = props => {
    const currRoute = useRoute().name
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate(props.navigateTo);
    }
    
    return (
        <Button rounded={40} height={60} width={85} variant='ghost' colorScheme='indigo' onPress={onPress} >
            <Icon 
                as={<Ionicons name={props.iconName} />} 
                color={currRoute === props.activeRoute ? 'indigo.900' : 'indigo.600'} 
            />
        </Button>
    )
}

export default NavigationButton