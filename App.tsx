import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import bookData from "./bookData";
import styles from "./styles";

const Stack = createStackNavigator();

const BookComponent = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{bookData.title}</Text>
      <Text style={styles.author}>Author: {bookData.author}</Text>
      <Text style={styles.info}>Release Date: {bookData.release_date}</Text>
      <Text style={styles.info}>Last Update: {bookData.last_update}</Text>
      <Text style={styles.info}>Language: {bookData.language}</Text>
      <Text style={styles.credits}>Credits: {bookData.credits}</Text>
      <Text style={styles.dedication}>{bookData.dedication}</Text>
      
      <Text style={styles.chapterHeader}>Chapters:</Text>
      {bookData.chapters.map((chapter, index) => (
        <View key={index} style={styles.chapterContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('Chapter', { chapter })}>
            <Text style={styles.chapterTitle}>{chapter.title}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const ChapterScreen = ({ route }) => {
  const { chapter } = route.params;
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.chapterTitle}>{chapter.title}</Text>
      <Image source={chapter.image} style={styles.chapterImage} />
      <Text style={styles.chapterContent}>{chapter.content}</Text>
    </ScrollView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Book" component={BookComponent} />
        <Stack.Screen name="Chapter" component={ChapterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
