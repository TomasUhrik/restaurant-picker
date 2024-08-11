# Product reasoning

## Requirements

Product requirements were to create an app that helps Cogent employees decide a restaurant to visit for a lunch, 4 features were specifically mentioned in the assignment requirements:

1. Random selection of a restaurant within 1km of the Cogent Labs Office (https://goo.gl/maps/3RNhuTrUnHCypk1K9)
2. Provide a map view showing the location of the restaurant
3. Do a keyword search for restaurants within 1 km of the office
4. A page where we can see details about the restaurant like menu, pictures, reviews etc.

Having a well defined use-case I tried to see the product from the user's perspective and added 2 more requirements:

1. Mobile friendly

- Many (possibly most) conversations about where to go for lunch happen in a group already on the way out of the office or while waiting for the last members of the group.

2. Speed and performance

- Being mobile oriented comes with the fact that internet connection might not always be ideal
- User has a clear idea of what they want and showing it to them immediately without unnecessary interaction improves satisfaction
- As this is a "mock project" for the purposes of a job interview... I just wanted to show of my technical skills

## Outcome

The outcome is a mobile-first one-screen app.
Since we have only one clear use-case we can setup the app with a clear default state of always redirecting the user directly to a "random venue screen" from which the user can read all the required information about a particular venue including directions. In case the user is not satisfied with the chosen venue they can execute 2 actions:

1. Click "randomise" button and get redirected to a different venue
2. Search for a specific venue by "name" or "food category" and choose from a list

With this design we have fulfilled all the requirements in a simple and intuitive manner without unnecessary complexity and with minimal interactivity.
