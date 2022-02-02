/* eslint-disable no-undef */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  const createdAt = timeago.format(data.created_at);

  const createTweetElement = (tweetData) => {
    
    const tweet = $(`
  <div class="tweet-box">
  <div class="box">
    <div class="content-left">
    <img class="image" src="${tweetData.user.avatars}"/>
    <p class="name">${tweetData.user.name}</p>
  </div>
  <div class="content-right">
    <p>${tweetData.user.handle}</p>
  </div>
</div>
<p class="text">${tweetData.content.text}</p>
<hr class="tweet-divider"/>
<div class="box">
  <div class="content-left">
    <p>${createdAt}</p>
  </div>
  <div class="content-right">
    <i class="fas fa-flag icon"></i>
    <i class="fas fa-retweet icon"></i>
    <i class="fas fa-heart icon"></i>
  </div>
</div>
</div>
  `);
    return tweet;
  };

  $("#tweet-text").submit(function(event) {
    alert("Handler for .submit() called.");
    event.preventDefault();
  });

  const renderTweet = (data) => {
    for (let user of data) {
      const showTweet = createTweetElement(user);
      $('#tweets-container').prepend(showTweet);
    }
  };

  const $tweet = renderTweet(data);
  // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  $('#tweets-container').append($tweet);
  
});