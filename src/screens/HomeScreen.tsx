import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native'
import GetNota from '../componentes/FormImputs'

const Calificaciones = () => {


    const Separator = () => (
        <View style={styles.separator} />
      );

    const [estudiante, setEstudiante] = useState<string>('')

    const [estudiantes, setEstudiantes] = useState<string[]>([])

    const [primerNota, setPrimerNota] = useState('')

    const [segundaNota, setSegundaNota] = useState('')

    const [notaFinales, setnotaFinales] = useState<number[]>([])
    let promedioFinal
    const ValidarNota = () => {
        setEstudiantes([...estudiantes, estudiante])
        let notaFinal = parseFloat(primerNota) + parseFloat(segundaNota)
        promedioFinal = notaFinal / 2
        setnotaFinales([...notaFinales, promedioFinal])
        
    }

    const getNotas = () => {
        setEstudiantes([...estudiantes])
    }
    //  useEffect(, [])
    return (
        <View style={styles.containerBase}>
            <Text style={styles.text}>Nombre del estudiante</Text>
            <View style={styles.container}>
                <TextInput
                    style={styles.inputs}
                    placeholder={"Nombre del Estudiante"}
                    onChangeText={setEstudiante}
                />
                
            </View>
            <View style={styles.containerNota}>
                <GetNota
                    title={"IP"}
                    placeholder={"IP"}
                    onChangeText={setPrimerNota}
                />
                <GetNota
                    title={"IIP"}
                    placeholder={"IIP"}
                    onChangeText={setSegundaNota}
                />
                 <GetNota
                    title={"NF"}
                    placeholder={"NF"}
                    onChangeText={setSegundaNota}
                />
               
                <TouchableOpacity
                    onPress={ValidarNota}
                    style={styles.botonReset}
                >
                    <Text style={styles.textbotonReset}>Agregar</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {
                  
                    estudiantes.map((estudiantes, index) => (
                        <View style={styles.container} key={index}>
                          
                            <Text style={styles.text} >{estudiantes}</Text>
                            <Separator />
                            <Text style={styles.text}> la nota es: {notaFinales[index]}</Text>
                          
                        </View>
                    ))
                }
            </ScrollView>
        </View>
    )
}

export default Calificaciones

const styles = StyleSheet.create({
    container: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        paddingVertical: 10,
        paddingHorizontal: 8,
        borderRadius: 10,
        marginLeft: 10,
        borderWidth: 3,
        borderColor: '#8C8A8A',
        marginTop: 10,
    },
    inputs: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 10,
        fontSize: 22,
        color: '#034C50',
        width: '70%'
    },
    containerBase: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center'
    },
    containerNota: {
        width: '50%',
        marginBottom: 20,
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 8,
        justifyContent: 'space-between',
        marginLeft: 30,
    },
    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '60%',
        paddingVertical: 7,
        marginTop: 5
    },
    textbotonReset: {
        color: '#05786A',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginTop: 10

    },
    text: {
        marginTop: 60,
        fontSize: 20,
        color: '#034C50',
    },
    inputNotaFinal: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },


})