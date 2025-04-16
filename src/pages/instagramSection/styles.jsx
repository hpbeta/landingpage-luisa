import styled from "styled-components";

export const Container = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  color: #2c1e16;
  margin-bottom: 8px;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #4f4039;
  margin-bottom: 16px;
`;

export const InstaHandle = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 40px;
  color: #4f4039;

  span {
    margin-right: 8px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto 40px;
`;

export const PostBox = styled.div`
  background-color: #fff9f6;
  height: 350px; /* Altura aumentada */
  
  border-radius: 12px;
  overflow: hidden;

  a {
    display: block;
    height: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s;
  }

  img:hover {
    transform: scale(1.03);
  }
`;

export const MoreLink = styled.a`
  font-size: 0.95rem;
  color: #2c1e16;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;