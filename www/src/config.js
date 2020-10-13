// You can obtain these values by running:
// aws cloudformation describe-stacks --stack-name <YOUR STACK NAME> --query "Stacks[0].Outputs[]"

const config = {
  "aws_user_pools_web_client_id": "6qip2917j9ia5khn57m8jlal3e",     // CognitoClientID
  "api_base_url": "https://pkt3mnm1s6.execute-api.eu-west-1.amazonaws.com/prod",                                     // TodoFunctionApi
  "coginto_hosted_domain": "davidwebstar-davidwebstar.auth.eu-west-1.amazoncognito.com",                   // CognitoDomainName
  "redirect_url": "https://master.d1a9gvf4i3xhf0.amplifyapp.com"                                      // AmplifyURL
};

export default config;
