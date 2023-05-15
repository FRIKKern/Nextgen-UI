import React from 'react';
import { IBaseComponentProps } from '../../types';

/**
 * InnerSection component - A container for a distinct part of the content.
 * 
 * This component is essentially a div with `group`, `w-full`, and `container` classes applied.
 * 
 * - `group` can be used to style child components in relation to a parent.
 * - `w-full` sets the width to 100%.
 * - `container` centers the content and sets padding around it.
 * 
 * Use this component when you want to group elements together and apply styles to them as a single entity.
 *
 * @param {IBaseComponentProps} props - The component properties
 * @returns {ReactElement} An InnerSection component
 */

const InnerSection: React.FC<IBaseComponentProps> = ({ children, className, ...rest }) => {
    const combinedClassName = `group w-full container ${className || ''}`;

    return (
        <div className={combinedClassName.trim()} {...rest}>
            {children}
        </div>
    );
};

export default InnerSection;
