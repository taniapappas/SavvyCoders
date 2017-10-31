var story = {
    "choices": [ "investigate", "turn" ]
},
"investigate": {
-        "prompt": "investigate was called!",
+        "prompt": "As you draw closer, you notice a herd of camels. But where are their riders? Should you approach, or watch from a distance in case of ambush? Type 'approach' or 'wait' to continue",
+        "choices": [ "approach", "wait" ]
 },
 "turn": {
-        "prompt": "turn was called!"
+        "prompt": "You turn around (uh-oh), and find that Der Komissar's in town (uh-oh!). You continue dancing into the sunset."
+    },
+    "approach": {
+        "prompt": "As you get close, you are trampled by camels. A few of them also spit on you. It's very humiliating, and terminal."
+    },
+    "wait": {
+        "prompt": "What could you possibly be waiting for? It's a desert! You run out of water, thinking of how delicious camel must taste instead of sand."
 }
};
/* eslint-disable complexity */
function runStory( node ){
    var branch = story[node];
    var choices = branch.choices;
    var userInput;
    var isCorrectChoice = false;
    //var i = 0;

    if( !choices ){
        alert( branch.prompt );
    }
    else{
        userInput = prompt( branch.prompt );

        // while( !isCorrectChoice && i < choices.length){
        //    isCorrectChoice = userInput === choices[i];

        //    i++;

        // }
        for(let 1 = 0; !isCorrectChoice && i < choices.length; 1++ ){
            isCorrectChoice = userInput === choices[i];
        }

        if( isCorrectChoice ){
            runStory( userInput );
        }
        else{
            runStory( node );
        }
    }
}
runStory( "start" );
