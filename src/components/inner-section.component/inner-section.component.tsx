import React from 'react';

interface IInnerSectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | undefined;
    className?: string;
    declarativeOnly?: boolean;
    as?: 'div' | 'section';
    group?: boolean;
    fullWidth?: boolean;
    container?: boolean;
}

/**
 * InnerSection component - A container for a distinct part of the content.
 * 
 * This component is essentially a div with `group`, `w-full`, and `container` classes applied by default.
 * 
 * - `group` can be used to style child components in relation to a parent.
 * - `w-full` sets the width to 100%.
 * - `container` centers the content and sets padding around it.
 * 
 * Use this component when you want to group elements together and apply styles to them as a single entity.
 * 
 * You can turn off `group`, `w-full`, and `container` individually, or all together using `declarativeOnly`.
 * Also, you can render the InnerSection as 'div' or 'section' using the 'as' prop. The default is 'div'.
 *
 * @param {IInnerSectionProps} props - The component properties
 * @returns {ReactElement} An InnerSection component
 */

const InnerSection: React.FC<IInnerSectionProps> = ({ children, className = '', declarativeOnly = false, as: Component = 'div', group = true, fullWidth = true, container = true, ...rest }) => {
    let baseClasses = '';
    if (!declarativeOnly) {
        baseClasses += group ? 'group ' : '';
        baseClasses += fullWidth ? 'w-full ' : '';
        baseClasses += container ? 'container ' : '';
    }

    const combinedClassName = `${baseClasses}${className}`.trim();

    return (
        <Component className={combinedClassName} {...rest}>
            {children}
        </Component>
    );
};

export default InnerSection;

