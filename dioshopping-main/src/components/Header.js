import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';
import './Header.css';
import styled from 'styled-components';

const LogoName = styled.h2` 
    margin-left: 20px;       
    color: white;
`
const ButtonHeader = styled(Button)`
    color: white;    
`

const Header = () => {
    return(
        <Grid className="header" container direction="row" justify="space-between" alignItems="center" xs={12}>
            <LogoName>
                Dio Shopping
            </LogoName>
            <Link to="/" style={{textDecoration: "none"}}>
                <ButtonHeader>Página Inicial</ButtonHeader>
            </Link>
            <Link to="/contato" style={{textDecoration: "none"}}>
                <ButtonHeader>Contato</ButtonHeader>
            </Link>
            <Cart />   

            
        </Grid>
    )
}

export default Header;
