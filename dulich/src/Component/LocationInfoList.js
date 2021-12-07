import * as React from 'react';
import { Text, View, StyleSheet,TextInput, Button,Image,TouchableOpacity, SafeAreaView } from 'react-native';

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

export default Location;