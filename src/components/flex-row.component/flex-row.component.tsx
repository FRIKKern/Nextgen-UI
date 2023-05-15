import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * FlexRow component - A flex row layout component.
 * 
 * This component is essentially a div with `md:flex` and `md:flex-row` classes applied.
 * 
 * - `md:flex` turns on flex layout for medium to larger screens.
 * - `md:flex-row` aligns the children horizontally (along the row).
 * 
 * It is ideal to use this component when you want to create a horizontal alignment of elements on medium to larger screens.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A flex row layout component
 */

const FlexRow: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `md:flex md:flex-row ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default FlexRow;
