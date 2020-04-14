import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, FlatList } from 'react-native'
import styles from '../Styles/styles'
import { connect } from 'react-redux'
import { addEmployee } from '../store/actionCreators'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: {
                    value: '',
                    placeholder: "Enter Name",
                    isRequired: true,
                    isTouched: false
                },
                email: {
                    value: '',
                    placeholder: "Enter email",
                    isRequired: true,
                    isTouched: false
                },
                mobileNo: {
                    value: '',
                    placeholder: "Enter Mobile No",
                    isRequired: true,
                    isTouched: false
                }
            }
        }
    }

    changeTexthandler = (value, id) => {
        let updtaedForm = { ...this.state.form }
        let updatedFormElement = { ...updtaedForm[id] }
        updatedFormElement.value = value
        updtaedForm[id] = updatedFormElement
        this.setState({ form: updtaedForm })

    }

    submit = () => {

        let formdata={}
        for(let key in this.state.form){
            formdata[key]=this.state.form[key].value
        }

        navigator.geolocation.getCurrentPosition(
			position => {
                const location = JSON.stringify(position);
                data={
                    ...formdata,
                    latitude:position.coords.latitude,
                    longitude:position.coords.longitude
                }

                this.props.addEmployee(data)
			},
			error => Alert.alert(error.message),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);


    }

    renderForm = ({ item }) => (
        <TextInput
            style={styles.input}
            placeholder={item.config.placeholder}
            value={this.state.name}
            onChangeText={(e) => this.changeTexthandler(e, item.id)}
        />
    )

    render() {
        let formArray = []
        for (let key in this.state.form) {
            formArray.push({
                id: key,
                config: this.state.form[key]

            })
        }
        return (
            <View>
                {/* <TextInput
                    style={styles.input}
                    placeholder="enter Name"
                    value={this.state.name}
                    onChangeText={this.changeTexthandler}
                /> */}

                <FlatList
                    data={formArray}
                    renderItem={this.renderForm}
                    keyExtractor={(item, index) => index}
                />
                <TouchableHighlight style={styles.submit}
                    onPress={this.submit}
                >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableHighlight>

            </View>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        employee: state
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: (data) => dispatch(addEmployee(data))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Form)