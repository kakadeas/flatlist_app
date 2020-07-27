import React, {Component} from 'react';
import { View, Text, StyleSheet, FlatList, Image} from 'react-native';

const DATA = [
   {
      id: 0,
      name: '1. Mahableshwar',
      brief1:'known For : ',
      brief:'Elephant\'s Head point, Chinaman\'s falls, Dhobi waterfall',
      info:'A hill town in the Western Ghats, apart from its strawberries, Mahabaleshwar is also well known for its numerous rivers, magnificent cascades and majestic peaks. This hill station in Maharashtra is set amidst the forests, waterfalls and beautiful lakes.',
      imgsrc:require('./assets/mahabaleshwar.png'),
   },
   {
      id: 1,
      name: '2. Lonavala',
      brief1:'known For : ',
      brief:'Tiger\'s Leap, Rajmachi Fort, Imagicaa',
      info:'The most popular hill station in Maharashtra due to its proximity to Pune and Mumbai, Lonavala is the place to be during monsoons. With lots of waterfalls, lakes and hills around, Lonavala is frequented by all sorts of people, especially honeymooners, hikers and trekkers.',
      imgsrc:require('./assets/lonavala.png'),
   },
   {
      id: 2,
      name: '3. Lgatpuri',
      brief1:'known For : ',
      brief:'Tringalwadi Fort, Ghatandevi Temple, Vipassna Centre',
      info:'Lgatpuri is blessed with picturesque beauty and is a heaven for nature lovers and adventure enthusiasts. It also has some of the highest peaks of the Sahyadri range. Igatpuri is also a major railway station in Maharashtra connecting surrounding major cities.',
      imgsrc:require('./assets/lgatpuri.png'),
   },
   {
      id: 3,
      name: '4. Chikhaldara',
      brief1:'known For : ',
      brief:' Bhimkund, Melghat, Tiger Reserve, Narnala Fort',
      info:'The scent of coffee enchants you as you enter the hill station city of Chikhaldara in the state of Maharashtra. Being the only coffee growing area in the region, Chikhaldara also boasts of beautiful lakes, breathtaking panoramic viewpoints and exotic wildlife.',
      imgsrc:require('./assets/Chikhaldara.png'),
   },
];

const Item = ({item}) => (
   <View style={styles.cardcontainer}>
     <Text style = {styles.title}>{item.name}</Text>
     <Image source={item.imgsrc} style={styles.imagestyle}/>
     <Text style = {styles.known_for1}>{item.brief1}
       <Text style = {styles.known_for2}>{item.brief}</Text>
       </Text>
     <Text style = {styles.text}>{item.info}</Text>
   </View>
 );

class App extends Component
{
   render()
   {
      return(
      <View style={styles.maincontainer}>
         <View style={styles.header}>
            <Text style={styles.text_style}>FlatList Assignment</Text>
         </View>

         <View style={styles.container}>
            <FlatList
               data={DATA}
               renderItem={Item}
               keyExtractor={item => item.id}
            />
         </View>
      </View>
      )
   }

}

export default App

const styles = StyleSheet.create({
   maincontainer:
   {
      flexDirection:'column',
      backgroundColor:'#fff',
      width:'100%',
      height:'100%'
   },

   header:
   {
         justifyContent:'flex-start',
         width:'100%',
         height:'7%',
         backgroundColor:'grey',
   },

   container:
   {
         justifyContent:'center',
         width:'100%',
         height:'93%',
         backgroundColor:'#fff'
   },

   text_style:
   {
      textAlign:'center',
      fontSize:18,
      fontFamily:'times new roman',
      color:'white',
      margin:8
   },

   cardcontainer: {
      padding: 5,
      marginTop:'1%',
      marginBottom: '1%',
      backgroundColor: '#fff',
      alignItems: 'center',
      borderBottomColor:'#ccc',
      borderBottomEndRadius:3,
      borderBottomWidth:1,
   },
   title: {
    color: '#000000',
    fontSize:18,
    fontStyle:'normal',
    fontFamily:'arial',
    fontWeight:'bold'
 },
 known_for1:
 {
    color:'#000000',
    fontSize:16,
 },
 known_for2:
 {
    color:'#0099ff',
    fontSize:16,
 },
   text: {
      color: '#4d4d4d',
      textAlign:'justify',
      fontSize:16,
      marginTop:5
   },
   imagestyle:
   {
      width:'100%',
      height:200, 
      margin:4,
      borderColor:'#8c8c8c',
      borderRadius:6,
      borderWidth:1
   }
});