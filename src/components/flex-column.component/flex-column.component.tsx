import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * FlexCol component - A flex column layout component.
 * 
 * This component is essentially a div with `md:flex` and `md:flex-col` classes applied.
 * 
 * - `md:flex` turns on flex layout for medium to larger screens.
 * - `md:flex-col` stacks the children vertically (along the column).
 * 
 * It is ideal to use this component when you want to create a vertical stack of elements on medium to larger screens.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A flex column layout component
 */

const FlexCol: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `md:flex md:flex-col ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default FlexCol;
