import React from 'react';
import { IBaseComponentProps } from './types';

const PageContainer: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <main {...rest}>
            <div>{children}</div>
        </main>
    );
};

export default PageContainer;