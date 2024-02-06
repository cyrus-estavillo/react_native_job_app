import { Stack } from 'expo-router';
import { useCallback, useEffect, useState } from 'react';
import { useFonts } from 'expo-font'; // If you want to use custom fonts, use this library
import * as SplashScreen from 'expo-splash-screen';


const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf')
    })

    const [isTimeout, setIsTimeout] = useState(false);

    // Prevent the splash screen from hiding until the fonts are loaded
    SplashScreen.preventAutoHideAsync();

    useEffect(() => {
        // Set a timeout for font loading
        const fontLoadingTimeout = setTimeout(() => {
            setIsTimeout(true);
            console.log("Using fallback fonts due to timeout.");
            // Ensure splash screen is hidden after timeout even if fonts don't load
            SplashScreen.hideAsync();
        }, 5000); // 5 seconds

    }, []); // empty dependency array so it only runs once

    // why is this sometimes taking so damn long
    const onLayoutRootView = useCallback(async () => {
        if(fontsLoaded || isTimeout) {
            console.log(fontsLoaded ? "Fonts loaded" : "Timeout reached");
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded, isTimeout])

    return <Stack onLayout = {onLayoutRootView} />
}

export default Layout;