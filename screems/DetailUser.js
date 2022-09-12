import React from 'react'
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export const DetailUser = (props) => {
  return (
    <SafeAreaView>
      <TouchableHighlight onPress={() => props.navigation.navigate("ListaUsuarios")} style={styles.touch}>
        <View style={styles.button}>
          <Text>Editar Usuario</Text>
        </View>
      </TouchableHighlight>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  touch: {
    margin: 10,
    backgroundColor:"red", 
    height:50,
    marginHorizontal:50,
  },
})
export default DetailUser