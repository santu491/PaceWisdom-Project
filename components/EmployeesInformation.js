import React, { Component } from 'react'
import { View, Text, TouchableHighlight, FlatList, Image,} from 'react-native'
import styles,{spinnerOverlay,spinnerColor}  from '../Styles/styles'
import { connect } from 'react-redux'
import { deleteEmployee, getEmployee } from '../store/actionCreators'
import Spinner from 'react-native-loading-spinner-overlay';
import Header from './Header'

class Form extends Component {

    //Render Empolyees 
    renderEmployees = (item, props) => (
        <TouchableHighlight
            underlayColor="#fffff"
            onPress={() =>
                this.props.navigation.navigate("EmployeeDetails", { employee: item })
            }
        >
            <View style={[styles.employeeView,]}>

                <View >
                    {
                        item.image && item.image !== null ?
                            <Image style={styles.employeeInfoImage} source={{ uri: item.image }} />
                            :
                            <View style={styles.employeeInfoImage} />
                    }
                </View>

                <View style={styles.employeeInfoContainer}>

                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ fontSize: 17 }}>{item.name}</Text>
                        <Text>{item.email}</Text>
                        <Text>{item.mobileNo}</Text>
                    </View>
                </View>

                <TouchableHighlight
                    style={styles.deleteImgContainer}
                    underlayColor="#fffff"
                    onPress={() =>
                        this.props.deleteEmployee(item.id)
                    }
                >

                    <Image style={styles.deleteImg} source={require('../assets/images/delete.png')} />

                </TouchableHighlight>
            </View>

        </TouchableHighlight>
    )

    componentDidMount() {
        this.props.getEmployee()
    }

    render() {
        return (
            <View style={styles.employeeinfo}>
                <Spinner visible={this.props.isLoading}
                    overlayColor={spinnerOverlay}
                    color={spinnerColor} />
                <Header title="Employee Info" navigation={this.props.navigation} />

                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={this.props.employees}
                        renderItem={({ item }) => this.renderEmployees(item, this.props)}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        employees: state.getEmployee.employeeData,
        isLoading: state.getEmployee.isLoading
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteEmployee: (data) => dispatch(deleteEmployee(data)),
        getEmployee: () => dispatch(getEmployee()),
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form)