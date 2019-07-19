/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __ } = wp.i18n; // '@wordpress/i18n';
const { Fragment } = wp.element;

const { SelectControl, PanelBody } = wp.components;

const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;

const edit = function( props ) {
	const { attributes, setAttributes } = props;
	const { width, widthSm, widthMd, objectFit } = attributes;

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
						<InnerBlocks template={ [ [ 'core/image' ] ] } templateLock={ true } />
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default edit;
