import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Colors from '../constants/colors'

const Number = (props) =>{
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 2,
        borderColor: Colors.primary,
        padding: 10,
        alignItems:'center',
        marginVertical: 10,
        borderRadius: 10
    },

    number:{
        fontSize: 22,
        color: Colors.accent
    }
})

export default Number