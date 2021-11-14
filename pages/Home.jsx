import React from 'react';
import {Container, Box, Text, Avatar, Heading, VStack, Icon, Center, Button, HStack, Stack} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import NavigationComp from '../components/NavigationComp';
import { useDispatch, useSelector } from 'react-redux';
import { getPegawai } from '../redux/actions/authActions';


const Home = props => {
    const dispatch = useDispatch();
    const pegawai = useSelector(state => state.auth.pegawai)
    React.useEffect(()=> {
        dispatch(getPegawai())
    }, [])
    return (
        <>

            <Box 
                bg={{
                    linearGradient: {
                        colors: ["indigo.400", "indigo.800"],
                        start: [0, 0],
                        end: [1, 0],
                    },
                }}
                width='100%'
                flex={0.2}
                safeAreaTop
                >
                <Container>
                </Container>
            </Box>
            <Box bg="white" flex={0.8} width='100%' roundedTop={40} mt={-10} safeArea>
                <Box position="absolute" right={10} top={-70/2}>
                    {
                        pegawai.photo_file ? <Avatar source={{uri: 'http://192.168.100.5:8080/public/photo_file/' + pegawai.photo_file}} size={70} borderColor='white' borderWidth={2} >Profile</Avatar> : null
                    }
                    
                </Box>
                <Box px={7} mt={5} >
                    <VStack space={8} >
                        <Box>
                            <Text>Hai,</Text>
                            <Heading lineBreakMode >{pegawai.nama}</Heading>
                        </Box>
                        <Stack space={5} alignItems="center" >
                            <HStack space={5}>
                                <Home.Button text="Surat Masuk" iconName='mail' />
                                <Home.Button text="Surat Keluar" iconName='mail-open' />
                            </HStack>
                            <HStack space={5}>
                                <Home.Button text="Draft" iconName='document-sharp' />
                                <Home.Button text="Surat Approved" iconName='mail-unread' />  
                            </HStack>
                        </Stack>
                    </VStack>
                </Box>
                <NavigationComp />
            </Box>
        </>
    )
}

Home.Button = props => (
    <VStack space={4} alignItems="center">
        <Button 
            safeArea
            shadow={5} 
            size={150}
            bg='white' 
            rounded={20} 
            startIcon={<Icon as={Ionicons} name={props.iconName} size={20} color='indigo.400' />}
            variant="solid"
            colorScheme="dark"
        ></Button>
        <Center>
            <Text fontSize={16} fontWeight="bold" >{props.text}</Text>
        </Center>
    </VStack>
)

export default Home;