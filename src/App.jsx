import React from 'react';
import PropertySheet from './components/PropertySheet.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="property-sheet-demo-container">
				<PropertySheet 
					
				/>
			</div>
		);
	}
}