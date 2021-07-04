This project is to test the nextjs internalization feature.

## Getting Started

The project has a few routes which some are dynamically generated using `getStaticProps` and `getStaticPaths`. When building the project, only the routes that use the `English` language are listed in the build summary, BUT the spanish ones work anyway as you can see by executing `yarn build` or on the following image 👇.

![Build summary](/images/build-summary.png)

You will see two dynamic routes:
```
/pages
  about.js
  contact.js
  index.js
  random.js
  /[number]
    index.js
  /test
    /[number]
      index.js
```