import React from 'react';
import { View, Text, TextInput, Button} from 'react-native';

export function Profile(){
  return (
    <View>
      <Text testID='text-title'>Titulo</Text>
      <TextInput 
        testID='input-name'
        placeholder='Nome'
        autoCorrect={false}
        value={''}
      />

      <TextInput 
        testID='input-surname'        
        placeholder='Sobrenome'
        autoCorrect={false}
        value={''}

      />

      <Button 
        title={"Salvar"}
        onPress={() => {}}
      />
    </View>
  );
}