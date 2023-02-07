# Simply Wall St Technical Exercise

In this exercise we are looking for something that resembles `https://simplywall.st/stocks/`.

## Requirements:

- Show a list of companies presented in a tile
- Tile that shows the company name (Apple), unique symbol (NasdaqGS:APPL), snowflake score
- Pagination (Pages, Infinite scrolling or Load more)
- Filtering by country (refer to `https://simplywall.st/stocks` for supported country list)
- Sorting by market cap (ASC and DESC direction)
- Some form of basic styling (this is a front-end role). Feel free to use libraries (bootstrap, material-ui) as long as it doesn't conflict with the primary criteria.

## The solution will be scored based on the following:

### Primary criteria:

- Component grouping (How you organise your components into logical groups)
- Styling architecture (How you implement your styles)
- Rendering performance (Check for performance bottlenecks)
- Avoid overengineering (Simple and straightforward)
- Readability (Simply Wall St engineers will be reviewing your solution)

### Bonus criteria:

- Data structures (How you store internal state)
- Testing practices (https://codesandbox.io/docs/tests)
- a11y

## API Documentation

For data fetching you will be using the following endpoint:

- POST https://api.simplywall.st/api/grid/filter?include=info,score

The grid API requires the following payload

```
{
  id: string;
  no_result_if_limit: boolean;
  offset: number;
  size: number;
  state: 'read'
  rules: string;
}
```

Most relevant properties for this exercise are `offset`, `size` and most importantly `rules`

The `rules` property requires a JSON serializable value.

Here's an example

```
[
  ["order_by", "market_cap", "desc"],
  ["primary_flag", "=", true],
  ["grid_visible_flag", "=", true],
  ["market_cap", "is_not_null"],
  ["is_fund", "=", false],
  [
    "aor",
    [
      ["country_name", "in", ["au"]]
    ]
  ]
]
```

If we wanted to fetch 12 of companies in Canada sorted by Market Cap the payload would look like

```
{
  id: 1,
  no_result_if_limit: false,
  offset: 0,
  size: 12,
  state: 'read',
  rules: JSON.stringify([
    ['order_by', 'market_cap', 'desc'],
    ['grid_visible_flag', '=', true],
    ['market_cap', 'is_not_null'],
    ['primary_flag', '=', true],
    ['is_fund', '=', false],
    [
      'aor',
      [
        ['country_name', 'in', ['ca']],
      ],
    ],
  ]),
}
```

Sample cURL

```
curl 'https://api.simplywall.st/api/grid/filter?include=info,score' \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'accept: application/json' \
  --data-raw '{"id":1,"no_result_if_limit":false,"offset":0,"size":12,"state":"read","rules":"[[\"order_by\",\"market_cap\",\"desc\"],[\"grid_visible_flag\",\"=\",true],[\"market_cap\",\"is_not_null\"],[\"primary_flag\",\"=\",true],[\"is_fund\",\"=\",false],[\"aor\",[[\"country_name\",\"in\",[\"ca\"]]]]]"}' \
  --compressed
```

## Live Demo

[https://sws-test.netlify.app/](https://sws-test.netlify.app/)

## Getting Started

### Development Steps

Installing dependencies

```
npm install
```

Running the development server

```
npm start or npm run start
```

### Testing

Running unit test

```
npm run test
```

### Deployment

Building the app

```
npm build
```


### Development

I developed the application locally on the IDE.

### My justifications for primary criteria

* Component grouping (How you organise your components into logical groups)
    * I have separated the components by placing them into their respective directories based on their functionalities and similarities.
    * In order to improve reusability, I grouped components to make them manageable and small.
    * I gave great thought to which component ought to hold the state.
    * To separate components from business logic, I have created the custom hooks.
    * Each component on the application has single responsibility.

* Styling architecture (How you implement your styles)
    * My preliminary analysis on the Simply Wall St. website led me to discover that styles are employed using `styled-components`. However, since it was a single-page application, I chose to use pure CSS.
    * I have used plain css and placed each stylesheet file into their respective components.
    * I could have used `scss` or `sass` or even `styled-components`, but again I didn't want to go with external setup for a simple application.
    * I considered how useful libraries could be (**Bootstrap**, **Material-UI**). I choose not to utilise them since I will need to tweak them for only one area of usage and this test only requires one page. Building the basic parts not only shows off my abilities, but it also minimises the size of the final bundle. To be more productive in a bigger application that has multiple pages and UI components, these libraries comes super handy. 
  
* Rendering performance (Check for performance bottlenecks)
    * Where appropriate, I added "`key`" `props` to ensure that rendering performance was unaffected. Wherever feasible, I substitute a distinct ID for an index (from the map).
    * Since this is a small project, I made an effort to minimise the amount of dependencies to lower the final package size. I choose not to utilise **Bootstrap** or **Material-UI**.
    * I have used functional components in the application that helps to build efficient and performant React applications speedily.
  
  How did I debug the performance ?
    * I used Chrome developer tool Lighthouse for performance debugging.
    * It could have been slightly better if I have used SSR.

* Avoid over engineering (Simple and straightforward)
    * I chose solutions that are clear-cut, basic, and minimise overengineering. During my analysis and implementation, I didn't think too much.
    * To create a page that meets the requirements, I wrote the clean code.
    * I had a plan to use `Context API` and `useReducer` for state management but by using the single hook, I was able to control the state of my application simply by using `useState`.
  
### My justifications for bonus criteria

* Data structures (How you store internal state)
    * I gave great thought to which component ought to hold the state. I made every effort to avoid directly changing the internal state.
    * I had a plan to use `useReducer` hook for the state management but my business logic being a single custom hook, I decided not to complicate it.
    * I am using URL params and pagination to handle the data flow.

* Testing practices (https://codesandbox.io/docs/tests)
    * I have set up unit testing for all the hooks and components used in the application.
    * I have used `jest`, and `testing library` for unit testing.

### Deployed app

The app is deployed at [https://www.netlify.com/](https://www.netlify.com/) for free. It can be seen working at [https://sws-test.netlify.app/](https://sws-test.netlify.app/). 

### Notes
* As an SEO factor, I decided to use pages for pagination. Infinite scrolling would be better with mobile applications. 
* I have used TypeScript throughout the project to provide the types for JavaScript.
* To format my code in accordance with the established coding style guidelines, I utilised prettier.
* Application is fully responsive. 
* By inspecting the dropdown, I got the list of all countries.
* I chose to use the colors from the SWS website considering not to go out from the brand style guides. 
* I have set up the deployment of my application at  [https://sws-test.netlify.app/](https://sws-test.netlify.app/), using netlify.

### Suggestion for a prod application

Test being developed in the limited timeframe, there is always a place for an improvement. Few of them includes:
 - Adding test coverage badges on the repo to display the exact value. 
 - If there were multiple pages to be developed, I could have considered the UI library instead of writing all the css and html from scratch.
 - Depending on the load on the endpoint, We could use the `react-query` [https://tanstack.com/query/latest](https://tanstack.com/query/latest) for better handling of the api endpoints for caching, error display and more. 
