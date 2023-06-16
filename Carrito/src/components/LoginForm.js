import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import { initialValues, validationSchema } from "./LoginForm.data";
import { useNavigation } from "@react-navigation/native";
import { ListProducts } from "../screens/ListProducts";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Register } from "../screens/account/register/Register";

const LoginForm = () => {
    const navigation = useNavigation();


    const goToRegister = () => {
        navigation.navigate(Register)
    };




    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {

            try {
                const auth = getAuth();
                await signInWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                navigation.navigate(ListProducts);
                Toast.show({
                    type: "success",
                    position: "top",
                    text1: "Sesión Iniciada",
                    text2: "Bienvenido"
                })

            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Datos Incorrectos",
                    text2: "Intente de Nuevo"
                })
            }
        },
    });

    const showHiddenPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <View style={styles.content}>

            <Input placeholder="Correo Electronico"
                containerStyle={styles.input}
                rightIcon={
                    <Icon type="evilicon" name="envelope" iconStyle={styles.icon} />}
                onChangeText={(text) => formik.setFieldValue("email", text)}
                errorMessage={formik.errors.email}
            />

            <Input placeholder="Contraseña"
                containerStyle={styles.input}
                secureTextEntry={showPassword ? false : true}
                rightIcon={<Icon type="evilicon" name={showPassword ? "close-o" : "eye"} iconStyle={styles.icon}
                    onPress={showHiddenPassword}
                />}
                onChangeText={(text) => formik.setFieldValue("password", text)}
                errorMessage={formik.errors.password}

            />



            <Button title="Long In"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnRegister}
                onPress={formik.handleSubmit}

            />

            <Button title="Sing Up"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnRegister}
                onPress={goToRegister}
            />




        </View>

    )

};

export { LoginForm };