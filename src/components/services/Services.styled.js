import styled from "styled-components";

export const Title = styled.h1`
  color: #6A0DAD;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-top: 0px;
  text-align: center;
  font-size: 3.5rem;
`;
export const TitleSmall = styled.h2`
  color: #9b59b6;
  margin-left: 20px;
  margin-bottom: 10px;
  font-weight: 500;
`;
export const TextContainer = styled.div`
  margin-bottom: 50px;
`;
export const Text = styled.p`
  max-width: 90%;
  margin: 0 auto;
  color: #777;
`;
export const ServicesContainer = styled.div`
  max-width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px
  @media (max-width: 1012px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Service = styled.div`
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    transform: scale(0.9);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;
export const Icon = styled.img`
  display: block;
  margin: 15px auto;
`;
export const ServiceTitle = styled.h4`
  text-align: center;
  color: #9b59b6;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
export const ServiceText = styled.p`
  margin: 0 auto 30px;
  color: #777;
  max-width: 300px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 20px;
  }
`;
export const ProductImage = styled.img`
  width: 200px;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
`;
