import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

//screen
import Home from '../Screen/User/Home'
import Receipt from '../Screen/User/Receipt'
import Notification from '../Screen/User/Notification'
import Information from '../Screen/User/Information'
// import HomeUserStack from '../Config/HomeUserStack'


const HomeRoute = () => <Home />;

const ReceiptRoute = () => <Receipt />;

const NotificationRoute = () => <Notification />;

const InformationRoute = () => <Information />;


const BottomNaviUser = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'Home', title: 'Trang Chủ', icon: 'home' },
        { key: 'Notification', title: 'Thông báo', icon: 'bell' },
        { key: 'Receipt', title: 'Hóa đơn', icon: 'file-document-edit-outline' },
        { key: 'Infomation', title: 'Thông tin', icon: 'view-headline' },//Dùng MaterialCommunityIcons
    ]);

    const renderScene = BottomNavigation.SceneMap({
        Home: HomeRoute,
        Notification: NotificationRoute,
        Receipt: ReceiptRoute,
        Infomation: InformationRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default BottomNaviUser;