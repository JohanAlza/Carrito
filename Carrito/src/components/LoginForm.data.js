import * as Yup from "yup";

export const initialValues = () => {
    return {
        email: "",
        password: "",

    }
};

export const validationSchema = () => {

    return Yup.object({
        email: Yup.string().email("Correo Incorrecto").required("Obligatorio"),
        password: Yup.string().required("Obligatorio"),

    })
}