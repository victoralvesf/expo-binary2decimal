import { Dimensions, StyleSheet, useColorScheme, View, Platform } from 'react-native';

export default function CustomStatusBar() {
  const isAndroid = Platform.OS === 'android'
  const isLightMode = useColorScheme() === 'light'

  const barStyle = isLightMode ? styles.barLight : styles.barDark
  const barHeight = isAndroid ? styles.barAndroid : styles.barIos

  return (
    <View style={[styles.bar, barStyle, barHeight]} />
  )
}

const styles = StyleSheet.create({
  bar: {
    width: Dimensions.get('window').width,
  },
  barAndroid: {
    height: Dimensions.get('screen').height * 0.03
  },
  barIos: {
    height: 60
  },
  barLight: {
    backgroundColor: '#F9F9F9',
  },
  barDark: {
    backgroundColor: '#191919',
  }
});