import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { View, Text, Image, FlatList, StyleSheet, Platform, TouchableOpacity, SafeAreaView, Button } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import Header from '@/components/Header';
import Stories from '@/components/Stories';

import data  from '../../instagram-feed/database';
import { Constants } from 'expo-constants';
import Article from '@/components/Article';

const INSTAGRAM_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png'

export default function Instagram() {
  // const [hasPermission, setHasPermission] = useState(null);
  const [showCamera, setShowCamera] = useState(false);
  // const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }
  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  function renderItem({item, index}) {
    if (index ===0){
      return (
        <>
        <View style={styles.stories}>
          <Stories stories={data.stories} profile={data.profile}/>
        </View>
        <Article item={item} />
          </>
      )
    } else {
      return <Article item={item} />
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
    <View style={styles.container}>
      <View style={styles.header}>

          <TouchableOpacity onPress={()=> setShowCamera(!showCamera)}>
            <Feather 
              name='camera' 
              size={24} 
            />
          </TouchableOpacity>

        <Image source={{uri: INSTAGRAM_LOGO}} style={styles.logo} />
        <TouchableOpacity>
          <Feather name='send' size={24} />
        </TouchableOpacity>

      </View>
      <FlatList
          data={data.articles}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
      />
      { showCamera && (
      <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

        <CameraView style={styles.camera} >
          <Feather name='x' size={24} />

      </CameraView>
      </View>
      )
    }
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
    // paddingTime: Constants.statusBarheight
    backgroundColor: "azure",
    // // alignItems: 'center',
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

},
stories: {
  borderBottomWidth: 1,
  borderBottomColor: "#dbdbdb",
  height: 104,
  padding: 10,
  backgroundColor: "#fafafa",
},
message: {
  textAlign: 'center',
  paddingBottom: 10,
},
camera: {
  flex: 1,
  padding: 200,
  // height: '60%',
  width: "80%",
  // height: 500,
  borderRadius: 10,
},
});
