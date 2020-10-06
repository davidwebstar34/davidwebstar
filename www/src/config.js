// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6657vp9kcsifbfpqpg1l5fbobo",     // CognitoClientID
  "api_base_url": "https://jrtrvarlr0.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "davidwebstar-davidwebstar.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1568o94m5wfn9.amplifyapp.com"                                      // AmplifyURL
};

export default config;
