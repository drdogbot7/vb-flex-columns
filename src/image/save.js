/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.editor;

const save = props => {
	const { width, widthSm, widthMd, objectFit } = props.attributes;

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
};

export default save;
