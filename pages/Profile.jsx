import React from 'react';
import { Box, Text, Avatar, Heading, VStack, HStack, Stack,  Icon, Pressable, FormControl, Input, Divider, Modal, Actionsheet, useDisclose} from 'native-base';
import { Ionicons } from "@expo/vector-icons";
import NavigationComp from '../components/NavigationComp';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Profile = props => {
    const pegawai = useSelector(state => state.auth.pegawai)
    const [isDisabled , setIsDisabled] = React.useState(true)
    const { isOpen, onOpen, onClose } = useDisclose()
    const navigation = useNavigation()

   

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
                justifyContent="flex-end"
            >
                <Heading color="white" textAlign="right" position="absolute" bottom={20} right={7} >Profile</Heading>
            </Box>
            <Box bg="white" flex={0.8} width='100%' roundedTop={40} mt={-10} safeAreaY safeAreaX  >
                <Pressable position="absolute" left={7} top={-150/2} variant="unstyled" onPress={onOpen}  >
                    <Box position="absolute" zIndex={10} p={1} bg='gray.200' rounded={20} left={4} alignItems="center" justifyContent="center" >
                        <Icon as={Ionicons} name='camera' size={6}  />
                    </Box>
                    <Avatar source={{uri: 'http://192.168.100.5:8080/public/photo_file/' + pegawai.photo_file}} size={150} borderColor='white' borderWidth={2} >IS</Avatar>
                </Pressable>
                <Box px={7} mt={20} safeArea >
                    <VStack space={10} >
                        <Box>
                            <Heading style={{flexWrap: 'wrap', flexShrink: 1}}>{pegawai.nama}</Heading>
                        </Box>
                        <Stack space={4}>
                        <Pressable onPress={() => navigation.navigate('Data_Pegawai')} >
                            <HStack justifyContent="space-between"  alignItems="center" >
                                <HStack space={3} alignItems="center">
                                    <Icon as={Ionicons} name='person' size={5} ></Icon>
                                    <Text fontSize={12} fontWeight="bold">Data Personal</Text>
                                </HStack>
                                <Icon as={Ionicons} name='md-chevron-forward-outline' size={5} color="#aeaeae" ></Icon>
                            </HStack>
                        </Pressable> 
                        <Divider />
                        <Pressable onPress={() => navigation.navigate('Data_Jabatan')}>
                            <HStack justifyContent="space-between" alignItems="center" >
                                <HStack space={3} alignItems="center">
                                    <Icon as={Ionicons} name='podium' size={5} ></Icon>
                                    <Text fontSize={12} fontWeight="bold">Data Jabatan</Text>
                                </HStack>
                                <Icon as={Ionicons} name='md-chevron-forward-outline' size={5} color="#aeaeae" ></Icon>
                            </HStack>
                        </Pressable> 
                        <Divider />
                        <Pressable onPress={() => navigation.navigate('Data_Jabatan')}>
                            <HStack justifyContent="space-between" alignItems="center" >
                                <HStack space={3} alignItems="center">
                                    <Icon as={Ionicons} name='lock-closed-outline' size={5} ></Icon>
                                    <Text fontSize={12} fontWeight="bold">Data Akun</Text>
                                </HStack>
                                <Icon as={Ionicons} name='md-chevron-forward-outline' size={5} color="#aeaeae" ></Icon>
                            </HStack>
                        </Pressable> 
                            
                        </Stack>
                    </VStack>
                </Box>
                <NavigationComp />
            </Box>
            <Profile.ActionSheet onClose={onClose} isOpen={isOpen} navigation={navigation}/>
        </>
    )
}


Profile.Item = props => (
    <Pressable>
        <HStack justifyContent="space-between" >
            <HStack space={3} alignItems="center">
                <Icon as={Ionicons} name='person' size={8} ></Icon>
                <Text fontSize={12}>Lihat Detail Pegawai</Text>
            </HStack>
            <Icon as={Ionicons} name='md-arrow-forward' size={8} ></Icon>
        </HStack>
    </Pressable> 
)


Profile.ActionSheet = props => (
    <Actionsheet {...props} >
        <Actionsheet.Content>
            <Actionsheet.Item>
                <Pressable onPress={() => props.navigation.replace('Profile_Preview')}>
                                <HStack justifyContent="space-between" alignItems="center" >
                                    <HStack space={3} alignItems="center">
                                        <Icon as={Ionicons} name='person-circle' size={5} ></Icon>
                                        <Text fontSize={12} fontWeight="bold">Lihat Foto</Text>
                                    </HStack>
                                    <Icon as={Ionicons} name='md-chevron-forward-outline' size={5} color="#aeaeae" ></Icon>
                                </HStack>
                            </Pressable> 
                </Actionsheet.Item>
            <Actionsheet.Item>
                <Pressable onPress={() => props.navigation.navigate('Data_Jabatan')}>
                                <HStack justifyContent="space-between" alignItems="center" >
                                    <HStack space={3} alignItems="center">
                                        <Icon as={Ionicons} name='camera-reverse-outline' size={5} ></Icon>
                                        <Text fontSize={12} fontWeight="bold">Ubah Foto</Text>
                                    </HStack>
                                    <Icon as={Ionicons} name='md-chevron-forward-outline' size={5} color="#aeaeae" ></Icon>
                                </HStack>
                            </Pressable> 
                </Actionsheet.Item>
        </Actionsheet.Content>
    </Actionsheet>
)

export default Profile;