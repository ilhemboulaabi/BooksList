import { Box, Button, Card, Typography } from "@mui/material";
import { palette, spacing } from "../../styles/accessors";
import styled from "../../styles/styled-components";
import { plateform } from "../../styles/theme";

export const SCCard = styled(Card)<{isbookdetails?: string}>`
  && {
    display: flex;
    width: fit-content;
    box-shadow: none;
    height: ${(props) => props?.isbookdetails ? '300px' : '200px'};
    width: 400px;
    @media ${plateform.medium} {
      width: 600px;
    }
    @media ${plateform.large} {
      width: 800px;
    }
  }
`;

export const SCButton = styled(Button)`
  && {
    margin-top: auto;
    align-self: flex-start;
    margin-left: ${spacing(2)};
  }
`;

export const SCFavoriteButton = styled(Button)`
  && {
    margin-left: auto;
    margin-top: auto;
    height: 50px;
    color: ${palette("main")("white")};
    background: ${palette("secondary")("main")};
  }
`;

export const SCTypography = styled(Typography)`
  && {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
    @media ${plateform.medium} {
      max-width: 300px;
    }
    @media ${plateform.large} {
      max-width: 400px;
    }
  }
`;

export const SCBox = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    width: 100px;
    @media ${plateform.medium} {
      width: 300px;
    }
    @media ${plateform.large} {
      width: 400px;
    }
  }
`;