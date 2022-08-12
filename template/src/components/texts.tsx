import React from 'react';
import { Title, useTheme } from 'react-native-paper';

interface TextProps {
    title: string;
    overrideStyles?: any
}

const PrimaryText = ({ title, overrideStyles = {} }: TextProps) => {
    const { fonts } = useTheme();
    return (
        <Title style={{ ...fonts.medium, ...overrideStyles }}>
            {title}
        </Title>)
}

export {
    PrimaryText,
};