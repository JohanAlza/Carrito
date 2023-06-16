import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Register.styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { RegisterForm } from "../../../components/RegisterForm";


const Register = () => {
    return (
        <KeyboardAwareScrollView>
            <Text style={styles.title}> REGISTRARSE </Text>

            <View style={styles.content}>

                <RegisterForm />

            </View>

        </KeyboardAwareScrollView>
    )
};

export { Register };
