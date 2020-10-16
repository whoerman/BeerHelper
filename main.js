    //formatting the full beer card
    function makeFullBeerCard() {
        fullBeerCard =
            '<div class="card border-secondary text-center"> \
        <div class="card-body"> \
            <h4 class="text-center m-0">' + (i + 1) + '.   <i class="fas fa-Beer"></i> ' + beerData[i].type + ' </h4>\
            <p class="text-center m-0"><em>' + beerData[i].country + '</em></p>\
            <img class="card-img-top float-left" src="./assets/images/beerpics/' + beerData[i].image + '" alt="' + beerData[i].type + ' picture"> \
            <p class="card-title m-0"><strong>Color: ' + beerData[i].color.light + ' to ' + beerData[i].color.dark + '</strong><em> (' + beerData[i].color.lightSRM + ' to ' + beerData[i].color.darkSRM + ' SRM)</em> </p>\
            <p class="card-title m-0"><strong>' + beerData[i].bitter.type + ' Bitterness</strong><em> (' + beerData[i].bitter.lowibu + ' to ' + beerData[i].bitter.highibu + ' IBU)</em></p>\
            <p class="card-title m-0"><strong>' + beerData[i].alcohol.lowerdesc + ' to ' + beerData[i].alcohol.higherdesc + ' Alcohol </strong></p>\
            <p class="card-title m-0"><em>(' + beerData[i].alcohol.lowerabv + '% to ' + beerData[i].alcohol.higherabv + '% ABV)</em></p>\
            <p class="card-title m-0">' + beerData[i].flavor + '</p>\
            <p class="card-title m-0"><em>' + beerData[i].history + '</em></p>\
        </div> \
    </div>';
        document.getElementById("contentdiv").innerHTML += fullBeerCard;
    }

    //formatting the full glass type card
    function makeFullGlassTypeCard() {
        fullGlassTypeCard =
            '<div class="card border-secondary text-center"> \
            <div class="card-body"> \
                <h4 class="text-center m-0"> Glassware Type: </h4>\
                <h4 class="text-center m-0">' + (i + 1) + '.   <i class="fas fa-Beer"></i> ' + glassTypeData[i].type + ' </h4>\
                <p class="text-center m-0"><em>' + glassTypeData[i].country + '</em></p>\
                <img class="card-img-top float-right" src="./assets/images/beerpics/' + glassTypeData[i].image + '" alt="' + beerData[i].type + ' picture"> \
                <p class="card-title">' + glassTypeData[i].description + '</p>\
            </div> \
        </div>';
        document.getElementById("contentdiv").innerHTML += fullGlassTypeCard;
    }

    //setting up quiz formats

    //making the card types as needed

    ///formatting the flavor question card
    function makeFlavorQuestionCard() {
        flavorQuestionCard =
            '<div class="card border-secondary text-center"> \
                        <div class="card-body"> \
                            <h4 class="text-center m-0"> Match the Flavor: </h4>\
                            <img class="card-img-sidebar float-right" src="./assets/images/beerpics/' + beerData[i].image + '" alt="' + beerData[i].type + ' picture"> \
                            <p class="card-title"><em>' + beerData[i].flavor + '</em></p>\
                            <h6 class="text-center m-0"><em> Hint: ' + beerData[i].country + '</em></h6>\
                            <div id="answerSection">' + answerOptionsCard + '</div>\
                        </div> \
                    </div>';
        document.getElementById("contentdiv").innerHTML += flavorQuestionCard;
    }

    ///formatting the history question card
    function makeHistoryQuestionCard() {
        historyQuestionCard =
            '<div class="card border-secondary text-center"> \
                            <div class="card-body"> \
                                <h4 class="text-center m-0"> Match the History: </h4>\
                                <img class="card-img-sidebar float-right" src="./assets/images/beerpics/' + beerData[i].image + '" alt="' + beerData[i].type + ' picture"> \
                                <p class="card-title"><em>' + beerData[i].history + '</em></p>\
                                <h6 class="text-center m-0"><em> Hint: ' + beerData[i].country + '</em></h6>\
                                <div id="answerSection">' + answerOptionsCard + '</div>\
                            </div> \
                        </div>';
        document.getElementById("contentdiv").innerHTML += historyQuestionCard;
    }

    ///formatting the profile question card
    function makeProfileQuestionCard() {
        profileQuestionCard =
            '<div class="card border-secondary text-center"> \
                                <div class="card-body"> \
                                    <h4 class="text-center m-0"> Match the Profile: </h4>\
                                    <p class="text-center m-0"><em>' + beerData[i].country + '</em></p>\
                                    <img class="card-img-sidebar float-right" src="./assets/images/beerpics/' + beerData[i].image + '" alt="' + beerData[i].type + ' picture"> \
                                    <h6 class="card-title">Color: ' + beerData[i].color.light + ' to ' + beerData[i].color.dark + ' (' + beerData[i].color.lightSRM + ' to ' + beerData[i].color.darkSRM + ' SRM)</h6>\
                                    <h6 class="card-title">' + beerData[i].bitter.type + ' Bitterness (' + beerData[i].bitter.lowibu + ' to ' + beerData[i].bitter.highibu + ' IBU)</h6>\
                                    <h6 class="card-title">' + beerData[i].alcohol.lowerdesc + ' to ' + beerData[i].alcohol.higherdesc + ' Alcohol </h6>\
                                    <h6 class="card-title">(' + beerData[i].alcohol.lowerabv + '% to ' + beerData[i].alcohol.higherabv + '% ABV)</h6>\
                                    <h6 class="text-center m-0"><em> Hint: ' + beerData[i].country + '</em></h6>\
                                    <div id="answerSection">' + answerOptionsCard + '</div>\
                                    </div> \
                            </div>';
        document.getElementById("contentdiv").innerHTML += profileQuestionCard;
    }


    //making answer buttons
    function makeAnswerButtons() {
        answerOptionsCard =
            '<div>\
                <button type="button" id="answerAButton" class="btn btn-warning btn-block m-1">A: ' + answerArray[0] + '</button>\
                <button type="button" id="answerBButton" class="btn btn-warning btn-block m-1">B: ' + answerArray[1] + '</button>\
                <button type="button" id="answerCButton" class="btn btn-warning btn-block m-1">C: ' + answerArray[2] + '</button>\
                <button type="button" id="answerDButton" class="btn btn-warning btn-block m-1">D: ' + answerArray[3] + '</button> \
                </div>';
    }

    //adding event listeners once the answer buttons are made
    function addAnswerListeners() {
        document.getElementById("answerAButton").addEventListener("click", function () {
            chosenAnswer = answerArray[0];
            processResult();
        });
        document.getElementById("answerBButton").addEventListener("click", function () {
            chosenAnswer = answerArray[1];
            processResult();
        });
        document.getElementById("answerCButton").addEventListener("click", function () {
            chosenAnswer = answerArray[2];
            processResult();
        });
        document.getElementById("answerDButton").addEventListener("click", function () {
            chosenAnswer = answerArray[3];
            processResult();
        });
    }

    //shuffling the answer Array
    function shuffle(answerArray) {
        var currentIndex = answerArray.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = answerArray[currentIndex];
            answerArray[currentIndex] = answerArray[randomIndex];
            answerArray[randomIndex] = temporaryValue;
        }

        return answerArray;
    }



    //making the game

    //piccking a random beer out of the list
    function pickRandomBeer() {
        i = Math.floor(Math.random() * beerData.length)
        currentBeer = beerData[i];
        //sub array of all the beers from that region
        subBeerCountryArray = beerData.filter(function (randomBeer) {
            return randomBeer.country === currentBeer.country;
        });
    }


    //making an array of answers including the chosen one
    function makeAnswerArray() {
        //putting the random beer in the answer array which also resets it
        answerArray = [
            currentBeer.type
        ];
        subBeerCountryArray = subBeerCountryArray.filter(function (randomBeer) {
            return randomBeer.type !== currentBeer.type;
        });
        //picking a random beer 1, adding it to the answer buttons, then removing it from the choices
        randomBeer1 = subBeerCountryArray[Math.floor(Math.random() * subBeerCountryArray.length)]
        answerArray.push(randomBeer1.type);
        subBeerCountryArray = subBeerCountryArray.filter(function (randomBeer) {
            return randomBeer.type !== randomBeer1.type;
        });
        //picking a random beer 2, adding it to the answer buttons, then removing it from the choices
        randomBeer2 = subBeerCountryArray[Math.floor(Math.random() * subBeerCountryArray.length)]
        answerArray.push(randomBeer2.type);
        subBeerCountryArray = subBeerCountryArray.filter(function (randomBeer) {
            return randomBeer.type !== randomBeer2.type;
        });
        //picking a random beer, adding it to the answer buttons, then removing it from the choices
        randomBeer3 = subBeerCountryArray[Math.floor(Math.random() * subBeerCountryArray.length)]
        answerArray.push(randomBeer3.type);
        console.log(answerArray);
        //shuffling the 4 answers
        shuffle(answerArray);
        makeAnswerButtons();
    }

    //first question
    pickRandomBeer();
    makeAnswerArray();
    makeHistoryQuestionCard();
    addAnswerListeners();

    function newFlavorQuestion() {
        document.getElementById("contentdiv").innerHTML = "";
        pickRandomBeer();
        makeAnswerArray();
        makeHistoryQuestionCard();
        addAnswerListeners();
    }


    function processResult() {
        if (chosenAnswer == currentBeer.type) {
            console.log("correct");
            newFlavorQuestion();
        } else {
            console.log("wrong");
            newFlavorQuestion();
        }
    };