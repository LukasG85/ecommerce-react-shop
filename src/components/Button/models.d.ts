export interface IButton {
    ariaLabel?: string;
    link?: string;
    children?: React.ReactNode;
    btnColorVariant?: BtnColours.TPaletteColour;
    classes?: string;
    signInWithGoogle?: () => void;
    [key: string]: any;
    className?: string;
}