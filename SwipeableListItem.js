import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';

const SwipeableListItem = ({ email, onSwipeLeft, onSwipeRight }) => {
  const renderLeftActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles.action, styles.archive]}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Archive
        </Animated.Text>
      </View>
    );
  };

  const renderRightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });

    return (
      <View style={[styles.action, styles.delete]}>
        <Animated.Text style={[styles.actionText, { transform: [{ scale }] }]}>
          Delete
        </Animated.Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={renderLeftActions}
      onSwipeLeft={onSwipeLeft}
      renderrenderRightActions={renderRightActions}
      onSwipeRight={onSwipeRight}
      
    >
      <View style={styles.container}>
        <Text style={styles.emailSubject}>{email.subject}</Text>
        <Text style={styles.emailBody}>{email.body}</Text>
      </View>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emailSubject: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  emailBody: {
    marginTop: 4,
    fontSize: 14,
    color: '#555',
  },
  action: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: '100%',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  archive: {
    backgroundColor: 'blue',
  },
  delete: {
    backgroundColor: 'red',
  },
});

export default SwipeableListItem;
