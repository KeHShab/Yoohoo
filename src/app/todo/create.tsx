import { router } from 'expo-router'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { useState } from 'react'
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native'
import { auth, db } from '../../config'

import { Feather } from '@expo/vector-icons'
import CircleButton from '../../components/circle_button'
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView'

const handlePress =  (bodyText: string): void => {
    if (auth.currentUser === null) { return }
    const ref = collection(db, 'users/$(auth.currentUser.uid)/todos')
    addDoc(ref, {
        
    // addDoc(collection(db, 'todos'), {
        // 
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then ((docRef) => {
        console.log('Success', docRef.id)
        router.back()
    })
    .catch((error) => {
        console.error('Error adding document: ', error)
    })
}
// const addTestDoc = async () => {
//     await addDoc(collection(db, 'todos'), {
//         bodyText: 'test 2 '
//     })
//     .then ((docRef) => {
//         console.log('Success', docRef.id)
//         router.back()
//     })
//     .catch((error) => {
//         console.error('Error adding document: ', error)
//     })
// }

// addTestDoc()

const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style={styles.container} >

            <View style={styles.inputContainer}>
                <TextInput
                 multiline 
                 style={styles.input} 
                //  
                value = {bodyText}
                onChangeText={(text) => { setBodyText(text) }}
                autoFocus
                 />
            </View>
            <CircleButton onPress={() => { handlePress(bodyText)}}>
                <Feather name='plus' size={40} color="#ffffff" />
            </CircleButton>
 
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        paddingHorizontal: 27,
        paddingVertical: 32
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top'
    }
})

export default Create