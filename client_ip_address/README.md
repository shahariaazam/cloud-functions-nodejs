## Return Client's IP Address

Return the IP address of a user

## Deploy to Google Cloud

To deploy the function to Google Cloud Functions,

**First**, pull the repository by -

`git clone https://github.com/shahariaazam/cloud-functions-nodejs.git`

**Second**, navigate to this directory by -

`cd client_ip_address`

**Finally**, deploy to Google Cloud Functions by -

`gcloud functions deploy client_ip_address --runtime nodejs8 --trigger-http --project=YOUR_GCP_PROJECT_NAME`

You can read more about deployment from [https://cloud.google.com/functions/docs/deploying/](https://cloud.google.com/functions/docs/deploying/)