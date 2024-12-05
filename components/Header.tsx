import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      {/* Logo */}
      <Image
        source={require('@/assets/images/cil-loop.svg')}
        style={styles.logo}
      />

      {/* Camera and Message Buttons */}
      <View style={styles.buttons}>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/cil-camera.svg')}
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('@/assets/images/cil-envelope-closed.svg')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  logo: {
    width: 50,
    height: 50,
  },
  buttons: {
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 15,
  },
});

export default Header;
