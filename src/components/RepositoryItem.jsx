import React from 'react';
import {View, Text, } from 'react-native';

const RepositoryItem = ({ fullName,
    description,
    language,
    forksCount,
    stars,
    ratingAverage,
    reviewCount,
    // avatar
}) => (
    <View>
        <Text>Full name: {fullName}</Text>
        <Text>Description: {description}</Text>
        <Text>Language: {language}</Text>
        <Text>Stars: {stars}</Text>
        <Text>Forks: {forksCount}</Text>
        <Text>Review: {reviewCount}</Text>
        <Text>Rating: {ratingAverage}</Text>
    </View>
);

export default RepositoryItem;