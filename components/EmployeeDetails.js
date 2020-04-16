import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import Header from './Header'
import styles from '../Styles/styles'
import Map from './Map'

const EmployeeDetails = (props) => {
    const { employee } = props.route.params
    return (
        <View style={{ flex: 1 }}>
            <Header title="Employee Details" navigation={props.navigation} />
            <View style={styles.employeeDetailedView}>
                <View style={{ alignSelf: "center" }}>
                    {employee.image && employee.image !== null ? <Image style={styles.employeeImage} source={{ uri: employee.image }} />
                        : <View style={styles.employeeNoImage} />
                    }
                </View>
                <View style={styles.employeeData}>
                    <View style={styles.employeeDataView}>
                        <Text style={styles.employeeKey}>Name</Text>
                        <Text style={styles.employeeValue}>: {employee.name}</Text>
                    </View>
                    <View style={styles.employeeDataView}>
                        <Text style={styles.employeeKey}>Email</Text>
                        <Text style={styles.employeeValue}>: {employee.email}</Text>
                    </View>
                    <View style={styles.employeeDataView}>
                        <Text style={styles.employeeKey}>Mobile No</Text>
                        <Text style={styles.employeeValue}>: {employee.mobileNo}</Text>
                    </View>
                </View>
                <Map
                    latitude={employee.latitude} longitude={employee.longitude}
                />
            </View>
        </View>
    )
}

export default EmployeeDetails