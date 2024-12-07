import data  from '../../instagram-feed/database';

import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native'
import {Feather} from '@expo/vector-icons';

export default function Article ({item}) {
    return(
        <View style={styles.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Feather name='more-horizontal' size={16} />
                </TouchableOpacity>
                </View>

                <Image source={item.image} style={styles.image} />

                <View style={styles.action}>
                    <View style={styles.actionLeft}>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='message-circle' size={24} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='send' size={24} />
                        </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name='bookmark' size={24} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.likes}>likes</Text>
                    <Text style={styles.commentCount}>view all comments</Text>
                </View>

            </View>
    )
}

const styles = StyleSheet.create({
    user: {
        width: 100,
        paddingHorizontal: 10,
    },
    avatarBorder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 2,
        margin: 10,
        alignSelf: 'center',
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