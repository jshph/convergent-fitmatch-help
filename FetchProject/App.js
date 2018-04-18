import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount() {
    return fetch('http://1cea0967.ngrok.io/getData')
      .then(function(response) {
        return response.json()
      })
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson.someKey // the jsonify() call in the Python file turned this into a javascript object.
        }, function(){});
        console.log(responseJson.data)
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
      if (this.state.isLoading) {
        return (
          <View style={styles.container}>
            <Text>Need to load some data...</Text>
          </View>
        );
      }
      return (
      <View style={styles.container}>
        <Text>Displaying some data from ngrok backend: {this.state.dataSource}</Text>
      </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
