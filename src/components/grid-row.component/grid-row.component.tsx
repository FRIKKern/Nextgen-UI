import React from 'react';
import { IBaseComponentProps } from '../../types';

const GridRow: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `grid grid-row ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default GridRow;