import React from 'react';
import { IBaseComponentProps } from './types';

const PageContainer: React.FC<IBaseComponentProps> = ({ children, className, style }) => {
    return (
        <div className={className || ''} style={style}>
            <main>
                <div className={`mx-auto`}>{children}</div>
            </main>
        </div>
    );
};

export default PageContainer;