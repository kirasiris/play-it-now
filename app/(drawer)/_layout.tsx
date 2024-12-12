import { Drawer } from 'expo-router/drawer';
import { Link } from 'expo-router';
import { DrawerToggleButton } from '@react-navigation/drawer';
import { View } from 'react-native';
import styles from '@/assets/style';
import CustomDrawerContent from '@/components/navigation/CustomDrawerContent';

export default function DrawerLayout() {
    return (
        <Drawer
            screenOptions={{
                headerShown: true,
                // title: '',
                headerTitle: () => <Link href="/(drawer)/(tabs)/home">Home</Link>,
                headerTitleAlign: "center",
                headerLeft: () => <DrawerToggleButton tintColor='#FFF' />,
                headerRight: () =>  <View style={[styles.headerRightContainer]}>
                                        <Link href="/(drawer)/(tabs)/explore">Explore</Link>
                                    </View>,
                // headerStyle: {
                //     backgroundColor: "#0163D2"
                // },
                headerTintColor: "#FFF"
            }}
            drawerContent={CustomDrawerContent}
        >
            {/* HERE GOES THE SCREENS */}
        </Drawer>
    )
}