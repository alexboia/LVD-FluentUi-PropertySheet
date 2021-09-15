import React from 'react';
import PropTypes from 'prop-types';

import { 
	Link, 
	IconButton 
} from '@fluentui/react';

import PropertySheetLabelAlignments from './PropertySheetLabelAlignments';

export default class PropertySheet extends React.Component {
	constructor(props) {
		super(props);

		this._defaultLabelRenderer = 
			this._defaultLabelRenderer.bind(this);
		this._defaultValueRenderer = 
			this._defaultValueRenderer.bind(this);
	}
	
	render() {
		return (
			<div className={this._computeContainerClassName()} style={this._getStyle()}>
				{this._renderItems()}
			</div>
		);
	}

	_getStyle() {
		return this.props.style || {};
	}

	_computeContainerClassName() {
		let containerClassName = [ 
			'ms-Grid',
			'lvd-propertysheet-key-value-listing-container'
		];
		
		if (this._isLabelOnly()) {
			containerClassName.push('lvd-propertysheet-key-value-listing-container-label-only');
		} else {
			containerClassName.push('lvd-propertysheet-key-value-listing-container-with-value');
		}

		const className = this._getClassName();
		if (!!className) {
			containerClassName.push(className);
		}

		return containerClassName.join(' ');
	}

	_isLabelOnly() {
		return !!this.props.labelOnly;
	}

	_getClassName() {
		return this.props.className || null;
	}

	_renderItems() {
		let itemIndex = 0;
		const items = this._getItems();

		return items.map(item => {
			return this._renderItem(item, itemIndex++);
		});	
	}

	_getItems() {
		return this.props.items || [];
	}

	_computeItemKey(itemIndex) {
		return `lvd-propertysheet-item-${itemIndex}`;
	}

	_renderItem(item, itemIndex) {
		const labelOnly = this._isLabelOnly();
		const itemKey = this._computeItemKey(itemIndex);

		return (
			<div key={itemKey} className={this._computeItemContainerClassName(itemIndex)}>
				{this._renderItemLabel(item, itemIndex)}
				{!labelOnly && this._renderItemValue(item, itemIndex)}
				
			</div>
		);
	}

	_computeItemContainerClassName(itemIndex) {
		let itemContainerClassName = [ 
			'ms-Grid-row', 
			'lvd-propertysheet-key-value-item-container' 
		];

		if (itemIndex % 2 == 0) {
			itemContainerClassName.push('ms-bgColor-neutralQuaternaryAlt');
		}

		return itemContainerClassName.join(' ');
	}

	_renderItemLabel(item, itemIndex) {
		const renderer = this._getItemLabelRenderer();
		const labelAlignment = this._getLabelAlignment();

		return (
			<div className={this._computeLabelClassName(labelAlignment)}>
				{renderer(item, itemIndex)}
			</div>
		);
	}

	_getItemLabelRenderer() {
		return this.props.onRenderLabel || this._defaultLabelRenderer;
	}

	_defaultLabelRenderer(item, itemIndex) {
		return item.label;
	}

	_getLabelAlignment() {
		return this.props.labelAlignment || PropertySheetLabelAlignments.right;
	}

	_computeLabelClassName(labelAlignment) {
		let labelClassName = [ 'ms-Grid-col' ];

		if (!this._isLabelOnly()) {	
			labelClassName.push('ms-sm6 ms-md6 ms-lg4');
		} else {
			labelClassName.push('ms-sm12');
		}

		labelClassName.push('lvd-propertysheet-key-value-item-key');
		labelClassName.push(this._computeLabelAlignmentClassName(labelAlignment));

		return labelClassName;
	}

	_computeLabelAlignmentClassName(labelAlignment) {
		switch (labelAlignment) {
			case PropertySheetLabelAlignments.left: 
				return 'lvd-propertysheet-align-left';
			case PropertySheetLabelAlignments.center: 
				return 'lvd-propertysheet-align-center';
			default:
				return 'lvd-propertysheet-align-right';
		}
	}

	_renderItemValue(item, itemIndex) {
		const renderer = this._getItemValueRenderer();
		return (
			<div className="ms-Grid-col ms-sm6 ms-md6 ms-lg8 lvd-propertysheet-key-value-item-value">
				{renderer(item, itemIndex)}
			</div>
		);
	}

	_getItemValueRenderer() {
		return this.props.onRenderValue || this._defaultValueRenderer;
	}

	_defaultValueRenderer(item, itemIndex) {
		let renderedValue = null;
		const rawValue = item.value || null;

		if (this._hasUrl(item)) {
			renderedValue = (
				<Link key="lvd-propertysheet-item-value" href={item.url} underline={this._shouldUnderlineValueLinks()}>{rawValue}</Link>
			);
		} else {
			renderedValue = (
				<span key="lvd-propertysheet-item-value">{rawValue}</span>
			);
		}

		if (this._shouldFormatValuesAsCode()) {
			renderedValue = (<code>{renderedValue}</code>);
		}

		let renderedValueAction = null;
		if (this._hasAction(item)) {
			renderedValueAction = (
				<IconButton 
					key="lvd-propertysheet-item-value-action"
					iconProps={{ iconName: item.action.icon }} 
					onClick={this._handleItemValueActionClicked.bind(this, item, itemIndex)}
				/>
			);
		}

		const output = [renderedValue];
		if (renderedValueAction != null) {
			output.push(renderedValueAction);
		}
		
		return output;
	}

	_hasUrl(item) {
		return item.hasOwnProperty('url') && !!item.url;
	}

	_shouldUnderlineValueLinks() {
		return !!this.props.underlineValueLinks;
	}

	_hasAction(item) {
		return item.hasOwnProperty('action') 
			&& !!item.action 
			&& !!item.action.code 
			&& !!item.action.icon;
	}

	_handleItemValueActionClicked(item, itemIndex, event) {
		if (this.props.onValueItemActionInvoked != null) {
			this.props.onValueItemActionInvoked(item, 
				itemIndex, 
				event);
		}
	}

	_shouldFormatValuesAsCode(item) {
		return item.hasOwnProperty('formatAsCode') && !!item.formatAsCode;
	}

	_renderClear() {
		return <div className="lvd-propertysheet-clear"></div>;
	}
}

PropertySheet.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	labelOnly: PropTypes.bool,
	labelAlignment: PropTypes.string,
	underlineValueLinks: PropTypes.bool,
	onRenderLabel: PropTypes.func,
	onRenderValue: PropTypes.func,
	onValueItemActionInvoked: PropTypes.func
};