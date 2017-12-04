import React from 'react';

	class List extends React.Component { 
		render() {
		return (
			<div>
				<h2 className="result"></h2>
				<h2>Must use Passing props, .map(), .setState(), .bind(), LifeCycles, Styling, Initialize State</h2>
				<h2>O-Ren Ishii,   +8174-788-1012,   191-1014, Nishishinjuku Shinjuku Nomurabiru(45-kai), Shinjuku-ku, Tokyo</h2>
				<h2>Vernita Green, (323)-280-4794,   1768 Norman Street, Los Angeles, CA 90017</h2>
				<h2>Budd,          (626)-292-1202,   187 Fulsom Avenue, San Gabriel, CA 91775</h2>
				<h2>Elle Driver,   (949)-569-4371,   1 East Bayberry Street, Hanford, CA 93230</h2>
				<h2>Bill,          (413)-512-7496,   582 Creek Lane, El Cajon, CA 92021</h2>
			</div>
		)
		}
	}

export default List;