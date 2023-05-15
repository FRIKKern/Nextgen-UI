import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * GridRow component - A grid-based row layout component.
 * 
 * This component is a div with `grid` and `md:grid-row` classes applied.
 * 
 * - `grid` turns on grid layout.
 * - `md:grid-row` makes the element behave as a grid row on medium to larger screens.
 * 
 * It is ideal to use this component when you want to take advantage of CSS Grid layout to create complex, responsive designs, especially when you want to align elements along a horizontal line.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A grid-based row layout component
 */


const GridRow: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `grid md:grid-row ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default GridRow;
