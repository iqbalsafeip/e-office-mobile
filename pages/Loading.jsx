import { Box, Center, Heading, Spinner, VStack } from 'native-base';
import React from 'react';
import { ActivityIndicator } from 'react-native';

const Loading = props => {
    return (
        <Center flex={1} >
            <VStack space={2}>
                <Heading color='indigo.600' >E-Office</Heading>
                <Spinner color='indigo.600' />
            </VStack>
        </Center>
    )
}

export default Loading;