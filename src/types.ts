export interface IBaseComponentProps extends React.HTMLAttributes<HTMLElement> {
  children?: JSX.Element|JSX.Element[] | React.ReactNode | undefined;
}

export type GapValues = 
    | 0      // 0px
    | 0.5    // 2px or 0.125rem
    | 1      // 4px or 0.25rem
    | 1.5    // 6px or 0.375rem
    | 2      // 8px or 0.5rem
    | 2.5    // 10px or 0.625rem
    | 3      // 12px or 0.75rem
    | 3.5    // 14px or 0.875rem
    | 4      // 16px or 1rem
    | 5      // 20px or 1.25rem
    | 6      // 24px or 1.5rem
    | 7      // 28px or 1.75rem
    | 8      // 32px or 2rem
    | 9      // 36px or 2.25rem
    | 10     // 40px or 2.5rem
    | 11     // 44px or 2.75rem
    | 12     // 48px or 3rem
    | 14     // 56px or 3.5rem
    | 16     // 64px or 4rem
    | 20     // 80px or 5rem
    | 24     // 96px or 6rem
    | 28     // 112px or 7rem
    | 32     // 128px or 8rem
    | 36     // 144px or 9rem
    | 40     // 160px or 10rem
    | 44     // 176px or 11rem
    | 48     // 192px or 12rem
    | 52     // 208px or 13rem
    | 56     // 224px or 14rem
    | 60     // 240px or 15rem
    | 64     // 256px or 16rem
    | 72     // 288px or 18rem
    | 80     // 320px or 20rem
    | 96;    // 384px  or 24rem

    export type GapX = { [K in GapValues]: boolean };
    export type GapY = { [K in GapValues]: boolean };

