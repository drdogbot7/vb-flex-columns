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
const { __ } = wp.i18n; // '@wordpress/i18n';
const { Component, Fragment } = wp.element;
const { registerBlockType } = wp.blocks;

const { Toolbar, ToggleControl, SelectControl, PanelBody } = wp.components;

const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;

registerBlockType( 'vb/flex-img', {
	title: __( 'Flex Image' ),
	icon: 'image',
	category: 'common',
	keywords: [ __( 'Image' ), __( 'Flexbox' ), __( 'Columns' ) ],
	parent: [ 'vb/flex-row' ],
	attributes: {
		placeholder: {
			type: 'string',
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
		objectFit: {
			type: 'string',
			default: 'cover',
		},
	},

	edit: function( props ) {
		const { attributes, setAttributes } = props;

		const {
			width,
			widthSm,
			widthMd,
			objectFit,
		} = attributes;

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title={ __( 'Image Settings' ) }>
						<SelectControl
							label={ __( 'Image Fit' ) }
							value={ objectFit }
							onChange={ selection =>
								setAttributes( {
									objectFit: selection,
								} )
							}
							options={ [
								{ value: null, label: 'None' },
								{ value: 'cover', label: 'Cover' },
								{ value: 'contain', label: 'Contain' },
								{ value: 'scale-down', label: 'Scale Down' },
								{ value: 'fill', label: 'Fill' },
							] }
						/>
					</PanelBody>
					<PanelBody title={ __( 'Column Settings' ) } initialOpen={ true }>
						<SelectControl
							label={ __( 'Mobile Width' ) }
							value={ width }
							onChange={ selection =>
								setAttributes( {
									width: selection,
								} )
							}
							options={ [
								{ value: null, label: 'Not Set' },
								{ value: 'cover', label: 'Auto' },
								{ value: '1/4', label: 'One Fourth' },
								{ value: '1/3', label: 'One Third' },
								{ value: '1/2', label: 'One Half' },
								{ value: '2/3', label: 'Two Thirds' },
								{ value: '3/4', label: 'Three Fourths' },
								{ value: 'full', label: 'Full' },
							] }
						/>
						<SelectControl
							label={ __( 'Tablet Width' ) }
							value={ widthSm }
							onChange={ selection =>
								setAttributes( {
									widthSm: selection,
								} )
							}
							options={ [
								{ value: null, label: 'Not Set' },
								{ value: 'auto', label: 'Auto' },
								{ value: '1/4', label: 'One Fourth' },
								{ value: '1/3', label: 'One Third' },
								{ value: '1/2', label: 'One Half' },
								{ value: '2/3', label: 'Two Thirds' },
								{ value: '3/4', label: 'Three Fourths' },
								{ value: 'full', label: 'Full' },
							] }
						/>
						<SelectControl
							label={ __( 'Desktop Width' ) }
							value={ widthMd }
							onChange={ selection =>
								setAttributes( {
									widthMd: selection,
								} )
							}
							options={ [
								{ value: null, label: 'Not Set' },
								{ value: 'auto', label: 'Auto' },
								{ value: '1/4', label: 'One Fourth' },
								{ value: '1/3', label: 'One Third' },
								{ value: '1/2', label: 'One Half' },
								{ value: '2/3', label: 'Two Thirds' },
								{ value: '3/4', label: 'Three Fourths' },
								{ value: 'full', label: 'Full' },
							] }
						/>
					</PanelBody>
				</InspectorControls>
				<div className={ classnames( 'vb-col' ) }>
					<div className={ classnames( 'vb-col__inner' ) }>
						<div className={ 'vb-col__image' }>
							<InnerBlocks
								template={ [ [ 'core/image' ] ] }
								templateLock={ true }
							/>
						</div>
					</div>
				</div>
			</Fragment>
		);
	},
	save( props ) {
		const {
			width,
			widthSm,
			widthMd,
			objectFit,
		} = props.attributes;

		const className = classnames(
			'vb-col',
			{ [ `vb-col--w-${ width }` ]: width },
			{ [ `sm:vb-col--w-${ widthSm }` ]: widthSm },
			{ [ `md:vb-col--w-${ widthMd }` ]: widthMd },
			{ [ `vb-col--fit-${ objectFit }` ]: objectFit }
		);
		const innerClassName = classnames( 'vb-col__inner' );

		return (
			<div className={ className ? className : undefined }>
				<div className={ innerClassName ? innerClassName : undefined }>
					<div className={ 'vb-col__image' }>
						<InnerBlocks.Content />
					</div>
				</div>
			</div>
		);
	},
} );
