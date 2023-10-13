import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ObjectDtc() {
    return (
        <View>
            <TouchableOpacity style={styles.Obj}>
                <Text style={styles.BtnText}>Object Detection</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({

    Obj: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        height: 'auto',
        padding: 20,
        fontSize: 30,
        borderRadius:20,
    },

    BtnText: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
    }

})