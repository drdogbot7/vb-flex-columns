/**
 * BLOCK: Flex Row
 *
 * Flexbox container block for a row of items
 */

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const { registerBlockType } = wp.blocks; // Import registerBlockType() from wp.blocks

/**
 * Internal dependencies
 */
import edit from './edit.js';
import save from './save.js';
import { name, category, attributes } from './block.json';

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
registerBlockType( name, {
	title: __( 'Flex Row' ),
	icon: 'screenoptions',
	description: __( 'Flex container for columns' ),
	supports: {
		align: [ 'wide', 'full' ],
	},
	keywords: [ __( 'Vanilla Blocks' ), __( 'Flexbox' ), __( 'Columns' ) ],
	category,
	attributes,
	edit,
	save,
} );
