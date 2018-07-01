export default function(){
  var that =  {
                sendMessage: sendMessage
              };


  function sendMessage(form) {
    return initializeAWSconfig()
      .then(function() {
        return sendFormToAWS(form)
                .then( result => result )
                .catch( error => error );
      })
      .catch( error => error );
  }

  function initializeAWSconfig() {
    return new Promise((resolve, reject) => {
      var LPAWS = {};

      // Initialize the Amazon Cognito credentials provider
      AWS.config.region = 'us-east-1'; // Region
      AWS.config.credentials = new AWS.CognitoIdentityCredentials({
          IdentityPoolId: 'us-east-1:54c6da73-e1de-481f-ad08-c29c7b3401b9',
      });

      AWS.config.credentials.get(function(err) {
        return err ? reject(err) : resolve();
      });
    });
  } 

  function sendFormToAWS(form) {
    return new Promise((resolve, reject) => {
      var sns = new AWS.SNS();
      var params =  {
                      Message: form, /* required */
                      Subject: 'Browser SNS publish - contact form',
                      TopicArn: 'arn:aws:sns:us-east-1:519664206156:contact-aimeelally'
                    };

      sns.publish(params, function(err, data) {
        return err ? reject(err) : resolve(); 
      });

    }); 
  }
 
  return that;

};
