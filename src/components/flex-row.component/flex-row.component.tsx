import React from 'react';
import { IBaseComponentProps } from '../../types';

const FlexRow: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `flex flex-row ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default FlexRow;