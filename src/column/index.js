/**
 * BLOCK: Flex Columns column
 *
 * Registering a basic block with Gutenberg.
 * Simple block, renders and saves the same content without any interactivity.
 */

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import edit from './edit.js';
import save from './save.js';
import { name, category, attributes } from './block.json';

export const settings = {
	title: __( 'Flex Column' ),
	icon: 'screenoptions',
	category,
	keywords: [
		__( 'Vanilla Blocks' ),
		__( 'Flexbox' ),
		__( 'Columns' ),
	],
	parent: [ 'vb/flex-row' ],
	attributes,
	edit,
	save,
};

registerBlockType( name, settings );
