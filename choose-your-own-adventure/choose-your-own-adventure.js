var story = {
    "start": "A spring green grasshopper leaps from the tall blonde grass onto your arm and stares up up you. Can you hear what it is whispering?"
};

function runStory(){
    var userInput = prompt( story.start );

    if( !userInput ){
        runStory();
    }
    else{

    }
}

runStory();
