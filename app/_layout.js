import { Stack } from 'expo-router';
import { useCallback } from 'react';
import { useFonts } from 'expo-font'; // If you want to use custom fonts, use this library
import * as SplashScreen from 'expo-splash-screen';

// Makes the native splash screen stay visible until you call SplashScreen.hideAsync()
SplashScreen.preventAutoHideAsync();

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded) {
            await SplashScreen.hideAsync();
        }
        else {
            console.log("Fonts are not loaded");
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    return <Stack onLayout = {onLayoutRootView} />
}

export default Layout;