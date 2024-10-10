
import { StyleSheet, Text, View } from 'react-native'

interface Props{
    children: string
    bang: boolean
}

const hello = (props:Props): JSX.Element => {
    const {children, bang} = props
    return (
        <View>
            <Text style= { style.text}>Hello{children}{bang ? '!': ""}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    text:{
        color:"#FFFFFF",
        backgroundColor: "blue",
        fontSize: 40,
        fontWeight: "bold",
        padding: 16
    }
})


export default hello
