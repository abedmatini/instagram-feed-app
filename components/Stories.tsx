import React from 'react';
import { FlatList } from 'react-native';
import Story from './Story';

export default function Stories({stories, profile}) {
    function renderItem({item, index}) {
        if (index === 0) {
            return (
                <>
                <Story
                name="Clarian North"
                avatar={profile.avatar}
                isCreateStory={true}
                isSeen={profile.isSeen}
                />
                <Story
                name={item.name}
                avatar={item.avatar}
                isSeen={item.isSeen}
                />
                </>
            )
        } else {
            return (
                <Story
                name={item.name}
                avatar={item.avatar}
                isSeen={item.isSeen}
                />
            );
        }
    }

    return (
        <FlatList
        data={stories}
        renderItem={renderItem}
        keyExtractor={(item)=> item.id.toString()}
        horizontal={true}
        />
    )
};