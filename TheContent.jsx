import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'native-base';

const Stack = createNativeStackNavigator();

import routes from './routes';
import { getItem } from './utils/asyncStorage';
import Loading from './pages/Loading';

export default function TheContent() {
    const [isLogin, setIsLogin] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        async function checkIsLogin(){
            const token = await getItem('token@eoffice')
            if(token){
                setIsLogin(true)
                setIsLoading(false)
            } else {
                setIsLoading(false)
            }
        }
        checkIsLogin()
    }, [])

	return (
        <>
        <StatusBar backgroundColor='#4338ca' />
        <NavigationContainer >
            {
                !isLoading ? 
                (<Stack.Navigator initialRouteName={isLogin ? 'Home' : 'Splash'}>
                    {routes.map((route, i)=> (
                        <Stack.Screen 
                            key={i} 
                            options={{headerShown: false}} 
                            name={route.name} 
                            component={route.component} 
                        />
                    ))}
                </Stack.Navigator>) 
                    : 
                <Loading />}
        </NavigationContainer>
        </>
	);
}
