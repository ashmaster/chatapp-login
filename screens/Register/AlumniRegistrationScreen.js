import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const AlumniRegistrationScreen = props => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Batch of</Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Campus Name</Text>
                    <TextInput style={styles.textInput}/>
                </View>
                <View style={{width:'100%',padding:20, flexDirection:'row'}}>
                    <TouchableOpacity>
                        <View style = {{height: 30, width:30, borderRadius:15, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                            <Ionicons name = "md-add" size = {27} color = "white" />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.text}>    Add more</Text>
                </View>
            </View>
            <View style={{alignSelf:'flex-end',width: '100%'}}>
                <TouchableOpacity style={{alignSelf:'flex-end'}}>
                    <View style = {{height: 50, width: 50, borderRadius: 25, margin:50, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name = "md-arrow-forward" size = {27} color = "white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

AlumniRegistrationScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Alumni Registration',
    };
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    innerContainer: {
        position:'absolute',
        width:'100%',
        height:'100%',
        paddingTop: 50
    },
    inputContainer: {
        width: '100%',
        padding: 20
    },
    text: {
        fontSize: 20
    },
    textInput: {
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 15,
        paddingHorizontal: 20
    }
});

export default AlumniRegistrationScreen;