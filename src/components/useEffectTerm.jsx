import { useEffect, useState } from 'react';

const UseEffectTerm = () => {
	const [term, setTerm] = useState('');

	useEffect(() => {
		console.log('test');
	}, [term]);

	const handleChange = (e) => {
		setTerm(e.target.value);
	};

	return (
		<>
			<h1>Term</h1>
			<input type='text' value={term} onChange={handleChange} />
		</>
	);
};
export default UseEffectTerm;
