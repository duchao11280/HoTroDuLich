import * as React from 'react';
import { Text, ScrollView,
    View, StyleSheet,Image,TextInput, Dimensions } from 'react-native';



const width = Dimensions.get("window");
const height = width *100 /50;


const LinkImage = [
    '../../assets/Beach.png',
    '../../assets/Mountain.png',
    '../../assets/Waves.png',
    '../../assets/Cloud.png',
    '../../assets/Bus.png'
]
const SlideShow = () => {
    return(
        <View style={styles.BeachImage}>    
        {
            LinkImage.map((image, index) => (
                <Image 
                    key={index}
                    source = {{uri: image}}
                    style ={{width,height,resizeMode:'contain'}}

            />
            ))
        }
    </View>
    )
}






const styles = StyleSheet.create({
    BeachImage:{
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:30
        
    },
    imageSize:{
        height: 200,
        width: 350,
        resizeMode:'contain',
    },

})

export default SlideShow;
    

