/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * Wordpress dependencies
 */
const { InnerBlocks } = wp.editor;

const save = function( props ) {
	const { gutters, justify } = props.attributes;

	return (
		<div
			className={ classnames(
				'vb-row',
				{ [ `vb-row--gutters-${ gutters }` ]: gutters },
				{ [ `vb-row--justify-${ justify }` ]: justify }
			) }
		>
			<InnerBlocks.Content />
		</div>
	);
};

export default save;
