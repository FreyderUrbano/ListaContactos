import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const ListaUsuarios = ({ item }) => {

    const { id, nombre, celular, email, direccion } = item

    return (
        <View style={styles.container}>
            <Text>{[nombre]}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:20,
        marginHorizontal:20,
        backgroundColor: "#D5F5E3",
        margin: 5,
        padding: 5,
        borderRadius: 2,
    }
})
export default ListaUsuarios