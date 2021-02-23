import axios from 'axios';

export default async function getOFXQuote(inputs) {
    return axios.get(`https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${inputs.fromCurrency}/${inputs.toCurrency}/${inputs.amount}?format=json`)
        .then(res => {
            return Promise.resolve(res.data);
        });
}