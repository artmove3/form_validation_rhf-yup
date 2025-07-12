import { useState } from 'react';
import Select from 'react-select';
import { Form } from './components/form/form';
import { productOptions, colorOptions } from './utils/selectUtils';

function App() {
	const initialState = {
		email: '',
		login: '',
		password: '',
	};

	const useStore = () => {
		const [state, setState] = useState(initialState);

		return {
			getState: () => state,
			updateState: (fieldName, newValue) => {
				setState({ ...state, [fieldName]: newValue });
			},
			clearState: () => setState(initialState),
		};
	};

	const [loginError, setLoginError] = useState(null);

	return (
		<>
			<Form
				useStore={useStore}
				loginError={loginError}
				setLoginError={setLoginError}
			/>
			<Select options={productOptions} defaultValue={productOptions[0]} />
			<Select
				isMulti
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[1]]}
			/>
		</>
	);
}

export default App;
