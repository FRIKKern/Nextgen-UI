import React from 'react';
import { IBaseComponentProps } from './types';

const Section: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={className || ''} style={style}>
            {children}
        </div>
    );
};

export default Section;