import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Switch, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../../constants/Colors';

const ProfileScreen = props => {
    return(
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.imageContainer}>
                    <ImageBackground style={styles.imageBackground} imageStyle={styles.image} 
                    source={{uri:'https://4.bp.blogspot.com/-RdRv2qX4m_Q/W1v4fK2DfYI/AAAAAAAABVc/Ph3fAnXcEeMTz-bF6rw1X3WnaTKifCSegCEwYBhgL/s1600/CUTE%2BDP.jpg'}}>
                        <TouchableOpacity onPress={()=>{}}>
                            <View style = {{height: 50, width: 50, borderRadius: 25, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                                <Ionicons name = "ios-camera" size = {27} color = "white" />
                            </View>
                        </TouchableOpacity>
                    </ImageBackground>  
                </View>
                <View style={styles.inputContainer}>
                    <TextInput  placeholder="Name" style={styles.input}/>
                    <TextInput  placeholder="Age" style={styles.input} />
                </View>
                <View style={styles.genderContainer}>
                    <Text style={{fontSize: 20}}>Gender:</Text>
                    <Switch />
                </View>
            </View>
            <View style={{alignSelf:'flex-end',width: '100%'}}>
                <TouchableOpacity onPress={()=>{props.navigation.navigate('Profession')}} style={{alignSelf:'flex-end'}}>
                    <View style = {{height: 50, width: 50, borderRadius: 25, margin:50, backgroundColor: Colors.primary, justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name = "md-arrow-forward" size = {27} color = "white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    innerContainer: {
        position:'absolute',
        width:'100%',
        height:'100%',
        alignItems: 'center'
    },
    imageContainer: {
        width: 200,
        height: 200,
        alignItems:'center',
        marginTop: 20,
    },
    imageBackground: {
        width: 200,
        height: 200,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        padding: 10
    },
    image: {
        width:  200,
        height: 200,
        borderRadius: 100
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 40,
    },
    input:{
        width: '100%',
        padding: 10,
        fontSize: 20,
        borderBottomWidth: 1,
        borderColor: 'black'
    },
    genderContainer: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 20,
        paddingHorizontal: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export default ProfileScreen;