/**
 * BLOCK: Flex Columns column
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */

const { __ } = wp.i18n;
const { InnerBlocks, getColorClassName } = wp.editor;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import edit from './column-edit';

const schema = {
	align: {
		type: 'string',
	},
	textAlign: {
		type: 'string',
	},
	placeholder: {
		type: 'string',
	},
	textColor: {
		type: 'string',
	},
	customTextColor: {
		type: 'string',
	},
	backgroundColor: {
		type: 'string',
	},
	customBackgroundColor: {
		type: 'string',
	},
	direction: {
		type: 'string',
		enum: [ 'ltr', 'rtl' ],
	},
	width: {
		type: 'string',
		default: null,
	},
	widthSm: {
		type: 'string',
		default: null,
	},
	widthMd: {
		type: 'string',
		default: 'auto',
	},
	padding: {
		type: 'string',
		default: null,
	},
	verticalCenter: {
		type: 'boolean',
		default: false,
	},
};

export const name = 'vb/flex-column';

export const settings = {
	title: __( 'Flex Column' ),
	icon: 'screenoptions',
	category: 'common',
	keywords: [
		__( 'Vanilla Blocks' ),
		__( 'Flexbox' ),
		__( 'Columns' ),
	],
	parent: [ 'vb/flex-row' ],
	attributes: schema,
	edit,
	save( { attributes } ) {
		const {
			textAlign,
			backgroundColor,
			textColor,
			customBackgroundColor,
			customTextColor,
			width,
			widthSm,
			widthMd,
			padding,
			verticalCenter,
		} = attributes;

		const textClass = getColorClassName( 'color', textColor );
		const backgroundClass = getColorClassName( 'background-color', backgroundColor );
		const className = classnames(
			'vb-col',
			{ [ `vb-col--pad-${ padding }` ]: padding },
			{ [ `vb-col--w-${ width }` ]: width },
			{ [ `sm:vb-col--w-${ widthSm }` ]: widthSm },
			{ [ `md:vb-col--w-${ widthMd }` ]: widthMd },
			{ 'vb-col--center': verticalCenter }
		);
		const innerClassName = classnames(
			'vb-col__inner',
			{
				'has-text-color': textColor || customTextColor,
				'has-background': backgroundColor || customBackgroundColor,
				[ textClass ]: textClass,
				[ backgroundClass ]: backgroundClass,
			}
		);

		const styles = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			textAlign: textAlign,
		};

		return (
			<div className={ className ? className : undefined } >
				<div
					className={ innerClassName ? innerClassName : undefined }
					style={ styles }
				>
					<div className={ 'vb-col__content' }>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
};

registerBlockType( name, settings );
