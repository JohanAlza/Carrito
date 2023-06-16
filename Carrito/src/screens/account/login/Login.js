import React from "react";
import { View } from "react-native";
import { Text, Image } from "@rneui/themed"
import { styles } from "./Login.styles";
import { LoginForm } from "../../../components/LoginForm";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Login = () => {


        return (

                <KeyboardAwareScrollView>
                        <Image source={require("../../../../assets/imagenes/asdsadsa.jpg")}
                                style={styles.image} />
                        <Text style={styles.title}> LOGIN </Text>

                        <View style={styles.content}>

                                <LoginForm />

                        </View>

                </KeyboardAwareScrollView>
        )
};



export { Login };