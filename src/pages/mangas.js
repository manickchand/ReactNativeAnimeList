import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class Mangas extends Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style={styles.textTODO}>To Do</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#070f31',
      paddingEnd: 8,
      paddingStart: 8,
      alignItems: "center",
      justifyContent: "center",
    },
    textTODO:{
        color: "#ffffff",
        fontSize: 20
    }
  });