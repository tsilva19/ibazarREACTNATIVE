import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import camisa from '../../assets/camisa.png';
import roupaNova from '../../assets/roupa.png';
import Roupa from '../Roupa';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Roupa img={camisa} cost="110,90" conten="Camisa muito barata">   
                </Roupa>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Roupa img={roupaNova} cost="360,90" conten="Camisa Penchincha">
              
                </Roupa>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})