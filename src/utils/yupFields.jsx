import * as yup from 'yup';

const fieldsScheme = yup.object().shape({
	email: yup
		.string()
		.matches(
			/^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
			'Неверный email. Обязателен символ @ и указание домена.',
		)
		.max(20, 'Длина email должна быть не больше 20 символов.'),
	password: yup
		.string()
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
			'Неверный пароль. Необходимы хотя бы одна цифра, строчная буква, заглавная буква и специальный символ (@-+#&%); Минимальная длина - 8 символов.',
		),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Пароли должны совпадать.'),
});

export { fieldsScheme };
