import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const StudentRegistrationScreen = props => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Current Education Level</Text>
                    <View style={{flexDirection:'row', justifyContent:'space-between', paddingTop:10}}>
                        <TouchableOpacity>
                            <Text style={{fontSize:25, padding: 5, borderColor:'black',borderWidth:2, borderRadius: 5}}>11</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:25, padding: 5, borderColor:'black',borderWidth:2, borderRadius: 5}}>12</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:25, padding: 5, borderColor:'black',borderWidth:2, borderRadius: 5}}>UG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:25, padding: 5, borderColor:'black',borderWidth:2, borderRadius: 5}}>PG</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={{fontSize:25, padding: 5, borderColor:'black',borderWidth:2, borderRadius: 5}}>PHD</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Campus Location</Text>
                    <TextInput placeholder="Start typing city name" style={styles.textInput}/>
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.text}>Campus Name</Text>
                    <TextInput placeholder="Start typing institute name" style={styles.textInput}/>
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

StudentRegistrationScreen.navigationOptions = navData => {
    return {
      headerTitle: 'Student Registration',
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
        paddingTop: 20
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

export default StudentRegistrationScreen;