import styled from "styled-components";

export const AccordionContainer = styled.div`
  max-width: 700px;
  margin: 50px auto;
  padding: 0 16px;
`;

export const Title = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`;

export const AccordionItem = styled.div`
  background: #fff5ed;
  margin-bottom: 12px;
  border-radius: 10px;
  padding: 16px;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
  transition: background 0.3s;

  &:hover {
    background: #ffe7db;
  }
`;

export const Question = styled.h3`
  font-size: 18px;
  color: #c8714e;
  margin-bottom: 8px;
`;

export const Answer = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #333;
`;