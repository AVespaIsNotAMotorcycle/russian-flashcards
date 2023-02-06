import React from 'react';
import axios from 'axios';
import { Text, View } from 'react-native';

function Flashcard() {
  const flashcard = 'test flashcard text';

  return (
    <View>
      <Text>{flashcard}</Text>
    </View>
  );
}

export default Flashcard;
