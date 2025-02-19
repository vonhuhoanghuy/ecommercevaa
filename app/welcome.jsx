import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'


const welcome = () => {
    return (
      
        
             <View style={styles.container} >
              <Image
                  style={styles.welcomeImage}
                    source={require('../assets/images/h-bg.png')} />
                
                <View>
                    <Text>hello</Text>
                    
                </View>
            </View> 
  
           

  )
}

export default welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#ffd500',
   
        
    },
    welcomeImage: {
        paddingBottom: '100',
        alignSelf: 'center',
        // marginBottom: 200
    }
})