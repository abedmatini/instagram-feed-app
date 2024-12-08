import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";


export default function Story({avatar, name, isCreateStory = false, isSeen }) {
    return (
        <TouchableOpacity style={styles.user}>
            <View>
                <View 
                style={[ 
                    styles.avatarBorder, {
                    borderColor: isCreateStory
                    ? "transparent"
                    :isSeen
                    ? "rgba(0,0,0,.0975)"
                    : "#c73191",
                },
                ]}
                >
                    <Image source={avatar} style={styles.avatar} />
                    {isCreateStory && (
                        <View style={styles.plusIcon}>
                            <Feather name="plus" size={14} color="#fff" />
                        </View>
                    )}
                </View>
                <Text style={styles.name}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}   

const styles = StyleSheet.create({
    user: {
        width: 100,
        paddingHorizontal: 10,
    },
    avatarBorder: {
        width: 54,
        height: 54,
        borderRadius: 25,
        borderWidth: 2,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',

    },
    avatar: {
        width: 46,
        height: 46,
        borderRadius: 23,
    },
    plusIcon: {
        overflow: 'hidden',
        alignSelf: 'center',
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: 20,
        height: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    name: {
        textAlign: 'center',
        fontSize: 12,
        lineHeight: 16,
        color: 'black',
        maxWidth: 85,
    }

});