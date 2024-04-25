import * as yup from 'yup';

export const schema = yup.object().shape({
    nombre: yup.string().required().min(2, "se requiere almenos un caracter"),
    apellido: yup.string().required().min(2, "se requiere almenos un caracter"),
    telefono: yup.number().min(1, "Debe agregar un número").required(),
    direccion: yup.string().required().min(2, "se requiere almenos un caracter")
})