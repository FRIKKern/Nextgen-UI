import React, { CSSProperties } from 'react';
import { GapValues, GapX, GapY } from '../../types';


interface IContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: JSX.Element | JSX.Element[] | React.ReactNode | undefined;
    className?: string;
    declarativeOnly?: boolean;
    as?: 'div' | 'section' | 'article' | 'header' | 'footer' | 'main';
    disableContainer?: boolean;
    disableDefaultMaxWidth?: boolean;
    gapX?: keyof GapX | GapValues
    gapY?: keyof GapY | GapValues
}

const gapXClasses: Record<GapValues | keyof GapX, string> = {
    '0': 'gap-x-0',
    '0.5': 'gap-x-0.5',
    '1': 'gap-x-1',
    '1.5': 'gap-x-1.5',
    '2': 'gap-x-2',
    '2.5': 'gap-x-2.5',
    '3': 'gap-x-3',
    '3.5': 'gap-x-3.5',
    '4': 'gap-x-4',
    '5': 'gap-x-5',
    '6': 'gap-x-6',
    '7': 'gap-x-7',
    '8': 'gap-x-8',
    '9': 'gap-x-9',
    '10': 'gap-x-10',
    '11': 'gap-x-11',
    '12': 'gap-x-12',
    '14': 'gap-x-14',
    '16': 'gap-x-16',
    '20': 'gap-x-20',
    '24': 'gap-x-24',
    '28': 'gap-x-28',
    '32': 'gap-x-32',
    '36': 'gap-x-36',
    '40': 'gap-x-40',
    '44': 'gap-x-44',
    '48': 'gap-x-48',
    '52': 'gap-x-52',
    '56': 'gap-x-56',
    '60': 'gap-x-60',
    '64': 'gap-x-64',
    '72': 'gap-x-72',
    '80': 'gap-x-80',
    '96': 'gap-x-96',
};

const gapYClasses: Record<GapValues | keyof GapY, string> = {
    '0': 'gap-y-0',
    '0.5': 'gap-y-0.5',
    '1': 'gap-y-1',
    '1.5': 'gap-y-1.5',
    '2': 'gap-y-2',
    '2.5': 'gap-y-2.5',
    '3': 'gap-y-3',
    '3.5': 'gap-y-3.5',
    '4': 'gap-y-4',
    '5': 'gap-y-5',
    '6': 'gap-y-6',
    '7': 'gap-y-7',
    '8': 'gap-y-8',
    '9': 'gap-y-9',
    '10': 'gap-y-10',
    '11': 'gap-y-11',
    '12': 'gap-y-12',
    '14': 'gap-y-14',
    '16': 'gap-y-16',
    '20': 'gap-y-20',
    '24': 'gap-y-24',
    '28': 'gap-y-28',
    '32': 'gap-y-32',
    '36': 'gap-y-36',
    '40': 'gap-y-40',
    '44': 'gap-y-44',
    '48': 'gap-y-48',
    '52': 'gap-y-52',
    '56': 'gap-y-56',
    '60': 'gap-y-60',
    '64': 'gap-y-64',
    '72': 'gap-y-72',
    '80': 'gap-y-80',
    '96': 'gap-y-96',
};


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
 * Also, you can render the Container as 'div', 'section', 'article', 'header', 'footer', or 'main' using the 'as' prop. The default is 'div'.
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


const Container: React.FC<IContainerProps> = ({
    children,
    className = '',
    declarativeOnly = false,
    as: Component = 'div',
    disableContainer = false,
    disableDefaultMaxWidth = false,
    gapX,
    gapY,
    ...rest
}) => {
    let baseClasses = '';
    if (!declarativeOnly) {
        baseClasses += disableContainer ? '' : 'container ';
        baseClasses += disableDefaultMaxWidth ? '' : 'max-w-screen-default ';
        baseClasses += gapY ? `gap-y-${gapY} flex flex-col ` : '';
        baseClasses += gapX ? `gap-x-${gapX} flex flex-row ` : '';
    }

    const combinedClassName = `${baseClasses}${className}`.trim();

    return (
        <Component className={combinedClassName} {...rest} />
    );
};

export default Container;