import React from 'react';
import { IBaseComponentProps } from '../../types';

const InnerSection: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `group w-full container ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default InnerSection;