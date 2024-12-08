import data  from '../instagram-feed/database';

import React, {useState} from 'react';
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

export default function Article({ item }) {
    const [likes, setLikes] = useState(() => {
        const article = data.articles.find(article => article.id === item.id);
        return article ? parseInt(article.likes, 10) : 0; // Convert to number for easier manipulation
      });


    return (
        <View style={styles.article}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.user}>
                    {/* User Avatar */}
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar} />
                    </TouchableOpacity>

                    {/* User Name */}
                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                {/* More Options Icon */}
                <TouchableOpacity>
                    <Feather name="more-horizontal" size={16} />
                </TouchableOpacity>
            </View>

            {/* Main Article Image */}
            <Image source={item.image} style={styles.image} />

            {/* Action Buttons */}
            <View style={styles.action}>
                <View style={styles.actionLeft}>
                    {/* Message Button */}
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="message-circle" size={24} />
                    </TouchableOpacity>

                    {/* Send Button */}
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="send" size={24} />
                    </TouchableOpacity>
                </View>

                {/* Bookmark Button */}
                <TouchableOpacity style={styles.actionButton}>
                    <Feather name="bookmark" size={24} />
                </TouchableOpacity>
            </View>

            {/* Post Info */}
            <View style={styles.info}>
                <Text style={styles.likes}>{likes} likes</Text>
                <Text style={styles.commentCount}>view all comments</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    article: {
        backgroundColor: '#fff',
        marginVertical: 10,
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    name: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        maxWidth: 200,
    },
    image: {
        width: '100%',
        height: 300,
        resizeMode: 'cover',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    actionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        marginRight: 15,
    },
    info: {
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    likes: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        marginBottom: 5,
    },
    commentCount: {
        fontSize: 13,
        color: '#555',
    },
});