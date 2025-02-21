import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SearchBar = () => {
  return (
    <View>
          <SearchBar
            placeholder="Search Here..."
          lightTheme
          round
    
          autoCorrect={false}
          />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
    marginTop: 30,
    padding: 2,
  },
})