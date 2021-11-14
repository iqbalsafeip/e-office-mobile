import { Text, Box,  Stack, Heading, Button, Icon, Divider, AlertDialog, HStack, FormControl, Input, ScrollView, VStack } from 'native-base';
import React from 'react';
import NavigationComp from '../components/NavigationComp';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from 'react-redux'
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const DataPegawai = props => {
    const [isEdit, setIsEdit] = React.useState(true);
    const _pegawai = useSelector(state => state.auth.pegawai)
    const [pegawai, setPegawai] = React.useState({
        nip: '',
        nama: '',
        jenis_kelamin: '',
        tempat_lahir: '',
        tgl_lahir: '',
        no_telp: '',
        alamat: ''
    })

    React.useEffect(()=> {
        setPegawai(_pegawai)
    }, [_pegawai])

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
                    <Text color='white' fontWeight='bold' >Data Pegawai</Text>
                </HStack>
            </Box>
            <Box bg="white" flex={0.9} width='100%' roundedTop={40} mt={-10} safeAreaY safeAreaX  >
                <Box px={7} mt={45} >
                    <ScrollView showsVerticalScrollIndicator={false}  >
                        <Stack space={3} marginBottom={50}>

                        <DataPegawai.Item label="Nomor Induk Pegawai" value={pegawai.nip}  isDisabled />
                        <DataPegawai.Item label="Nama" value={pegawai.nama} isDisabled={isEdit} onChangeText={(d)=> setPegawai({...pegawai, nama: d})} />
                        <DataPegawai.Item label="Jenis Kelamin" value={pegawai.jenis_kelamin === "L" ? 'Laki-Laki' : 'Perempuan'} isDisabled />
                        <DataPegawai.Item label="Tempat Lahir" value={pegawai.tempat_lahir} isDisabled={isEdit} onChangeText={(d)=> setPegawai({...pegawai, tempat_lahir: d})} />
                       
                        <DataPegawai.Item label="Nomor Telpon" value={pegawai.no_telp} isDisabled={isEdit} onChangeText={(d)=> setPegawai({...pegawai, no_telp: d})} />
                        <DataPegawai.Item label="Alamat" value={pegawai.alamat} isDisabled={isEdit} onChangeText={(d)=> setPegawai({...pegawai, alamat: d})}/>
                        { !isEdit ? (
                            <HStack justifyContent="space-between" >
                                <Button colorScheme="indigo" color="black"  onPress={()=> setIsEdit(!isEdit)} >
                                    <Text color="white" >
                                        Batal
                                    </Text>
                                </Button>
                                <Button colorScheme="teal"  >
                                    Simpan Perubahan
                                </Button>
                            </HStack>
                        ) : (
                            <Button colorScheme="indigo" onPress={()=> setIsEdit(!isEdit)} >
                                Perbaharui Data
                            </Button>
                        )}
                        </Stack>
                    </ScrollView>
                </Box>
            </Box>
        </>
    )
}

DataPegawai.Item = props => (
    <FormControl>
        <FormControl.Label >
            {props.label}
        </FormControl.Label>
        <Input {...props} />
    </FormControl>
)


export default DataPegawai;