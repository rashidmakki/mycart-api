# mycart-api
a server developed using Nodejs and stripe api for payement services.

## clone this repo
  
  git clone https://github.com/rashidmakki/mycart-api.git
  
  `cd mycart-api`
  
## create a folder named .env inside the root folder
You can find your Stripe Secret Key at [Stripe](https://www.stripe.com/)

Add the STRIPE_SECRET_KEY in the .env file:
`= YOUR SECRET KEY`


## Deploy your server to heroku:
Follow the steps:

`npm install -g heroku`
`heroku login`
`herko create`
`git add -A`
`git commit -m"Add Your Comment"`
`git push heroku master`

You will get published domain that means your server is running.
##### Copy the domain and go to [mycart](https://github.com/rashidmakki/mycart.git) repo Step 5 
example: `fetch(`Your URL/checkout`)`

Now go to Heroku website and login to Heroku.
Go To Dashboard -> YourApp -> Settings ->Config Vars and Add the following:
  `STRIPE_SECRET_KEY`   `YOUR SECRET KEY`
Save it.Now Your server is running.

If you have already created a new repo on github then you can push your repo to github using `git push` but firstly add origin using `git remote add origin your_repo_url`.
