import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button, Image } from "react-native";

export default function App() {
    const [color, setColor] = useState('white')
    const [pressed, setPressed] = useState(false)


    function changeColor() {
        setInterval(() => {
            setColor(prevColor => prevColor === 'white' ? 'lime' :
                prevColor === 'lime' ? 'blue' :
                    prevColor === 'blue' ? 'yellow' :
                        prevColor === 'yellow' ? 'red' :
                            'white'
            );
        }, 50);
        setPressed(true)
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            {(!pressed) ?
                <View>
                    <Text> Welcome to my Appsu! </Text>
                    <Button title='Seisure' onPress={changeColor} />
                </View> :
                <Image source={require('../assets/images/MePic.jpg')}
                    style={{ height: 300, width: 200 }} />}


            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})