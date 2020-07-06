const core = require('@actions/core');
const github = require('@actions/github');
const twitter = require('twitter');

try {
    console.log(`Hello ${github}!`);
    console.log(`Hello ${core}!`);
    console.log(`The event payload: ${github.context}`);

    console.log(github.context.payload.repository.html_url);

    // tweet
    var client = new Twitter({
        // secretsはActionsから直接手を伸ばせない（出来たら危険だ）ので、workflowから引き渡したのを受け取る
        consumer_key: core.getInput("consumer_key"),
        consumer_secret: core.getInput("consumer_secret"),
        access_token_key: core.getInput("access_token_key"),
        access_token_secret: core.getInput("access_token_secret")
    });
    // refから組み上げなきゃな気がする
    const message = github.context.ref
    client.post('statuses/update', {
        status: message
    }, function (error, tweet, response) {
        if (error) throw error;
        console.log(tweet);
        console.log(response);
    });
} catch (error) {
    core.setFailed(error.message);
}