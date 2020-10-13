//setting the data for all the restaurants
let beerData = [{
    type: 'Gueuze',
    image: 'gueuze.jpg',
    country: 'Belgian',
    color: {
        lightercolor: 'Straw',
        darkercolor: 'Gold',
        lighternumber: 3,
        darkernumber: 7,
    },
    bitter: {
        type: 'Very Low',
        lowibu: 0,
        highibu: 10,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5,
        higherabv: 8,
    },
    flavor: 'A long multi-organism fermentation gives this memeber of the lambic family lactic, barnyard-like, and earthy flavors. Gueuzes are refermented in the bottle to yield high carbonation, which results in a tart, refreshing beer with significant complexity.',
    history: 'Spontaneously fermented beers such as Gueuze and other Lambics have been brewed in belgium for centuries',
    relatedstyles: [
        "Fruit Lambic", "Flander's Red", "Lambic"
    ]
}, {
    type: 'Fruit Lambic',
    image: 'fruitlambic.jpg',
    country: 'Belgian',
    color: {
        lightercolor: 'Fruit',
        darkercolor: 'Any',
        lighternumber: 2,
        darkernumber: 7,
    },
    bitter: {
        type: 'Very Low',
        lowibu: 0,
        highibu: 10,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5,
        higherabv: 7,
    },
    flavor: 'Fermented by several yeast and bacteria, aged for up to 3 years, and often a blend of batches and vintages, this complex ale exhibits fruit flavor as well as tart, acidic, earthy and barnyard-like traits.',
    history: 'The most common styles of Fruit Lambic are Kriekm (aged with cherries) and Framboise (aged with raspberries)',
    relatedstyles: [
        "Gueuze", "Flander's Red", "Lambic"
    ]
},  {
    type: 'Flanders Red',
    image: 'flandersred.jpg',
    country: 'Belgian',
    color: {
        lightercolor: 'Red',
        darkercolor: 'Brown',
        lighternumber: 10,
        darkernumber: 16,
    },
    bitter: {
        type: 'Low',
        lowibu: 10,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 4.6,
        higherabv: 6.5,
    },
    flavor: 'This style develops a measure of vinegary sourness and fruit notes during maturation in large oak tanks, but the best examples retain enough malt flavor and sweetness to provide an enjoyable balance.',
    history: 'Asscoaited with west Flanders in Belgium, these beers are often produced by blending yound and aged beers.',
    relatedstyles: [
        "Gueuze", "Fruit Lambic", "Oud Bruin"
    ]
},  {
    type: 'Belgian Dubbel',
    image: 'belgiandubbel.jpg',
    country: 'Belgian',
    color: {
        lightercolor: 'Light Amber',
        darkercolor: 'Dark Amber',
        lighternumber: 10,
        darkernumber: 17,
    },
    bitter: {
        type: 'Low',
        lowibu: 15,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'Elevated',
        lowerabv: 6,
        higherabv: 7.6,
    },
    flavor: 'Some examples are malt-balanced and on the sweet side, while others remain malt-balanced but lack sweetness, Many examples display dark fruit and/or spicy yeast character.',
    history: 'Produced since the mid-1800s, many Trappist and abbey breweries produce a beer in this style.',
    relatedstyles: [
        "Belgian Dark Strong Ale"
    ]
},   {
    type: 'Belgian Tripel',
    image: 'belgiantripel.jpg',
    country: '',
    color: {
        lightercolor: 'Light Gold',
        darkercolor: 'Gold',
        lighternumber: 4.5,
        darkernumber: 7,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'High',
        lowerabv: 7.5,
        higherabv: 9.5,
    },
    flavor: 'Characterized by fruity esters and spicy/peppery phenols produced during fermentation. Medium bodied with a slight sweetness and pale malt flavor, Belgian Tripels may also have substantial hop flavor and aroma.',
    history: 'First brewed in the early 1900s. Many trappist and abbey breweries produce a beer in this style.',
    relatedstyles: [
        "Belgian Blond Ale", "Belgian Golden Strong Ale"
    ]
},    {
    type: '',
    image: '',
    country: '',
    color: {
        lightercolor: '',
        darkercolor: '',
        lighternumber: 0,
        darkernumber: 0,
    },
    bitter: {
        type: '',
        lowibu: 0,
        highibu: 0,
    },
    alcohol: {
        lowerdesc: '',
        higherdesc: '',
        lowerabv: 0,
        higherabv: 0,
    },
    flavor: '',
    history: '',
    relatedstyles: [
        "", "", ""
    ]
}, ];