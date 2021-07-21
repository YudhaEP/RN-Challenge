import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MyImage from '../components/MyImage';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>

            {/* Ilustration & Text */}
            <MyImage imageSource={require('../assets/images/ilustrasi.png')} />
            <Text style={styles.text}> 
                Organize your daily activities 
            </Text>
            <Text style={styles.subText}> 
                Make your schedule now with To-do List, to make your days more productive 
            </Text>
            {/* End */}

            {/* Button Guest */}
            <TouchableOpacity 
                onPress={() => navigation.navigate('Home')} 
                style={styles.btnGuest}>
                <Text style={styles.btnGuestText}>Continue as Guest</Text>
            </TouchableOpacity>
            {/* End */}

            {/* Button Google */}
            <TouchableOpacity 
                style={styles.btnGoogle}>
                <View>
                <Text style={styles.btnGoogleText}>Sign in with Google</Text>
                </View>
            </TouchableOpacity>
            {/* End */}

            {/* Button Facebook */}
            <TouchableOpacity 
                style={styles.btnFacebook}>
                <Text style={styles.btnFacebookText}>Sign in with Facebook</Text>
            </TouchableOpacity>
            {/* End */}

            {/* Create Account */}
            <Text style={styles.createAccountText}>
                Don't have an account?&nbsp;&nbsp;
                <Text style={styles.btnCreateAccount}> 
                    Sign Up 
                </Text>
            </Text>
            {/* End */}
        </View>
    );
};

const styles = StyleSheet.create({

    // Style View
    container:{
        flex: 1,
        backgroundColor: '#FFF'
    },
    // End

    // Style Ilustration & Text
    text:{
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        paddingTop: 20
    },
    subText:{
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 10,
        paddingRight: 30,
        paddingLeft: 30,
        color: '#A1A1A1'
    },
    // End 

    // Style Button Guest
    btnGuest:{
        alignItems: 'center',
        marginTop: 40,
        backgroundColor: '#EAEAEA',
        padding: 10,
        width: 300,
        height: 50,
        marginLeft: 30,
        borderRadius: 15
    },
    btnGuestText:{
        fontSize: 16,
        paddingTop: 5
    },
    // End

    // Style Button Google
    btnGoogle:{
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#4285F4',
        padding: 10,
        width: 300,
        height: 50,
        marginLeft: 30,
        borderRadius: 15
    },
    btnGoogleText:{
        fontSize: 16,
        paddingTop: 5,
        color: '#FFF'
    },
    // End

    // Style Button Facebook
    btnFacebook:{
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: '#3B5998',
        padding: 10,
        width: 300,
        height: 50,
        marginLeft: 30,
        borderRadius: 15
    },
    btnFacebookText:{
        fontSize: 16,
        paddingTop: 5,
        color: '#FFF'
    },
    // End

    // Style Create Account
    createAccountText:{
        color: '#A1A1A1',
        fontSize: 12,
        paddingTop: 15,
        textAlign: 'center'
    },
    btnCreateAccount:{
        color: '#4285F4',
        textAlign: 'center',
        textDecorationLine: 'underline',
        fontWeight: 'bold'
    }
    // End
});

export default LoginScreen;