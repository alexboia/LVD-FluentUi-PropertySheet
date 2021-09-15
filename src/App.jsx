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
		this._log(`Item index was: ${itemIndex}`);
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
			{ label: 'Test 1', value: 'Value 1' },
			{ label: 'Test 2', value: 'Value 2', formatAsCode: true },
			{ label: 'Test 3', value: 'Value 3', url: 'http://alexboia.net' },
			{ label: 'Test 4', value: 'Value 4', formatAsCode: true, action: { code: 'Edit', icon: 'Edit' } },
			{ label: 'Test 5', value: 'Value 5 - Value that is rather long-ish, even if I say so myself.' },
			{ label: 'Test 6 - label that is rather long-ish', value: 'Value 6', formatAsCode: false, action: { code: 'delete', icon: 'Delete' } }
		];
	}
}