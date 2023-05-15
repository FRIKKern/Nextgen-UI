import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * GridCol component - A grid-based column layout component.
 * 
 * This component is a div with `grid` and `md:grid-col` classes applied.
 * 
 * - `grid` turns on grid layout.
 * - `md:grid-col` makes the element behave as a grid column on medium to larger screens.
 * 
 * It is ideal to use this component when you want to take advantage of CSS Grid layout to create complex and responsive layouts.
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A grid-based column layout component
 */


const GridCol: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `grid md:grid-col ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default GridCol;
