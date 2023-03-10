import { CustomTheme } from './theme';

// eslint-disable-next-line react/display-name
export const palette: any = (...args: any) => {
  const [key, maybeColor] = args;
  // if 2 arguments were passed return the accessor
  if (maybeColor) return (props: any) => props.theme.palette[key][maybeColor];
  // if second is missing return a function expecting it
  return (color: any) => (props: any) => props.theme.palette[key][color];
};

// eslint-disable-next-line react/display-name, max-len
export const spacing = (spacingSize: number) => (props: { theme: CustomTheme }) => ((props.theme) ? props.theme.spacing(spacingSize) : null);

export type shadow = CustomTheme['shadow'];
