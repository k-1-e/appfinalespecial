import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import GetNota from '../componentes/FormImputs'

const Calificaciones = () => {


    const [estudiante, setEstudiante] = useState<string>('')

    const [estudiantes, setEstudiantes] = useState<string[]>([])

    const [primerNota, setPrimerNota] = useState('')

    const [segundaNota, setSegundaNota] = useState('')

    const [notaFinales, setnotaFinales] = useState<string[]>([])
    const [notaFinal, setnotaFinal] = useState<string>('')

    let promedioFinal: number = 0
    let promedioValidado = ''
    let reprobado = 'SD'

    const ValidarNota = () => {
        setEstudiantes([...estudiantes, estudiante])
        let notaFinal = parseFloat(primerNota) + parseFloat(segundaNota)
        promedioFinal = notaFinal / 2
        ValidacionDeAprobacion()
        setnotaFinal(promedioFinal.toPrecision())
    }


    const ValidacionDeAprobacion = () => {
        if (primerNota === 'SD' || segundaNota === 'SD' || primerNota === 'NSP' || segundaNota === 'SD') {
            promedioValidado = reprobado
            setnotaFinales([...notaFinales, promedioValidado])
        }
        else {
            setnotaFinales([...notaFinales, promedioFinal.toString()])
        }
    }
    return (
        <View style={styles.containerBase}>
            <Text style={styles.textCabeza}>Nombre del estudiante</Text>
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

                <View>
                    <Text style={styles.text}>NF</Text>
                    <Text style={styles.input2}>{notaFinal}</Text>

                </View>
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
                            <Text style={styles.text}>Nota Final :{notaFinales[index]}</Text>
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
    botonReset: {
        backgroundColor: '#8C8A8A',
        borderRadius: 8,
        width: '30%',
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
        fontSize: 24,
        color: '#05786A',
    },
    textReprobado: {
        fontSize: 24,
        color: '#B52222',
    },
    textAprobado: {
        fontSize: 24,
        color: '#05786A',
    },
    input2: {
        backgroundColor: '#F2F8FB',
        borderRadius: 8,
        padding: 10,
        textAlign: 'right',
        fontSize: 22,
        fontWeight: 'bold',
        color: '#004445'

    },
    textCabeza: {
        fontSize: 30,
        color: '#034C50',
        marginTop: 50,
        marginLeft: 10
    }

})
