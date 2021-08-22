import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, SafeAreaView, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import banner from '../../assets/bazzar.png';
import  { useNavigation } from '@react-navigation/native';

import camisa from '../../assets/camisa.png';
import roupaNova from '../../assets/roupa.png';
import Roupa from '../../components/Roupa';
export default function Home(){
  const navigation = useNavigation();
  return (
    
      <View style={styles.container}>
        <View style={styles.header}>
            <Image
              source={banner}
              style={styles.image}
            />
        </View> 

       
        <View style={styles.textContainer}>
            <Text style={styles.text}>Bazzar</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>Roupas</Text>
            <TouchableOpacity styles={{position: 'absolute', right: 8, alignSelf: 'right'}}>
              <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
              />
            </TouchableOpacity>        
        </View> 
        <View >
           <Text style={styles.line} />
        </View> 

        <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Roupa img={camisa} cost="R$200,00" conten="Roupa de Verão Bonita" onClick={()=> navigation.navigate('Detail')}/>
        <Roupa/>

          <Roupa img={roupaNova} cost="R$200,00" conten="Roupa de Verão Bonita" onClick={()=> navigation.navigate('Detail')}/>
            
          <Roupa/>

          </View>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Roupa img={camisa} cost="R$200,00" conten="Roupa de Verão Bonita" onClick={()=> navigation.navigate('Detail')}/>
            
          <Roupa/>

          <Roupa img={roupaNova} cost="R$200,00" conten="Roupa de Verão Bonita"onClick={()=> navigation.navigate('Detail')}/>
            
          <Roupa/>
        </View>

        </ScrollView>
    </View>

    
  
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginTop:30,
    marginBottom: 8
  },
  image:{
    width: '100%',
    height: '50%'
  },
  textContainer:{
    marginTop:-160,
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '5%',
    right: 10
  },
  line:{
    borderBottomColor: '#47315a',
    borderBottomWidth: 1,
  }

});