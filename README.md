## hitme-react-prototype
Basic prototype React app with express server for showing live news. Currently created as a genric mobile first web app to show news with the help of thrird party apis and data scrapping techniques.

# Tasks
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
- [ ] Features to be introduced [In Research]
  - [ ] Server: DB + AI based backend + Free APIs + Scrapping + Microservice + Search
  - [ ] Client: Like/Share button + PWA + Search + Detail page + Addons App Architecture(todo, Notes, games, AI photo formation, Reminders, notification, bots)        
     
# DOCS and Reference
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
