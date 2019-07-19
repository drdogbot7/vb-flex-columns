/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n; // Import __() from wp.i18n
const {	Fragment } = wp.element;
const {
	InnerBlocks,
	InspectorControls,
} = wp.editor;
const {
	SelectControl,
} = wp.components;

const edit = function( props ) {
	const ALLOWED_BLOCKS = [ 'vb/flex-column' ];
	const TEMPLATE = [ [ 'vb/flex-column' ], [ 'vb/flex-column' ] ];
	const { setAttributes } = props;
	const { gutters, justify } = props.attributes;

	return (
		<Fragment>
			<InspectorControls>
				<SelectControl
					label={ __( 'Gutters' ) }
					value={ gutters }
					onChange={ selection =>
						setAttributes( {
							gutters: selection,
						} )
					}
					options={ [
						{ value: '', label: 'No Gutters' },
						{ value: 'sm', label: 'Small Gutters' },
						{ value: 'lg', label: 'Large Gutters' },
					] }
				/>
				<SelectControl
					label={ __( 'Justify Columns' ) }
					value={ justify }
					onChange={ selection =>
						setAttributes( {
							justify: selection,
						} )
					}
					options={ [
						{ value: '', label: 'Not Set' },
						{ value: 'center', label: 'Center' },
						{ value: 'start', label: 'Start' },
						{ value: 'end', label: 'End' },
						{ value: 'between', label: 'Between' },
						{ value: 'around', label: 'Around' },
						{ value: 'evenly', label: 'Evenly' },
					] }
				/>
			</InspectorControls>
			<div className={ '' }>
				<InnerBlocks allowedBlocks={ ALLOWED_BLOCKS } template={ TEMPLATE } />
			</div>
		</Fragment>
	);
};

export default edit;
