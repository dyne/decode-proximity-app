## The DECODE App
This app provides a platform where people can control their personal data, choosing where and how to share it. It allows users to input their data and keep it saved on their phone for future use. It is part of the [DECODE project](https://decodeproject.eu)

The DECODE App is developed in React Native, with the following side technologies:

- Redux for state management
- Reselect for cacheable (memoized) access to the state
- Redux Thunk for asynchronous action dispatching
- Redux Persist for saving state to permanent storage
- AsyncStorage from React Native Community for native key-value permanent storage
- Plain Fetch API for communication with services
- React Navigation for navigation between screens and menus
- React Native Vector Icons as icon library set
- Styled Components for styling and theming
- Ramda for utilities
- moment for date & time handling
- react-i18next for multilanguage
- react-native-sentry for sending crash logs (requires a Sentry server)
- react-native-splash-screen to maintain the splash screen while JS is loading
- react-native-onboarding-swiper for the app intro caroussel
- react-native-walkthrough-tooltip for the screen tooltips walkthrough

Development dependencies:
- yarn for dependency management
- babel for code transpiling
- eslint for code style
- jest for unit testing
- fastlane for store deployment automation


## Directory structure

- android: Native Android source code and build folder
- ios: Native iOS source code and build folder
- src: JavaScript source code, having the following structure:
    - api: The clients for the external services and APIs
    - i18n: Configuration of the i18n library and language files
    - lib: Commonly used functions and constants
    - lib/components: Reusable presentational components
    - redux: The Redux store setup and the reducers
    - screens: The UI components
    - App.js: The entry point, where the high level building blocks are combined

UI Components are developed following the stateless functional component approach. Each component is a pure function returning something to render based solely on its received props.
Each component is spread over 3 files:
- A Component file with the presentational features
- A Container file with the connection to the Redux store
- A Styles file with the CSS information

## Starting a development environment

You need to have git and yarn installed.
You will also need XCode and Android Studio. 

Clone the project and `yarn install`. After that you can follow to the next section.

If you want to deploy to the test stores using fastlane, which is the recommended way, you need Ruby. Use `rbenv` to install the Ruby version specified in .ruby-version.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Starts the Metro bundler to serve the Javascript code in the development environment.

### `yarn run-ios`

Compile a native iOS app, start an iOS emulator and deploy the app. The Javascript code will be served by the Metro bundler.

### `yarn run-android`

Compile a native Android app, and deploy it to an emulator or a physical phone connected via USB. The Javascript code will be served by the Metro bundler.

### `yarn test`

This script does actually two things:
- First it executes the ESLint linter to ensure the code follows the configured rules.
- If there are no linting errors, it executes the tests with the jest test runner.

### `cd ios && bundle exec fastlane beta`

Deploys the app to the Apple Store as a new build downloadable with the TestFlight testing tool.

### `cd android && bundle exec fastlane beta`

Deploys the app to the Google Play store, to an internal test track.

## Implementation notes

### Splash screen
The splash screen has been developed following mostly [this awesome article by Spencer Carli](https://medium.com/handlebar-labs/how-to-add-a-splash-screen-to-a-react-native-app-ios-and-android-30a3cec835ae)

The color of the Android status bar during the JS loading stage has been set by hand to #777777 in colors.xml.

### Walkthrough 
A generic component WalktroughStep has been developed. It wraps the Tooltip component from the React Native Walkthrough Tooltip library, setting common props and simplifying its use.

The WalkthroughStep just needs to wrap the component over which the tooltip has to be shown, and it requires just 2 props: the id of the screen and the id of the tooltip.  

The order of the tooltips to be shown en each screen is specified as a const in the reducer. If a screen has multiple tooltips, they will be shown in that order. When the last tooltip has been shown, 'none' will be stored as the tooltip id and it will never match again, so it won't be shown again.

### Navigation
The navigation between screens is based on the React Navigation library. Its API is a little cumbersome so I explain here how it is organized.

The App.js entry point renders the RootScreen component, where all the navigators are defined.

RootScreen renders either the Carousel or the AppContainer, depending on the firstRun flag in the store.

The AppContainer wraps the RootNavigation, which displays either the Main screen or a Modal screen. This is for managing Modal interactions with the user.

The Main screen is a DrawerNavigator, which defines all the menu items accessible from the left header button.

Each screen in the drawer is a StackNavigator, with screens that can go either forwards via links in the screen, or backwards via the back button. Some stacks have a single screen so the only way to get out of them is via the menu. The first screen in a stack always has the menu button at the header top left, while the other screens have the back button.
 