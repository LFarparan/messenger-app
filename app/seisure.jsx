import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { Button } from "react-native";

export default function App() {
    const [color, setColor] = useState('white')

    function changeColor() {
        setInterval(() => {
            setColor(prevColor => prevColor === 'white' ? 'lime' :
                prevColor === 'lime' ? 'blue' :
                    prevColor === 'blue' ? 'yellow' :
                        prevColor === 'yellow' ? 'red' :
                            'white'
            );
        }, 50);
    }

    return (
        <View style={[styles.container, { backgroundColor: color }]}>
            <Text> Welcome to my Appsu! </Text>
            <Button title='Seisure' onPress={changeColor} />
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