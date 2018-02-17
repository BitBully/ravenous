// import { apiKey } from './apiKey.js';
const apiKey = 'cbFYZzOdPVtqY_R-1Gim02FCf3wDfSc5ICYDQocWaafBXP7vBwo16xi8RLe1qJqsR5gqL71sVooNI201url_CyXioCk1KZVk6RECh2Kh8wb_PI1uAU4xj2QgbkaGWnYx';

const Yelp = {
    search(term,location,sortBy) {
        // the "first" urs is hte CORS anywhere url...
        const url = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        console.log('URL: ' + url);
        return fetch(url, {
            headers: { 
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            if(response.ok) {
                // console.log('Response is OK\n');
                console.log('response: ' + response);
                return response.json();
            }
            throw new Error('Request failed!');
        }, networkError => {
            console.log(networkError.message);
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => ({
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }));
                }
            });
        }
};

export { Yelp };
// export default Yelp;