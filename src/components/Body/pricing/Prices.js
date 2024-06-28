import React, { useState, useEffect } from 'react';
import './prices.css';
import { LiaBugSolid } from "react-icons/lia";
import { SiCreatereactapp } from "react-icons/si";
import { TbSeo, TbNetwork } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";

const BinanceAPI = {
    EURUSDT: 'https://api.binance.com/api/v3/ticker/price?symbol=EURUSDT',
    USDTARS: 'https://api.binance.com/api/v3/ticker/price?symbol=USDTARS'
};

export default function Prices() {
    const [prices, setPrices] = useState({
        EUR: 0,
        USD: 0,
        ARS: 0
    });
    const [selectedCurrency, setSelectedCurrency] = useState('EUR');

    useEffect(() => {
        const fetchPrices = async () => {
            try {
                const responses = await Promise.all([
                    fetch(BinanceAPI.EURUSDT),
                    fetch(BinanceAPI.USDTARS)
                ]);
                const results = await Promise.all(responses.map(response => response.json()));
                const eurPrice = parseFloat(results[0].price);
                const usdPrice = 1 / parseFloat(results[0].price); // Calculate USD based on EURUSDT price
                const arsPrice = parseFloat(results[1].price);
                setPrices({
                    EUR: eurPrice,
                    USD: usdPrice,
                    ARS: arsPrice
                });
            } catch (error) {
                console.error('Error fetching prices:', error);
            }
        };

        fetchPrices();
    }, []);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    const convertPrice = (basePrice) => {
        if (selectedCurrency === 'EUR') {
            return basePrice;
        } else if (selectedCurrency === 'ARS') {
            return basePrice * (prices[selectedCurrency] * 1.1) + 2;
        } else { // USD
            return basePrice * prices[selectedCurrency] + 2;
        }
    };

    const currencySymbol = selectedCurrency === 'EUR' ? '€' : selectedCurrency === 'USD' ? '$' : 'ARS';

    return (
        <div className='PricesContainer'>
            <div className='currencySelector'>
                <label>Select Currency:</label>
                <select value={selectedCurrency} onChange={handleCurrencyChange}>
                    <option value="EUR">EUR</option>
                    <option value="USD">USD</option>
                    <option value="ARS">ARS</option>
                </select>
            </div>
            
            <div className='itemContainer'>
                <ItemsPrice
                    title='Fix Bug'
                    price={convertPrice(10)}
                    currencySymbol={currencySymbol}
                    image={<LiaBugSolid size={40} />}
                />

                <ItemsPrice
                    title='Create React Component'
                    price={convertPrice(8)}
                    currencySymbol={currencySymbol}
                    image={<SiCreatereactapp size={40} />}
                />

                <ItemsPrice
                    title='SEO Improvement'
                    price={convertPrice(7)}
                    currencySymbol={currencySymbol}
                    image={<TbSeo size={40} />}
                />
                
                <ItemsPrice
                    title='API CRUD'
                    price={convertPrice(10)}
                    currencySymbol={currencySymbol}
                    image={<TbNetwork size={40} />}
                />

                <ItemsPrice
                    title='API Design and Management'
                    price={convertPrice(8)}
                    currencySymbol={currencySymbol}
                    image={<FaNetworkWired size={40} />}
                />
            </div>
        </div>
    );
}

function ItemsPrice({ image, title, price, currencySymbol }) {
    
    return (
        <div className='serviceContainer'>
            <div>{image}</div>
            <h3>{title}</h3>
            <div className='priceContainer'>
                <p>{currencySymbol} {price.toFixed(2)}</p>
            </div>
        </div>
    );
}
