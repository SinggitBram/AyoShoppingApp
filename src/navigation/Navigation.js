import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from '../screens/SplashScreen';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Biodata from '../screens/Biodata'
import Register from '../screens/Register'
import TestApi from '../screens/TestApi'
import Maps from '../screens/Maps'
import Homepage from '../screens/Homepage'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()

const TabsNavigation = () => (
    <Tabs.Navigator
        initialRouteName="Biodata">
        <Tabs.Screen name="Homepage" component={Homepage} options={{
            title: 'Home', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="Maps" component={Maps} options={{
            title: 'Maps', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map-marker" color={color} size={size} />
            ),
        }} />
        <Tabs.Screen name="Biodata" component={Biodata} options={{
            title: 'Profile', tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="account-box" color={color} size={size} />
            ),
        }} />
    </Tabs.Navigator>
)


const MainNavigation = () => (
    <Stack.Navigator>
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Utama" component={TabsNavigation} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        {/* <Stack.Screen name="TestApi" component={TestApi} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
)

function AppNavigation() {
    const [isLoading, setIsLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, 2000)
    }, [])

    if (isLoading) {
        return <SplashScreen />
    }

    return (
        <NavigationContainer>
            <MainNavigation />
        </NavigationContainer>
    )
}

export default AppNavigation;