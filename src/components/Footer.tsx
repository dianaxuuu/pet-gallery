import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterContent>
                <p>
                    <strong>Pet Foster</strong> - Bringing joy to lives, one adoption at a time.
                </p>
            </FooterContent>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #ffffff;
  padding: 1em 0;
  position: relative;
  width: 100%;
  bottom: 0;
`;

const FooterContent = styled.div`
  text-align: center;
`;
