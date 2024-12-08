import data  from '../instagram-feed/database';

import React, {useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    Modal
} from 'react-native'
import {Feather} from '@expo/vector-icons';

function getInitialState(item) {
    const article = data.articles.find(x => x.id === item.id);
    return {
        likes:article.likes,
        commentCount: article.commentCount,
    }
}

export default function Article({ item }) {
    const initialState = getInitialState(item);
    const [likes, setLikes] = useState(initialState.likes);
    // const [likes, setLikes] = useState(() => {
    //     const article = data.articles.find(article => article.id === item.id);
    //     return article ? parseInt(article.likes, 10) : 0; // Convert to number for easier manipulation
    //   });
    const [commentCount, setCommentCount] = useState(initialState.commentCount);
    //   const [commentCount, setCommentCount] = useState(data.articles.find(article => article.id === item.id)?.commentCount);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [comment, setComment] = useState('');
    const [isLiked, setIsLiked] = useState(false);

    const handleComment = () => {
        setIsModalVisible(true); // Open the modal
      };
    
      const submitComment = () => {
        console.log("Comment Submitted:", comment); // Handle the comment logic
        setComment(""); // Clear the input field
        setIsModalVisible(false); // Close the modal
        setCommentCount(prevCommentCount => prevCommentCount + 1);
      };

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
                    <TouchableOpacity style={styles.actionButton}

                        onPress = {() => {
                            setIsLiked(!isLiked);
                            if(isLiked) { 
                                setLikes(prevLikes => prevLikes - 1);
                            } else {
                                setLikes(prevLikes => prevLikes + 1);
                            }
                        }}
                        >
                <View
                    style={[
                    styles.iconBackground,
                    { backgroundColor: isLiked ? 'pink' : 'transparent' }, // Conditional background color
                    ]}
                >           
                <Feather name="heart" color={isLiked ? "red" : "black"} size={24} />
                </View>
                        
                    </TouchableOpacity>
                    {/* Message Button */}
                        <View style={styles.container}>
                        {/* Comment Button */}
                        <TouchableOpacity style={styles.actionButton} onPress={handleComment}>
                            <Feather name="message-circle" size={24} />
                        </TouchableOpacity>

                        {/* Modal for Comment Input */}
                        <Modal
                            visible={isModalVisible}
                            transparent
                            animationType="slide"
                            onRequestClose={() => setIsModalVisible(false)} // Close modal on back press
                        >
                            <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Write a Comment</Text>
                                <TextInput
                                style={styles.input}
                                placeholder="Type your comment here..."
                                value={comment}
                                onChangeText={text => setComment(text)}
                                multiline
                                />
                                <View style={styles.modalActions}>
                                <TouchableOpacity style={styles.cancelButton} onPress={() => setIsModalVisible(false)}>
                                    <Text style={styles.cancelButtonText}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.submitButton} onPress={submitComment}>
                                    <Text style={styles.submitButtonText}>Submit</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
                            </View>
                        </Modal>
                        </View>
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
                <Text style={styles.commentCount}>view all {commentCount} comments</Text>
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
    iconBackground: {
        width: 30, // Size slightly larger than the icon for a "background" effect
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15, // Makes the background circular
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darkened background for focus
      },
      modalContent: {
        width: '90%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
      },
      modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
      },
      input: {
        width: '100%',
        height: 100,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        textAlignVertical: 'top',
        marginBottom: 20,
      },
      modalActions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
      },
      cancelButton: {
        padding: 10,
        backgroundColor: '#ccc',
        borderRadius: 5,
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
      },
      cancelButtonText: {
        color: '#000',
      },
      submitButton: {
        padding: 10,
        backgroundColor: '#2196F3',
        borderRadius: 5,
        flex: 1,
        marginLeft: 5,
        alignItems: 'center',
      },
      submitButtonText: {
        color: '#fff',
        fontWeight: 'bold',
      },
});