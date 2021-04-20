import React from 'react';
import styled from 'styled-components';
import styles from './Footer.module.css';

const Title = styled .h1`
font-size: 50px;
color: lightblue;
border: 1px solid yellow;
` 

const Container = styled.div`
    margin: 10px;
    color: purple;
    border: 1px solid red;
    background-color: lightblue;

`

const Footer = () => {
    return (
        <div>
            <Title className={styles.title}>This Footer Page</Title>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
            <Container>
                <h3>Product Name</h3>
                <p>Product Description</p>
            </Container>
        </div>
    );
};

export default Footer;