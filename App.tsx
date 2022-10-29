import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, View, useColorScheme, Dimensions } from 'react-native';
import * as SplashScreen from 'expo-splash-screen'

import CustomStatusBar from './src/components/CustomStatusBar';
import Header from './src/components/Header';
import HomeInputs from './src/components/HomeInputs';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'SFPD-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
    'SFPT-Regular': require('./assets/fonts/SF-Pro-Text-Regular.otf'),
  })

  const isLightMode = useColorScheme() === 'light'

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  const homeBackground = isLightMode ? styles.bgLight : styles.bgDark

  return (
    <View onLayout={onLayoutRootView}>
      <CustomStatusBar />
      <SafeAreaView style={[styles.container, homeBackground]}>
        <Header />
        <HomeInputs />
        <StatusBar style="auto" />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    height: Dimensions.get('screen').height
  },
  bgLight: {
    backgroundColor: '#fff',
  },
  bgDark: {
    backgroundColor: '#232323',
  }
});
