# subzero

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
