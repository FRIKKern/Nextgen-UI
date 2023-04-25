import React from 'react';
import { IBaseComponentProps } from './types';

const GridCol: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={`grid-col ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

export default GridCol;