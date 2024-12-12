import React from 'react';
import { View, Alert, Share } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemedText } from "../ThemedText";
import { ExternalLink } from "../ExternalLink";
import { CustomButton } from "../CustomButton";

export default function CustomDrawerContent(props: any) {

    const { bottom } = useSafeAreaInsets();

    const shareApp = async () => {
        try {
            const res = await Share.share({});

            if(res.action === Share.sharedAction){
                if(res.activityType) {
                    // shared with activity type of res.activityType
                } else {
                    // shared
                }
            } else if (res.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <View style={{ flex: 1 }}>
            {/* This is supposed to be a wrapper for the drawer items */}
            <DrawerContentScrollView {...props}>
                {/* Here goes a logo ideally */}
                {/* <View style={[{ padding: 20 }]}>
                    <ThemedText type="default">Hola</ThemedText>
                </View> */}
                {/* This is supposed to fetch the rest of the navigation */}
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            {/* Custom links/code/crap */}
            <View style={{
                paddingHorizontal: 10,
                paddingBottom: bottom + 10
            }}>
                {/* Share App */}
                <CustomButton title="Share App" onPress={shareApp} lightColor="#000" darkColor="#000" />
                {/* Links */}
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                }}>
                    <ExternalLink href="https://play.google.com/store/apps/details?id=com.kirasiris.playitnowapp">
                        <ThemedText type="link">Rate App</ThemedText>
                    </ExternalLink>
                    <ExternalLink href="https://github.com/kirasiris/play-it-now">
                        <ThemedText type="link">GitHub</ThemedText>
                    </ExternalLink>
                </View>
                {/* Author */}
                <ThemedText type="default">{process.env.EXPO_PUBLIC_APP_VERSION} by
                    <ExternalLink href="https://kevinfonseca.vercel.app/">
                        <ThemedText type="link"> Kevin</ThemedText>
                    </ExternalLink>
                </ThemedText>
            </View>
        </View>
    )
}