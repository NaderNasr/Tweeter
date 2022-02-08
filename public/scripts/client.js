/* eslint-disable no-undef */
$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1644211103058
    }
  ];

  const escape = (str) => {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweet = (data) => {
    //Does not post duplicates
    $('#tweets-container').html(" ");

    for (let user of data) {
      const showTweet = createTweetElement(user);
      $('#tweets-container').prepend(showTweet);
    }
  };

  const createTweetElement = (tweetData) => {
    const safeHTML = `${escape(tweetData.content.text)}`;
    const createdAt = timeago.format(tweetData.created_at);
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
<p class="text">${safeHTML}</p>
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

  const $tweet = renderTweet(data);
  $('#tweets-container').append($tweet);

  // Load the tweets from the /tweets/ JSON file
  const loadTweets = () => {
    $.ajax({
      type: 'GET',
      url: '/tweets',
    }).done((result) => {
      renderTweet(result);
    }).fail((error) => {
      console.log("ERROR: ", error.message);
    });
  };

  //On submit form button post the data to /tweets/
  $("#tweet-text").submit(function(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({type: 'POST', data: data, url: '/tweets' })
      .done(() => {
        event.target.reset();
        const textCounter = $(this).closest("section").find("output")[0];
        const tweetTextCount = $(this).val().length;
        textCounter.innerHTML = 140 - tweetTextCount;
        //Load new tweet
        loadTweets();
      }).fail(() => {
        $("#inputEmpty").show();
        console.log('There are no tweets');
      });
  });

  

  loadTweets();
  
});