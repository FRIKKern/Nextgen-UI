import React from 'react';
import { IBaseComponentProps } from '../../types';

const FlexCol: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `md:flex md:flex-col ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default FlexCol;