import { Form, Formik, Field, useFormik } from "formik";
import React, { useState } from 'react'
import { Alert, View, Button, TextInput, ScrollView, StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
const URL = "http://localhost:3001/";


const SignupSchema = Yup.object().shape({
  nombre: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  celular: Yup.string()
    .min(10, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  direccion: Yup.string()
    .min(10, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
});

// function guardarContacto(){
//   return(

//   )
// } 
const CreateUser = (props) => (
  <Formik
    initialValues={{
      nombre: '',
      celular: '',
      email: '',
      direccion: '',
    }}
    validationSchema={SignupSchema}
    onSubmit={values =>
      console.log(values)}
  >

    {({ status, errors, touched, isValidating, handleChange, handleBlur, submit, handleSubmit, values }) => (

      <View style={styles.container} >
        {console.log(errors)}
        <Text style={styles.titulo}>INGRESA TUS DATOS</Text>
        <Text style={styles.titulo1}>Nombre y Apellido</Text>
        <TextInput name="nombre" style={styles.texto} placeholder='Nombre' onChangeText={handleChange('nombre')}
          onBlur={handleBlur('nombre')}
          value={values.nombre} />
        <Text>{errors.nombre && touched.nombre ? (
          <Text>{errors.nombre}</Text>
        ) : null}
        </Text>
        <Text style={styles.titulo1}>Nro de Celular</Text>
        <TextInput name="celular" style={styles.texto} placeholder='Celular' onChangeText={handleChange('celular')}
          onBlur={handleBlur('celular')}
          value={values.celular} />
        <Text>{errors.celular && touched.celular ? (
          <Text>{errors.celular}</Text>
        ) : null}</Text>
        <Text style={styles.titulo1}>Email</Text>
        <TextInput name="email" style={styles.texto} placeholder='Email' onChangeText={handleChange('email')}
          onBlur={handleBlur('email')}
          value={values.email} />
        <Text>{errors.email && touched.email ? (
          <Text>{errors.email}</Text>
        ) : null}</Text>
        <Text style={styles.titulo1}>Direccion</Text>
        <TextInput name="direccion" style={styles.texto} placeholder='Dirección' onChangeText={handleChange('direccion')}
          onBlur={handleBlur('direccion')}
          value={values.direccion} />
        <Text>{errors.direccion && touched.direccion ? (
          <Text>{errors.direccion}</Text>
        ) : null}</Text>
        <View style={styles.buton}>
          <Button title='GUARDAR CONTACTO' onPress={handleSubmit} disabled={errors && Object.keys(errors).length > 0} />
          <Button title='LISTA CONTACTOS' onPress={() =>
            props.navigation.navigate('ListaUsuarios')
          } />
        </View>
      </View>
    )}
  </Formik >
);
//<h1>AGENDA DE CONTACOS</h1>
// const formik = useFormik({
//   initialValues: {
//     nombre: '',
//     celular: '',
//     email: '',
//     direccion: '',
//   },
//   onSubmit: (values) => {alert(JSON.stringify(values, null, 2));
//   },
// });

// const [values, setValues] = React.useState({
//   nombre: '',
//   celular: '',
//   email: '',
//   direccion: '',
// });

// const handleChange = (nombre, value) => {
//   setValues({ ...values, [nombre]: value });
// }

// const saveNewUser = () => {
//   console.log(values);
//   //props.navigation.navigate("UserList");
// }
// return (
//   <Formik onSubmit={formik.handleSubmit}>
//     <ScrollView style={styles.container} >
//       <View style={styles.texto}>
//         <Text >INGRESA TUS DATOS</Text>
//       </View>
//       <View style={styles.texto}>
//         <Text htmlFor="nombre">Nombre</Text>
//         <TextInput type="text" style={styles.inputGroup} onChange={formik.handleChange('nombre')}
//           values={formik.values.nombre} />
//       </View>
//       <View style={styles.texto}>
//         <Text htmlFor="celular">Celular</Text>
//         <TextInput type="number" style={styles.inputGroup} onChange={formik.handleChange('celular')}
//           values={formik.values.celular} />
//       </View>
//       <View style={styles.texto}>
//         <Text htmlFor="email">Email</Text>
//         <TextInput type="email" style={styles.inputGroup} onChange={formik.handleChange('email')}
//           values={formik.values.email} />
//       </View>
//       <View style={styles.texto}>
//         <Text htmlFor="direccion">Direccion</Text>
//         <TextInput type="text" style={styles.inputGroup} onChange={formik.handleChange('direccion')}
//           values={formik.values.direccion} />
//       </View>
//       <View style={styles.boton}>
//         <Button
//           type="submit"
//           title="Guardar Datos"
//           onPress={() => saveNewUser(values)}
//         />

//         <Button
//           type="submit"
//           title="Consultar Datos"
//           onPress={() => console.log('IR A USERLIST')}
//         />

//       </View>
//     </ScrollView>
//   </Formik>
// );



// const CreateUser = () => {

//   const [state, setState] = useState({
//     nombre: '',
//     celular: '',
//     email: '',
//     direccion: '',
//   })

//   const handleChangeText = (nombre, value) => {
//     setState({ ...state, [nombre]: value})
//   }
//   return (

//     <ScrollView style={styles.container}>
//       <View style={styles.texto}>
//         <Text >INGRESA TUS DATOS</Text>
//       </View>
//       <View style={styles.inputGroup}>
//         <TextInput placeholder='Nombre' onChangeText={(value) =>handleChangeText('nombre', value)} />
//       </View>
//       <View style={styles.inputGroup}>
//         <TextInput placeholder='Celular' onChangeText={(value) =>handleChangeText('celular', value)} />
//       </View>
//       <View style={styles.inputGroup}>
//         <TextInput placeholder='Email' onChangeText={(value) =>handleChangeText('email', value)} />
//       </View>
//       <View style={styles.inputGroup}>
//         <TextInput placeholder='Dirección' onChangeText={(value) =>handleChangeText('direccion', value)} />
//       </View>
//       <View>
//         <Button title='GUARDAR CONTACTO' onPress={() => console.log(state)}/>
//       </View>
//     </ScrollView>
//   )
// }

const styles = StyleSheet.create({
  titulo1: {
    marginBottom: 5,
    textAlign: 'center',
  },
  titulo: {
    color: '#F4F6F7',
    fontWeight: 'bold',
    fontSize: 25,
    marginBottom: 40,
    textAlign: 'center',
  },
  texto: {
    marginHorizontal: 20,
    height: 50,
    backgroundColor: '#82E0AA',
    marginBottom: 20,
    paddingLeft: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 20,
    backgroundColor: '#27AE60',
  },
  buton: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
export default CreateUser