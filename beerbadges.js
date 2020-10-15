    ///formatting the full beer card
    function makeFullBeerCard() {
        fullBeerCard =
            '<div class="card border-secondary text-center"> \
        <div class="card-body"> \
            <h4 class="text-center m-0">' + (i + 1) + '.   <i class="fas fa-Beer"></i> ' + beerData[i].type + ' </h4>\
            <img class="card-img-top" src="./assets/images/beerpics/' + beerData[i].image + '" alt="' + beerData[i].type + ' picture"> \
            <p class="text-center m-0"><em>' + beerData[i].country + '</em></p>\
            <p class="card-title">Color: ' + beerData[i].color.light + ' to ' + beerData[i].color.dark + ' (' + beerData[i].color.lightSRM + ' to ' + beerData[i].color.darkSRM + ' SRM)</p>\
            <p class="card-title">' + beerData[i].bitter.type + ' Bitterness (' + beerData[i].bitter.lowibu + ' to ' + beerData[i].bitter.highibu + ' IBU)</p>\
            <p class="card-title">' + beerData[i].alcohol.lowerdesc + ' to ' + beerData[i].alcohol.higherdesc + ' Alcohol </p>\
            <p class="card-title">(' + beerData[i].alcohol.lowerabv + '% to ' + beerData[i].alcohol.higherabv + '% ABV)</p>\
            <p class="card-title">' + beerData[i].flavor + '</p>\
            <p class="card-title"><em>' + beerData[i].history+ '</em></p>\
        </div> \
    </div>';
        document.getElementById("contentdiv").innerHTML += fullBeerCard;
    }

    function listAll() {
        for (i = 0; i < beerData.length; i++) {
            makeFullBeerCard();
            console.log(beerData[i].type)
        }
    }

    listAll();