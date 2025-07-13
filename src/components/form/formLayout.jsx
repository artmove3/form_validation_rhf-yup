import styles from './form.module.css';
export const FormLayout = ({
	register,
	handleSubmit,
	onSubmit,
	submitButtonRef,
	emailError,
	passwordError,
	confirmPasswordError,
	comparedPassword,
	setComparedPassword,
}) => {
	return (
		<div className={styles.formContainer}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					name="email"
					placeholder="mail"
					{...register('email')}
				/>
				<input
					type="password"
					name="password"
					placeholder="password"
					{...register('password', {
						onBlur: ({ target }) => {
							setComparedPassword(target.value);
						},
					})}
				/>
				<input
					type="password"
					name="confirmPassword"
					placeholder="confirm password"
					{...register('confirmPassword', {
						onChange: ({ target }) => {
							if (target.value === comparedPassword)
								// aaaaaaaa какая же грязь
								setTimeout(() => {
									submitButtonRef.current.focus();
								}, 0);
						},
					})}
				/>
				<button
					type="submit"
					ref={submitButtonRef}
					disabled={!!emailError && !!passwordError && !!confirmPasswordError}
				>
					Register
				</button>
				{emailError && <div className={styles.errorLabel}>{emailError}</div>}
				{passwordError && (
					<div className={styles.errorLabel}>{passwordError}</div>
				)}
				{confirmPasswordError && (
					<div className={styles.errorLabel}>{confirmPasswordError}</div>
				)}
			</form>
		</div>
	);
};
