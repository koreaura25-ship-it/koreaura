/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SafeAreaView>
        <View>
          <Text>Hello</Text>
          <SignOutButton />
        </View>
        </SafeAreaView>

        
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;
