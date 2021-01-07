import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase';

export default class Main extends React.Component {
  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth();

    this.setState({ currentUser })
  }

  render() {
    const { currentUser } = this.state

    return (
      <View style={styles.container}>
        <Text>Welcome</Text>
        <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
