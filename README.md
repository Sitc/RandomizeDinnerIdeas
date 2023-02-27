# RandomizeDinnerIdeas

This is a single-page web application that allows users to browse meal recipes. The app uses the [themealdb.com](https://www.themealdb.com/api.php) API to fetch meal data and displays it in a responsive user interface.

## Getting Started

To start the application, first clone the repository to your local machine:

```console
git clone https://github.com/your-username/meal-finder.git
```

```console
npm install
```

```console
npm run serve
```

This will start a development server and open the application in your default browser.

To run unit tests, use the following command:

```console
npm run test
```

This will run all unit tests and display the results in the console.

## Architecture

### Folder Structure

The application follows a modular architecture, with each feature or domain represented by a module. The modules are organized into a src/modules directory, and each module contains its own state, components, and other logic.

The top-level directory structure looks like this:

```css
src/
├── assets/
│   ├── images/
│   └── styles/
├── common/
│   ├── Content/
│   ├── Title/
│   ├── types/
│   └── utils/
├── modules/
│   ├── meal/
│   └── search/
├── store/
│   ├── modules/
│   └── index.ts
├── views/
├── App.vue
└── main.ts
```

### Libraries and Frameworks

The application is built with Vue.js 3 and uses Tailwind CSS for styling. It also includes the following libraries:

 - axios: for making HTTP requests to the API
 - vue-router: for client-side routing
 - pinia: for state management

### State Management

The application uses the pinia library for state management. The state is organized into modules, with each module representing a feature or domain of the application. The modules are defined in the src/store/modules directory and are imported into the src/store/index.ts file, which creates the root store instance.

Each module contains its own state, actions, mutations, and getters, and can be accessed and modified using the useStore or useModule functions provided by pinia.

### Testing

The application includes unit tests for the MealDetails component, which can be found in the tests/unit/MealDetails.spec.ts file. The tests use the @vue/test-utils library and Jest as the test runner.

## Conclusion

This meal finder application was built by a React developer who had a lot of fun learning about Vue3 Composition and Pinia. The application demonstrates the use of Vue.js 3 and Tailwind CSS to build a responsive, modular, and testable web application. The use of libraries such as axios, vue-router, and pinia helps to simplify development and make the code more maintainable and scalable.

<!-- // Add draw_a_plan.png -->
### Plan

![quick plan of attack in excalidraw](/Users/attila/Documents/GitHub/Assignment/vue/vite-app/src/assets/draw_a_plan.png)