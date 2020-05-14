import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ProfessionScreen = props => {
    return(
        <View style={styles.container}> 
            <Text style={styles.question}>Select who you are ?</Text>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("StudentRegistration")} style={styles.touchableOpacity} />
                <Text style={styles.text}>   I'm a Student                    </Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("TeacherRegistration")} style={styles.touchableOpacity} />
                <Text style={styles.text}>   I'm a Teacher/Professor </Text>
            </View>
            <View style={styles.view}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("AlumniRegistration")} style={styles.touchableOpacity} />
                <Text style={styles.text}>   I'm a Alumni                      </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'
    },
    question: {
        fontSize: 25,
        marginVertical: 30,
    },
    view: {
        flexDirection: 'row', 
        alignItems:'center',
        justifyContent:'space-around', 
        width:'100%',
        paddingVertical: 30,
        paddingHorizontal:40
    },
    touchableOpacity: {
        borderColor: 'black', borderWidth:2, width: 24, height: 24, borderRadius: 12
    },
    text: {
        fontSize: 18, borderColor: 'black', borderWidth:2, borderRadius:15
    }
});

export default ProfessionScreen;