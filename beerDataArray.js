//setting the data for all the beer types
let beerData = [{
    type: 'Gueuze',
    image: 'gueuze.jpg',
    country: 'Belgian',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3,
        darkSRM: 7,
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
    flavor: 'A long multi-organism fermentation gives this beer lactic, barnyard-like, and earthy flavors. Beers in this style are refermented in the bottle to yield high carbonation, which results in a tart, refreshing beer with significant complexity.',
    history: 'Spontaneously fermented beers in this style have been brewed in Belgium for centuries',
    relatedstyles: [
        "Fruit Lambic", "Flander's Red", "Lambic"
    ],
    yeast: "Spontaneous fermentation",
    trivia: [
        "This style is made by blending young (usually around a year old) and old (2-3 years old) lambics then bottle-conditioning them for their secondary fermentation.",
        "As a lambic-style beer, the sour profile of this style is one of its crowning features other than its spritzy carbonation",
        "This style was showcased at the 1897 World’s Fair in Brussels and started to gain some popularity outside of the area after having been a relatively localized production.",
    ],
}, {
    type: 'Fruit Lambic',
    image: 'fruitlambic.jpg',
    country: 'Belgian',
    color: {
        light: 'Fruit',
        dark: 'Any',
        lightSRM: 2,
        darkSRM: 7,
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
    history: 'The most common beers of this style are Kriek (aged with cherries) and Framboise (aged with raspberries).',
    relatedstyles: [
        "Gueuze", "Flander's Red", "Lambic"
    ],
    yeast: "Spontaneous fermentation",
    trivia: [
        "Often known as cassis, framboise, kriek, or peche, this style takes on the color and flavor of the fruit it is brewed with.",
        "Sourness is an important part of the flavor profile, though sweetness from fruit may diminish the perceived intensity.",
        "Through the late 1800s, this style was still relatively uncommon due to the difficulty of controlling the fermentation and having bottles explode. ",
    ],
}, {
    type: 'Flanders Red',
    image: 'flandersred.jpg',
    country: 'Belgian',
    color: {
        light: 'Red',
        dark: 'Brown',
        lightSRM: 10,
        darkSRM: 16,
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
    ],
    yeast: "Brettanomyces",

    trivia: [
        "Originally derived from early Porters, but was open fermented using sour yeasts that are native to certain regions in Belgium.",
        "Fermented with organisms other than Saccharomyces cerevisiae, especially Lactobacillus, which produces a sour character attributable to lactic acid. ",
        "Red malt is used to give this beer its colour and the matured beer is often blended with a younger batch before bottling to balance and round the character.",
    ],
}, {
    type: 'Belgian Dubbel',
    image: 'belgiandubbel.jpg',
    country: 'Belgian',
    color: {
        light: 'Light Amber',
        dark: 'Dark Amber',
        lightSRM: 10,
        darkSRM: 17,
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
    ],
    yeast: "",
    trivia: [
        "This style is considered Trappist only if the monks either brew it themselves or supervise the production of the beer in question.",
        "This style is a Trappist beer originally made by monks of Order of Cistercians of the Strict Observance. ",
        "Beers in this style not directly made by monks are often referred to as Abbey beers.",
    ],
}, {
    type: 'Belgian Tripel',
    image: 'belgiantripel.jpg',
    country: '',
    color: {
        light: 'Light Gold',
        dark: 'Gold',
        lightSRM: 4.5,
        darkSRM: 7,
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
    flavor: 'Characterized by fruity esters and spicy/peppery phenols produced during fermentation. Medium bodied with a slight sweetness and pale malt flavor, this style may also have substantial hop flavor and aroma.',
    history: 'First brewed in the early 1900s. Many trappist and abbey breweries produce a strong beer in this style.',
    relatedstyles: [
        "Belgian Blond Ale", "Belgian Golden Strong Ale"
    ],
    yeast: "",

    trivia: [
        "This style is typically made with three times the malt in the wort and therefore the outcome is a higher ABV. ",
        "n 1933, Westmalle brewery released a beer under the name Superbier, which later the renamed this style.",
        "Traditional beers of this style are bottle-conditioned and may exhibit slight yeast haze, but the yeast should not be intentionally roused.",
    ],
},    {
    type: 'Belgian Blond Ale',
    image: 'belgianblondale.jpg',
    country: 'Belgian',
    color: {
        light: 'Light Gold',
        dark: 'Gold',
        lightSRM: 4,
        darkSRM: 7,
    },
    bitter: {
        type: 'Low',
        lowibu: 15,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'Elevated',
        lowerabv: 6,
        higherabv: 7.5,
    },
    flavor: 'Gold in color and malt-balanced. Malt along with fruity esters gives an impression of sweetness.',
    history: 'Developed to compete with Pilsner-style beers. Often shows slightly less fermentation character than most other Belgian styles.',
    relatedstyles: [
        "Belgian Tripel", "Belgian Golden Strong Ale"
    ], 
    yeast: "",
    trivia: [
        "When lager swept through much of Europe like a firestorm at the turn of the 18th century, Belgian brewers developed this style to get creative if they were going to compete and stay in business. ",
        'Duvel ("devil") is the archetypal Belgian of this style, and one of the most popular bottled beers in the country as well as being well known internationally.',
        "Sticking to their roots the brewers used the same winsome and distinctly Belgian ale yeasts, but changed the grain bill to include the paler pilsner malt; thus creating a new style of beer.",
    ],
}, {
    type: 'Belgian Golden Strong Ale',
    image: 'belgiangoldenstrongale.jpg',
    country: 'Belgian',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3,
        darkSRM: 6,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 22,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'Very High',
        lowerabv: 7.5,
        higherabv: 10.5,
    },
    flavor: 'These light- to medium-bodied beers often hide their substantial alcohol content very well. They are very pale (straw to gold in color) with moderate bitterness, light body, and high carbonation.',
    history: 'Commerical examples often use names that reference the devil. Style originated in the mid 20th-century.',
    relatedstyles: [
        "Belgian Blond", "Belgian Tripel"
    ],
    yeast: "",
    trivia: [
        "The Belgian style is fruity, complex and often on the higher end of the ABV spectrum, yet are approachable to many different palates. ",
        "What sets this style apart is a much higher alcohol content that can range from deliciously hidden to devastatingly present.",
        "A bit sweeter and not as bitter. Often has an almost lager-like character, which gives it a cleaner profile in comparison to the other styles.",
    ],
}, {
    type: 'Saison',
    image: 'saison.jpg',
    country: 'Belgian',
    color: {
        light: 'Light Gold',
        dark: 'Amber',
        lightSRM: 5,
        darkSRM: 14,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5,
        higherabv: 7,
    },
    flavor: 'Fruity esters and peppery phenolic notes from fermentation occasionally fortified by an eclectic mix of herbs and spices. Further complexity from low to medium hop aroma and flavor. High carbonation and high attenuation contribute to dryness.',
    history: 'An artisanal Belgian ale fermented with a distinctive yeast.',
    relatedstyles: [
        "Biere de Garde", "Witbier"
    ],
    yeast: "",
    trivia: [
        "As a beer style, this began as a pale ale brewed in the cooler, less active months in farmhouses in Wallonia, the French-speaking region of Belgium, and stored for drinking in the summer months.",
        "This beer was brewed in the cool months to prevent summer spoilage and to keep farm workers busy in the off season.",
        "Historically, This style did not share enough identifiable characteristics to pin them down as a specific style, but rather were a group of refreshing summer ales made by farmers.",
    ],
}, {
    type: 'Witbier',
    image: 'witbier.jpg',
    country: 'Belgian',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 2,
        darkSRM: 4,
    },
    bitter: {
        type: 'Low',
        lowibu: 8,
        highibu: 20,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.5,
        higherabv: 5.5,
    },
    flavor: 'Spicy wheat ale with refreshing flavors derived both from fermentation and the addition of spices such as coriander and orange peel. Notable for using unmalted wheat for 50% of the recipe.',
    history: 'A Belgian ale with a long history, this style died out in the 1950s, only to be revived in the 1960s by Pierre Celis. Popularity has since grown immensely.',
    relatedstyles: [
        "American Wheat Beer", "Gose", "Saison", "Weissbier", "White IPA"
    ],  
    yeast: "",
    trivia: [
        "This style, also known as bière blanche in the French speaking part of Belgium, an be traced to sustenance brewing, either on the family farm or in monasteries.",
        "The farming communities and monasteries in the province of Broadbent, and particularly around the cities of Leuven and Hoegaarden, became well known for this style.",
        "In the mid 20th century, lagers lead to the downfall of this style, and in 1957, the last Hoegaarden brewery closed shop.",
    ],
}, {
    type: 'Best Bitter',
    image: 'bestbitter.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Gold',
        dark: 'amber',
        lightSRM: 8,
        darkSRM: 16,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 25,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 3.8,
        higherabv: 4.6,
    },
    flavor: 'A "session" beer, flavorful but brewed for drinkability. Balanced toward bitterness but with apparent malt character. Herbal, earthy hoppiness.',
    history: 'A member of the British Bitters family, this style descended from 19th century India Pale Ale.',
    relatedstyles: [
        "Ordinary Bitter", "Scottish Heavy", "Strong Bitter", "English IPA"
    ], 
    yeast: "",
    trivia: [
        "",
    ],
}, {
    type: 'English IPA',
    image: 'englishipa.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Gold',
        dark: 'Amber',
        lightSRM: 6,
        darkSRM: 14,
    },
    bitter: {
        type: 'Assertive',
        lowibu: 40,
        highibu: 60,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5,
        higherabv: 7.5,
    },
    flavor: 'Highly hopped and well-attenuated British ale with herbal and floral hop flavor and high hop bitterness. Hop notes are typically supported by caramel and toasty malt flavors.',
    history: 'Pale ale brewed in English, Scottish & Irish that became extremely popular in the 1800s as an export beer for the Indian market. Associated with Burton breweries and their high sulfate water.',
    relatedstyles: [
        "American IPA", "Best Bitter", "English Barleywine", "Ordinary Bitter", "Strong Bitter"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'British Brown Ale',
    image: 'britishbrownale.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 12,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 5.4,
    },
    flavor: 'Nutty, caramel malt flavors provide the key attraction. Moderate levels of bitterness and possible English hop aroma and flavor.',
    history: 'A moderate strength dark ale, lacking the heavily roasted flavors of porter or stout.',
    relatedstyles: [
        "American Brown Ale", "Dark Mild", "English PorterS"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Sweet Stout',
    image: 'sweetstout.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Dark Brown',
        dark: 'Black',
        lightSRM: 30,
        darkSRM: 40,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4,
        higherabv: 6,
    },
    flavor: 'This beer displays lower bitterness than most stouts to emphasize malt flavor and sweetness. A sub-style called Milk Stout is further sweetened by adding lactose.',
    history: 'First marketed in the early 1900s as a nutritious drink for nursing mothers.',
    relatedstyles: [
        "Irish Stout", "Oatmeal Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Oatmeal Stout',
    image: 'oatmealstout.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Brown',
        dark: 'Black',
        lightSRM: 22,
        darkSRM: 40,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 25,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 5.9,
    },
    flavor: 'This style displays a balance somewhere between an Irish Stout and a Sweet Stout, but often tends towards sweetness with a full creamy mouthfeel.',
    history: 'A variation of stout utilizing oatmeal to enhance body and mouthfeel.',
    relatedstyles: [
        "Irish Stout", "Sweet Stout"
    ]
},    {
    type: 'Wee Heavy',
    image: 'weeheavy.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 14,
        darkSRM: 25,
    },
    bitter: {
        type: 'Low',
        lowibu: 17,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6.5,
        higherabv: 10,
    },
    flavor: 'Rich caramel malt flavors support by light roasted, nutty, or toasted notes. Hop flavor and bitterness are low and balance is firmly towards malt.',
    history: 'Similar in formulation and balance to the Scottish ale styles, but considerably stronger. This style may also be called Scottish Ale, 90 shilling (90/-) or 120 shilling (120/-).',
    relatedstyles: [
        "Scottish Light", "Scottish Heavy", "Scottish Export"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Irish Stout',
    image: 'irishstout.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Brown',
        dark: 'Black',
        lightSRM: 25,
        darkSRM: 40,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 25,
        highibu: 45,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 4,
        higherabv: 4.5,
    },
    flavor: 'This beer has the lowest alcohol content of the many stout variations. Defined by burnt, acrid, coffe-like flavor from roasted barley. Significant bitterness but little to no hop aroma or flavor.',
    history: 'Originally a stronger version of porter, this is now the more varied and well-known style family. It is sometimes labeled as Dry Stout.',
    relatedstyles: [
        "Foreign Extra Stout", "Imperial Stout", "Sweet Stout", "Oatmeal Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'German Pils',
    image: 'germanpils.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 2,
        darkSRM: 5,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 22,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.4,
        higherabv: 5.2,
    },
    flavor: 'Floral, perfumy hops dominant aroma and flavor, criso finish from bitterness. Often has some bread-like pale malt flavor.',
    history: 'German interpretation of the orginal pilsner from Bohemia (Czech Premium Pale Lager). This style is generally paler, lighter bodied, and less malty than Czech Premium Pale Lager.',
    relatedstyles: [
        "Czech Premium Pale Lager", "Kölsch", "Munich Helles"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Munich Helles',
    image: 'munichhelles.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 3,
        darkSRM: 5,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 16,
        highibu: 22,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.7,
        higherabv: 5.4,
    },
    flavor: 'Similar in alcohol and appearance to German Pils but malt balanced so that it shows off the bready flavor of pilsner malt.',
    history: 'Formulated in the 1890s to compete with Pils-style beers. Today it is the everyday drinking beer of Bavaria.',
    relatedstyles: [
        "Festbier", "German Pils", "International Pale Lager"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Czech Premium Pale Lager',
    image: 'czechpremiumpalelager.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3.5,
        darkSRM: 6.5,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 30,
        highibu: 45,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 5.8,
    },
    flavor: 'Generally darker and more malty than German Pils, but with similar levels of aroma, flavor, and bittering hops.',
    history: 'This golden lager is from the Czech Republic city of Pilsen, first brewed in 1842.',
    relatedstyles: [
        "German Pils"
    ],
    yeast: "",
    trivia: [
        "In 1842, the citizens of western Bohemia became grew unhappy with the quality of the beer, decided to build Bürger Brauerei (Citizens’ Brewery) and hired Bavarian brewmaster Josef Groll to brew this syle.",
    ],
}, {
    type: 'Märzen',
    image: 'marzen.jpg',
    country: 'German & Czech',
    color: {
        light: 'Gold',
        dark: 'Dark Amber',
        lightSRM: 8,
        darkSRM: 17,
    },
    bitter: {
        type: 'Low',
        lowibu: 18,
        highibu: 24,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5.8,
        higherabv: 6.3,
    },
    flavor: 'A malt-balanced beer with about 0.5 to 1.0% more alcohol than German Pils or Munich Helles. Most examples show malt flavors of bread, toast, and bread crusts.',
    history: '"March" beers were once brewed strong for long summer storage. In 1810 this style was used to celebrate the royal wedding that has become the modern-day Oktoberfest.',
    relatedstyles: [
        "Festbier", "Munich Dunkel", "Rauchbier", "Vienna Lager"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Helles Bock',
    image: 'hellesbock.jpg',
    country: 'German & Czech',
    color: {
        light: 'Gold',
        dark: 'Light Amber',
        lightSRM: 6,
        darkSRM: 11,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 23,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'Elevated',
        lowerabv: 6.3,
        higherabv: 7.4,
    },
    flavor: 'This beer has the bready, toasty flavors of a pale Doppelbock, but with less alcoholic strength and more hop flavor, aroma, and bitterness.',
    history: 'A pale version of bock made to celebrate Spring, this beer is also referred to as Maibock.',
    relatedstyles: [
        "Doppelbock", "Dunkles Bock"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Doppelbock',
    image: 'doppelbock.jpg',
    country: 'German & Czech',
    color: {
        light: 'Gold',
        dark: 'Brown',
        lightSRM: 6,
        darkSRM: 25,
    },
    bitter: {
        type: 'Low',
        lowibu: 16,
        highibu: 26,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 7,
        higherabv: 10,
    },
    flavor: 'Highly malty and often sweet and thick. The malt character follows beer color with pale examples being bready and toasty while darker examples show toffee and chocolate flavors. Alcohol warnth may be apparent.',
    history: 'This beer was originally brewed by monks as liquid bread for sustenance during fasts.',
    relatedstyles: [
        "Dunkles Bock", "Eisbock", "Helles Bock"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Weissbier',
    image: 'weissbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 2,
        darkSRM: 6,
    },
    bitter: {
        type: 'Low',
        lowibu: 8,
        highibu: 15,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.3,
        higherabv: 5.6,
    },
    flavor: 'Typically this beer has flour-like maltiness of wheat balanced by clove and banana fermentation flavors and high levels of carbonation.',
    history: 'This beer has fluctuated in popularity over several centuries but today is quite popular in Bavaria and beyond. Brewed with at least 50% malted wheat. Fermented with a unique yeast strain that produces banana and clove flavors.',
    relatedstyles: [
        "American Wheat Beer", "Dunkles Weisbier", "Weizenbock", "Witbier"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Berliner Weisse',
    image: 'berlinerweisse.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Straw',
        lightSRM: 2,
        darkSRM: 3,
    },
    bitter: {
        type: 'Low',
        lowibu: 3,
        highibu: 8,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 2.8,
        higherabv: 3.8,
    },
    flavor: 'Low-alcohol german wheat beer with assertive lactic acidity and no hop flavor, aroma, or bitterness. High carbonation and tartness contribute to highly refreshing character.',
    history: 'Historically brewed primarily in and around Berlin, today it is more commonly produced in American craft breweries.',
    relatedstyles: [
        "Gose"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Gose',
    image: 'gose.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 3,
        darkSRM: 4,
    },
    bitter: {
        type: 'Low',
        lowibu: 5,
        highibu: 12,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 4.8,
    },
    flavor: 'Highly carbonated German wheat beer brewed with salt and coriander and fermented with lactic acid bacteria. Beer should be tart and refreshing and should not taste overly salty.',
    history: 'Specialty style brewed historically in Leipzig. Revived in Germany in the late 20th century and now most commonly produced by American craft breweries.',
    relatedstyles: [
        "Berliner Weisse", "Witbier"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Kölsch',
    image: 'kolsch.jpg',
    country: 'German & Czech',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 3.5,
        darkSRM: 5.5,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.4,
        higherabv: 5.2,
    },
    flavor: 'Often described as the ale version of a Pilsner, with subtle fruitiness, delicate malt flavor, and moderate bitterness. High attenuation gives the beer a crisp, refreshing adge.',
    history: 'This beer is classically brewed in Cologne, Germany using ale yeast at cooler temperatures.',
    relatedstyles: [
        "Altbier", "German Pils"
    ],
    yeast: "",
    trivia: [
        "Köbes (special waiters dressed in blue aprons) serve this fantastic ale one after another until you signal you have had enough by placing your coaster on top of your glass.",
    ],
}, {
    type: 'American Light Lager',
    image: 'americanlightlager.jpg',
    country: 'American',
    color: {
        light: 'Straw',
        dark: 'Straw',
        lightSRM: 2,
        darkSRM: 3,
    },
    bitter: {
        type: 'Low',
        lowibu: 8,
        highibu: 12,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 8,
        higherabv: 12,
    },
    flavor: 'Light flavor, thin body, and high carbonation combine to create a highly refreshing beer.',
    history: 'First brewed in the mid-1900s, this style achieved widespread popularity through targeted marketing in the 1970s.',
    relatedstyles: [
        "American Lager", "Cream Ale", "International Pale Lager"
    ],
    yeast: "",
    trivia: [
        "The three top-selling beers in the US, by Budweiser and Miller Coors, are of what style?",
    ],
}, {
    type: 'American Wheat Beer',
    image: 'americanwheatbeer.jpg',
    country: 'American',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3,
        darkSRM: 6,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 15,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4,
        higherabv: 5.5,
    },
    flavor: 'Light malt flavor includes flour and bread notes from wheat. Hop character varies from low to moderate. Does not have the clove-banana fermentation traits of German wheat beers.',
    history: "This is the American craft brewers' interpretation of German wheat beer",
    relatedstyles: [
        "American Blonde Ale", "Weissbier", "Witbier"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'American Blonde Ale',
    image: 'americanblondeale.jpg',
    country: 'American',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3,
        darkSRM: 6,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 15,
        highibu: 28,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 3.8,
        higherabv: 5.5,
    },
    flavor: 'Bread and light biscuit notes from pale malts. Variable level of hop flavor and gentle bitterness.',
    history: 'A lightly flavored alt-malt beer.',
    relatedstyles: [
        "American Wheat Beer"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'American Pale Ale',
    image: 'americanpaleale.jpg',
    country: 'American',
    color: {
        light: 'Light Gold',
        dark: 'Light Amber',
        lightSRM: 5,
        darkSRM: 10,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 30,
        highibu: 50,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.5,
        higherabv: 6.2,
    },
    flavor: 'Citrus and pine flavors of American hop varieties are evident - and usually dominant - in aroma and flavor. Low to medium malt base with some caramel and toast notes.',
    history: 'A classic beer of the American craft beer movement.',
    relatedstyles: [
        "American Amber Ale", "American IPA"
    ],
    yeast: "",
    trivia: [
        "California, 1975. Anchor Brewing brews its first batch of Liberty Ale, reviving the art of dry-hopping and kicking off the American brewing revolution.",
        "American malt gives this style a softer and somewhat crisper feel than it's English counterpart.",
        "Beers of this style are often slightly less balanced, showing a stronger hop profile, then their English brothers.",
    ],
}, {
    type: 'American Amber Ale',
    image: 'americanamberale.jpg',
    country: 'American',
    color: {
        light: 'Light Amber',
        dark: 'Dark Amber',
        lightSRM: 10,
        darkSRM: 17,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 25,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.5,
        higherabv: 6.2,
    },
    flavor: 'These ales have the evident citrus and pine hoppiness of American Pale Ale with a richer malt base that includes dark caramel and toasted flavors. Both malt and hops are medium to high in flavor impact.',
    history: 'Developed as a variation of American Pale Ale, this style is sometimes referred to as "Red Ale"',
    relatedstyles: [
        "American Pale Ale", "California Common"
    ],
    yeast: "",
    trivia: [
        "Darker in color than their pale ale cousins, the presence of caramel and crystal malts lending a toasted, toffee flavor, along with the perception of a fuller body when compared to beers without such malts.",
        "A highly versatile companion to American cuisine, particularly foods that are grilled or barbecued, as roasted malts complement seared, charred and caramelized proteins making this ale beer type a perennial favorite at backyard cookouts.",
        "The first and most obvious characteristic of this style is the reddish color, and while closely related to Irish red ales, they tend to use more floral accented hops. ",
    ],
}, {
    type: 'American IPA',
    image: 'americanipa.jpg',
    country: 'American',
    color: {
        light: 'Gold',
        dark: 'Amber',
        lightSRM: 0,
        darkSRM: 0,
    },
    bitter: {
        type: 'Assertive',
        lowibu: 40,
        highibu: 70,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5.5,
        higherabv: 7.5,
    },
    flavor: 'This style is defined by the assertive presence of American hops in aroma, flavor, and bitterness. Resinous, citrus hop traits dominate aroma and flavor.',
    history: 'The original "pale" ale of English, Scottish & Irish, commonly exported to India and later adopted for domestic consumption. The first American interpretations were brewed in the 1970s, and the style found widespread popularity beginning in the 1990s.',
    relatedstyles: [
        "American Pale Ale", "Black IPA", "Double IPA", "English IPA", "White IPA"
    ],
    yeast: "",
    trivia: [
        "Unlike the weaker, less, hopped versions that were still available in Britain; the American version harked back to that time when hops and alcohol where piled on to help transported beer arrive in good condition.",
        "Created with bigger grain bills and loads of hops this reinvention was made to be sipped fresh out of the brewhouse. All the glorious citrus, floral nuance, and fruitful flavor of American hop varieties taking front and center.",
    ],
}, {
    type: 'Double IPA',
    image: 'doubleipa.jpg',
    country: 'American',
    color: {
        light: 'Gold',
        dark: 'Amber',
        lightSRM: 6,
        darkSRM: 14,
    },
    bitter: {
        type: 'Highly Assertive',
        lowibu: 60,
        highibu: 120,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'High',
        lowerabv: 7.5,
        higherabv: 10,
    },
    flavor: 'This style is characterized by an extreme expression of American hops in aroma, flavor, and bitterness. Maltiness may be subdued by the use of sugar to lighten the body.',
    history: 'This style was born in the mid 1990s from the increasing popularity of hop-forward IPAs.',
    relatedstyles: [
        "American IPA", "American Barleywine"
    ],
    yeast: "",
    trivia: [
        "The first of this style seems to have been brewed by Vinnie Cilurzo back in June of 1994 for the now closed Blind Pig Brewery of Temecula, California. This was followed in 1996 by Rogue Brewing and in 1998 by Stone Brewing",
        "Also called Imperial IPA and IIPA, this beer style is a higher alcohol, hoppier version of the American IPA.",
    ],
}, {
    type: 'American Brown Ale',
    image: 'americanbrownale.jpg',
    country: 'American',
    color: {
        light: 'Dark Amber',
        dark: 'Black',
        lightSRM: 18,
        darkSRM: 35,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Noraml',
        lowerabv: 4.3,
        higherabv: 6.2,
    },
    flavor: 'A malt-dominated style with rich toasty, caramel, and chocolate flavors complemented by low to medium levels of American hops and medium bitterness.',
    history: 'A classic beer of the American craft beer movement, loosely based on British Brown Ale but with higher hopping rate.',
    relatedstyles: [
        "British Brown Ale"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'American Porter',
    image: 'americanporter.jpg',
    country: 'American',
    color: {
        light: 'Brown',
        dark: 'Black',
        lightSRM: 22,
        darkSRM: 40,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 25,
        highibu: 50,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 4.8,
        higherabv: 6.5,
    },
    flavor: 'Displays dark malt flavors like chocolate and roast without intense acrid or burnt flavors of stout. Hopping vaires widely.',
    history: 'Porter history extends back to the early 1700s, but this more modern version includes black patent malt, which dates form about 1817. Porters made without this are known as English Porter.',
    relatedstyles: [
        "American Stout", "Baltic Porter", "English Porter", "Foreign Extra Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'American Stout',
    image: 'americanstout.jpg',
    country: 'American',
    color: {
        light: 'Dark Brown',
        dark: 'Black',
        lightSRM: 30,
        darkSRM: 40,
    },
    bitter: {
        type: 'Assertive',
        lowibu: 35,
        highibu: 75,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5,
        higherabv: 7,
    },
    flavor: 'The roasty, coffee flavors of stout form the malt base of this beer, supported by moderate citrus and resinous American hops in flavor, aroma, and bitterness.',
    history: 'An American variation of Foreign Extra Stout.',
    relatedstyles: [
        "American Porter", "Black IPA", "Foreign Extra Stout", "Imperial Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Imperial Stout',
    image: 'imperialstout.jpg',
    country: 'American',
    color: {
        light: 'Dark Brown',
        dark: 'Black',
        lightSRM: 30,
        darkSRM: 40,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 50,
        highibu: 90,
    },
    alcohol: {
        lowerdesc: 'Hign',
        higherdesc: 'Very High',
        lowerabv: 8,
        higherabv: 12,
    },
    flavor: 'Intense roasted flavors of chocolate and coffee with medium to high hop bitterness. Dark and dried fruit notes are common. The additional alcohol may impart a warming quality to the mouthfeel.',
    history: 'Originally born from the British porter tradition, this hogh alcohol dark ale was very popular with the Russian Imperial Court in the early 1800s. Today, it is most commonly produced by American craft breweries.',
    relatedstyles: [
        "American Stout", "Baltic Porter", "Foreign extra Stout", "Irish Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'American Barleywine',
    image: 'americanbarleywine.jpg',
    country: 'American',
    color: {
        light: 'Light Amber',
        dark: 'Light Brown',
        lightSRM: 10,
        darkSRM: 19,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 50,
        highibu: 100,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'Very High',
        lowerabv: 8,
        higherabv: 12,
    },
    flavor: 'This style typically show high levels of American hop aroma, flavor, and bitterness as well as rich caramel and coffee malt flavors in a robust, high-alcohol ale.',
    history: 'Inspired by English Barleywine, though brewed with American ingredients and a substantially higher hopping rate.',
    relatedstyles: [
        "Double IPA", "English Barleywine"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'California Common',
    image: 'californiacommon.jpg',
    country: 'American',
    color: {
        light: 'Light Amber',
        dark: 'Amber',
        lightSRM: 10,
        darkSRM: 14,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 30,
        highibu: 45,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.5,
        higherabv: 5.5,
    },
    flavor: 'Malty amber beer made with lager yeast fermented at warmer temperatures. Woody or minty hop flavor with firm bitterness for clean finish.',
    history: 'This most flavorful of indigenous American beer styles originated as "steam beer" in the late 1800s.',
    relatedstyles: [
        "American Amber Ale"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'International Pale Lager',
    image: 'internationalpalelager.jpg',
    country: 'Other',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 2,
        darkSRM: 6,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.6,
        higherabv: 6,
    },
    flavor: 'Lightly flavored with low hop bitterness and water cracker or white bread malt flavor. Typically highly carbonated with a crisp, light body.',
    history: 'Similar to American Lagers, though often brewed with a lower portion of adjuncts, and may be all malt.',
    relatedstyles: [
        "American Lager", "American Light Lager", "Munich Helles"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Lambic',
    image: 'lambic.jpg',
    country: 'Belgian',
    color: {
        light: 'Straw',
        dark: 'Gold',
        lightSRM: 3,
        darkSRM: 7,
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
        higherabv: 6.5,
    },
    flavor: 'Noticeable lactic acidity and sourness, often coupled with barnyard or horse blanket traits.',
    history: 'Spontaneously fermented ale from the Senne River valley region, served uncarbonated and rarely found outside of Belgium.',
    relatedstyles: [
        "Fruit Lambic", "Gueuze"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Oud Bruin',
    image: 'oudbruin.jpg',
    country: 'Belgian',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 15,
        darkSRM: 22,
    },
    bitter: {
        type: 'Low',
        lowibu: 20,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'High',
        lowerabv: 4,
        higherabv: 8,
    },
    flavor: 'Malt flavors of caramel, toffee, and chocolate are common, along with dark or dried fruit flavors and gentle acidity.',
    history: 'Asociated with East Flanders, this beer is typically soured in stainless steel, rather than wood.',
    relatedstyles: [
        "Flander's Red Ale"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Belgian Dark Strong Ale',
    image: 'belgiandarkstrongale.jpg',
    country: 'Belgian',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 12,
        darkSRM: 22,
    },
    bitter: {
        type: 'Low',
        lowibu: 20,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'Very High',
        lowerabv: 8,
        higherabv: 12,
    },
    flavor: 'Alcohol generally well hidden by a blend of dark and dried fruit notes. Spicy yeast notes. Often percieved as a more intense version of Dubbel.',
    history: 'A bit of a catch-all category for strong, dark Belgian beers, this is where so-called "quadrupel" beers are calssified.',
    relatedstyles: [
        "Belgian Dubbel"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Belgian Pale Ale',
    image: 'belgianpaleale.jpg',
    country: 'Belgian',
    color: {
        light: 'Gold',
        dark: 'Amber',
        lightSRM: 8,
        darkSRM: 14,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.8,
        higherabv: 5.5,
    },
    flavor: 'Gold to amber in color with medium bitterness. This Belgian variant shows fruity and spicy fermentation flavors not seen in British-style pale ales.',
    history: 'Modern interpretations of the style show British influences and date back to the mid-1900s.',
    relatedstyles: [
        "Strong Bitter"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Biere de Garde',
    image: 'bieredegarde.jpg',
    country: 'Belgian',
    color: {
        light: 'Gold',
        dark: 'Light Brown',
        lightSRM: 6,
        darkSRM: 19,
    },
    bitter: {
        type: 'Low',
        lowibu: 18,
        highibu: 28,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6,
        higherabv: 8.5,
    },
    flavor: 'Malt driven with malt flavor determined by color, which ranges from blonde to brown. Well attenuated.',
    history: "Traditionally produced in France near it's border with Belgium. Classic producers often make blonde, amber, and brown variations.",
    relatedstyles: [
        "Siason"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Ordinary Bitter',
    image: 'ordinarybitter.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Gold',
        dark: 'Amber',
        lightSRM: 8,
        darkSRM: 14,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 25,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 3.2,
        higherabv: 3.8,
    },
    flavor: 'Similar to Best Bitter but lower in alcohol and lighter in both malt and hop flavors.',
    history: 'The lowest alcohol member of the bitter family. Made for drinking in volume and often the best selling beer in Bristish pubs.',
    relatedstyles: [
        "Best Bitter", "English IPA", "Strong Bitter"
    ],
    yeast: "",
    trivia: [
        "During the 20th century, this was the most popular type of beer sold on tap in UK pubs; some consider it “the national drink of England.”",
"Originally a draught ale served very fresh under no pressure (gravity or hand pump only) at cellar temperatures.",
"The lightest of the bitters. Strength up to 4.1% abv. A number of British beers with the name India Pale Ale will be found in this group,",
    ],
}, {
    type: 'Strong Bitter',
    image: 'strongbitter.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Gold',
        dark: 'Dark Amber',
        lightSRM: 8,
        darkSRM: 18,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 30,
        highibu: 50,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 4.6,
        higherabv: 6.2,
    },
    flavor: 'Malt flavors of caramel, biscuit, and toast are balanced by herbal, earthy hop flavor and firm hop bitterness.',
    history: 'The strongest of the three bitter ale styles.',
    relatedstyles: [
        "Belgian Pale Ale", "Best Bitter", "English IPA", "Ordinary Bitter"
    ],
    yeast: "",
    trivia: [
        "Strength of 4.8% abv and over. Also known as Extra Special Bitter, or in Canada and the US, ESB.",
        "Can be seen as a higher-gravity version of best bitters (although not necessarily “more premium” since best bitters are traditionally the brewer’s finest product).",
        "ESB is a brand name in the UK owned by Fuller Brewing and first brewed in 1971 as a replacement for a beer called Old Burton Extra.",  
    ],
}, {
    type: 'Dark Mild',
    image: 'darkmild.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 12,
        darkSRM: 25,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 10,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 3.0,
        higherabv: 3.8,
    },
    flavor: 'This style sometimes has a tannin-like dryness and include toasty, caramelly, chocolatey, and even slightly roasted malt flavors. Minimal hopping means that Dark Mild is generally malt balanced.',
    history: 'Historically, This style was a general name for fresh, unaged beer. Today, the name refers to a lower alcohol dark style ale.',
    relatedstyles: [
        "British Brownn Ale", "English Porter"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'English Porter',
    image: 'englishporter.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Light',
        dark: 'Dark Brown',
        lightSRM: 20,
        darkSRM: 30,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.0,
        higherabv: 5.4,
    },
    flavor: 'Made with black malt, This beer is toasty and nutty with some caramel notes, little to no hop flavor, and a balance ranging from slightly malty to slightly bitter. There may also be mild to moderate notes of roastiness.',
    history: 'Modern examples are the present-day descendants of the original, pre-roating drum porters, and is sometimes refered to as Brown Porter.',
    relatedstyles: [
        "American Porter", "British Brown Ale", "Dark Mild"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Foreign Extra Stout',
    image: 'foreignextrastout.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'dark Brown',
        dark: 'Black',
        lightSRM: 30,
        darkSRM: 40,
    },
    bitter: {
        type: 'Assertive',
        lowibu: 50,
        highibu: 70,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6.3,
        higherabv: 8,
    },
    flavor: 'In terms of alcoholic strength, this falls between Irish Stout and Imperial Stout. The flavor is dominated by notes of roasted grain, chocolate, and coffee.',
    history: 'Also sometimes known as "double stout", "export stout", or simply "foreign stout".',
    relatedstyles: [
        "Irish Stout", "American Porter", "American Stout", "Imperial Stout"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Old Ale',
    image: 'oldale.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Light Amber',
        dark: 'Brown',
        lightSRM: 10,
        darkSRM: 22,
    },
    bitter: {
        type: 'Pronounced',
        lowibu: 30,
        highibu: 60,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'High',
        lowerabv: 5.5,
        higherabv: 9,
    },
    flavor: 'Sweet with malt flavors of caramel, toffe, treacle, or molasses, as well as frutiy esters. Oxidation flavors such as sherry or port may exist, as well as other flavors from lactic acid bacteria and Brettanomyces.',
    history: 'Traditionally aged at the brewery as a stock ale, much like early vatted porters. Today this beer is commonly a blend of fresh and stock ales.',
    relatedstyles: [
        "English Barleywine"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'English Barleywine',
    image: 'englishbarleywine.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Gold',
        dark: 'brown',
        lightSRM: 8,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 35,
        highibu: 70,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'Very High',
        lowerabv: 8,
        higherabv: 12,
    },
    flavor: 'Intense flaovors of biscuit, toast, caramel, and molasses, and sometimes dark or dried fruit. Earthy or herbal English hop flavor and aroma may be present.',
    history: 'This sits atop the "ladder" of English plae ales, following a similar formulation to English IPA and bitter, but increased ABV and flavor intensity.',
    relatedstyles: [
        "American Barleywine", "English IPA", "Old Ale"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Scottish Light',
    image: 'scottishlight.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Dark Amber',
        dark: 'Brown',
        lightSRM: 17,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 10,
        highibu: 20,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 2.5,
        higherabv: 3.2,
    },
    flavor: 'The lowest ABV of the Scottish ales, this beer features nutty, toasty, and caramel malt flavors and low bitterness.',
    history: 'Sometimes referred to as 60 Schilling (60/-).',
    relatedstyles: [
        "Ordinary Bitter", "Scottish Export", "Scottish Heavy", "Wee Heavy"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Scottish Heavy',
    image: 'scottishheavy.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 13,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 10,
        highibu: 20,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Lower',
        lowerabv: 3.2,
        higherabv: 3.9,
    },
    flavor: 'Low bitterness and few fruity esters allow toasty, nutty, and caramel malt flavors to shine.',
    history: 'Sometimes referred to as 70 Shilling (70/-).',
    relatedstyles: [
        "Best Bitter", "Scottish Export", "Scottish Light", "Wee heavy"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Scottish Export',
    image: 'scottishexport.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 13,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 15,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 3.9,
        higherabv: 6,
    },
    flavor: 'As with its lower-ABV counterparts, Scottish Export tends to balance toward nutty, caramel malt flavors.',
    history: 'The strongest of the three scottish ales, sometimes referred to as 80 Shilling (80/-).',
    relatedstyles: [
        "Scottish Heavy", "Scottish Light", "Strong Bitter", "Wee Heavy"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Irish Red Ale',
    image: 'irishredale.jpg',
    country: 'English, Scottish & Irish',
    color: {
        light: 'Light Amber',
        dark: 'Amber',
        lightSRM: 9,
        darkSRM: 14,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 28,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 3.8,
        higherabv: 5,
    },
    flavor: 'Malt balanced with moderate flavors of caramel, toast, or toffee, and little to no hop aroma or flavor.',
    history: 'This style typically gets its red color from the addition of a small amount of roasted barley.',
    relatedstyles: [
        "Scottish Export", "Strong Bitter"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Vienna Lager',
    image: 'viennalager.jpg',
    country: 'German & Czech',
    color: {
        light: 'Light Amber',
        dark: 'Amber',
        lightSRM: 9,
        darkSRM: 15,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.7,
        higherabv: 5.5,
    },
    flavor: 'Bread, biscuit, and toasty malt flavors dominate the flavor profile. Finishes fairly dry with moderate bitterness.',
    history: 'A close relative of Märzen, this beer is typically made with 100% Vienna malt rather than Munich malt.',
    relatedstyles: [
        "Märzen"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Festbier',
    image: 'festbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Light Gold',
        dark: 'Gold',
        lightSRM: 4,
        darkSRM: 7,
    },
    bitter: {
        type: 'Low',
        lowibu: 18,
        highibu: 25,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5.8,
        higherabv: 6.3,
    },
    flavor: 'Malt balanced with white bread and water cracker flavors and light sweetness. Low to moderate bitterness with low noble hop aroma and flavor.',
    history: "The beer associated with Munich's Oktoberfest celebration. Once identical to Märzen, this beer has become paler in recent years to appeal to consumer tastes.",
    relatedstyles: [
        "Märzen", "Munich Helles"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Munich Dunkel',
    image: 'munichdunkel.jpg',
    country: 'German & Czech',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 14,
        darkSRM: 28,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 18,
        highibu: 28,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.5,
        higherabv: 5.6,
    },
    flavor: 'Malt dominated, with flavors of toast and biscuit, sometimes enhanced by a touch of caramel, chocolate, or nutty flavor. Little or no hop aroma or flavor, but modest hop bitterness keeps the beer from being sweet.',
    history: 'This dark lager was the everyday drinking beer of Bavaria until being overtaken by Munich Helles in the 20th century.',
    relatedstyles: [
        "Dunkles Bock", "Märzen"
    ],
    yeast: "",
    trivia: [
        "Negro Modelo (brewd in Mexico by Grupo Modelo) and Harpoon Dark (brewed in MA by Harppon) are suprisingly what style?",
    ],
}, {
    type: 'Schwarzbier',
    image: 'schwarzbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Dark Amber',
        dark: 'Dark Brown',
        lightSRM: 17,
        darkSRM: 30,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'normal',
        lowerabv: 4.4,
        higherabv: 5.4,
    },
    flavor: 'Toasty malt flavors with restrained roasted and chocolate notes. Moderate levels of bitterness and dry finish.',
    history: 'Meaning "black beer" in German, this style initially evolved as a darker variant of Munich Dunkel.',
    relatedstyles: [
        "Munich Dunkel"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Rauchbier',
    image: 'rauchbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 12,
        darkSRM: 22,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.8,
        higherabv: 6,
    },
    flavor: 'Strong smoky flavors of bacon, brisket, and campfire. Additional malt flavors tend to be toasty and biscuit like.',
    history: 'A specialty of Bamberg, this beer features intense smoky flavors from beechwood-smoked malt.',
    relatedstyles: [
        "Märzen"
    ],
    yeast: "",
    trivia: [
        "Before Daniel Wheeler invented his drum kiln in 1818 and changed the course of brewing history forever, the only way to dry malt was directly over an open fire, often resulting in this style. ",
        "There are currently nine breweries within the city of Bamberg, and two of these have become synonymous with this traditional style — Bauerei Schlenkerla and Christian Merz Brauerei Spezial.",
        "Because drying malt over a fire has a long history, this style has probably been created for over 5000 years.",
    ],
}, {
    type: 'Dunkles Bock',
    image: 'dunklesbock.jpg',
    country: 'German & Czech',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 14,
        darkSRM: 22,
    },
    bitter: {
        type: 'Low',
        lowibu: 20,
        highibu: 27,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'Elevated',
        lowerabv: 6.3,
        higherabv: 7.2,
    },
    flavor: 'Toast, bread crust, and nutty malt flavors, with just enough hop bitterness to prevent the beer from becoming overly sweet.',
    history: 'Although "bock" translates directly to "goat", this style name comes from a corruption of Einbeck, the town in which the style originated.',
    relatedstyles: [
        "Doppelbock", "Helles Bock"
    ],
    yeast: "",
    trivia: [
        "The style was a dark, malty, lightly hopped ale first brewed in the 14th century by German brewers in the Hanseatic town of Einbeck.",
        "This style is historically associated with special occasions, often religious festivals such as Christmas, Easter or Lent.",
        "Less alcohol and malty richness than a Doppelbock. Stronger malt flavors and higher alcohol than a Märzen. Richer, less attenuated, and less hoppy than a Czech Amber Lager. ",
    ],
}, {
    type: 'Eisbock',
    image: 'eisbock.jpg',
    country: 'German & Czech',
    color: {
        light: 'Dark Amber',
        dark: 'Dark Brown',
        lightSRM: 18,
        darkSRM: 30,
    },
    bitter: {
        type: 'Low',
        lowibu: 25,
        highibu: 35,
    },
    alcohol: {
        lowerdesc: 'High',
        higherdesc: 'Very High',
        lowerabv: 9,
        higherabv: 14,
    },
    flavor: 'Rich, toasty, and caramel malt flavors with significant alcohol warmth and very full body. Often displays substantial dark fruit flavors.',
    history: 'Made by freezing Doppelbock and removing the water content, thus concentrating the alcohol content and creating this very strong, rich beer.',
    relatedstyles: [
        "Dopplebock"
    ],
    yeast: "",
    trivia: [
        "It is said that this style was invented at the Reichelbräu brewery in Kulmbach, Upper Franconia, around 1890 when some kegs of bock were unwittingly left outside on a particularly frigid night.",
        "This style is also rarely found in the U.S. because of alcohol laws that put the method in the same category as other forms of distillation.",
        "Today, this style may be one of the rarest beer styles around due to the expense and effort that goes into producing it. ",        
    ],
}, {
    type: 'Dunkles Weissbier',
    image: 'dunklesweissbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Amber',
        dark: 'Brown',
        lightSRM: 14,
        darkSRM: 25,
    },
    bitter: {
        type: 'Low',
        lowibu: 10,
        highibu: 18,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.3,
        higherabv: 5.6,
    },
    flavor: 'Banana and clove fermentation profile balanced by toast and caramel flavors from the use of Munich and Vienna-type malts.',
    history: 'A dark variation of Weissbier, German versions of this style must still include at least 50% wheat malt.',
    relatedstyles: [
        "Weissbier", "Weizenbock"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Weizenbock',
    image: 'weizenbock.jpg',
    country: 'German & Czech',
    color: {
        light: 'Gold',
        dark: 'Brown',
        lightSRM: 6,
        darkSRM: 25,
    },
    bitter: {
        type: 'Low',
        lowibu: 15,
        highibu: 30,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6.5,
        higherabv: 9,
    },
    flavor: 'Intense banana and clove flavors are typical, with malt flavors ranging from bready to nutty to toasty, depending on the color.',
    history: 'In Germany, this style must conform to two regulations: the grain bill must contain at least 50% wheat malt and the original gravity must be at least 16° P.',
    relatedstyles: [
        "Dunkles Weissbier", "Weissbier"
    ],
    yeast: "",
    trivia: [
        "In 15th century Bavaria, the brewing of this style was completely controlled by the aristocratic family Degenberger. it was restricted to those in a higher social class.",
        "In 1872, the King Ludwig II, of the Wittelsbach House and current ruler of Bavaria, discontinued all brewing of this style due to the sharply declining sales.",
        "Georg Schneider was a private brewer who had taken over the contract at the royal Bavarian Weisses Hofbrauhaus in Munich in 1855 and resurrected this style. ",
    ],
}, {
    type: 'Altbier',
    image: 'altbier.jpg',
    country: 'German & Czech',
    color: {
        light: 'Light Amber',
        dark: 'Dark Amber',
        lightSRM: 11,
        darkSRM: 17,
    },
    bitter: {
        type: 'Pronouncd',
        lowibu: 25,
        highibu: 50,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Normal',
        lowerabv: 4.3,
        higherabv: 5.5,
    },
    flavor: 'Toasty, nutty, and bread crust malt flavors tempered by assertive hop bitterness and a dry finish.',
    history: 'Meaning "old", these beers are brewed in the "old way", using ale yeast, but cool fermentation temperatures and lagering give a flavor profile with low levels of fruity esters.',
    relatedstyles: [
        "Kölsch "
    ],
    yeast: "",
    trivia: [
        "This style of beer is classcially brewed in the historical region of Westphalia and around the city of Düsseldorf, Germany. ",
        "The market leader in terms of volume sold is Diebels, a brand within the AB InBev brewing empire. Other mass-market brewers include the Radeberger Gruppe under the brands Schlösser Alt and Hansa Alt. ",
        "This style  is fermented at a moderate temperature using a top-fermenting yeast which gives its flavour some fruitiness, but matured at a cooler temperature, which gives it a cleaner and crisper taste.",
    ],
}, {
    type: 'American Lager',
    image: 'americanlager.jpg',
    country: 'American',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 2,
        darkSRM: 4,
    },
    bitter: {
        type: 'Low',
        lowibu: 8,
        highibu: 18,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 5.3,
    },
    flavor: 'A lightly flavored lager with low levels of grain or corn sweetness and above-average carbonation.',
    history: '19th century American brewers added corn or rice to beer recipes to improve clarity.',
    relatedstyles: [
        "American Light Lager", "Cream Ale"
    ],
    yeast: "",
    trivia: [
        "When John Wagner, a Bavarian brewer, arrived in America in 1840, he came with some precious cargo: a supply of special yeast from his native Bavaria to make this style. ",
        "To conteract higher protien American grains, German-American brewers began adding lower-protein grains, like rice and corn, to more closely emulate the German verison of this style.",
        "This style especially took off in popularity in New York, where, by 1877, George Ehret’s Hell Gate Brewery became the largest in the country.",
    ],
}, {
    type: 'Black IPA',
    image: 'blackipa.jpg',
    country: 'American',
    color: {
        light: 'Brown',
        dark: 'Black',
        lightSRM: 25,
        darkSRM: 40,
    },
    bitter: {
        type: 'Highly Assertive',
        lowibu: 50,
        highibu: 90,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'High',
        lowerabv: 5.5,
        higherabv: 9,
    },
    flavor: 'Defined by assertive presence of American hop varieties along with some roasty - but not burnt - malt flavors.',
    history: 'Variant of American IPA. Some examples are labeled as Cascadian Dark Ale in the Pacific Northwest US.',
    relatedstyles: [
        "American IPA", "American Stout"
    ],
    yeast: "",
    trivia: [
        "Most USA writers point toward the early ‘90s as the first period where anyone was regularly brewing beers that we would today identify as this style.",
        "No American craft beer style has ever generated more contentious debate than this style when it comes to nomenclature. ",
        "Brands of this style include Avery Brewing Co. New World Porter, Firestone Walker Wookey Jack, and Stone Enjoy By",
    ],
}, {
    type: 'White IPA',
    image: 'whiteipa.jpg',
    country: 'American',
    color: {
        light: 'Light Gold',
        dark: 'Gold',
        lightSRM: 5,
        darkSRM: 8,
    },
    bitter: {
        type: 'Assertive',
        lowibu: 40,
        highibu: 70,
    },
    alcohol: {
        lowerdesc: 'Normal',
        higherdesc: 'Elevated',
        lowerabv: 5.5,
        higherabv: 7,
    },
    flavor: 'Citrus or tropical fruit hop flavors blend with yeast derived esters and potential coriander spice. Finishes dry with assertive bitterness.',
    history: 'Developed as a hybrid of American IPA and Belgian Witbier.',
    relatedstyles: [
        "American IPA", "Witbier"
    ],
    yeast: "",
    trivia: [
        "In 2010, Larry Sidor, the brewmaster at Oregon-based Deschutes Brewery, and Belgian-born Steven Pauwels, brewmaster at Boulevard Brewing, got together to develop a collaboration recipe.",
        "Deschutes called theirs Conflux Series No. 2 and Boulevard’s was simply named Collaboration No. 2 under their Smoke House Series. In 2010, they were a hit!",
        "With a little more heft than a Brut IPA and less hangover-inducing punch than a Hazy IPA, the style is your summer-ready version.",
    ],
}, {
    type: 'Cream Ale',
    image: 'creamale.jpg',
    country: 'American',
    color: {
        light: 'Straw',
        dark: 'Light Gold',
        lightSRM: 2.5,
        darkSRM: 5,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 8,
        highibu: 20,
    },
    alcohol: {
        lowerdesc: 'Lower',
        higherdesc: 'Normal',
        lowerabv: 4.2,
        higherabv: 5.6,
    },
    flavor: 'Although similar in appearance and alcohol to American Lager, this style usually has a distinct corn-like malt character and low but apparent bitterness.',
    history: 'Though referred to as an ale, this style is sometimes brewed with a lager yeast strain. Commonly produced by ale brewers to compete with the popularity of American lagers.',
    relatedstyles: [
        "American Lager", "American Light Lager"
    ],
    yeast: "",
    trivia: [
        ""
    ],
}, {
    type: 'Baltic Porter',
    image: 'balticporter.jpg',
    country: 'Other',
    color: {
        light: 'Dark Amber',
        dark: 'Dark Brown',
        lightSRM: 17,
        darkSRM: 30,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6.5,
        higherabv: 9.5,
    },
    flavor: 'Low roast character is supported by toasty, caramel, and sometime licorice notes. Some dark fruit aroma is possible.',
    history: 'A higher ABV variation of porter that gained popularity in the Baltic countries. Often brewed with lager yeast, but ale versions are sometimes seen.',
    relatedstyles: [
        "American Porter", "Imperial Stout", "Schwarzbier"
    ],
    
    yeast: "",
    trivia: [
        ""
    ],
},  {
    type: 'Baltic Porter',
    image: 'balticporter.jpg',
    country: 'Other',
    color: {
        light: 'Dark Amber',
        dark: 'Dark Brown',
        lightSRM: 17,
        darkSRM: 30,
    },
    bitter: {
        type: 'Moderate',
        lowibu: 20,
        highibu: 40,
    },
    alcohol: {
        lowerdesc: 'Elevated',
        higherdesc: 'High',
        lowerabv: 6.5,
        higherabv: 9.5,
    },
    flavor: 'Low roast character is supported by toasty, caramel, and sometime licorice notes. Some dark fruit aroma is possible.',
    history: 'A higher ABV variation of porter that gained popularity in the Baltic countries. Often brewed with lager yeast, but ale versions are sometimes seen.',
    relatedstyles: [
        "American Porter", "Imperial Stout", "Schwarzbier"
    ],
    
    yeast: "",
    trivia: [
        ""
    ],
}, ];