import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface TextProps {
    title: string;
    overrideStyles?: any
}

const PrimaryText = ({ title, overrideStyles = {} }: TextProps) => {
    return (
        <Text style={{ ...styles.primary, ...overrideStyles }}>
            {title}
        </Text>)
}

const ButtonText = ({ title, overrideStyles = {} }: TextProps) => {
    return (
        <Text style={styles.primary}>
            {title}
        </Text>)
}

export {
    PrimaryText,
    ButtonText
};

const styles = StyleSheet.create({
    primary: {
        marginTop: 20,
        padding: 10,
        textAlign: 'center',
        fontSize: 12,
        color: '#050050',
        fontFamily: 'Metropolis-SemiBold',
    }
});