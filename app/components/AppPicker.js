import React,{ useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button, TouchableWithoutFeedback, Modal } from 'react-native'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import defaultStyles from '../config/styles'
import BodyText from './BodyText'
import Screen from './Screen'

export default function AppPicker({icon, placeholder, ...otherProps}) {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <React.Fragment>
            <TouchableWithoutFeedback onPress={()=>setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (<MaterialCommunityIcons name={icon} size={20} color={defaultStyles.colors.medium} style={styles.icon}/>)}
                    <BodyText style={styles.text}>{placeholder}</BodyText>
                    <MaterialCommunityIcons name="chevron-down" size={20} color={defaultStyles.colors.medium} />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide"></Modal>
                <Screen>
                    <Button title='close' onPress={()=>setModalVisible(false)}/>
                </Screen>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:defaultStyles.colors.light,
        borderRadius:25,
        flexDirection:'row',
        width:'100%',
        padding:15,
        marginVertical:10,
    },
    icon:{
        marginRight:10
    },
    text:{
        flex:1,
    },
})
