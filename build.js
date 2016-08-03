var Metalsmith  = require('metalsmith');
var markdown    = require('metalsmith-markdown');
var layouts     = require('metalsmith-layouts');
var permalinks  = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var serve = require('metalsmith-serve');
var watch = require('metalsmith-watch');


var sass = require('metalsmith-sass');

Metalsmith(__dirname)
  .metadata({
    title: "My Static Site & Blog",
    description: "Jam.",
    generator: "Metalsmith",
    url: "http://www.metalsmith.io/"
  })
  .source('./src')
  .use(collections({
    articles: {
      pattern: '*.md',
      sortBy: 'date',
      reverse: false
    },
       experiments: {
      pattern: '*.md',
      sortBy: 'date',
      reverse: false
    }
  }))
  .destination('./build')
  .clean(false)
  .use(sass({
    outputStyle: "expanded",
    outputDir: 'css/'
  }))
  .use(markdown())
  .use(permalinks())
  .use(layouts({
    engine: 'handlebars',
    "partials": {
      "header": "partials/header",
      "head": "partials/head"
    }
  }))
  .use(serve())
  .use(
    watch({
      paths: {
        "${source}/**/*": true,
        "templates/**/*": "**/*.md",
        "layouts/**/*": "**/*.md",
      },
      livereload: true,
    })
  )
  .build(function(err, files) {
    if (err) { throw err; }
  });
