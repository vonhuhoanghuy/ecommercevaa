import { StyleSheet, Text, View, TextInput,TouchableOpacity , Button} from 'react-native'
import React, { useState }  from 'react'
import { useRouter } from 'expo-router';


const login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();
     const handleLogin = () => {
    // Handle login logic here
    console.log('Login with:', email, password);
  };
  return (
    <View style={styles.container}>
          <Text>hello</Text>
          <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
          />
          <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
          />
        <Button title="Đăng nhập" onPress={() =>  handleLogin() } />
        <TouchableOpacity onPress={() => router.push('signUp')} >
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View> 
  )
}

export default login;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signUpText: {
    color: '#007BFF',
    fontSize: 16,
  }
})