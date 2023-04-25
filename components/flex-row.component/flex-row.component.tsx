import React from 'react';
import { IBaseComponentProps } from '../../types';

const FlexRow: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={`flex-row ${className || ''}`} style={style}>
            {children}
        </div>
    );
};

export default FlexRow;
