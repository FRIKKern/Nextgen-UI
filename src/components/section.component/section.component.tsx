import React from 'react';
import { IBaseComponentProps } from '../../types';

const Section: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <section {...rest}>
            {children}
        </section>
    );
};

export default Section;