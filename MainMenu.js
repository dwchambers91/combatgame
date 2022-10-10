import React from "react";
import {Button} from "react-native";
import Text from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedText";
import View from "react-native-web/dist/vendor/react-native/Animated/components/AnimatedView";

class MainMenu extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Profile Screen</Text>
                <Button
                    title="Go to Profile"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}