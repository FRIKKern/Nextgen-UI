import React from 'react';
import { IBaseComponentProps } from '../../types';

const Container: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <div className="container"  {...rest}>
            {children}
        </div>
    );
};

export default Container;