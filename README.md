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

## SQL Database

**Entity Relationship Diagram**
![QuickDBD-export](https://user-images.githubusercontent.com/100544761/186538007-133609c5-38b7-4f2e-9f8c-cbab14c86a76.png)

**PgAdmin4** - Postgres Table
<img width="1495" alt="Screen Shot 2022-08-20 at 2 27 47 PM (1)" src="https://user-images.githubusercontent.com/100544761/186538135-26f092b1-620d-4664-adb4-c869cad3daf5.png">

<br>

## Machine Learning Model - Random Forest Classifier

**Feature Selection**
![Screen Shot 2022-08-24 at 4 20 22 PM](https://user-images.githubusercontent.com/100544761/186532159-7696bb83-bdd1-4934-8480-fb04ff420e8e.png)

**Encode categorical variables with OneHotEncoder()**
![Screen Shot 2022-08-24 at 4 20 49 PM](https://user-images.githubusercontent.com/100544761/186532298-44882246-1950-43c6-8244-7bd1c6804981.png)

**Split data to train/test groups**<br>
![Screen Shot 2022-08-24 at 5 21 00 PM](https://user-images.githubusercontent.com/100544761/186533728-e00539e3-a912-4f33-82d5-d5523c7aa86a.png)

**Standardize Data with StandardScaler()**
![Screen Shot 2022-08-24 at 5 25 01 PM](https://user-images.githubusercontent.com/100544761/186534256-95b9b39c-a82b-499e-ad75-e857d09d8898.png)

**Train/Test** - analyze accuracy score
![Screen Shot 2022-08-24 at 5 10 26 PM](https://user-images.githubusercontent.com/100544761/186532545-2eb1a3f0-deec-4183-a8de-9e84803b5e18.png)

<br>

## Predict 2022 Election

**Raw Data**<br>
Data downloaded from [Federal Election Commision](https://www.fec.gov/data/browse-data/?tab=candidates).  
![ ](https://user-images.githubusercontent.com/100544761/186538551-5be48c78-533b-45f4-8c57-9ba487536734.png)
![Screen Shot 2022-08-24 at 6 02 42 PM](https://user-images.githubusercontent.com/100544761/186538573-2b2c6548-f65b-43ab-9f18-60de0f0a4eba.png)


Columns were selected, formatted, cleaned, and combined to calculate columns resembling the structure of training data then preprocessed and fed to RFC model.

![Screen Shot 2022-08-24 at 5 35 44 PM](https://user-images.githubusercontent.com/100544761/186535572-ae53ec1e-b2e5-4b38-9b83-a3daf7af7d3e.png)

**Prediction Results** - first 5 rows
![Screen Shot 2022-08-24 at 5 37 31 PM](https://user-images.githubusercontent.com/100544761/186535769-ebc6c743-63bc-40a7-9f44-fb9f741719ae.png)

**Number of Wins vs. Losses**<br>
![Screen Shot 2022-08-24 at 5 39 07 PM](https://user-images.githubusercontent.com/100544761/186535996-afc44278-325a-42a5-8494-8ad6881248d8.png)

**Seat Requirement Differentials**<br> - difference in expected seats and predicted winning seats
![2022 Prediction Results diff](https://user-images.githubusercontent.com/100544761/186533432-4bf7c43a-eba4-44f0-b448-f57a2464b413.png)

**Adjusted to fulfill State seat requirements**<br>
68 candidates were adjusted - 40 from L to W (with highest raised_total), 28 from W to L (with lowest raised_total) in order to attempt satisfying seat requirements.  An improvement overall but not exact.  Full list of adjusted politicians in ML_modeling_v1.ipynb<br><br>
*Seat Requirement Differentials* - after adjustment<br>
![after-adjustments](https://user-images.githubusercontent.com/100544761/186536605-33f5b637-f05f-4530-aced-0bf72b73cb67.png)

<br>


## KMeans Clustering

**Feature Selection** - added State
![Screen Shot 2022-08-24 at 5 11 44 PM](https://user-images.githubusercontent.com/100544761/186532723-287139dd-2808-44dd-aa19-22dc7a7c768a.png)

**Dimensionality Reduction - Principal Component Analysis (PCA)**<br>
![Screen Shot 2022-08-24 at 5 12 49 PM](https://user-images.githubusercontent.com/100544761/186532886-73314de1-2a5f-46b0-acd7-9eff7ca2b368.png)

**Elbow Curve**, n=5<br>
![Screen Shot 2022-08-24 at 5 14 22 PM](https://user-images.githubusercontent.com/100544761/186533012-00d48fc8-419f-4257-b8d0-e239467a30d0.png)

**Clustering 3D Graph**
![K-MeansClustering_3D_graph](https://user-images.githubusercontent.com/100544761/186533225-23603b4d-e7a7-4819-8e88-49a9f44961ab.png)

<br>

## Web Page - [Link](https://m-miley.github.io/Analyze-This-Campaign-Finance-Analysis/)

**Page 1** - Prediction Results + 2022 Candidate Dashboard
![Screen Shot 2022-08-24 at 5 49 13 PM](https://user-images.githubusercontent.com/100544761/186537085-2c0dab18-64cd-43aa-b87f-a1d76f972054.png)
![Screen Shot 2022-08-24 at 5 49 34 PM](https://user-images.githubusercontent.com/100544761/186537114-2d1af1ee-3fbc-4c36-9748-57e15d4de055.png)

**Page 2** - Past Data Dashboard
![Screen Shot 2022-08-24 at 5 50 42 PM](https://user-images.githubusercontent.com/100544761/186537357-cbf71a57-78df-46da-8e0d-01e8c2314811.png)
![Screen Shot 2022-08-24 at 5 50 58 PM](https://user-images.githubusercontent.com/100544761/186537284-16c6c234-5826-4ae0-8aca-4d4277a8c0d0.png)
![Screen Shot 2022-08-24 at 5 51 12 PM](https://user-images.githubusercontent.com/100544761/186537299-21e526ee-8faf-44cc-8fe6-ea16deb113a9.png)
![Screen Shot 2022-08-24 at 5 51 21 PM](https://user-images.githubusercontent.com/100544761/186537317-23c691fc-5c10-4970-bbd7-0d60772a3d5d.png)

