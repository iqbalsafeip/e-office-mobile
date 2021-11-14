import { Text, Box,  VStack, Heading, Button, Icon, Divider, AlertDialog, HStack, FormControl, Input, ScrollView } from 'native-base';
import React from 'react';
import NavigationComp from '../components/NavigationComp';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/actions/authActions';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DataJabatan = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const pegawai = useSelector(state => state.auth.pegawai)
    const dispatch = useDispatch()
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
                flex={0.1}
                safeAreaTop
                px={7}
            >
                <HStack bottom={-10} alignItems='center' justifyContent="space-between" >
                    <Pressable onPress={()=> navigation.navigate('Profile')} >
                        <Icon as={Ionicons} name='md-arrow-back' color="white" />
                    </Pressable>
                    <Text color='white' fontWeight='bold' >Data Jabatan</Text>
                </HStack>
            </Box>
            <Box bg="white" flex={0.9} width='100%' roundedTop={40} mt={-10} safeAreaY safeAreaX  >
                <Box px={7} mt={45} >
                    <ScrollView >
                        <DataJabatan.Item label="Unit Kerja" value={pegawai.nip} isDisabled />
                        <DataJabatan.Item label="Jabatan" value={pegawai.nama} isDisabled />
                    </ScrollView>
                </Box>
            </Box>
        </>
    )
}

DataJabatan.Item = props => (
    <FormControl>
        <FormControl.Label >
            {props.label}
        </FormControl.Label>
        <Input {...props} />
    </FormControl>
)

export default DataJabatan;