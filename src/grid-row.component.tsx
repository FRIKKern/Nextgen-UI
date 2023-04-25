import React from 'react';
import { IBaseComponentProps } from './types';

const GridRow: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={`grid-row ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

export default GridRow;