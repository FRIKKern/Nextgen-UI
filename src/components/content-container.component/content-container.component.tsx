import React from 'react';
import { IBaseComponentProps } from '../../types';

const Container: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <div  {...rest}>
            {children}
        </div>
    );
};

export default Container;