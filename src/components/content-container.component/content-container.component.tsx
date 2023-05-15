import React from 'react';

interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | undefined;
    className?: string;
    declarativeOnly?: boolean;
    as?: 'div' | 'section';
    disableContainer?: boolean;
}

/**
 * Container component - A general purpose container.
 * 
 * This component is essentially a div with a `container` class applied by default.
 * 
 * - `container` centers the content and sets padding around it.
 * 
 * Use this component when you want to limit the width of your content and center it in the viewport. 
 * The maximum width can be customized with CSS.
 * 
 * You can disable the `container` using `disableContainer`.
 * Also, you can render the Container as 'div' or 'section' using the 'as' prop. The default is 'div'.
 *
 * @param {IContainerProps} props - The component properties
 * @returns {ReactElement} A general purpose container component
 */

const Container: React.FC<IContainerProps> = ({ children, className = '', declarativeOnly = false, as: Component = 'div', disableContainer = false, ...rest }) => {
    let baseClasses = '';
    if (!declarativeOnly) {
        baseClasses += disableContainer ? '' : 'container ';
    }

    const combinedClassName = `${baseClasses}${className}`.trim();

    return (
        <Component className={combinedClassName} {...rest}>
            {children}
        </Component>
    );
};

export default Container;
