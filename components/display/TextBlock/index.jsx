import clsx from 'clsx';
import GridColumn from 'components/layout/GridColumn';
import PropTypes from 'prop-types';
import Style from './TextBlock.module.scss';

function TextBlock({ 
    fullContentBlock, 
    children, 
    id, 
    className, 
    start = 3, 
    end = 13, 
    ...otherProps 
}){
    return(
        <GridColumn 
            start={fullContentBlock ? 2 : start} 
            end={fullContentBlock ? 14 : end} 
            className={clsx(Style.block, className)} 
            id={id} 
            {...otherProps} 
            role="document"
            element="section"
        >
            {children}
        </GridColumn>
    )
}


TextBlock.propTypes = {
    children: PropTypes.any,
    fullContentBlock: PropTypes.bool,
    className: PropTypes.string
}


export default TextBlock;