import { useState, useEffect } from 'react';
import getDataWiki from '../helpers/wikiApi';

const TestFinal = () => {
	const [datas, setData] = useState([]);

	useEffect(() => {
		const response = async () => {
			const data = await getDataWiki();

			setData(data.query.search);
		};
		response();

		// getDataWiki().then((response) => setData(response));
	}, []);

	return (
		<>
			{datas.map((data) => {
				console.log(data);
				return (
					<li key={data.pageId}>
						<span dangerouslySetInnerHTML={{ __html: data.snippet }}></span>
					</li>
				);
			})}
		</>
	);
};
export default TestFinal;
