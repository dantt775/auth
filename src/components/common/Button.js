import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({whenPress, children}) => {
  
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity onPress={whenPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  );
};

  
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backGroundColor: '#fff',
    borderRadius: 4,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
}

export { Button } ;