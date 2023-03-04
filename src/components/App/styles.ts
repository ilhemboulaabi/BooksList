import { Box } from "@mui/material";
import { spacing } from "../../styles/accessors";
import styled from "../../styles/styled-components";

export const SCBox = styled(Box)`
  max-height: 100vh;
  max-width: 100vw;
  overflow-y: scroll;
  padding-bottom: ${spacing(9)};
`;