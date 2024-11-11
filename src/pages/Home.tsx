import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home: React.FC = () => {
    return (
        <Main>
            {/* Hero Section */}
            <Section className="hero is-medium is-link">
                <HeroBody>
                    <Column>
                        <Title>Welcome to Pet Foster</Title>
                        <Subtitle>
                            Find and adopt your new best friend! Browse through our list of
                            adorable pets looking for a forever home, and let’s make a difference together.
                        </Subtitle>
                        <ButtonGroup>
                            <StyledLink to="/pets">
                                <Button>Go to Pets</Button>
                            </StyledLink>
                        </ButtonGroup>
                    </Column>
                    <Column>
                        <Image src="/imgs/pet1.png" alt="Pet" />
                    </Column>
                </HeroBody>
            </Section>

            {/* Section 2 */}
            <Section className="hero is-medium has-background-grey-lighter">
                <HeroBody>
                    <Column>
                        <Image src="/imgs/pet2.jpg" alt="Pet" />
                    </Column>
                    <Column>
                        <Title>Get to know them easily</Title>
                        <Subtitle>
                            Want to know your pet's characteristic? No problem! We provide a brief introduction for every cutie in the pets list.
                        </Subtitle>
                    </Column>
                </HeroBody>
            </Section>

            {/* Section 3 */}
            <Section className="hero is-medium has-background-white-ter">
                <HeroBody>
                    <Column>
                        <Title>Download their photos</Title>
                        <Subtitle>
                            Feel free to select any pets' photos you like and download it to your device.
                        </Subtitle>
                    </Column>
                    <Column>
                        <Image src="/imgs/pet3.jpg" alt="Pet" />
                    </Column>
                </HeroBody>
            </Section>

        </Main>
    );
};

export default Home;

// Styled Components
const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2em;
`;

const HeroBody = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  max-width: 1200px;
`;

const Column = styled.div`
  flex: 1;
  padding: 1em;
`;

const Title = styled.h1`
  font-size: 2em;
  color: #333;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  color: #666;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  padding: 0.75em 1.5em;
  font-size: 1em;
  border: none;
  color: #fff;
  background-color: #f5c518;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f5a018;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const Image = styled.img`
  width: 100%;
  max-width: 640px;
  max-height: 500px;
  height: auto;
  width:auto;
  border-radius: 8px;
`;

