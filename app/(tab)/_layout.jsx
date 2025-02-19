import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../../components/ScreenWrapper'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
      <Tabs screenOptions={{
          headerShown:false
      }}>
          <Tabs.Screen name='home' />
          <Tabs.Screen name='categories' />
          <Tabs.Screen name='newPost' />
          <Tabs.Screen name='cart' />
          <Tabs.Screen name='profile' />
          
     </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})