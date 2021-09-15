import { IStyle } from '@fluentui/react';
import * as React from 'react';

export interface IPropertySheetDataItemAction {
	code: string,
	icon: string
}

export interface IPropertySheetDataItem {
	label: string,
	value: string,
	formatAsCode?: boolean,
	url?: string,
	action?: IPropertySheetDataItemAction
}

export enum PropertySheetLabelAlignments {
	left = 'left',
	right = 'right',
	center = 'center'
}

export interface IPropertySheetProps {
	className?: string;
	style?: React.CSSProperties;
	items: IPropertySheetDataItem[];
	labelOnly: boolean;
	underlineValueLinks: boolean;
	labelAlignment: PropertySheetLabelAlignments;
	onRenderLabel: (item: IPropertySheetDataItem, itemIndex: number) => JSX.Element | null;
	onRenderValue: (item: IPropertySheetDataItem, itemIndex: number) => JSX.Element | null;
	onValueItemActionInvoked: (item: IPropertySheetDataItem, itemIndex: number, event: React.MouseEvent<HTMLElement>) => JSX.Element | null;
}

export declare class PropertySheet extends React.Component<IPropertySheetProps, {}> {
	constructor(props: IPropertySheetProps);
	render(): JSX.Element;
}