import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, FlatList } from 'react-native'
import styles from '../Styles/styles'
import { connect } from 'react-redux'
import { deleteEmployee } from '../store/actionCreators'

const renderEmployees = (item,props) => (
    <TouchableHighlight style={styles.submit}
    onPress={() => props.deleteEmployee(item.id)}
>
    <View>
        <Text>{item.name}</Text>
        <Text>{item.email}</Text>
        <Text>{item.mobileNo}</Text>
        </View>
        </TouchableHighlight>
)

const Form = (props) => {

    return (
        <View>
            <FlatList
                data={props.employees}
                renderItem={({item})=>renderEmployees(item,props)}
                keyExtractor={(item, index) => index}
            />
        </View>
    )
}


const mapStateToProps = (state) => {
    return {
        employees: state.employeeData
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmployee: (data) => dispatch(deleteEmployee(data))
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(Form)