import React, { useState } from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native'

const CreateUser = () => {
  
  const [state, setState] = useState({
    nombre: '',
    celular: '',
    email: '',
    direccion: '',
  })

  const handleChangeText = (nombre, value) => {
    setState({ ...state, [nombre]: value})
  }


  return (

    <ScrollView style={styles.container}>
      <View style={styles.texto}>
        <Text >INGRESA TUS DATOS</Text>
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Nombre' onChangeText={(value) =>handleChangeText('nombre', value)} />
       
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Celular' onChangeText={(value) =>handleChangeText('celular', value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Email' onChangeText={(value) =>handleChangeText('email', value)} />
      </View>
      <View style={styles.inputGroup}>
        <TextInput placeholder='Dirección' onChangeText={(value) =>handleChangeText('direccion', value)} />
      </View>
      <View>
        <Button title='GUARDAR CONTACTO' onPress={() => console.log(state)}/>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  texto: {
    marginBottom: 50,
    marginLeft: 90,

  },
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: 'white',
    paddingTop: 100,
  },
  inputGroup: {

    height: 50,
    flex: 1,
    padding: 0,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#EBEDEF',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    paddingLeft: 20,
  }
})
export default CreateUser