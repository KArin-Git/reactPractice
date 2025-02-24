we do not add <script></script> in React Project bc React uses a build process to handle JavaScript files.

This build process, often managed by tools like `Webpack and Babel`, bundles and transforms your code into a format that `can be executed by the browser`.
** See package.json > dependencies

React projects use a `Build Process`
    - means the code you write is not the code that gets executed (like this) in the browser
    - instead the your code is transformed before it's handed off to the browser

`npm start` your code is transformed before it's handed off to the browser
why do we use a build process? why does the code need to be transformed?
1. Raw, unprocessed React code won't execute in the browser.
    - bc React Code us special `jsx feature` >> html code written in js file
    - jsx is not a default js feature

2. the code would not be optimized for production (e.g. not minified)
