# hitme-react-prototype
Basic prototype React app with express server for showing live news. Currently created as a genric mobile first web app to show news with the help of thrird party apis and data scrapping techniques.

### Tasks
- [x] No network found tile responsive - [DONE]
- [x] React work flow for adding multiple API's and create parser to generate a common JSON format from all API's. [DONE]
- [x] Creating Node express server for handling APIs, rest in doc/doc.js [Done]
- [x] server - folder created for express server related stuff
  - [ ] Build Cache module to rate limit the thirdParty (newsApi) - `[In Progress]` 
  - [ ] Making Brain Class for genearating, suffling post as per the user interest and priority.
  - [ ] Data scrapping for creating post regarding current affairs - google data scrap - https://gist.github.com/erogol/6658881 
- [x] client - folder created for React related stuff
  - [x] Added server's port as proxy in package.json and targetting newsApi to "serverUrl/newsApi" end point - [DONE] 
  - [ ] Lazy loading of the UI post fetching down while scrolling | History API - https://love2dev.com/blog/google-lazy-load-seo/ [PENDING]
  - [ ] Code Splitting - react lazy load components
  - [ ] service worker implementation for offline handling [PENDING]
  - [ ] Implement Detail Page detail page of each tile [PENDING]
  - [ ] No network found for detail page
  - [ ] React routing and common JSON architecture
     
### DOCS and Reference
- React component lifecycle guide https://busypeoples.github.io/post/react-component-lifecycle/
- Google self library for building web UI - https://developers.google.com/closure/library/docs/
- Lazy loading concept
-- https://medium.com/@filipvitas/lazy-load-images-with-zero-javascript-2c5bcb691274,
-- https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/
-- https://jmperezperez.com/high-performance-lazy-loading/
- Lazy loading and code splitting
-- https://blog.bitsrc.io/improve-react-performance-using-lazy-loading-and-suspense-933903171954
- History API and SEO with lazy load
--https://love2dev.com/blog/google-lazy-load-seo/ 


### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
