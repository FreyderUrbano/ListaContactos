import React, { useState } from 'react'
import { ListItem, List, TouchableHighlight, FlatList, SafeAreaView, Alert, View, Button, TextInput, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import ListaUsuarios from '../src/components/ListaUsuarios'

export const UserList = (props) => {
  const user = [
    //AQUI CREO QUE TENDRIA QUE TRAER LOS DATOS QUE ESCRIBO EN EL FORMULARIO DESDE EL CELULAR
    {
      nombre: 'PABLO',
      celular: '',
      email: '',
      direccion: '',
    },
    {
      nombre: 'PEDRO',
      celular: '',
      email: '',
      direccion: '',
    },
    {
      nombre: 'PEPE',
      celular: '',
      email: '',
      direccion: '',
    },
  ]
  return (
    <SafeAreaView style={styles.container}>
      <FlatList style={styles.lista}
        data={user}
        keyExtractor={(item) => item.nombre}
        renderItem={({ item, index }) => <ListaUsuarios item={item} />}
        ItemSeparatorComponent={() => <View style={{ marginVertical: 2, borderColor: 'white', borderWidth: 1, }} />}
        ListHeaderComponent={() => <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 10, textAlign: 'center' }}>LISTA DE CONTACTOS</Text>}
      />
      <View style={styles.butAling}>
        <TouchableHighlight onPress={() => props.navigation.navigate("DetalleUsuario")} style={styles.touch}>
          <View style={styles.button}>
            <Text>Actualizar Usuario</Text>
          </View>
        </TouchableHighlight>
        <TouchableOpacity onPress={() => { Alert.alert('ELIMINAR USUARIO') }}>
          <Text style={styles.buttonTxtRow}>Borrar</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={() => props.navigation.navigate("CrearUsuario")} style={styles.buton}
        title="VOLVER" />
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  lista: {
    marginHorizontal: 0,
    backgroundColor: '#A3E4D7',
    padding: 20,
    borderRadius: 20,
  },
  texto: {
    marginBottom: 50,
    textAlign: 'center',
    fontSize: 20,
    backgroundColor:'black'
  },
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#27AE60',
    paddingTop: 10,
  },
  buton: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    textAlign: 'center',
    marginBottom: 10,
    paddingBottom: 10,
    alignItems: "center",
    backgroundColor: "black",
    padding: 10
  },
  buttonTxtRow: {
    marginTop: 10,
    width: 150,
    textAlign: 'center',
    backgroundColor: "black",
    padding: 10,
  },
  touch: {
    marginTop: 10,
  },
  butAling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
export default UserList

