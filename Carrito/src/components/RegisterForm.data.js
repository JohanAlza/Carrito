import * as Yup from "yup";

export const initialValues = () => {
    return {
        email: "",
        password: "",
        confirmPassword: ""
    }
};

export const validationSchema = () => {

    return Yup.object({
        email: Yup.string().email("Correo Incorrecto").required("Obligatorio"),
        password: Yup.string().required("Obligatorio"),
        confirmPassword: Yup.string().required("Obligatorio").oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
    })
}