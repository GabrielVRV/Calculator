import React from "react";
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from "react-native"

const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        borderRadius: 40, 
        height: (Dimensions.get('window').width / 4) - 20,
        width: (Dimensions.get('window').width / 4) - 20,
        padding: 20,
        textAlign: 'center',
        color: 'white', 
        backgroundColor: '#333333',
        marginTop: 15,
        marginHorizontal:10,
        overflow: 'hidden'
    },
    buttonOperation: {
        color: '#fff',
        backgroundColor: '#fa8231',
        borderRadius: 40,
    },
    buttonDouble: {
        height: (Dimensions.get('window').width / 4)-15,
        width: ((Dimensions.get('window').width / 4) * 2) - 20,
        borderRadius: 40
    },
    buttonTriple: {
        height: (Dimensions.get('window').width / 4)-20,
        width: ((Dimensions.get('window').width / 4) * 3) - 20,
        borderRadius: 40,
        backgroundColor:'gray',
        color:'black'
    }
})

export default props => {
    const stylesButton = [styles.button];

    if (props.double){
       stylesButton.push(styles.buttonDouble); 
    }

    if (props.triple){
        stylesButton.push(styles.buttonTriple); 
    }
    
    if (props.operation){
        stylesButton.push(styles.buttonOperation); 
    }

    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}