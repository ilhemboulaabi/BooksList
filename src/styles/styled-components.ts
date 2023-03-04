import * as styledComponents from "styled-components";
import { CustomTheme } from "./theme";

const {
  default: styled,
  css,
  createGlobalStyle,
  keyframes,
  ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<CustomTheme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
