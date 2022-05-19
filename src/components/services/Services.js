import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import Footer from "../Footer/Footer";
import {
  Title,
  TitleSmall,
  TextContainer,
  Text,
  ServicesContainer,
  Service,
  Icon,
  ServiceTitle,
  ServiceText,
  ProductImage,
} from "./Services.styled";

export const Services = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/products?_quantity=6")
      .then((response) => response.json())
      .then((data) => setProducts(data.data));
  }, []);

  const services = [
    {
      id: 1,
      title: "Financial tasks",
      image: "images/icons8-financial-tasks-50.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
    {
      id: 2,
      title: "Banking services",
      image: "images/icons8-balance-64.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
    {
      id: 3,
      title: "Banking Info",
      image: "images/icons8-information-50.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
    {
      id: 4,
      title: "Easy Crypto Transactions",
      image: "images/icons8-cryptocurrency-64.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
    {
      id: 5,
      title: "Super fast transactions!",
      image: "images/icons8-process-48.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
    {
      id: 6,
      title: "Loan Services",
      image: "images/icons8-loan-64.png",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum turpis tempor.",
    },
  ];
  return (
    <div>
      <Navbar title="dashboard" />
      <Title>Services</Title>
      <TitleSmall>We offer the following services:</TitleSmall>
      <TextContainer>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquam
          magna eget elit imperdiet dignissim. Cras ut magna cursus, condimentum
          turpis tempor, tincidunt lorem. Pellentesque laoreet a sem feugiat
          sagittis. Aliquam tortor sem, semper at efficitur in, gravida ac mi.
          Mauris scelerisque placerat risus id malesuada. Sed tincidunt urna id
          augue feugiat, ut tempus quam condimentum. Etiam dignissim elit ut
          enim tempor condimentum.
        </Text>
      </TextContainer>
      <ServicesContainer>
        {services.map((item) => (
          <Service key={item.id}>
            <Icon src={item.image} alt="icon" />
            <ServiceTitle>{item.title}</ServiceTitle>
            <ServiceText>{item.text}</ServiceText>
          </Service>
        ))}
      </ServicesContainer>
      <Title>Products</Title>
      <ServicesContainer>
        {products
          ? products.map((item, i) => (
              <Service key={i}>
                <ProductImage src={item.image} alt="image" />
                <ServiceTitle>{item.name}</ServiceTitle>
                <ServiceText
                  style={{
                    color: "#333",
                    marginBottom: "5px",
                  }}
                >
                  Price: {item.price} <br />
                  Taxes: {item.taxes} <br />
                  Net Price: {item.net_price}
                </ServiceText>
                <ServiceText>{item.description}</ServiceText>
              </Service>
            ))
          : null}
      </ServicesContainer>
      <Footer/>
    </div>
  );
};
