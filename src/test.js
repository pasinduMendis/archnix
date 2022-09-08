/* eslint-disable prettier/prettier */
// eslint-disable-next-line eol-last
import React from 'react';
import {StyleSheet,View,Text,Button,Image, ScrollView, Dimensions, Pressable} from 'react-native';

const Test = ()=>{
    const styles = StyleSheet.create({
        createTickets :{
            width: '100%',
            height: 'auto',
            fontFamily: "MuseoSansRounded",
            fontSize: 28,
            fontWeight: "900",
            fontStyle: "normal",
            lineHeight: 29,
            letterSpacing: 0,
            textAlign: "center",
            color: "#535c72",
            marginBottom: 20
          },
          imageContainer:{
            width:'100%',
          },
          image:{
            width:'100%',
            resizeMode:'contain',
            marginBottom:0,
            paddingBottom:0,
          },
          description: {
            width: '100%',
            height: 'auto',
            fontFamily: "MuseoSansRounded",
            fontSize: 18,
            fontWeight: "500",
            fontStyle: "normal",
            letterSpacing: 0,
            textAlign: "center",
            color: "#79829a",
            paddingHorizontal:"auto",
          },
          skip: {
            width: 78,
            height: 19,
            fontFamily: "MuseoSansRounded",
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 18.7,
            letterSpacing: 0,
            textAlign: "center",
            color: "#2b343d"
          },
          next : {
            width: '100%',
            height: 19,
            fontFamily: "MuseoSansRounded",
            fontSize: 18,
            fontWeight: "bold",
            fontStyle: "normal",
            lineHeight: 18.7,
            letterSpacing: 0,
            textAlign: "center",
            textAlignVertical:'center',
            color: "#ffffff",
          },
          rectangle7 : {
            width: '30%',
            alignItems:"center",
            height: 56,
            borderRadius: 30,
            shadowColor: "rgba(0, 0, 0, 0.15)",
            shadowOffset: {
              width: 0,
              height: 21
            },
            shadowRadius: 20,
            shadowOpacity: 1,
            justifyContent:'center',
            paddingVertical:12,
            
          },
          rectangle8 : {
            width: '40%',
            alignItems:"center",
            height: 56,
            borderRadius: 30,
            backgroundColor: "#f7922f",
            shadowColor: "rgba(0, 0, 0, 0.15)",
            shadowOffset: {
              width: 0,
              height: 21
            },
            shadowRadius: 20,
            shadowOpacity: 1,
            justifyContent:'center',
            paddingVertical:12,
            
          },
          backgroundStyle:{
            backgroundColor:'white',
          },
          container:{
            flexDirection:'row',
            width: '100%',
            marginTop:20,
            paddingHorizontal:"auto",
            justifyContent:'center',
            paddingBottom:80,
          },

    })
return(
    <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.backgroundStyle}>
    <View>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../images/onboard1.png')} />
        </View>
        
        <Text style={styles.createTickets}>Create Tickets</Text>
        <View>
        <Text style={styles.description}>keep with touch in all your </Text>
        <Text style={styles.description}>reaquest and issue same place. </Text>
        </View>

        <Text style={{...styles.description,paddingVertical:20,color:'#f7922f'}}>{'\u2B24'} {'\u2B24'} {'\u2B24'}</Text>

        <View style={styles.container}>
        <Pressable style={styles.rectangle7}><Text style={styles.skip}>Skip</Text></Pressable>
        <Pressable style={styles.rectangle8}><Text style={styles.next}>Next</Text></Pressable>
        </View>
        
    </View>
     </ScrollView>
)
}

export default Test;
