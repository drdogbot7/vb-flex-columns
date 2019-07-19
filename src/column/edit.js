/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { __, _x } = wp.i18n; // '@wordpress/i18n';
const { Component, Fragment } = wp.element;

const {
	Toolbar,
	withFallbackStyles,
	ToggleControl,
	SelectControl,
	PanelBody,
} = wp.components;

const {
	AlignmentToolbar,
	BlockControls,
	ContrastChecker,
	InnerBlocks,
	InspectorControls,
	PanelColorSettings,
	withColors,
} = wp.editor;

const { compose } = wp.compose;
const { withSelect } = wp.data;
const { getComputedStyle } = window;

const applyFallbackStyles = withFallbackStyles( ( node, ownProps ) => {
	const { textColor, backgroundColor } = ownProps.attributes;
	const editableNode = node.querySelector( '[contenteditable="true"]' );
	//verify if editableNode is available, before using getComputedStyle.
	const computedStyles = editableNode ? getComputedStyle( editableNode ) : null;
	return {
		fallbackBackgroundColor:
			backgroundColor || ! computedStyles ?
				undefined :
				computedStyles.backgroundColor,
		fallbackTextColor:
			textColor || ! computedStyles ? undefined : computedStyles.color,
	};
} );

class ColumnBlock extends Component {
	render() {
		const {
			attributes,
			setAttributes,
			backgroundColor,
			textColor,
			setBackgroundColor,
			setTextColor,
			fallbackBackgroundColor,
			fallbackTextColor,
			isRTL,
		} = this.props;

		const {
			textAlign,
			direction,
			width,
			widthSm,
			widthMd,
			padding,
			verticalCenter,
		} = attributes;

		return (
			<Fragment>
				<BlockControls>
					<AlignmentToolbar
						value={ textAlign }
						onChange={ nextAlign => {
							setAttributes( { textAlign: nextAlign } );
						} }
					/>
					{ isRTL && (
						<Toolbar
							controls={ [
								{
									icon: 'editor-ltr',
									title: _x( 'Left to right', 'editor button' ),
									isActive: direction === 'ltr',
									onClick() {
										const nextDirection =
											direction === 'ltr' ? undefined : 'ltr';
										setAttributes( {
											direction: nextDirection,
										} );
									},
								},
							] }
						/>
					) }
				</BlockControls>
				<InspectorControls>
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
								{ value: '', label: 'Not Set' },
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
							label={ __( 'Tablet Width' ) }
							value={ widthSm }
							onChange={ selection =>
								setAttributes( {
									widthSm: selection,
								} )
							}
							options={ [
								{ value: '', label: 'Not Set' },
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
								{ value: '', label: 'Not Set' },
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
							label={ __( 'Padding' ) }
							value={ padding }
							onChange={ selection =>
								setAttributes( {
									padding: selection,
								} )
							}
							options={ [
								{ value: '', label: 'None' },
								{ value: 'sm', label: 'Small' },
								{ value: 'lg', label: 'Large' },
							] }
						/>
						<ToggleControl
							label={ __( 'Center content vertically' ) }
							checked={ verticalCenter }
							onChange={ () =>
								setAttributes( {
									verticalCenter: ! verticalCenter,
								} )
							}
						/>
					</PanelBody>
					<PanelColorSettings
						title={ __( 'Color Settings' ) }
						colorSettings={ [
							{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __( 'Background Color' ),
							},
							{
								value: textColor.color,
								onChange: setTextColor,
								label: __( 'Text Color' ),
							},
						] }
					>
						<ContrastChecker
							{ ...{
								textColor: textColor.color,
								backgroundColor: backgroundColor.color,
								fallbackTextColor,
								fallbackBackgroundColor,
							} }
							fontSize={ '16px' }
						/>
					</PanelColorSettings>
				</InspectorControls>
				<div className="vb-helper">
					<b>FLEX COLUMN</b>
					<span className="vb-hint">Mobile: <i>{ width === '' ? 'Not Set' : width }</i></span>
					<span className="vb-hint">Tablet: <i>{ widthSm === '' ? 'Not Set' : widthSm }</i></span>
					<span className="vb-hint">Desktop: <i>{ widthMd === '' ? 'Not Set' : widthMd }</i></span>
				</div>
				<div
					className={ classnames( 'vb-col', {
						[ `vb-col--pad-${ padding }` ]: padding,
						'has-text-color': textColor.color,
						'has-background': backgroundColor.color,
						[ backgroundColor.class ]: backgroundColor.class,
						[ textColor.class ]: textColor.class,
					} ) }
				>
					<div
						className={ classnames( 'vb-col__inner', {
							'has-text-color': textColor.color,
							'has-background': backgroundColor.color,
							[ backgroundColor.class ]: backgroundColor.class,
							[ textColor.class ]: textColor.class,
						} ) }
						style={ {
							backgroundColor: backgroundColor.color,
							color: textColor.color,
							textAlign: textAlign,
							direction,
						} }
					>
						<div className={ 'vb-col__content' }>
							<InnerBlocks />
						</div>
					</div>
				</div>
			</Fragment>
		);
	}
}

const ColumnEdit = compose( [
	withColors( 'backgroundColor', { textColor: 'color' } ),
	applyFallbackStyles,
	withSelect( select => {
		const { getEditorSettings } = select( 'core/editor' );

		return {
			isRTL: getEditorSettings().isRTL,
		};
	} ),
] )( ColumnBlock );

export default ColumnEdit;
