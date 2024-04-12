'use client'

import React, { useContext, useEffect, useState } from 'react'
import { AsideMenu, AsideMenuCard, AsideMenuCardButtonQ, AsideMenuContent, AsideMenuFooter, AsideMenuFooterButton, AsideMenuHeader, Head, Logo, Menu, MenuButton, Nav } from './header.styled'

import CartIcon from '@/assets/icons/cart.svg'
import ClosedIcon from '@/assets/icons/close.svg'
import Image from 'next/image'
import { GlobalContext } from '@/context/GlobalContext'


interface Product {
    id: number;
    name: string;
    img: string;
    price: string;
    description: string,
    quantity: number
}

const Header = () => {
    const [open, setOpen] = useState(false)
    const { cards, setCards } = useContext(GlobalContext)

    useEffect(() => {

        const cartItems = localStorage.getItem('cart');
        if (cartItems) {
            const parsedCartItems = JSON.parse(cartItems);
            setCards(parsedCartItems);
        }

    }, []);

    const add = (productId: number) => {
        const updatedProducts = cards.map(product => {
            if (product.id === productId) {
                return {
                    ...product,
                    quantity: product.quantity + 1
                };
            }
            return product;
        });
        setCards(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };
    const remove = (productId: number) => {
        const updatedProducts = cards.map(product => {
            if (product.id === productId && product.quantity > 1) {
                return {
                    ...product,
                    quantity: product.quantity - 1
                };
            }
            return product;
        });
        setCards(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    const removeProduct = (productId: number) => {
        const updatedProducts = cards.filter(product => product.id !== productId);
        setCards(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));

    }
    const calculateTotal = () => {
        let total = 0;
        cards.forEach(product => {
            total += parseFloat(product.price) * product.quantity;
        });
      
        return total.toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    return (
        <Head>
            <Nav>
                <Logo>
                    <span>MKS</span>
                    <span>Sistemas</span>
                </Logo>

                <Menu>
                    <MenuButton onClick={() => setOpen(!open)}>
                        <Image
                            src={CartIcon}
                            alt='cart-icon'
                            priority
                        />
                        {cards.length}
                    </MenuButton>

                    {open && (
                        <AsideMenu
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: open ? 1 : 0, x: open ? 0 : 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <AsideMenuHeader>
                                <span>Carrinho de compras</span>
                                <Image src={ClosedIcon} alt='' onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }} />
                            </AsideMenuHeader>
                            <AsideMenuContent
                                initial={{ opacity: 0, y: -100 }}
                                animate={{ opacity: open ? 1 : 0, y: open ? 0 : -100 }}
                                transition={{ duration: 0.5 }}>
                                {cards.length > 0 ? (
                                    cards.map((product) => (
                                        <AsideMenuCard key={product.id}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}

                                        >
                                            <Image
                                                src={ClosedIcon}
                                                alt='remove-item'
                                                width={18}
                                                height={18}
                                                className='icon-remove'
                                                onClick={() => removeProduct(product.id)}
                                                priority
                                            />
                                            <Image
                                                src={product.img}
                                                alt={`${product.name}-image`}
                                                width={46}
                                                height={57}
                                                priority
                                            />

                                            <span className='name'>{product.name}</span>
                                            <div className='box'>
                                                <AsideMenuCardButtonQ>
                                                    <span>
                                                        Qtd:
                                                    </span>
                                                    <div>
                                                        <span onClick={() => remove(product.id)}>-</span>
                                                        <div></div>
                                                        <span>{product.quantity}</span>
                                                        <div></div>
                                                        <span onClick={() => add(product.id)}>+</span>
                                                    </div>
                                                </AsideMenuCardButtonQ>
                                                <span className='price'>R${(parseFloat(product.price) * product.quantity).toFixed(2).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</span>
                                            </div>

                                        </AsideMenuCard>
                                    ))
                                ) : (
                                    <AsideMenuCard>
                                        Carrinho vazio!
                                    </AsideMenuCard>
                                )}
                            </AsideMenuContent>
                            <AsideMenuFooter>

                                <div className='total-prices'>
                                    <span>Total:</span>
                                    <span>R${calculateTotal()}</span>
                                </div>
                            </AsideMenuFooter>
                            <AsideMenuFooterButton>
                                Finalizar Compra
                            </AsideMenuFooterButton>
                        </AsideMenu>
                    )}
                </Menu>
            </Nav>
        </Head>
    )
}

export default Header