import styles from './form.module.css';

export const FormLayout = ({
	email,
	login,
	password,
	onSubmit,
	updateState,
	clearState,
	loginError,
	onLoginChange,
	onBlur,
}) => {
	return (
		<div className={styles.formContainer}>
			<form onSubmit={onSubmit}>
				<input
					type="email"
					name="email"
					value={email}
					placeholder="mail"
					onChange={({ target }) => updateState('email', target.value)}
				/>
				<input
					type="text"
					name="login"
					value={login}
					placeholder="login"
					onChange={({ target }) => {
						updateState('login', target.value);
						onLoginChange(target.value);
					}}
					onBlur={onBlur}
				/>
				<input
					type="password"
					name="password"
					value={password}
					placeholder="password"
					onChange={({ target }) => updateState('password', target.value)}
				/>
				<button type="button" onClick={clearState}>
					Cancel
				</button>
				<button type="submit" disabled={loginError !== null}>
					Submit
				</button>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
			</form>
		</div>
	);
};
