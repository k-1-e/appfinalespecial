import { Button, Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import React, { useState, useEffect } from 'react'
// import React from 'react'; {useState, } from 'react'

const FeedScreen = ({ navigation }) => {

    const [tarea, setTarea] = useState<string>('')
    const [tareas, setTareas] = useState<string[]>([])


    // const [usuario , setUsuario] = useState('')
    const crearTarea = () => {
        setTareas([...tareas, tarea])
    }

    const eliminarTarea = (id: number) => {
        tareas.splice(id, 1)
        getTareas()
    }
    const getTareas = () => {
        setTareas([...tareas])
    }

    useEffect(getTareas, [])

    return (
        <ScrollView>

            <Text style={styles.colortexto}>Nombre del Estudiante</Text>

   
                <View style={styles.container}>

                    <TextInput

                        placeholder={"Nombre del estudiante"}
                        onChangeText={setTarea}

                    />

                </View>
                <View style={styles.botonagregar}>
                    <Button
                        title="agregar"
                        onPress={crearTarea}
                    />
                    
                </View>


                {
                    tareas.map((lista, index) => (
                        <View style={styles.container} key={index}>

                            <Text style={styles.text}>{lista}</Text>

                            <Button
                                color="red"
                                title="Eliminar"
                                onPress={() => eliminarTarea(index)}
                            />


                        </View>

                    ))
                }

         
        </ScrollView>
    )
}
export default FeedScreen

const styles = StyleSheet.create({

    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginBottom: 15,
        paddingVertical: 8,
        paddingHorizontal: 8,
        marginLeft: 10,
        borderWidth: 2,
        borderRadius: 10,
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    botonagregar: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 300,
        width: 330,
        padding: '1%'
    },

    textbotonInsertar: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        borderRadius: 50,

    },
    colortexto: {
        fontSize: 20,
        color: '#22B5A3',
        padding: '1%',

    },
    text: {
        fontSize: 34,
        color: '#034C50',
        width: '70%'

    },

    button: {
        color: '#C4C4C4',
        marginTop: 50
    },

    btnagregar: {
        backgroundColor: 'black',
        marginTop: '70%',
        borderRadius: 8,
    },
    base: {
        flex: 1,
        backgroundColor: '#f5e3e1'

    },




})


