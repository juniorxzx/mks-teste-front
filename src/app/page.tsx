'use client'

import { GetProducts } from "../services/mkt-api";
import React, { useContext, useEffect, useState } from "react";
import { AlternativeMain, Card, CardButton, CardDetails, CardDetailsHeader, Cards, Main } from "./page.styled";
import Image from "next/image";
import BoxIcon from '../assets/icons/box.svg'
import { GlobalContext } from "../context/GlobalContext";
import Loading from "../components/loading/loading";
import { useQuery } from 'react-query';

interface Product {
  id: number;
  name: string;
  photo: string;
  price: string;
  description: string
}
export default function Home() {
  const { cards, setCards } = useContext(GlobalContext);
  const { data: products, isLoading, isError } = useQuery('products', GetProducts);

  const addToCart = (product: Product) => {
    const currentCart = localStorage.getItem('cart');
    let newCart = [];
    if (currentCart) {
      newCart = JSON.parse(currentCart);
    }
    const existingProductIndex = newCart.findIndex((item: any) => item.id === product.id);
    if (existingProductIndex !== -1) {
      newCart[existingProductIndex].quantity += 1;
    } else {

      newCart.push({
        id: product.id,
        img: product.photo,
        name: product.name,
        description: product.description,
        price: product.price,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(newCart));
    setCards([...newCart]);
  }


  if (isLoading) {
    return (
      <AlternativeMain>
        <Loading />
      </AlternativeMain>
    );
  }

  if (isError) {
    return <div>Erro ao carregar os produtos</div>;
  }

  return (
    <Main>
      <Cards>
        {products.map((product: Product) => (
          <Card key={product.id}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.5 },

            }}
            whileTap={{ scale: 1 }}
          >
            <Image
              src={product.photo}
              alt={`${product.name}-image`}
              width={111}
              height={138}
              priority
            />
            <CardDetails>
              <CardDetailsHeader>
                <span>
                  {product.name}
                </span>
                <span>
                  R${product.price}
                </span>
              </CardDetailsHeader>

              <p>
                {product.description}
              </p>
            </CardDetails>
            <CardButton onClick={() => addToCart(product)}>
              <Image src={BoxIcon} alt={`icon-box`} />
              <span>Comprar</span>
            </CardButton>
          </Card>


        ))}
      </Cards>
    </Main>
  );
}

