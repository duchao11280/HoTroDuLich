import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, Alert, Animated } from 'react-native';

const RightActions = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-100, 0],
      outputRange: [0.7, 0]
    })
    return (
        <Pressable onPress={() => Alert.alert(
            'Cảnh Báo',
            'Bạn có chắc muốn vô hiệu hóa tài khoản',
            [
                {
                    text:'Đồng ý', onPress:()=>{}
                },
                {
                    text: 'Hủy bỏ', onPress: ()=>{}
                }
            ]
            )}>
          <View
            style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center',
                marginTop:10,
                borderRadius:15, }}>
            <Text
              style={{
                color: 'white',
                paddingHorizontal: 10,

                fontWeight: '600',
              }}>
              Vô hiệu hóa
            </Text>
          </View>
        </Pressable>
    )
}
export default RightActions;