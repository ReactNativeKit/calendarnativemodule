import React, {Component} from 'react';
import { NativeModules, Button, View } from 'react-native';

const { CalendarModule } = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('Abhinav Anand', 'New Delhi');
    console.log('We will invoke the native module here!');
  };

  return (
    <View style={{flex:1, justifyContent:'center', backgroundColor:'#FBD6D2'}}>
    <Button
      title="Click to invoke your native module!"
      color="#A63EC5"
      onPress={onPress}
    />
    </View>
  );
};

export default NewModuleButton;