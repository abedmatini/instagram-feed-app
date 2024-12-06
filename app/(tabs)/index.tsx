import { View, Text, Image, FlatList, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Header from '@/components/Header';

import initialData  from '../../instagram-feed/database';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
              <Header />

      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome Buddy</ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.container}>
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
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
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
    backgroundColor: "#fff",
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
});
