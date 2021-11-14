import { Text, Box,  VStack, Heading, Button, Icon, Divider, AlertDialog, HStack, FormControl, Input, ScrollView, Image } from 'native-base';
import React from 'react';
import NavigationComp from '../components/NavigationComp';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ProfilePreview = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pegawai = useSelector(state => state.auth.pegawai)
    const dispatch = useDispatch()
    const navigation = useNavigation()
    return (
        <>
            <Box 
                bg="black"
                width='100%'
                flex={1}
                safeAreaTop
                justifyContent="center"
                alignItems="center"
            >
                <HStack position="absolute" top={0} zIndex={99} justifyContent="space-between" width="100%" px={7} mt={4} alignItems="center" >
                    <Pressable onPress={()=> navigation.navigate('Profile')} >
                        <Icon as={Ionicons} name='md-arrow-back' color="white" size={6} />
                    </Pressable>
                    <Pressable onPress={()=> navigation.navigate('Profile')} >
                        <Icon as={Ionicons} name='cloud-download' color="white" size={6} />
                    </Pressable>
                </HStack>
                <Image  source={{uri: 'http://192.168.100.5:8080/public/photo_file/' + pegawai.photo_file}} alt="profile picture" style={{width: '100%', aspectRatio: 1, height: null}} />
            </Box>
        </>
    )
}

export default ProfilePreview;