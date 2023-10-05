import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

const Screen1 = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.search}>
                    <Image style={styles.searchlogo} source={require('./assets/iconSearch.png')}></Image>
                </View>
                <Image source={require('./assets/iconFilter.png')}></Image>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        
        width: "100%",
        backgroundColor: "green",
    },
    header: {
        marginTop: 80,
        flex: 1,
        flexDirection: "row",
    },
    search: {
        width: 263,
        height: 48,
        backgroundColor: "#ccc",
        flex: 1,
        flexDirection: "row",
    },
    searchlogo: {

    }

});
export default Screen1;