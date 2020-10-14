//setting the data for all the restaurants
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
    history: 'The most common styles of Fruit Lambic are Kriekm (aged with cherries) and Framboise (aged with raspberries)',
    relatedstyles: [
        "Gueuze", "Flander's Red", "Lambic"
    ]
},  {
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
    ]
},  {
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
    ]
},   {
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
    flavor: 'Characterized by fruity esters and spicy/peppery phenols produced during fermentation. Medium bodied with a slight sweetness and pale malt flavor, Belgian Tripels may also have substantial hop flavor and aroma.',
    history: 'First brewed in the early 1900s. Many trappist and abbey breweries produce a beer in this style.',
    relatedstyles: [
        "Belgian Blond Ale", "Belgian Golden Strong Ale"
    ]
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
    flavor: 'Gold in color and malt-balanced. Malt along with frutiy esters gives an impression of sweetness.',
    history: 'Developed to compete with Pilsner-style beers. Often shows slightly less fermentation character than most other Belgian styles.',
    relatedstyles: [
        "Belgian Tripel", "Belgian Golden Strong Ale"
    ]
},     {
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
    ]
},     {
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
    history: 'AN artisanal Belgian ale fermented with a distinctive yeast.',
    relatedstyles: [
        "Biere de Garde", "Witbier"
    ]
},     {
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
    history: 'A Belgian ale with a long history, Witbier died out in the 1950s, only to be revived in the 1960s by Pierre Celis. Popularity has since grown immensely.',
    relatedstyles: [
        "American Wheat Beer", "Gose", "Saison", "Weissbier", "White IPA"
    ]
},     {
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
    history: 'A member of the British Bitters family, descended from 19th century India Pale Ale.',
    relatedstyles: [
        "Ordinary Bitter", "Scottish Heavy", "Strong Bitter", "English IPA"
    ]
},     {
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
    history: 'Pale ale brewed in England that became extremely popular in the 1800s as an export beer for the Indian market. Associated with Burton breweries and their high sulfate water.',
    relatedstyles: [
        "American IPA", "Best Bitter", "English Barleywine", "Ordinary Bitter", "Strong Bitter"
    ]
},     {
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
    ]
},     {
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
    flavor: 'Sweet Stout displays lower bitterness than most stouts to emphasize malt flavor and sweetness. A sub-style of Sweet Atout called Milk Stout is further sweetened by adding lactose.',
    history: 'First marketed in the early 1900s as a nutritious drink for nursing mothers.',
    relatedstyles: [
        "Irish Stout", "Oatmeal Stout"
    ]
},     {
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
    flavor: 'Oatmeal stout displays a balance somewhere between an Irish Stout and a Sweet Stout, but often tends towards sweetness with a full creamy mouthfeel.',
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
    ]
},   {
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
    flavor: 'Irish Stout has the lowest alcohol content of the many stout variations. Defined by burnt, acrid, coffe-like flavor from roasted barley. Significant bitterness but little to no hop aroma or flavor.',
    history: 'Originally a stronger version of porter, stout is now the more varied and well-known style family. Irish STout is sometime labeled as Dry Stout.',
    relatedstyles: [
        "Foreign Extra Stout", "Imperial Stout", "Sweet Stout", "Oatmeal Stout"
    ]
},   {
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
    ]
},   {
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
    ]
},   {
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
    history: 'Golden lager from Czech Republic city of Pilsen, first brewed in 1842.',
    relatedstyles: [
        "German Pils"
    ]
},   {
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
    history: 'Märzen (March) beers were once brewed strong for long summer storage. In 1810 Märzen was used to celebrate the royal wedding that has become the modern-day Oktoberfest.',
    relatedstyles: [
        "Festbier", "Munich Dunkel", "Rauchbier", "Vienna Lager"
    ]
},   {
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
    flavor: 'Has the bready, toasty flavors of a pale Doppelbock, but with less alcoholic strength and more hop flavor, aroma, and bitterness.',
    history: 'A plae version of bock made to celebrate Spring. Also referred to as Maibock.',
    relatedstyles: [
        "Doppelbock", "Dunkles Bock"
    ]
},   {
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
    history: 'Originally brewed by monks as liquid bread for sustenance during fasts.',
    relatedstyles: [
        "Dunkles Bock", "Eisbock", "Helles Bock"
    ]
},   {
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
    flavor: 'Flour-like maltiness of wheat balanced by clove and banana fermentation flavors and high levels of carbonation.',
    history: 'Weissbier has fluctuated in popularity over several centuries but today is quite popular in bavaria and beyond. Brwed with at least 50% malted wheat. Fermented with a unique yeast strain that produces banana and clove flavors.',
    relatedstyles: [
        "American Wheat Beer", "Dunkles Weisbier", "Weizenbock", "Witbier"
    ]
},   {
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
    ]
},   {
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
    ]
},   {
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
    history: 'Brewed in Cologne, Germany using ale yeast at cooler temperatures.',
    relatedstyles: [
        "Altbier", "German Pils"
    ]
},   {
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
    history: 'First brewed in the mid-1900s, American Light Lagers achieved widespread popularity through targeted marketing in the 1970s.',
    relatedstyles: [
        "American Lager", "Cream Ale", "International Pale Lager"
    ]
},   {
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
    flavor: 'Light malt flovor includes flour and bread notes from wheat. Hop character varies from low to moderate. Does not have the clove-banana fermentation traits of German wheat beers.',
    history: "American craft brewers' interpretation of German wheat beer",
    relatedstyles: [
        "American Blonde Ale", "Weissbier", "Witbier"
    ]
},  {
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
    history: 'Lightly flavored alt-malt beer.',
    relatedstyles: [
        "American Wheat Beer"
    ]
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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
},  {
    type: '',
    image: '',
    country: '',
    color: {
        light: '',
        dark: '',
        lightSRM: 0,
        darkSRM: 0,
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