import { StyleSheet, Platform, StatusBar } from 'react-native'

export const spinnerOverlay = "rgba(0,0,0,0.66)"
export const spinnerColor = "#86B341"

const styles = StyleSheet.create({
    formContainer: {
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        paddingTop: 80
    },
    errorMessage: {
        marginHorizontal: "5%",
        color: "red"
    },
    input: {
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        borderWidth: 0.5,
        marginHorizontal: "5%",
        paddingLeft: 15
    },
    submit: {
        height: 50,
        borderRadius: 5,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#ccc",
        marginHorizontal: "5%",
    },
    submitText: {
        color: "#ffffff",
        fontWeight: "bold"
    },
    employeeinfo: {
        flex: 1,

    },
    employeeView: {
        borderRadius: 5,
        backgroundColor: "#ffffff",
        padding: 15,
        width: "90%",
        marginBottom: 10,
        alignSelf: "center",
        flexDirection: "row"
    },
    headerView: {
        height: 50,
        backgroundColor: "#ffffff",
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row"
    },
    arrow: {
        width: 20,
        alignSelf: "center",
        marginLeft: 10
    },

    employeeDetailedView: {
        flex: 1,
        marginVertical: 20,
        borderRadius: 10,
        backgroundColor: "white",
        marginHorizontal: 10,
        paddingTop: 20
    },
    employeeDataView: {
        flexDirection: "row",
        alignItems: "center"
    },
    employeeData: {
        marginTop: 50,
        paddingLeft: 30,
        paddingBottom: 30
    },
    employeeKey: {
        width: 82,
        fontSize: 15,
        fontWeight: 'bold'
    },
    employeeValue: { fontSize: 12 },
    employeeImage: {
        width: 150,
        height: 150,
        borderRadius: 75
    },
    employeeNoImage: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: "#ccc"
    },
    mapContainer: {
        width: "80%",
        height: 200,
        borderRadius: 20,
        alignSelf: "center",
        overflow: 'hidden'
    },

    mapView: {
        width: "100%",
        height: "100%"
    },
    employeeInfoImage: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#ccc"
    },
    employeeInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1
    },
    deleteImg: {
        width: 20,
        alignSelf: "center",
    },
    deleteImgContainer: {
        width: 50,
        height: 40
    },
    formImg: {
        width: 100,
        height: 100,
        alignSelf: "center",
        borderRadius: 50,
        backgroundColor: "#ccc"
    }
})

export default styles