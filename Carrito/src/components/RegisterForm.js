import React, { useState } from "react";
import { View, Text } from "react-native";
import { Input, Icon, Button } from "@rneui/themed";
import { useFormik } from "formik";
import { styles } from "./RegisterForm.styles";
import { initialValues } from "./RegisterForm.data";
import { validationSchema } from "./RegisterForm.data";
import { useNavigation } from "@react-navigation/native";
import { ListProducts } from "../screens/ListProducts";
import { Toast } from "react-native-toast-message/lib/src/Toast";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Login } from "../screens/account/login/Login";

const RegisterForm = () => {
    const navigation = useNavigation();


    const goToLogin = () => {
        navigation.navigate(Login)
    };




    const [showPassword, setShowPassword] = useState(false);

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: validationSchema(),
        validateOnChange: false,
        onSubmit: async (formValue) => {

            try {
                const auth = getAuth();
                await createUserWithEmailAndPassword(
                    auth,
                    formValue.email,
                    formValue.password
                );
                navigation.navigate(ListProducts);
                Toast.show({
                    type: "success",
                    position: "top",
                    text1: "Registro Correcto",
                    text2: "Bienvenido"
                })
            } catch (error) {
                Toast.show({
                    type: "error",
                    position: "bottom",
                    text1: "Error al Registrarse",
                    text2: "Intentalo de nuevo"
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

            <Input placeholder="Confirmar Contraseña"
                containerStyle={styles.input}
                secureTextEntry={showPassword ? false : true}
                rightIcon={<Icon type="evilicon" name={showPassword ? "close-o" : "eye"} iconStyle={styles.icon}
                    onPress={showHiddenPassword}
                />}
                onChangeText={(text) => formik.setFieldValue("confirmPassword", text)}
                errorMessage={formik.errors.confirmPassword}

            />

            <Button title="Sing Up"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btnRegister}
                onPress={formik.handleSubmit}
            />
            <Text style={styles.textCuenta}>¿Ya tienes una cuenta? <Text style={styles.btnLogin} onPress={goToLogin}>Log In</Text> </Text>
        </View>

    )

};

export { RegisterForm };