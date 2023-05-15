import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * Container component - A general purpose container.
 * 
 * This component is a div with a `container` class applied.
 * 
 * It is ideal to use this component when you want to limit the width of your content and center it in the viewport. The maximum width can be customized with CSS.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A general purpose container component
 */

const Container: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <div className="container"  {...rest}>
            {children}
        </div>
    );
};

export default Container;
