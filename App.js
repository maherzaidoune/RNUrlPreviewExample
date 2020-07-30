import React, { Component } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import RNUrlPreview from "react-native-url-preview";
export default class App extends Component<Props> {

  renderItem = ({ item }) => {
    return(
      <RNUrlPreview text={item} />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
        style={{
          width: '100%'
        }}
          data={[
            "https://reactnativeforyou.com/how-to-show-url-previews-in-react-native/",
            "Myrath dance https://medium.com/s/user-friendly/emulation-is-not-a-product-strategy-cfecdbffce96",
          ]}
          renderItem={this.renderItem}
          ItemSeparatorComponent={
            () => (
              <View
                style={{
                  height: 10
                }}
              />
            )
          }
        />
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
