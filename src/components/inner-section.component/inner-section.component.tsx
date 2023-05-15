import React from 'react';

interface IInnerSectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | undefined;
    className?: string;
    declarativeOnly?: boolean;
    as?: 'div' | 'section';
    disableGroup?: boolean;
    disableFullWidth?: boolean;
    disableContainer?: boolean;
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
 * You can disable `group`, `w-full`, and `container` individually, using `disableGroup`, `disableFullWidth`, and `disableContainer`.
 * Also, you can render the InnerSection as 'div' or 'section' using the 'as' prop. The default is 'div'.
 *
 * @param {IInnerSectionProps} props - The component properties
 * @returns {ReactElement} An InnerSection component
 */

const InnerSection: React.FC<IInnerSectionProps> = ({ children, className = '', declarativeOnly = false, as: Component = 'div', disableGroup = false, disableFullWidth = false, disableContainer = false, ...rest }) => {
    let baseClasses = '';
    if (!declarativeOnly) {
        baseClasses += disableGroup ? '' : 'group ';
        baseClasses += disableFullWidth ? '' : 'w-full ';
        baseClasses += disableContainer ? '' : 'container ';
    }

    const combinedClassName = `${baseClasses}${className}`.trim();

    return (
        <Component className={combinedClassName} {...rest}>
            {children}
        </Component>
    );
};

export default InnerSection;
