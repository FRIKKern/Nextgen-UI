import React from 'react';
import { IBaseComponentProps } from './types';

const FlexCol: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={`flex-col ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

export default FlexCol;