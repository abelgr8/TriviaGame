$("#start").on("click", function () {
    game.start();
})

$(document).on("click","#end", function() {
    game.done();
})

var questions = [{
    question:"What player scored the most points in one game?",
    answers:["Kobe Bryant", "Wilt Chamberlain" , "LeBron James"],
    correctAnswer:"Wilt Chamberlain"
}, {
    question:"What team has the best record in one season?",
    answers:["2015-2016 Golden State Warriors", "1995-1996 Chicago Bulls" , "1994-1995 Chicago Bulls"],
    correctAnswer:"2015-2016 Golden State Warriors"
}, {
    question:"What team holds the record for the most points scored in one season?",
    answers:["1981-82 Denver Nuggets", "1995-1996 Chicago Bulls" , "1994-1995 Chicago Bulls"],
    correctAnswer:"1981-82 Denver Nuggets"
}, {
    question:"Who is the first player to be drafted #1 without playing college or high school basketball in the U.S.?",
    answers:["LeBron James", "Yao Ming", "Carmelo Anthony"],
    correctAnswer:"Yao Ming"
}, {
    question:"What player has the most career personal fouls?",
    answers:["Steve Nash", "Kwame Brown", "Kareem Abdul-Jabbar"],
    correctAnswer:"answer2"
}, {
    question:"What player has the highest career 3-pt FG percentage?",
    answers:["Kyle Korver", "Steve Kerr", "Mahmoud Abdul-Rauf"],
    correctAnswer:"Steve Kerr"
}, {
    question:"What current team has the worst franchise W-L percentage?",
    answers:["Los Angeles Clippers", "Atlanta Hawks" , "Minnesota Timberwolves"],
    correctAnswer:"Minnesota Timberwolves"
}];

var game = {
    correct: 0,
    wrong: 0,
    counter: 30,
    countdown: function() {
        game.counter--;
        $("#counter").html(game.counter);
        if (game.counter<=0){
            console.log("times up!");
            game.done();
        }
    },
    start: function () {
        timer = setInterval(game.countdown,1000);
        $("#subwrapper").prepend('<h2>Time Left:<span id ="counter">30</span> seconds</h2>');
        $("#start").remove();
        for (var i = 0; i < questions.length; i++) {
            $("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
            for (var j = 0; j < questions[i].answers.length; j++) {
                $("#subwrapper").append("<input type ='radio' name ='question-" + i + "'value='" + questions[i].answers[j] + "'>" + questions[i].answers[j]);
            }
        }
        console.log("game started test");
        $("#subwrapper").append('<br><button id="end">Done</button>');
    },
    done: function () {
        $.each($("input[name='question-0']:checked"), function () {
            if ($(this).val() == questions[0].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-1']:checked"), function () {
            if ($(this).val() == questions[1].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-2']:checked"), function () {
            if ($(this).val() == questions[2].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-3']:checked"), function () {
            if ($(this).val() == questions[3].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-4']:checked"), function () {
            if ($(this).val() == questions[4].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-5']:checked"), function () {
            if ($(this).val() == questions[5].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });
        $.each($("input[name='question-6']:checked"), function () {
            if ($(this).val() == questions[6].correctAnswer) {
                game.correct++;
            } else {
                game.wrong++;
            }
        });

        this.result();
    },

    result: function() {
        clearInterval(timer);
        $("#subwrapper h2").remove();
        $("#subwrapper").html("<h2>Game Over<h2>");
        $("#subwrapper").append("<h3>Correct Answers: " + this.correct + "<h3>");
        $("#subwrapper").append("<h3>Wrong Answers: " + this.wrong + "<h3>");
        $("#subwrapper").append("<h3> Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
        console.log("results");
    }
}