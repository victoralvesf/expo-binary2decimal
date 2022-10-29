import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function Header() {
  const isLightMode = useColorScheme() === 'light'

  const headerStyle = isLightMode ? styles.headerLight : styles.headerDark
  const titleStyle = isLightMode ? styles.titleLight : styles.titleDark

  return (
    <View style={[styles.header, headerStyle]}>
      <Text style={[styles.title, titleStyle]}>Binary To Decimal</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
  },
  headerLight: {
    backgroundColor: '#F9F9F9',
    borderBottomColor: '#C6C6C8',
  },
  headerDark: {
    backgroundColor: '#191919',
    borderBottomColor: '#393938',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    fontFamily: 'SFPD-Bold',
  },
  titleLight: {
    color: '#191919'
  },
  titleDark: {
    color: '#F9F9F9'
  }
});