import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { use } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
const signUp = () => {

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Sign Up:', { fullName, email, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By signing up you agree to our Terms, Privacy Policy, and Cookie Use
      </Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('login')} >
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  )
}

export default signUp

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  termsText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButton: {
    backgroundColor: 'green',
    padding: 15,
    alignItems: 'center',
    marginBottom: 10,
  },
  socialButtonText: {
    color: 'white',
    fontSize: 16,
  },
  loginText: {
    textAlign: 'center',
    color: 'blue',
  }
})