import { StyleSheet, Text, TextInput, useColorScheme, View } from "react-native";

interface InputProps {
  label: string
  onChange: (text: string) => void
  value: string
}

export default function InputWithLabel(props: InputProps) {
  const isLightMode = useColorScheme() === 'light'

  const inputStyle = isLightMode ? styles.inputLight : styles.inputDark
  const textStyle = isLightMode ? styles.textLight : styles.textDark

  return (
    <View style={styles.inputView}>
      <Text style={[styles.label, textStyle]}>{props.label}</Text>
      <TextInput
        style={[styles.input, textStyle, inputStyle]}
        onChangeText={props.onChange}
        value={props.value}
        keyboardType="numeric"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 60,
    borderWidth: 2,
    borderRadius: 4,
    paddingHorizontal: 20,
    fontFamily: 'SFPT-Regular',
    fontSize: 22,
  },
  inputLight: {
    backgroundColor: '#F9F9F9',
    borderColor: '#C6C6C8',
  },
  inputDark: {
    backgroundColor: '#191919',
    borderColor: '#393938',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontFamily: 'SFPT-Regular'
  },
  inputView: {
    margin: 20,
    marginBottom: 0
  },
  textLight: {
    color: '#191919'
  },
  textDark: {
    color: '#F9F9F9'
  }
})
