# Analyze This! Campaign Finance Analysis

## Communication Protocols
Team "Analyze This!" has discussed our communication protocols and agreed to the following:
* We will be using Slack as our primary communication tool, using our own channel.
* We will meet no less than twice a week over Zoom to discuss the progress on our project.
* We will post a message into our Slack channel to discuss any emerging Pull Requests and to seek team approvals.
* Communicate any difficult life circumstances that may prevent us from completing a task into Slack so that we may jump in as a team to assist. 


## Machine Learning Model

US Federal Campaign Finance data 1990-2016
https://www.kaggle.com/datasets/jeegarmaru/campaign-contributions-19902016

• Overview - Machine Learning will be applied to this data set to address our main problem statement:  Predict a winner in a political race based on selected features from the data. We will be testing and comparing different models to see which performs the best in terms of accuracy and best fit.

MODELS:

	- Supervised:
		•Random Forest Classifier
		•Logistic Regression
		•Neural Network (likely too complex for this situation).

	- Un-Supervised:
		•KMEANS Clustering

PREPROCESSING:
	Cleaning and encoding categorical variables.  Bucketing rare values may be necessary.  PCA for Clustering.  Scaling/Standardizing. Joining Candidates to PACS table as to include features from two tables.  It's also worth mentioning that we may decide to select only the most recent years, 2000-2016, due to inflation devaluing money and including most relevant data.

FEATURES:</br>
	c.party 
	• c.dist_id_run_for
	• c.CRPICO
	• c.NOPACS	
	• c.raised_from_pacs
	• c.raised_from_individuals
	• c.raised_total
	• c.raised_unitemized
	• p.pacid
	• p.Amount
	• p.type

TARGET:
	c.result - 1:W, 0:L

RESULT:
	Hopefully, our supervised models will provide us with accurate predictions for election results.  Our un-supervised approach may help us group candidates based on fiscal activity and help better understand the politics and power play.


## Database

In this project we will be utilizing a data set of Kaggle that contains data from campaign finance data starting in 1990. The data is originally sourced from the website OpenSecrets, a reputable nonpartisan, independent, and nonprofit organization that has been in operation since 1996. We have access to a handful of different data sets through Kaggle including candidates, backer information, committee information, pac information and more that we will be tying together via common keys such as candidate ID with SQL. We will accomplish this through inner joins on candidate ID, and create new tables with the information needed, so that we can analyze the election results based on financial support.


We will be using Postgres SQL to create the connections through out are data and put together a cohesive and clear picture.