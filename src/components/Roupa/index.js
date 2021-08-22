import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import camisa from '../../assets/camisa.png';

export default function Roupa(props){


  function filterDesc(desc){
    if(desc.length < 27){
      return desc;
    }

    return `${desc.substring(0, 23)}...`;
  }
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.roupaImg}
      />
      <Text style={styles.roupaText}>
          {props.conten}
      </Text>
      <View opacity={0.4}>
      <Text style={styles.roupaText}>
          {props.cost}
      </Text>
      </View>
      
    </TouchableOpacity>
  )
};

const styles = StyleSheet.create({
  container:{
     paddingLeft: '5%',
      alignItems: 'center',
      justifyContent: 'center'
  },
  roupaImg:{
    width: 175,
    height: 175
  },
  roupaText: {
    fontSize: 10
  }
})