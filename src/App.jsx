import React from 'react';
import PropertySheet from './components/PropertySheet.jsx';

import PropertySheetLabelAlignments from './components/PropertySheetLabelAlignments.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="lvd-property-sheet-demo-container">
				<PropertySheet 
					items={this._getSampleItems()}
					labelAlignment={PropertySheetLabelAlignments.right}
				/>
			</div>
		);
	}

	_getSampleItems() {
		return [
			{ Label: 'Test 1', Value: 'Value 1' },
			{ Label: 'Test 2', Value: 'Value 2', FormatAsCode: true },
			{ Label: 'Test 3', Value: 'Value 3' },
			{ Label: 'Test 4', Value: 'Value 4' },
			{ Label: 'Test 5', Value: 'Value 5' }
		];
	}
}