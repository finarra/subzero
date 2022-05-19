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

We have access to a complete year of temperature readings and alarms for each sensor in the warehouse, that can be accesed through an API.

By obtaining the temperature and alarm readings, the following questions will be answered:

1. What is the distribution of the different temperature readings on each area throughout the year, and is there a significant variation?
2.  Is there a time of the day/week/year with a greater number of alarms going off, and if so, does it have statystical significance?
3. Is there any correlation between the temperature deviations and the weather conditions (temperature) on the warehouse location?
4. Can weather conditions be used to predict temperature deviations?
