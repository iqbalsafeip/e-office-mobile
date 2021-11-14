import { Text, Box,  VStack, Heading, Button, Icon, Divider, AlertDialog } from 'native-base';
import React from 'react';
import NavigationComp from '../components/NavigationComp';
import { Ionicons } from "@expo/vector-icons";
import { useDispatch } from 'react-redux'
import { logout } from '../redux/actions/authActions';

const Menu = props => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dispatch = useDispatch()
    const _logout = () => {
        dispatch(logout());
        props.navigation.replace('Splash');
    }

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
                px={7}
                justifyContent='center'
            >
                <Heading color='white' >Menu</Heading>
            </Box>
            <Box bg="white" flex={0.8} width='100%' roundedTop={40} mt={-10} safeAreaY safeAreaX  >
                <Box px={7} mt={45} >
                    <VStack >
                        <Menu.Button name="settings" text="Pengaturan" />
                        <Menu.Button name="alert-circle-outline" text="Tentang" />
                        <Divider />
                        <Menu.Button name="log-out" text="Keluar" onPress={()=> setIsOpen(true)}  />
                    </VStack>
                </Box>
                <NavigationComp />
            </Box>
            <Menu.Alert isOpen={isOpen} onClose={()=> setIsOpen(false)} onPress={_logout} />
        </>
    )
}

Menu.Button = props => (
    <Button 
        variant="unstyled" 
        justifyContent="flex-start" 
        startIcon={<Icon as={Ionicons} name={props.name} />}
        {...props}
    >
        <Text fontWeight="bold" >{props.text}</Text>
    </Button>
)

Menu.Alert = props => {
    const cancelRef = React.useRef();
    return (
        <AlertDialog
            leastDestructiveRef={cancelRef}
            isOpen={props.isOpen}
            onClose={props.onClose}
            motionPreset={"fade"}
        >
            <AlertDialog.Content>
            <AlertDialog.Header fontSize="lg" fontWeight="bold">
                Yakin Keluar ?
            </AlertDialog.Header>
            <AlertDialog.Footer>
                <Button ref={cancelRef} onPress={props.onClose} >
                    Batal
                </Button>
                <Button colorScheme="red" onPress={props.onPress} ml={3} >
                    <Text color="white" >Yakin!</Text>
                </Button>
            </AlertDialog.Footer>
            </AlertDialog.Content>
        </AlertDialog>
    );
}


export default Menu;