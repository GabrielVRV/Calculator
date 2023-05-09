import React from "react";
import{
    StyleSheet,
    Text,
    View,
} from 'react-native'

const styles = StyleSheet.create({
    display: {
        flex: 0.8,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'black',
        alignItems: 'flex-end',
        top:30
    },
    displayValue: {
        fontSize: 90,
        color: '#fff',
    }
})

export default props =>
    <View style={styles.display}>
        <Text style={styles.displayValue} numberOfLines={1}>
            {props.value}
        </Text>
    </View>

