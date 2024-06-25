import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_QBzuIJRtPH9AU8pzq2mj3p3kS7BHkJiuoTQPgzA0');

convert("INR","USD",3);


export async function convert(fromCurrency,toCurrency,units)
{
    const res = await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });

    const multiplier = res.data[toCurrency];
    return multiplier * units;
}
