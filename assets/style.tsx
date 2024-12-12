import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    // GLOBAL
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute'
    },
    btn: {
        borderWidth: 1,
        borderRadius: 6,
        backgroundColor: 'transparent',
        verticalAlign: 'middle',
        textDecorationLine: 'none',
        textAlign: 'center',
        color: '#DEE2E6',
        fontWeight: '400',
        fontSize: 16,
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    btnOutlineLight: {
        color: '##f8f9fa',
        borderColor: '#f8f9fa',
    },
    mb3: {
        marginBottom: 16
    },
    container: {
        marginTop: 15,
        marginHorizontal: 15
    },
    headerRightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 11,
    },
    leftButton: {
        marginLeft: 11,
        color: "#FFFFFF"
    },
    rightButton: {
        marginLeft: 11,
        color: "#FFFFFF"
    },
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
    // SINGLE
    // 404 ERROR PAGE
    errorpage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    // EXTRAS
    filterIcon: {
        marginHorizontal: 11
    },
    // FORM
    labelText: {
        marginBottom: 10
    },
    formControl: {
        width: '100%',
        paddingVertical: 12,
        paddingHorizontal: 12,
        fontSize: 16,
        fontWeight: "400",
        // color: "#212529",
        // backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: "#DEE2E6",
        borderRadius: 0,
        minHeight: 48
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
})

export default styles;