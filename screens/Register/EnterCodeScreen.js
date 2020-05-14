import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const EnterCodeScreen = props => {
    return (
        <View style = {styles.container} >
            <View style = {styles.card} >
                <View style = {{margin: 20}} >
                    <Text style = {{fontWeight: 'bold', fontSize: 20}} >
                        Waiting to automatically detect and send SMS to +91-9600644453
                    </Text>
                </View>
                <View style = {styles.code} >
                    <View style = {{flexDirection: 'row', alignItems: 'center'}} >
                        <TextInput style = {styles.textInput} keyboardType = "number-pad" />
                        <TextInput style = {styles.textInput} keyboardType = "number-pad" />
                        <TextInput style = {styles.textInput} keyboardType = "number-pad" />
                        <TextInput style = {styles.textInput} keyboardType = "number-pad" />
                    </View>
                </View>
                <TouchableOpacity onPress = {() => props.navigation.navigate("Profile")} >
                    <View style = {{height: 50, width: 50, borderRadius: 25, backgroundColor: Colors.primary,
                        left: 250, bottom: 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name = "md-arrow-forward" size = {27} color = "white" />
                    </View>
                </TouchableOpacity>
            </View>
            <View style = {{flex: 1, justifyContent: 'flex-end', marginBottom: 30}}>
                <Text style = {{fontSize: 18, fontWeight: 'bold', marginLeft: 40, marginBottom: 20}} >Didn't receive the code?</Text>
                <View style = {{flexDirection: 'row', marginRight: 10}} >
                    <TouchableOpacity onPress = {() => console.log("Working?")} >
                        <View style = {styles.connectSocially} >
                            <Text style = {{color: 'white', marginHorizontal: 10, marginVertical: 5, fontSize: 16}}>Resend code</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => props.navigation.navigate("NumberLogin")} >
                        <View style = {styles.connectSocially1} >
                            <Text style = {{color: 'white', marginHorizontal: 10, marginVertical: 5, fontSize: 16}}>Change mobile number</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style = {{marginLeft: 45, marginTop: 30, flexDirection: 'row'}} >
                    <View style = {{width: 50, height: 5, backgroundColor: 'white', borderRadius: 3, marginRight: 10, borderWidth: 1, borderColor: 'black'}} />
                    <View style = {{width: 50, height: 5, backgroundColor: 'black', borderRadius: 3, marginRight: 10}} />
                </View>
            </View>
        </View>
    )
}

EnterCodeScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Campus Ring'
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%'
    },
    card: {
        margin: '10%',
        height: 180,
        width: '80%',
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10
    },
    code: {
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 40,
        marginRight: 10,
        fontSize: 30,
        textAlign: 'center',
        padding: 5
    },
    connectSocially: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.primary,
        marginLeft: 40
    },
    connectSocially1: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        backgroundColor: Colors.primary,
        marginLeft: 10
    }
})

export default EnterCodeScreen;