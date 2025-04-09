import styled from "styled-components";

export const Section = styled.section`
background-color: #FDF6F7;
  padding: 5rem 2rem;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  max-width: 800px;
  width: 100%;
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  font-family: "Georgia", serif;
  text-align: center;
  margin-bottom: 3rem;
  color: #1c1c1c;
`;

export const StepCard = styled.div`
  background-color: #fff;
  border-radius: 12px;
  padding: 1.6rem;
  display: flex;
  align-items: flex-start;
  gap: 1.4rem;
  margin-bottom: 1.6rem;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.05);
`;

export const StepNumber = styled.div`
  background-color: #ffe7d6;
  color: #000;
  font-weight: 600;
  font-size: 1rem;
  min-width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Georgia", serif;
`;

export const StepContent = styled.div`
  flex: 1;
`;

export const StepTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const StepText = styled.p`
  font-size: 0.95rem;
  color: #444;
  line-height: 1.5;
`;