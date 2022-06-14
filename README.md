
# Subzero project

## Overview
The purpose of this project is to analyse the information provided by sensor distributed inside an industrial refrigeration warehouse, used to store refrigerated and/or frozen foods.

The food industry requires the use of warehouses with refrigeration and freezing at different temperatures. Strict temperature control must be achieved in order to preserve food and avoid biological risks. The use of automated sensors and monitoring software is a quality standard for this industry.

These automated refrigeration cameras need constant monitoring, through temperature sensors, that relay an alarm signal when the temperature inside the chamber deviates from established parameters.
A deviation from the established temperatures has very important implications, since products can freeze or spoil, resulting in increased product losses and potential sanitary hazards, and also implications in energy consumption and running costs, which impact the final business model.

Different conditions may alter the efficiency of the refrigeration systems, but one of the main factors determining operational efficiency of a refrigerator is the environmental conditions of the physical location, and the solar irradiation received by the warehouse or container.

It is already described and published that maximum solar irradiation of 700 W/m2 may cause surfaces to reach up to 35°C, increasing maximum power consumption of over 7.5 kW/h of a refrigerator.
(“The effect of solar radiation on the energy consumption of refrigerated container”, Case Studies in Thermal Engineering, Vol 12, 2018, pp 687-695, https://doi.org/10.1016/j.csite.2018.09.005)

Based on the above, an efficient temperature monitoring system is needed, that can summarize the temperature readings and alarm summaries, in order to make the pertinent corrections to the system function, scheduled maintenance and sensor calibrations.

As an addition to an efficient monitoring system, a machine learning model is proposed, to predict temperature alarms, based on weather conditions, which is one of the greatest enviromental factors that have to be taken into account in the refrigeration industry, and which represents a threat to the standard food distribution systems worldwide due to climate change.

The warehouse has 10 sensors distributed in the different areas (loading bay, refrigeration chambers, freezing chambers), with a set temperature range according to each area.

There are two types of alarms, the working alarm is set off when the temperature is outside of the pre esatblished range for 45 minutes, and a critical alarm goes off when the temperature is outside the pre established range for 60 minutes. A crytical alarm warrants a notification to the warehouse manager to supervise and take action with the operating team.

## Methods

We have access to a complete year of temperature readings and alarms for each sensor in the warehouse, that can be accesed through APIs.

We obtained three databases with historical data from the last year up to this date, which are:

 - Measuring_point: this contains the information of each sensor (id, name, description, group and area).
 - Values: this contains the temperature reading from each sensor at a given time (measuringPointId, channelName, value, unit, isoValue, isoUnit, timestamp).
 - Alarms: this contains the information when an alarm goes off in a sensor ( measuringPointId, channelName, limitValue, limitViolationValue, limitUnit, isoLimitValue, isoLimitViolationValue, isoUnit, timestamp).

After downloading the data, they are merged into a single CSV and complemented with the historical data for the corresponding dates, obtained through the free tier of the openweather.org API for the corresponding coordinates of the warehouse location.

By obtaining the temperature and alarm readings, the following questions will be answered:

1. What is the distribution of the different temperature readings on each area throughout the year, and is there a significant variation?
2.  Is there a time of the day/week/year with a greater number of alarms going off, and if so, does it have statystical significance?
3. Is there any correlation between the temperature deviations and the weather conditions (temperature) on the warehouse location?
4. Can weather conditions be used to predict temperature deviations thorugh the use of machine learning?



The whole presentation of the project you can see it here: [Subzero-Presentation](https://docs.google.com/presentation/d/1UKmtILYxAHpOF0Gc04kEek7a1XgS-ATRQAbTzk2dsT0/edit?usp=sharing)

## Machine Learining Model
After obtaining the final database with all the temperature readings from the sensors, and the historical weather data, with the use of supervised machine learning, data was selected to predict a temperature deviation that will result in a sensor alarm activation.

The data was preprocessed and irrelevant columns for the model were dropped such as the index, the date and the location, which are not numerical values and that encoding them will not add anything to the power of our model.

The target was the column "Status" which is the one that represents when an alarm is activated, and is coded in a binary fashion (on/off).

We trained both a Balanced Random Forest Classifier and an Easy Ensemble AdaBoost classifier.

At first we tried to only train and test the model with the use of ONLY the weather conditions of the coordinates, to test if the weather information alone has enough predictive power.

Random forest classifier (weather only):

![Random_forest_only_weather](https://user-images.githubusercontent.com/95982833/172081047-eac9adba-cba0-42e6-a1ce-6ae644861f14.png)


AdaBoost (weather only):

![Ada_boost_only_weather](https://user-images.githubusercontent.com/95982833/172081070-97d9e221-cb76-4d69-b7e6-7f0b92da0263.png)


As it can be noted, the results were rather dissappointing, not reaching any significant recall and precision to use only the weather information.

After these results, then the readings for the temperature sensors were incorporated and both models were trained and tested one more time. The precision and recall were dramatically increased as it can be noted in the following images:


Ramdon forest clasiffier:

![ramdon_forest_all_data](https://user-images.githubusercontent.com/95982833/172081271-cdaf06f8-7fc1-45dc-8d0d-2d62b1e12c52.png)


AdaBoost:


![ada_boost_all_data](https://user-images.githubusercontent.com/95982833/172082701-8b33b289-7c74-4753-9751-f5ee4bce0125.png)
=======

## Dashboard

For the Dashboard we wanted to provide the user with summarized information that he can use as KPI. In the original Dashboard from the Sensor's software they are just provided with the raw data like this: 

For each temperature sensor:

1. Value (date & time)
2. Alarm (yes or no)
3. Type of alarm (deficit or exceed)

This data can be presented either in graphs of tables. And the information can be retrieved through API (collection of data in real time) or CSV & PDF (collection of historical data / reports).

We based our DB on one comment we heard from the Warehouse manager "We want to know what to do with that data, I would like to know the number of alarmrs per area or per sensor so we can identify where we can optimize the most and which measures to take into account". 

So we decide to provide the following information in our Viz: 

1. Number of Alarms in the past five months
2. Number and percentage of alarms types (lower limit & upper limit)
3. Number of alarms per sensor in descending order.
4. Graph of each sensor through time, like in the original Sensors' software, but with environmental temperature from the Warehouse location. 

In the point 4 we added this as an hypothesis where we implemented our Machine Learning. Can we predict the alarm detonation (number of alarms) by the environmental temperature?... What we wanted to know here is if there is a high relation with this factor and that the user can study the relation with environmental temperature and sensor temperature fluctuation. 

Here you can take a look at our final DB: [Subzero-Dashboard](https://docs.google.com/presentation/d/1UKmtILYxAHpOF0Gc04kEek7a1XgS-ATRQAbTzk2dsT0/edit?usp=sharing)

As you may saw there are some additional bottons leading to **nowhere**. Due that our time is limited we also wanted to leave this project with an open window to keep building on it. And what is this window? In the future we can make a map integration with all of the Warehouses around Mexico of this Company with summarized information and then they can go to the summary of each warehouse as the one provided in the DB. Our main objective is not just to accomplish the task of providing a user with visualizations, but also to make them aware of the potential that a Data Scientist could have in the develppment of internal projects. 


### Interesting Stuff of our DB

We also wanted to provide the user with a responsive DB, so it is mobile and PC friendly. We got inspiration from a DB tutorial and use those CSS codes to make it happen. As well we use intersting CDNs like google fonts & incons.

Instead of plotly we found this one attractive *https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js"* for more complex charts. 


