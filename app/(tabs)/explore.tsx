import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, FlatList, StyleSheet, Platform, TouchableOpacity, SafeAreaView } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Header from '@/components/Header';
import Stories from '@/components/Stories';

import initialData  from '../../instagram-feed/database';

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'

export default function Instagram() {
  function renderItem({item, index}) {
    if (index ===0){
      return (
        <>
        <View style={styles.stories}>
          <Stories stories={data.stories} profile={data.profile}/>
        </View>
          </>
      )
    } else {
      return;
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name='camera' size={24} />
        </TouchableOpacity>
        <Image source={{uri: INSTAGRAM_LOGO}} style={styles.logo} />
        <TouchableOpacity>
          <Feather name='send' size={24} />
        </TouchableOpacity>

      </View>
      <FlatList
          data={initialData.articles}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
              <View style={styles.card}>
                  <Image source={item.avatar} style={styles.avatar} />
                  <Text style={styles.name}>{item.name}</Text>
                  <Image source={item.image} style={styles.image} />
                  <Text style={styles.likes}>{item.likes} Likes</Text>
                  <Text style={styles.comments}>{item.comments}</Text>
              </View>
          )}
      />
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  // title: {
  //   color: 'blue',
  // },
  container: {
    flex: 1,
    backgroundColor: "azure",
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
},
card: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
},
avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
},
name: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 5,
},
image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
},
likes: {
    fontSize: 14,
    marginVertical: 5,
},
comments: {
    fontSize: 12,
    color: "#555",
},
header: {
  borderBottomWidth: 1,
  borderBottomColor: '#dbdbdb',
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingHorizontal: 16,
  height: 44,
},
logo: {
  flex: 1,
  height: 30,
  resizeMode: "contain",

}
});
