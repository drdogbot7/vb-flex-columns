/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks, getColorClassName } = wp.editor;

const save = ( { attributes } ) => {
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
	const backgroundClass = getColorClassName(
		'background-color',
		backgroundColor
	);
	const className = classnames(
		'vb-col',
		{ [ `vb-col--pad-${ padding }` ]: padding },
		{ [ `vb-col--w-${ width }` ]: width },
		{ [ `sm:vb-col--w-${ widthSm }` ]: widthSm },
		{ [ `md:vb-col--w-${ widthMd }` ]: widthMd },
		{ 'vb-col--center': verticalCenter }
	);
	const innerClassName = classnames( 'vb-col__inner', {
		'has-text-color': textColor || customTextColor,
		'has-background': backgroundColor || customBackgroundColor,
		[ textClass ]: textClass,
		[ backgroundClass ]: backgroundClass,
	} );

	const styles = {
		backgroundColor: backgroundClass ? undefined : customBackgroundColor,
		color: textClass ? undefined : customTextColor,
		textAlign: textAlign,
	};

	return (
		<div className={ className ? className : undefined }>
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
};

export default save;
