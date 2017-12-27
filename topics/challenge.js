
(function() {
    var Question = function(question, answer, correct) {
        this.question = question;
        this.answer = answer;
        this.correct = correct;
    } 

    // Prototyping
    Question.prototype.getQuestion = function() {
        console.log(this.question);
        for (i = 0; i < this.answer.length; i++) {
            console.log(this.answer[i]);
        }
        console.log('----------------------------------------------');
    }

    Question.prototype.checkAnswer = function (answer, callback) {
        var sc;
        if (answer == this.correct) {
            console.log('Great!');
            sc = callback(true);
        } else {
            console.log('Try again later :)');
            sc = callback(false);
        }

        this.dispayScore(sc);
    }

    Question.prototype.dispayScore = function(score) {
        console.log('Your score is :' + score);
    }

    var questions = [];

    questions.push(new Question('What is your name?', ['Mike', 'John'], 0));
    questions.push(new Question('What is your car?', ['GM', 'Mercedes'], 0));
    questions.push(new Question('What is your house?', ['Big', 'Small'], 0));

    function score() {
        var sc = 0;
        return function(correct) {
            if (correct) { sc++;}
            return sc;
        }
    } 

    var keepScore = score();

    function nextQuestion() {
        var random = Math.round(Math.random() * (questions.length - 1));
        
        questions[random].getQuestion();
         
        var answer = prompt('Please answer as number:');
        
        if (answer !== 'exit') {
            questions[random].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        }
    }

    nextQuestion();
    
})();













