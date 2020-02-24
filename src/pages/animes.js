import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import api from '../services/api';

export default class Animes extends Component{

    state = {
        animes:[],
        loading:true
    };

    componentDidMount(){
        this.getAnimes();
    }

    getAnimes = async () => {
        const response = await api.get("/top/anime/");

        const data = response.data.top;
        this.setState({animes:data, loading:false});   
          
    }

    goToDetails = (anime) =>{
        //alert("Clicou no "+anime.title);

    }

    render(){
        return(
            <ScrollView style={styles.container}>

                <ActivityIndicator style={{opacity: this.state.loading ? 1.0 : 0.0}} size="large" color="#ffffff" animating={true} />
                <FlatList
                    data={this.state.animes}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity style={styles.itemAnime} onPress={this.goToDetails(item)}>
                        
                                <View style={styles.itemAnime}>
                                
                                    <View style={styles.scoreView}>
                                        <Text style={styles.scoreText}>{item.score}</Text>
                                    </View>

                                    <Image 
                                    style={styles.imgAnime} 
                                    source={{uri:item.image_url}}/>

                                
                                </View>
                            </TouchableOpacity>

                        );
                    }}
                />
            </ScrollView>
        );
    } 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#070f31',
      paddingEnd: 8,
      paddingStart: 8,
    },
    itemAnime:{
        alignItems: "center",
        flexGrow: 1,
        flexBasis: 0,
        margin: 4,
        alignItems:'flex-start'
    },
    imgAnime:{ 
        width: 125,
        height: 180 ,
        borderRadius: 10,
    },
    scoreView:{
        backgroundColor: "#ffffff",
        padding: 8,
        borderRadius: 10,
        position:"absolute",
        zIndex: 1,
    },
    scoreText:{
        color: "#0E80FF",
    },
  });