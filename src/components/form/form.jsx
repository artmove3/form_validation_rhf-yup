import { sendData } from '../../utils/formUtils';
import { FormLayout } from './formLayout';

export const Form = ({ useStore, loginError, setLoginError }) => {
	const { getState, updateState, clearState } = useStore();

	const onSubmit = (event) => {
		event.preventDefault();
		sendData(getState());
		clearState();
	};

	const onLoginChange = (value) => {
		let error = null;

		if (!/^[\w_]*$/.test(value)) {
			error =
				'Неверный логин. Допустимые символы - буквы, цифры и нижнее подчеркивание.';
		} else if (value.length > 20) {
			error = 'Неверный логин. Должно быть не больше 20 символов.';
		}

		setLoginError(error);
	};

	const onLoginBlur = () => {
		if (login.length < 3)
			setLoginError('Неверный логин. Должно быть не менее 3 символов.');
	};

	const { email, login, password } = getState();

	return (
		<FormLayout
			email={email}
			login={login}
			password={password}
			onSubmit={onSubmit}
			updateState={updateState}
			clearState={clearState}
			loginError={loginError}
			onLoginChange={onLoginChange}
			onBlur={onLoginBlur}
		/>
	);
};
