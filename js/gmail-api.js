function handleFormSubmit(event) {
    event.preventDefault();

    gapi.load('client:auth2', initClient);
  }

  function initClient() {
    gapi.client.init({
      apiKey: 'AIzaSyBc0hSwHv9VEM2bQJjMJIUcAeEIXBgBXBU',
      clientId: '608742337926-oqspq81spu1b88hpmsea95nbtsabu27c.apps.googleusercontent.com',
      discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
      scope: 'https://www.googleapis.com/auth/gmail.send'
    }).then(function () {
      gapi.auth2.getAuthInstance().signIn().then(function () {
        sendMessage();
      });
    });
  }

  function sendMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var emailContent = [
      'From: ' + name,
      'Email: ' + email,
      'Subject: ' + subject,
      '',
      message
    ].join('\n');

    var encodedEmail = btoa(emailContent).replace(/\+/g, '-').replace(/\//g, '_');

    var request = gapi.client.gmail.users.messages.send({
      'userId': 'steeve.developeracc@gmail.com',
      'resource': {
        'raw': encodedEmail
      }
    });

    request.execute(function (response) {
      console.log(response);
      alert('Email sent successfully');
    });
  }

