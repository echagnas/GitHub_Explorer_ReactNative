import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { Center } from '../components/Center';
import { useDispatch } from 'react-redux';
import { setUserName } from '../store/actions/Actions';

export default function SearchBar() {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch()

    function clickHandler() {
        dispatch(setUserName(searchText));
    }

    return <View style={styles.viewStyle}>
        <TextInput style={styles.textInputStyle} autoCapitalize='none'
            label="User name" value={searchText} onChangeText={(value) => { setSearchText(value) }
            } theme={{
                colors: {
                    text: '#000000AA',
                    primary: '#FFFFFFAA', //FOR underline and label color
                }
            }} />
        <Center>
            <Button style={styles.buttonStyle} color='#FFFFFFAA' mode='text' onPress={clickHandler} variant="outlined">Search</Button>
        </Center>
    </View>
}

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: 'row',
        margin: 10,
    },
    textInputStyle: {
        flex: 1,
        backgroundColor: '#00000000',
    },
    buttonStyle: {
        textDecorationColor: '#FF0000',
    },
})
