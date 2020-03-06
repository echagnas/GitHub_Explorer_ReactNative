import React from "react";
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph } from 'react-native-paper';
import { useSelector } from 'react-redux';

export const UserCard = () => {
    const userInfos = useSelector(state => {
        return state.userInfos
    });

    const { avatar_url: image, name } = userInfos;

    return <View style={styles.viewStyle}>
        <Card style={styles.cardStyle}>
            <Card.Cover style={styles.coverStyle} source={{ uri: image }} />
            <Card.Content style={{ alignItems: 'center' }}>
                <Paragraph style={styles.paragraphStyle}>{name}</Paragraph>
            </Card.Content>
        </Card>
    </View >
}

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#00000033'
    },
    cardStyle: {
        backgroundColor: '#00000022',
        borderRadius: 40,
        margin: 10,
        overflow: 'hidden',
    },
    paragraphStyle: {
        padding: 10,
        color: '#000000AA',
        fontFamily: 'Oxanium-Regular',
        fontSize: 20
    },
    coverStyle: {

    }
});