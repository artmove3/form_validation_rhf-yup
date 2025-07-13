import { fieldsScheme } from '../../utils/yupFields';
import { useForm } from 'react-hook-form';
import { FormLayout } from './formLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRef, useState } from 'react';

export const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
		resolver: yupResolver(fieldsScheme),
		mode: 'onChange',
	});
	const [comparedPassword, setComparedPassword] = useState('');
	const emailError = errors.email?.message;
	const passwordError = errors.password?.message;
	const confirmPasswordError = errors.confirmPassword?.message;

	const onSubmit = (formData) => {
		console.log(formData);
		setComparedPassword('');
	};

	const submitButtonRef = useRef(null);

	return (
		<FormLayout
			register={register}
			handleSubmit={handleSubmit}
			onSubmit={onSubmit}
			submitButtonRef={submitButtonRef}
			emailError={emailError}
			passwordError={passwordError}
			confirmPasswordError={confirmPasswordError}
			comparedPassword={comparedPassword}
			setComparedPassword={setComparedPassword}
		/>
	);
};
