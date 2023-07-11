import React from 'react';
import {View, TextInput} from 'react-native';

const MyTextInput = props => {
  return (
    <View
      style={{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 15,
      }}>
      <TextInput
        underlineColorAndroid="transparent"
        placeholder={props.placeholder}
        placeholderTextColor="#007FFF"
        keyboardType={props.keyboardType}
        onChangeText={props.onChangeText}
        returnKeyType={props.returnKeyType}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmitEditing}
        style={props.style}
        blurOnSubmit={false}
        value={props.value}
        clearButtonMode="always"
      />
    </View>
  );
};

export default MyTextInput;
