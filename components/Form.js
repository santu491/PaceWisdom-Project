import React, { Component } from 'react'
import { View, Text, TextInput, TouchableHighlight, FlatList, Image, Alert, Platform, StatusBar } from 'react-native'
import styles, { spinnerOverlay, spinnerColor } from '../Styles/styles'
import { connect } from 'react-redux'
import { addEmployee } from '../store/actionCreators'
import Spinner from 'react-native-loading-spinner-overlay';
import * as ImagePicker from 'expo-image-picker';
import * as constant from '../constants/constants'

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            form: {
                name: {
                    value: '',
                    placeholder: constant.ENTETR_NAME,
                    isRequired: true,
                    isTouched: false,
                    isValid: false,
                    errorMessage: null
                },
                email: {
                    value: '',
                    placeholder: constant.ENTER_EMAIL,
                    isRequired: true,
                    isTouched: false,
                    isValid: false,
                    errorMessage: null
                },
                mobileNo: {
                    value: '',
                    placeholder: constant.ENTER_MOBILE_NO,
                    isRequired: true,
                    isTouched: false,
                    isVlid: false,
                    errorMessage: null
                }
            },
            image: null,
            isSubmitted: false
        }
    }

    // Check validation for form
    checkValidation = (value, id) => {
        let data = {
            isValid: true,
            error: null
        }
        switch (id) {
            case 'name':
                if (value.length === 0) {
                    data.isValid = false
                    data.error = constant.MANDATORY_FIELD
                }
                break;

            case 'mobileNo':
                let noValidation = constant.NO_VALIDATION
                if (value.length === 0) {
                    data.isValid = false
                    data.error = constant.MANDATORY_FIELD
                }
                else {
                    if (value.length !== 10) {
                        data.isValid = false
                        data.error = constant.INAVALID_MOBILE_DIGIT_COUNT
                    }
                    if (!noValidation.test(value)) {
                        data.isValid = false
                        data.error = constant.MOBILE_NO_SHOULD_DIGITS
                    }

                }

                break;

            case 'email':
                let emailValidation = constant.EMAIL_VALIDATION
                if (value.length === 0) {
                    data.isValid = false
                    data.error = constant.MANDATORY_FIELD
                }
                else if (!emailValidation.test(value)) {
                    data.isValid = false
                    data.error = constant.INVALID_EMAIL
                }
                break;

        }

        return data

    }


    changeTexthandler = (value, id) => {
        let data = this.checkValidation(value, id)
        let updtaedForm = { ...this.state.form }
        let updatedFormElement = { ...updtaedForm[id] }
        updatedFormElement.value = value
        updatedFormElement.isValid = data.isValid
        updatedFormElement.errorMessage = data.error
        updatedFormElement.isRequired = true
        updatedFormElement.isTouched = true
        updtaedForm[id] = updatedFormElement
        this.setState({ form: updtaedForm })

    }

    // Submit Form Response
    submit = () => {
        this.setState({ isSubmitted: true })
        let form = this.state.form
        let formdata = {}
        let count = 0
        for (let key in form) {
            formdata[key] = form[key].value
            if (!form[key].isTouched || !form[key].isValid) {
                count = count + 1
            }
        }

        if (count === 0) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    let data = {
                        ...formdata,
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        image: this.state.image
                    }

                    this.props.addEmployee(data)
                },
                error => Alert.alert(error.message),
                { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
            );
        }

    }

    renderForm = ({ item }) => (
        <View>
            <TextInput
                style={styles.input}
                placeholder={item.config.placeholder}
                value={this.state.name}
                onChangeText={(e) => this.changeTexthandler(e, item.id)}
            />
            {this.state.isSubmitted ? (!item.config.isTouched ? <Text style={styles.errorMessage}>{constant.MANDATORY_FIELD}</Text> : !item.config.isValid && <Text style={styles.errorMessage}>{item.config.errorMessage}</Text>) : null}
        </View>
    )

    // Get Image from gallery
    uploadImage = async () => {
        try {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });
            if (!result.cancelled) {
                this.setState({ image: result.uri });
            }

            this.setState({ image: result.uri });
        } catch (e) {
            console.log(e);
        }
    };


    render() {
        let formArray = []
        for (let key in this.state.form) {
            formArray.push({
                id: key,
                config: this.state.form[key]

            })
        }
        return (
            <View style={[styles.formContainer]}>
                <Spinner visible={this.props.isLoading}
                    overlayColor={spinnerOverlay}
                    color={spinnerColor} />

                {this.state.image !== null ? <Image style={styles.formImg} source={{ uri: this.state.image }} />
                    : <View style={styles.formImg} />
                }
                <FlatList
                    data={formArray}
                    renderItem={this.renderForm}
                    keyExtractor={(item, index) => index}
                />
                <TouchableHighlight style={styles.submit}
                    underlayColor="#ccc"
                    onPress={this.uploadImage}
                >
                    <Text style={styles.submitText}>Add Image</Text>
                </TouchableHighlight>

                <TouchableHighlight
                    underlayColor="#ccc"
                    style={styles.submit}
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
        isLoading: state.postEmployee.isLoading,
        error: state.postEmployee.error,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addEmployee: (data) => dispatch(addEmployee(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)