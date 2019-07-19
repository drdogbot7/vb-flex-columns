/**
 * BLOCK: Flex Columns column
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // '@wordpress/i18n';
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import edit from './edit.js';
import save from './save.js';
import { name, category, attributes } from './block.json';

registerBlockType( name, {
	title: __( 'Flex Image' ),
	icon: 'format-image',
	category,
	keywords: [ __( 'Image' ), __( 'Flexbox' ), __( 'Columns' ) ],
	parent: [ 'vb/flex-row' ],
	attributes,
	edit,
	save,
} );
