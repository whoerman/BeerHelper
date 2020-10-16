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
                                <h4 class="text-center m-0"> Match the Story: </h4>\
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
                <button type="button" id="answerAButton" class="btn btn-warning btn-block m-1">A: ' + answerA + '</button>\
                <button type="button" id="answerBButton" class="btn btn-warning btn-block m-1">A: ' + answerB + '</button>\
                <button type="button" id="answerCButton" class="btn btn-warning btn-block m-1">A: ' + answerC + '</button>\
                <button type="button" id="answerDButton" class="btn btn-warning btn-block m-1">A: ' + answerD + '</button> \
                </div>';
        }

        //adding event listeners once the answer buttons are made
        function addAnswerListeners() {
            document.getElementById("answerAButton").addEventListener("click", function () {
                chosenAnswer = answerA;
                processResult();
            });
            document.getElementById("answerBButton").addEventListener("click", function () {
                chosenAnswer = answerB;
                processResult();
            });
            document.getElementById("answerCButton").addEventListener("click", function () {
                chosenAnswer = answerC;
                processResult();
            });
            document.getElementById("answerDButton").addEventListener("click", function () {
                chosenAnswer = answerD;
                processResult();
            });
        }



//area for stuff I am using to work on the program
    function listAll() {
        for (i = 0; i < beerData.length; i++) {
            makeFullBeerCard();
            console.log(beerData[i].type)
        }
    }

    function listGlassAll() {
        for (i = 0; i < glassTypeData.length; i++) {
            makeFullGlassTypeCard();
            console.log(glassTypeData[i].type)
        }
    }

    function listFlavorQuestionAll() {
        for (i = 0; i < beerData.length; i++) {
            makeFlavorQuestionCard();
            console.log(beerData[i].type)
        }
    }

    function listHistoryQuestionAll() {
        for (i = 0; i < beerData.length; i++) {
            makeHistoryQuestionCard();
            console.log(beerData[i].type)
        }
    }

    function listProfileQuestionAll() {
        for (i = 0; i < beerData.length; i++) {
            makeProfileQuestionCard();
            console.log(beerData[i].type)
        }
    }

    let answerA = "American IPA";
    let answerB = "Gose";
    let answerC = "Schwarzbier";
    let answerD = "irish Stout";
    makeAnswerButtons();

    // listAll();
    // listGlassAll();
    // listFlavorQuestionAll();
    // listHistoryQuestionAll();
    // listProfileQuestionAll();

    i = Math.floor(Math.random() * beerData.length)
    makeHistoryQuestionCard();

    addAnswerListeners();
    
    function processResult() {
        console.log(chosenAnswer);
    };
   