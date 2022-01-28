// import { styled } from '@mui/material/styles';
import styled from "styled-components";
import { Card, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const StyledCard = styled(Card)`
  width: 340;
  margin: 0.5rem;
  h4 {
    margin: 0;
  }
  :hover{
   transform:scale(1.02);
  }
  img{
    margin:5px;
    width:320px;
    height:160px;
    object-fit:cover;
  }
  div{
    width:300px;
  }
`;

export const StyledTypography = styled(Typography)`
  margin-top: 0.2rem;
  height: 3.6rem;
  overflow: hidden;
  white-space: wrap;
  text-overflow: ellipsis;
`;

export const StyledBox = styled(Box)`
  display: flex;
`;

export const StyledLink = styled(Link)`
  font-family: "Manrope", sans-serif;
  text-decoration: none;
  maring-right: 2rem;
  h4 {
    color: #212121;
    text-decoration: none;
  }
`;