//validationLogin.js
export function validationLogin (user) {
    let errors = {};
    if (!user.email) {
        errors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
        errors.email = 'El email no es valido';
    }
    if (!user.password) {
        errors.password = 'La contraseña es requerida';
    } else if (user.password.length < 6) {
        errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    return errors;
}