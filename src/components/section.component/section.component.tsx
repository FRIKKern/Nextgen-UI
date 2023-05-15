import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * Section component - A standalone section of a document or application.
 * 
 * This component is a `<section>` HTML element, which represents a standalone section — which doesn't have a more specific semantic element to represent it — contained within an HTML document.
 * 
 * Use this component to divide your content into distinct sections, each potentially with its own heading.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} A Section component
 */
const Section: React.FC<IBaseComponentProps> = ({ children, ...rest }) => {
    return (
        <section {...rest}>
            {children}
        </section>
    );
};

export default Section;
