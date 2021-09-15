# LVD-FluentUi-PropertySheet

A ReactJS property sheet component built using the [FluentUI library](https://github.com/microsoft/fluentui).
What this basically does is display key-value data, with some additional features:

- allow value rendering as a `<code>` fragment;
- supports value rendering as a link, by providing an url property;
- supports rendering an action icon button next to the value, by providing an action code and icon;
- supports custom label rendering;
- supports configurable label alignment;
- supports custom value rendering.

<p align="left">
	<img align="center" src="https://raw.githubusercontent.com/alexboia/LVD-FluentUi-PropertySheet/main/docs/Capture.png" style="margin-bottom: 20px; margin-right: 20px; border-radius: 5px;" />
</p>

## Installation
<a name="c-installation"></a>

`npm install --save lvd-fluentui-propertysheet`

## Demo
<a name="c-demo"></a>

The `demo` directory contains [a compiled and ready-to-run example](https://github.com/alexboia/LVD-FluentUi-PropertySheet/tree/main/demo). Just open up the index.html file.

## Basic Usage
<a name="c-basic-usage"></a>

```javascript
import React from 'react';
import { PropertySheet, PropertySheetLabelAlignments } from 'lvd-fluentui-propertysheet';

class PropertySheetSamplePage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="lvd-property-sheet-demo-container">
				<PropertySheet 
					items={this._getSampleItems()}
					labelAlignment={PropertySheetLabelAlignments.right}
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
			{ label: 'Test 4', value: 'Value 4', action: { code: 'Edit', icon: 'Edit' } },
			{ label: 'Test 5', value: 'Value 5' }
		];
	}
}
```

You can find a full working example [here](https://github.com/alexboia/LVD-FluentUi-PropertySheet/blob/main/src/App.jsx).

## Styling
<a name="c-styling"></a>

You can either directly include the `dist/style.css` into your `html` web page or use the `@import` directive inside your stylesheet if building using webpack:

```css
@import '~lvd-fluentui-propertysheet/dist/style.css';
```

Also see [the component itself](https://github.com/alexboia/LVD-FluentUi-PropertySheet/blob/main/src/components/PropertySheet.jsx).


## Building
<a name="c-building"></a>

To build the demo application: 

```
npm run build-app
```

To build the library: 

```
npm run build-dist
```

To build both in one sitting: 

```
npm run build
```

## Customization Options
<a name="c-customization"></a>

| What | Prop Name | Type | Notes |
| --- | --- | --- | --- |
| Set items | `items` | `Property Sheet Data Item Object` | See below. Mandatory. |
| Set additional container css class name | `className` | `string` | Defaults to `null`. |
| Set additional inline css style properties | `style` | `object` | Key-value plain javascript object. Defaults to `{}`. |
| Only show label fields | `labelOnly` | `boolean` | Defaults to false. |
| Display underlines for values that are rendered as links | `underlineValueLinks` | `boolean` | Defaults to `false`. |
| Provide custom label renderer | `onRenderLabel` | `(item: Property Sheet Data Item Object, itemIndex: number) => JSX.Element` | Defaults to `null`. |
| Provide custom value renderer | `onRenderValue` | `(item: Property Sheet Data Item Object, itemIndex: number) => JSX.Element` | Defaults to `null`. |

### Property Sheet Data Item Object

Each item must be a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `label` | `string` | Mandatory. |
| `value` | `string` | Optional. |
| `formatAsCode` | `boolean` | Render this item as a code block. Optional. Defaults to `false` |
| `url` | `string` | Render this item as a link with this url. Optional. Defaults to `null` |
| `action` | `Property Sheet Data Item Action Object` | Action descriptor for when an action icon button needs to be rendered next to the raw value. See below. Optional. Defaults to `null`. |

### Property Sheet Data Item Action Object

Each item action descriptor must be a plain javascript object with the following properties:

| Name | Type | Notes |
| --- | --- | --- |
| `code` | `string` | Mandatory. |
| `icon` | `string` | Must be a valid FluentUi icon name. Mandatory. |

## Events
<a name="c-events"></a>

| Event | Prop Name | Arguments | Notes |
| --- | --- | --- | --- |
| Item action invoked | `onValueItemActionInvoked` | `(item: Property Sheet Data Item Object, itemIndex: number, event: React.MouseEvent)` | Triggered when the action button related to a value is clicked. |

## Changelog
<a name="c-changelog"></a>

### Version 0.0.1

- First tracked version.

## Donate
<a name="c-donate"></a>

I put some of my free time into developing and maintaining this plugin.
If helped you in your projects and you are happy with it, you can...

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/Q5Q01KGLM)