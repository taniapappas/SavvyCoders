function promptAndGreetUser(){
    var userInput = prompt( "What is your name?" );

    if( !userInput ){
        userInput = prompt( "What's your name, for reals?" );
    }
    else{
        alert( "Hello, " + userInput );
    }
}
promptAndGreetUser();
