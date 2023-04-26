import React from 'react';
import { IBaseComponentProps } from '../../types';

const GridCol: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `grid-col ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default GridCol;