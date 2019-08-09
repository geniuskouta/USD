const axios = require('axios');

const Api = {
    async getExchangeRate(fromCurrency, toCurrency) {

        const response = await axios.get('http://www.apilayer.net/api/live?access_key=6b95ca1e02ffb6a4f57ac9f2da47ee29&format');
    
        const exchangeRate = response.data.quotes[fromCurrency + toCurrency];
    
        if(isNaN(exchangeRate)){
            throw new Error(`Unable to get currency ${fromCurrency} and ${toCurrency}`);
        }
        
        return exchangeRate;
    },

    async getCountries(toCurrency) {
        try{
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${toCurrency}`);
        
        return response.data.map(country => {
            return ' ' + country.name;
        });
        }catch(err){
            throw new Error(`Unable to get countries that use ${toCurrency}.`);
        }
    
    },

    async convertCurrency(fromCurrency, toCurrency, amount) {
        const exchangeRate = await this.getExchangeRate(fromCurrency, toCurrency);
        const countries = await this.getCountries(toCurrency);
    
        const convertedAmount = (amount * exchangeRate).toFixed(2);
    
        return `${convertedAmount} ${toCurrency}, available in the following countries: ${countries}.`;
    }


}

export default Api;