# Comment Module With User Lookup

This module allows you to add a comment and mention existing system users. For the purpose of this demo user data is hardcoded into the initial application state, in the wild (depending on user base size)individual api lookup requests would be made as and when required.

This a typescript based react/redux application, with the (comments-with-user-lookup) module housing the specific functionality. 

You can trigger a user lookup by typing @ into the comment box, and search by either user name or name of user.

### How to setup:
1. cd into the webapp directory
2. run `$ npm run setup`
3. navigate to [http://localhost:3000/](http://localhost:3000/)

### Testing
To run all tests within the project run:
```
$ npm run test
```

To run a single test within the project run:
```
$ npm run test-single <test-file-name>
```


### Improvements:
Given the time-boxed nature of this demo, the following improvements could be made:
- Keyboard only navigation of user lookup widget
- Auto refocus of comment section on user selection
- User data retrieved and loaded from an api service
- Enzyme testing of react components
- Cypress e2e tests of functionality as a whole
- Separation of user-lookup and comment modules
- In depth cross browser testing
- Floating positioning of user-widget