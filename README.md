# Analyze This! Campaign Finance Analysis

## Outline

### Communication Protocols

Team "Analyze This!" has discussed our communication protocols and agreed to the following:
* We will be using Slack as our primary communication tool, using our own channel.
* We will meet no less than twice a week over Zoom to discuss the progress on our project.
* We will post a message into our Slack channel to discuss any emerging Pull Requests and to seek team approvals.
* Communicate any difficult life circumstances that may prevent us from completing a task into Slack so that we may jump in as a team to assist. 


### Machine Learning Model

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
	Cleaning and encoding categorical variables.  Bucketing rare values may be necessary.  PCA for Clustering.  Scaling/Standardizing. Joining Candidates to pacs and individual_contributions tables as to include features from multiple tables.  It's also worth mentioning that we may decide to select only the most recent years, 2000-2016, due to inflation devaluing money and including most relevant data.

FEATURES:
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


### Database

In this project we will be utilizing a data set of Kaggle that contains data from campaign finance data starting in 1990. The data is originally sourced from the website OpenSecrets, a reputable nonpartisan, independent, and nonprofit organization that has been in operation since 1996. We have access to a handful of different data sets through Kaggle including candidates, backer information, committee information, pac information and more that we will be tying together via common keys such as candidate ID with SQL. We will accomplish this through inner joins on candidate ID, and create new tables with the information needed, so that we can analyze the election results based on financial support.


We will be using Postgres SQL to create the connections through out are data and put together a cohesive and clear picture.


<br>

## Machine Learning Model

**Feature Selection**
![Screen Shot 2022-08-24 at 4 20 22 PM](https://user-images.githubusercontent.com/100544761/186532159-7696bb83-bdd1-4934-8480-fb04ff420e8e.png)

**Encode categorical variables with OneHotEncoder()**
![Screen Shot 2022-08-24 at 4 20 49 PM](https://user-images.githubusercontent.com/100544761/186532298-44882246-1950-43c6-8244-7bd1c6804981.png)

**Split data to train/test groups**<br>
![Screen Shot 2022-08-24 at 5 21 00 PM](https://user-images.githubusercontent.com/100544761/186533728-e00539e3-a912-4f33-82d5-d5523c7aa86a.png)

**Standardize Data with StandardScaler()**
![Screen Shot 2022-08-24 at 5 25 01 PM](https://user-images.githubusercontent.com/100544761/186534256-95b9b39c-a82b-499e-ad75-e857d09d8898.png)

<br>

### Random Forest Classifier

**Model**
![Screen Shot 2022-08-24 at 5 10 26 PM](https://user-images.githubusercontent.com/100544761/186532545-2eb1a3f0-deec-4183-a8de-9e84803b5e18.png)

### Predict 2022 Election




**Seat Requirement Differentials**<br>
![2022 Prediction Results diff](https://user-images.githubusercontent.com/100544761/186533432-4bf7c43a-eba4-44f0-b448-f57a2464b413.png)

**Adjusted to fulfill State seat requirements**


### KMeans Clustering

**Feature Selection** - added State
![Screen Shot 2022-08-24 at 5 11 44 PM](https://user-images.githubusercontent.com/100544761/186532723-287139dd-2808-44dd-aa19-22dc7a7c768a.png)

**Dimensionality Reduction - Principal Component Analysis (PCA)**<br>
![Screen Shot 2022-08-24 at 5 12 49 PM](https://user-images.githubusercontent.com/100544761/186532886-73314de1-2a5f-46b0-acd7-9eff7ca2b368.png)

**Elbow Curve**, n=5<br>
![Screen Shot 2022-08-24 at 5 14 22 PM](https://user-images.githubusercontent.com/100544761/186533012-00d48fc8-419f-4257-b8d0-e239467a30d0.png)

**Clustering 3D Graph**
![K-MeansClustering_3D_graph](https://user-images.githubusercontent.com/100544761/186533225-23603b4d-e7a7-4819-8e88-49a9f44961ab.png)

## Web Page

