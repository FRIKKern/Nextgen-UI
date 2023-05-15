import React from 'react';

interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | undefined;
    className?: string;
    declarativeOnly?: boolean;
    as?: 'div' | 'section';
    disableContainer?: boolean;
    disableDefaultMaxWidth?: boolean;
}

/**
 * Container component - A general purpose container.
 * 
 * This component is essentially a div with a `container` and `max-w-screen-default` classes applied by default.
 * 
 * - `container` centers the content and sets padding around it.
 * - `max-w-screen-default` sets the maximum width of the container to a default value.
 * 
 * Use this component when you want to limit the width of your content and center it in the viewport.
 * 
 * You can disable the `container` using `disableContainer`.
 * You can disable the `max-w-screen-default` using `disableDefaultMaxWidth`.
 * Also, you can render the Container as 'div' or 'section' using the 'as' prop. The default is 'div'.
 * 
 * If you wish to change the default max-width value, you can do so by adding a custom screen size named 'default' in your tailwind.config.js. For example:
 * 
 * ```
 * theme: {
 *     extend: {
 *       screens: {
 *         xs: "375px",
 *         "example-breakpoint": "1280px",
 *         default: "min(90vw, 1750px)",
 *       },
 *     },
 * }
 * ```
 * 
 * @param {IContainerProps} props - The component properties
 * @returns {ReactElement} A general purpose container component
 */

const Container: React.FC<IContainerProps> = ({ children, className = '', declarativeOnly = false, as: Component = 'div', disableContainer = false, disableDefaultMaxWidth = false, ...rest }) => {
    let baseClasses = '';
    if (!declarativeOnly) {
        baseClasses += disableContainer ? '' : 'container ';
        baseClasses += disableDefaultMaxWidth ? '' : 'max-w-screen-default ';
    }

    const combinedClassName = `${baseClasses}${className}`.trim();

    return (
        <Component className={combinedClassName} {...rest}>
            {children}
        </Component>
    );
};

export default Container;
