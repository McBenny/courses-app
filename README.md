# Courses exercise

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

### Requirements
Requirements come from `https://github.com/facebook/create-react-app`

- Node v10.16 or more recent
- NPM v5.6 or more recent

Tested with node v12.18.2 and NPM v6.14.5

### Process
- Installation: `npm install`
- Run the app: `npm start`
- Run the tests: `npm test`

## Design
In order to implement the low level element quicker I relied on Material-UI for the lists, buttons, inputs...

There is just a little responsiveness implemented for screens larger than 1200px.

Regarding styling I used BEM, limited the length of selector (there is just an `.app` class sometimes to override the most lightly certain styles coming from Material-UI).

### Compatibility
No constraints being set regarding the target browsers, I used the default compatibility offered by Babel according to
the default settings in Create-React-App, meaning IE is not supported.

## Interactivity

### Search
To filter the list of courses, type a keyword that can be found in the name of the course and click the "Search" button
to filter the list.

To restore the complete list, search with no keyword (empty search input). This feature would obviously greatly be
improved by:
- a message in case there are no courses found,
- a "clear" button to automatically restore the full list.

### Sorting
Clicking on a sorting button will sort the list on the criteria noted on the button, in the order noted on the button
(ASC: ascending, DESC: descending). The direction of sorting will alternate.

### Adding the course in a cart
This feature wasn't completed under the 4 hours.

The "Add course" button is always displayed (I had issues when it worked together with the search feature so I chose to display it all the time).

Clicking the button will open a dialog asking for credentials. Nothing is checked on the form, the user just has to click on the "Log in" button to:
- remove the authentication form,
- replace it by a confirmation message,
- actually authenticate (set a boolean to true),
- close the dialog after 2 seconds.

This feature is not completed. There is no adding of the course in a cart (that doesn't exist), only a console log of the action intended with the name of the course.

Once the user has authenticated, a click on the "Add course" button only sends a log in the console.

## Accessibility
There is no specific accessibility effort put in here, just a respect of best practices, so no accessibility warning
should be sent. HTML should be conforming to the W3C Validator as well.

## Testing
All components have their own set of tests covering several aspects of their features or controlling the presence of
main elements.

All test are passing and there is no Typescript alert.

This could also be largely improved.

## Missing features
- Have the "Add course" button display only on hover of the course,
- Managing a cart,
- Storing courses in the cart,
- Display a "Remove" button when the course is already in the cart and the actual removal of the course from the cart.

These were not implemented due to a lack of time. The other features were implemented in the story order as it made perfect sense.
