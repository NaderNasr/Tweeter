$(document).ready(function() {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  const createTweetElement = (tweetData) => {
    const tweet = $(`
  <div class="tweet-box">
  <div class="box">
    <div class="content-left">
    <img class="image" src=""/>
    <p class="name">Newton</p>
  </div>
  <div class="content-right">
    <p>@SirIsaac</p>
  </div>
</div>
<p class="text">If I have seen further it is by standing on the shoulders of giants </p>
<hr class="tweet-divider"/>
<div class="box">
  <div class="content-left">
    <p>10 days ago</p>
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

  const $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});