import React from 'react';
import PropertySheet from './components/PropertySheet.jsx';

import PropertySheetLabelAlignments from './components/PropertySheetLabelAlignments.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this._handleValueItemActionInvoked =
			this._handleValueItemActionInvoked.bind(this);
	}

	_handleValueItemActionInvoked(item, itemIndex, event) {
		this._log('Item action invoked. Item was:');
		this._log(item);
		this._log('Item index was:');
		this._log(itemIndex);
	}

	_log(message) {
		console.log(message);
	}

	render() {
		return (
			<div className="lvd-property-sheet-demo-container">
				<PropertySheet 
					items={this._getSampleItems()}
					labelAlignment={PropertySheetLabelAlignments.right}
					underlineValueLinks={false}
					onValueItemActionInvoked={this._handleValueItemActionInvoked}
				/>
			</div>
		);
	}

	_getSampleItems() {
		return [
			{ Label: 'Test 1', Value: 'Value 1' },
			{ Label: 'Test 2', Value: 'Value 2', FormatAsCode: true },
			{ Label: 'Test 3', Value: 'Value 3', Url: 'http://alexboia.net' },
			{ Label: 'Test 4', Value: 'Value 4', Action: { Code: 'Edit', Icon: 'Edit' } },
			{ Label: 'Test 5', Value: 'Value 5' }
		];
	}
}