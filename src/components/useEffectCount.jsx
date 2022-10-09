import { useEffect, useState } from 'react';

const UseEffectCount = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		console.log('test');
	}, [count]);

	return (
		<>
			<h1>Test</h1>
			<h2>{count}</h2>
			<button onClick={() => setCount(count + 1)}>Click</button>
		</>
	);
};
export default UseEffectCount;
