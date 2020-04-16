
import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, FlatList, Image, Platform, StatusBar } from 'react-native'
import styles from '../Styles/styles'

const Header = (props) => {
    return (

        <View style={styles.headerView}>
            <TouchableHighlight
                underlayColor="#ffffff"
                onPress={() => props.navigation.goBack()}>
                <Image style={styles.arrow} source={require('../assets/images/backArrow.png')} />
            </TouchableHighlight>
            <Text style={{
                fontSize: 21
            }}

            >{props.title}</Text>
            <View />
        </View>
    )

}

export default Header