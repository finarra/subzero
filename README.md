
# Subzero project

## Overview
The purpose of this project is to analyse the information provided by sensor distributed inside an industrial refrigeration warehouse, used to store refrigerated and/or frozen foods.

These automated refrigeration cameras need constant monitoring, through temperature sensors, that relay an alarm signal when the temperature inside the chamber deviates from established parameters.
A deviation from the established temperatures has very important implications, since products can freeze or spoil, resulting in increased product losses and potential sanitary hazards, and also implications in energy consumption and running costs, which impact the final business model.

Based on the above, an efficient temperature monitoring system is needed, that can summarize the temperature readings and alarm summaries, in order to make the pertinent corrections to the system function, scheduled maintenance and sensor calibrations.

As an addition to an efficient monitoring system, a machine learning model is proposed, to predict temperature alarms, based on weather conditions, which is one of the greatest enviromental factors that have to be taken into account in the refrigeration industry, and which represents a threat to the standard food distribution systems worldwide due to climate change.

The warehouse has 10 sensors distributed in the different areas (loading bay, refrigeration chambers, freezing chambers), with a set temperature range according to each area.

There are two types of alarms, the working alarm is set off when the temperature is outside of the pre esatblished range for 45 minutes, and a critical alarm goes off when the temperature is outside the pre established range for 60 minutes. A crytical alarm warrants a notification to the warehouse manager to supervise and take action with the operating team.

## Methods

We have access to a complete year of temperature readings and alarms for each sensor in the warehouse, that can be accesed through APIs.

![bases_de_datos](https://user-images.githubusercontent.com/95982833/169180169-fc4f5dbc-36ad-4746-be0b-97ec050a98d3.png)

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