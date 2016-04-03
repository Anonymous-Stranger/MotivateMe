
/**
 * MotivateMe -- a small application for hope during seg faults and other demonic infestations. 
 * author: Akash
 */

/**
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, motivate me"
 *  Alexa: "..."
 */

/**
 * App ID for the skill
 */
var APP_ID = undefined; //replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";

/**
 * Array containing motivational quotes.
 */
var QUOTES = ["Good, better, best. Never let it rest. &#39;Til your good is better and your better is best. - St. Jerome","In order to succeed, we must first believe that we can. - Nikos Kazantzakis","Either you run the day or the day runs you. - Jim Rohn","Accept the challenges so that you can feel the exhilaration of victory. - George S. Patton","Life is 10% what happens to you and 90% how you react to it. - Charles R. Swindoll","Failure will never overtake me if my determination to succeed is strong enough. - Og Mandino","What you do today can improve all your tomorrows. - Ralph Marston","A creative man is motivated by the desire to achieve, not by the desire to beat others. - Ayn Rand","You are never too old to set another goal or to dream a new dream. - C. S. Lewis","It does not matter how slowly you go as long as you do not stop. - Confucius","Keep your eyes on the stars, and your feet on the ground. - Theodore Roosevelt","The secret of getting ahead is getting started. - Mark Twain","When you reach the end of your rope, tie a knot in it and hang on. - Franklin D. Roosevelt","A good plan violently executed now is better than a perfect plan executed next week. - George S. Patton","Always do your best. What you plant now, you will harvest later. - Og Mandino","With the new day comes new strength and new thoughts. - Eleanor Roosevelt","If you can dream it, you can do it. - Walt Disney","Start where you are. Use what you have. Do what you can. - Arthur Ashe","Don&#39;t watch the clock; do what it does. Keep going. - Sam Levenson","Aim for the moon. If you miss, you may hit a star. - W. Clement Stone","Problems are not stop signs, they are guidelines. - Robert H. Schuller","Knowing is not enough; we must apply. Willing is not enough; we must do. - Johann Wolfgang von Goethe","There is only one corner of the universe you can be certain of improving, and that&#39;s your own self. - Aldous Huxley","We may encounter many defeats but we must not be defeated. - Maya Angelou","You can&#39;t cross the sea merely by standing and staring at the water. - Rabindranath Tagore","Go for it now. The future is promised to no one. - Wayne Dyer","Things do not happen. Things are made to happen. - John F. Kennedy","Either I will find a way, or I will make one. - Philip Sidney","Your talent is God&#39;s gift to you. What you do with it is your gift back to God. - Leo Buscaglia","I&#39;d rather attempt to do something great and fail than to attempt to do nothing and succeed. - Robert H. Schuller","Without hard work, nothing grows but weeds. - Gordon B. Hinckley","Pursue one great decisive aim with force and determination. - Carl von Clausewitz","Be kind whenever possible. It is always possible. - Dalai Lama","The key is to keep company only with people who uplift you, whose presence calls forth your best. - Epictetus","Perseverance is failing 19 times and succeeding the 20th. - Julie Andrews","Arriving at one goal is the starting point to another. - John Dewey","Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better. - Samuel Beckett","A goal is a dream with a deadline. - Napoleon Hill","Do something wonderful, people may imitate it. - Albert Schweitzer","You simply have to put one foot in front of the other and keep going. Put blinders on and plow right ahead. - George Lucas","There&#39;s a way to do it better - find it. - Thomas A. Edison","Do you want to know who you are? Don&#39;t ask. Act! Action will delineate and define you. - Thomas Jefferson","Never give up, for that is just the place and time that the tide will turn. - Harriet Beecher Stowe","By failing to prepare, you are preparing to fail. - Benjamin Franklin","One finds limits by pushing them. - Herbert Simon","No bird soars too high if he soars with his own wings. - William Blake","Motivation will almost always beat mere talent. - Norman Ralph Augustine","True happiness involves the full use of one&#39;s power and talents. - John W. Gardner","Do not wait to strike till the iron is hot; but make it hot by striking. - William Butler Yeats","I attribute my success to this - I never gave or took any excuse. - Florence Nightingale","Big shots are only little shots who keep shooting. - Christopher Morley","Be gentle to all and stern with yourself. - Saint Teresa of Avila","Expect problems and eat them for breakfast. - Alfred A. Montapert","There is always room at the top. - Daniel Webster","Even if you fall on your face, you&#39;re still moving forward. - Victor Kiam","Don&#39;t fight the problem, decide it. - George C. Marshall","After a storm comes a calm. - Matthew Henry","Step by step and the thing is done. - Charles Atlas","Change your life today. Don&#39;t gamble on the future, act now, without delay. - Simone de Beauvoir","The more we do, the more we can do. - William Hazlitt","Don&#39;t give up. Don&#39;t lose hope. Don&#39;t sell out. - Christopher Reeve","Who seeks shall find. - Sophocles","Never complain and never explain. - Benjamin Disraeli","Poverty was the greatest motivating factor in my life. - Jimmy Dean","From my tribe I take nothing, I am the maker of my own fortune. - Tecumseh","I know not age, nor weariness nor defeat. - Rose Kennedy","Know or listen to those who know. - Baltasar Gracian","I&#39;ve always tried to go a step past wherever people expected me to end up. - Beverly Sills","Do whatever you do intensely. - Robert Henri"];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * MotivateMe is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var MotivateMe = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
MotivateMe.prototype = Object.create(AlexaSkill.prototype);
MotivateMe.prototype.constructor = MotivateMe;

MotivateMe.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("MotivateMe onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

MotivateMe.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("MotivateMe onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewMotivationRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
MotivateMe.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("MotivateMe onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

MotivateMe.prototype.intentHandlers = {
    "GetNewMotivationIntent": function (intent, session, response) {
        handleNewMotivationRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask me for motivation, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random motivational quote from the list and returns to the user.
 */
function handleNewMotivationRequest(response) {
    // Get a random movational quote from the quotes list
    var quoteIndex = Math.floor(Math.random() * QUOTES.length);
    var quote = QUOTES[quoteIndex];

    // Create speech output
    var speechOutput = quote;

    response.tellWithCard(speechOutput, "MotivateMe", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the MotivateMe skill.
    var mm = new MotivateMe();
    mm.execute(event, context);
};