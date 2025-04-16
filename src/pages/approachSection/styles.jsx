


import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Georgia", serif;
  margin-bottom: 3rem;
  color: #b8b99e;
`;

export const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
`;

export const Card = styled.div`
  background-color: #fff;
  padding: 1.8rem 1.4rem;
  border-radius: 12px;
  box-shadow: 0 0 0 2px #e4d3c5;
  text-align: left;
  color: #222;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  }

  @media(max-width: 408px) {
    width: 310px;

  }
`;

export const CardTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #b8b99e;
`;

export const CardText = styled.p`
  font-size: 0.96rem;
  line-height: 1.6;
  color: #4e4e4e;
`;