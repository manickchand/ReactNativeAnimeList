import React, {Component} from 'react';
import { FlatList, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import api from '../services/api';

 export default class Animes extends Component{

    state = {
        animes:[],
        loading:true,
        page:0,
    };

    componentDidMount(){
        this.getAnimes(1);
    }

    getAnimes = async (page) => {

        this.setState({loading:true});

        const response = await api.get('/top/anime/'+page);

        const animes = response.data.top;
        this.setState({
            animes:[... this.state.animes, ... animes], 
            loading:false,
            page:page
        });   
          
    }

    loadMore = () =>{
        let page = this.state.page +1
        this.getAnimes(page)
    }

    goToDetails = (anime) =>{
        //alert("Clicou no "+anime.title);
    }
    
    render(){
        console.disableYellowBox = true;
        return(
            <View style={styles.container}>

                <View style={styles.sliderTopAnimes}>
                    <Image 
                        style={styles.ivSliderTop} 
                        source={{uri:'https://images7.alphacoders.com/611/thumb-350-611138.png'}}/>
                    <View style={styles.vwOpacityTop}>
                        <Text style={styles.tvTopNameAnime}>Dragon Ball Z</Text>
                    </View>
                </View>

                <Text style={styles.tvTopAnimes}>Top Animes</Text>

                {
                    //loadinsg
                    (this.state.loading) ? (
                        <ActivityIndicator size="large" color="#ffffff" animating={true} />
                    ) : (
                        null
                    )
                }

                <FlatList
                    data={this.state.animes}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    onEndReached={this.loadMore}
                    onEndReachedThreshold={0.4}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity 
                                style={styles.itemAnime}
                                onPress={()=>{}}>
                        
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
            </View>
        );
    } 
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#070f31',
      width: '100%'
    },
    sliderTopAnimes:{
        width: "100%",
        height:240,
    },
    ivSliderTop:{
        width:'100%',
        height:240,
        zIndex:1,
    },
    vwOpacityTop:{
        width:'100%',
        height:240,
        backgroundColor: 'rgba(3, 58, 116, 0.7)',
        position:"absolute",
        zIndex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    tvTopNameAnime:{
        color:"#ffffff",
        fontSize:24,
    },
    tvTopAnimes:{
        color:"#ffffff",
        marginStart:16,
        marginTop:16,
    },
    itemAnime:{
        alignItems: "center",
        flexGrow: 1,
        flexBasis: 0,
        margin: 4,
        alignItems:'flex-start',
        width: '100%',
    },
    imgAnime:{ 
        width: '100%',
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