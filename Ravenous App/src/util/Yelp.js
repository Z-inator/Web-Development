const apiKey = "gvutXZh713S7tpdL4H9oBirj_FLKfOyTQECaUjpUqW6dd2l8rTllbfKpgE0KnzttkPWLptKc489St8lyy_Oj7EIQ6wdzgfYrCI9NLzRODuGZ7S8jHtMD2oB8Mt5nXnYx"

const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
                    { headers: { Authorization: `Bearer ${apiKey}` } }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
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
                    };
                });
            }
        })
    }
};
export default Yelp;