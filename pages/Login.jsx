import {Text, Box, Button, Icon, Heading, VStack, Input,FormControl, Stack  } from 'native-base';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import * as Animatable from 'react-native-animatable';
import {  login } from '../redux/actions/authActions';
import { Ionicons } from "@expo/vector-icons";


export default function Login(props){
    const dispatch = useDispatch()
    const authData = useSelector(state => state.auth);

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const _login = () => {
        dispatch(login({
            username: username,
            password: password
        })).then(res => {
            props.navigation.replace('Home')
        }).catch(res => {
            console.log(res);
        })
    }

   
    return (
        <>
            <Box flex={1} bg='white' justifyContent='center' alignItems='center' >
                <Animatable.Image source={require('../assets/login.png')} style={{ width: undefined,height: 200, aspectRatio: 1.5 }}  animation='zoomIn' />
            </Box>
            <Box style={{flex: 2, backgroundColor: 'white'}}  >
                <Animatable.View style={{
                    backgroundColor: '#f4f4f5',
                    height: '100%',
                    borderTopEndRadius: 40,
                    borderTopStartRadius: 40
                }}
                animation='slideInUp'
                >
                    <VStack mt={50} space={25} >
                        <Heading alignSelf="center" >Login</Heading>
                        <VStack px={7} space={5} >
                            <FormControl isInvalid={authData.err_status === 404} >
                                <Login.Username label='Username' placeholder='Username' value={username} onChangeText={setUsername} />
                                <FormControl.ErrorMessage>
                                    User Tidak Ditemukan
                                </FormControl.ErrorMessage>
                            </FormControl>
                            <FormControl isInvalid={authData.err_status === 400} >
                                <Login.Password value={password} onChangeText={setPassword} />
                                <FormControl.ErrorMessage>
                                    Password Salah
                                </FormControl.ErrorMessage>
                                <Text fontSize={14} textAlign='right' mt={2} >Lupa Password ?</Text>

                            </FormControl>
                            
                            <Button bg='indigo.500' variant='solid' colorScheme='indigo' onPress={_login} isLoading={authData.isLoading} isLoadingText='Loading...' >
                                Login
                            </Button>
                        </VStack>
                    </VStack>
                </Animatable.View>
            </Box>
        </>
    )
}

Login.Username = props => (
    <FormControl>
        <Stack>
            <FormControl.Label>
                <Text fontSize={14} >{props.label}</Text>
            </FormControl.Label>
            <Input
            variant='unstyled'
            bg='white'
            color='indigo.600'
            placeholder={props.placeholder}
            {...props}
            />
        </Stack>
    </FormControl>
)

Login.Password = props => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <FormControl>
            <Stack>
                <FormControl.Label>
                    <Text fontSize={14} >Password</Text>
                </FormControl.Label>
                <Input
                type={show ? "text" : "password"}
                variant='unstyled'
                bg='white'
                color='indigo.600'
                InputRightElement={
                    <Button ml={1} roundedLeft={0} roundedRight="md" variant='ghost' colorScheme='gray' onPress={handleClick}>
                        {show ? 
                            <Icon as={<Ionicons name='eye-off' />} color='indigo.500'  size={6} /> 
                                : 
                            <Icon as={<Ionicons name='eye' />} color='indigo.500' size={6} />
                        }
                    </Button>
                }
                placeholder="Password"
                {...props}
                />
            </Stack>
        </FormControl>
  )
}