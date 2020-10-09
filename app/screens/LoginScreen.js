import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import {Formik} from 'formik'
import * as Yup from 'yup'

import AppButton from '../components/AppButton'
import AppFormField from '../components/AppFormField'
import AppTextInput from '../components/AppTextInput'
import Screen from '../components/Screen'


const validationSchema=Yup.object().shape({
    email:Yup.string().required().email().label("Email"),
    password:Yup.string().required().min(4).label("password")
})

export default function LoginScreen(props) {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require('../assets/healthcare.png')}/>
            <Formik
                initialValues={{email:'',password:''}}
                onSubmit={values=>console.log(values)}
                validationSchema={validationSchema}
            >
                    {({handleChange,handleSubmit,errors,setFieldTouched, touched})=>(
                <>
                    <AppFormField
                        autoCapitalize="none" // this prevents IOS and android to auto capitalize first letter
                        autoCorrect={false}
                        icon="email"
                        keyboardType='email-address'
                        name='email'
                        placeholder="Email"
                        textContentType="emailAddress" //allows IOS to autofill from keychain
                    />
                    <AppFormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon='lock'
                        name='password'
                        placeholder='Password'
                        secureTextEntry
                        textContentType='password' //allows IOS to autofill from keychain
                    />
                    <AppButton
                        title='Login'
                        onPress={handleSubmit}
                    />
                </>
            )}
            </Formik>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    logo:{
        width:100,
        height:100,
        alignSelf:'center',
        marginTop:50,
        marginBottom:20,
    }
})
