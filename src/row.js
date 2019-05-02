/**
 * BLOCK: Flex Row
 *
 * Flexbox container block for a row of items
 */

/**
 * External dependencies
 */
import classnames from 'classnames';

//  Import CSS.
import './style.scss';
import './editor.scss';

const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks
const {	Fragment } = wp.element;
const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;
const {
	SelectControl,
	ToggleControl,
} = wp.components;

/**
 * Register: aa Gutenberg Block.
 *
 * Registers a new block provided a unique name and an object defining its
 * behavior. Once registered, the block is made editor as an option to any
 * editor interface where blocks are implemented.
 *
 * @link https://wordpress.org/gutenberg/handbook/block-api/
 * @param  {string}   name     Block name.
 * @param  {Object}   settings Block settings.
 * @return {?WPBlock}          The block, if it has been successfully
 *                             registered; otherwise `undefined`.
 */
registerBlockType( 'vb/flex-row', {
	title: __( 'Flex Row' ),
	icon: 'screenoptions',
	category: 'common',
	keywords: [
		__( 'Vanilla Blocks' ),
		__( 'Flexbox' ),
		__( 'Columns' ),
	],
	attributes: {
		align: {
			type: 'string',
			default: 'full',
		},
		gutters: {
			type: 'string',
			default: 'sm',
		},
		centerColumns: {
			type: 'boolean',
			default: false,			
		},
	},

	/**
	 * The edit function describes the structure of your block in the context of the editor.
	 * This represents what the editor will render when the block is used.
	 *
	 * The "edit" property must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	edit: function( props ) {
		// Creates a <p class='wp-block-cgb-block-peoples-tax-blocks'></p>.
		const ALLOWED_BLOCKS = [ 'vb/flex-column' ];
		const TEMPLATE = [ [ 'vb/flex-column' ], [ 'vb/flex-column' ] ];
		const {
			setAttributes,
		} = props;
		const {
			gutters,
			centerColumns,
		} = props.attributes;

		return (
			<Fragment>
				<InspectorControls>
					<SelectControl
						label={ __( 'Gutters' ) }
						value={ gutters }
						onChange={ ( selection ) => setAttributes( {
							gutters: selection,
						} ) }
						options={ [
							{ value: '', label: 'No Gutters' },
							{ value: 'sm', label: 'Small Gutters' },
							{ value: 'lg', label: 'Large Gutters' },
						] }
					/>
					<ToggleControl
						label={ __( 'Center columns' ) }
						checked={ centerColumns }
						onChange={ () => setAttributes( {
							centerColumns: ! centerColumns,
						} ) }
					/>
				</InspectorControls>
				<div className={ 'vb-row' }>
					<InnerBlocks
						allowedBlocks={ ALLOWED_BLOCKS }
						template={ TEMPLATE }
					/>
				</div>
			</Fragment>
		);
	},

	/**
	 * The save function defines the way in which the different attributes should be combined
	 * into the final markup, which is then serialized by Gutenberg into post_content.
	 *
	 * The "save" property must be specified and must be a valid function.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/block-api/block-edit-save/
	 */
	save: function( props ) {
		const {
			gutters,
			centerColumns,
		} = props.attributes;

		return (
			<div className={ classnames( 
				'vb-row',
				{ [ `vb-row--gutters-${ gutters }` ]: gutters },
				{	'vb-row--center': centerColumns	}
			) }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );