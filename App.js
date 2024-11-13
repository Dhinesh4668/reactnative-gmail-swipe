import React, { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import SwipeableListItem from './SwipeableListItem';

const App = () => {
  const [emails, setEmails] = useState([
    {
      id: '1',
      subject: 'Welcome to React Native',
      body: 'Hello! Let’s get started...',
    },
    {
      id: '2',
      subject: 'Meeting Reminder',
      body: 'Don’t forget the meeting at 3 PM...',
    },
    {
      id: '3',
      subject: 'Your Invoice',
      body: 'Your invoice for July is attached...',
    },
  ]);

  const handleArchive = (id) => {
    console.log(`Archived email with id ${id}`);
  };

  const handleDelete = (id) => {
    setEmails(emails.filter((email) => email.id !== id));
  };

  const renderItem = ({ item }) => (
    <SwipeableListItem
      email={item}
      onSwipeLeft={() => handleArchive(item.id)}
      onSwipeRight={() => handleDelete(item.id)}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={emails}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
  },
});

export default App;
