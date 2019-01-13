import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import RNUrlPreview from "react-native-url-preview";
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNUrlPreview text={"Myrath dance https://www.youtube.com/watch?v=b2rKORvyOcM"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
