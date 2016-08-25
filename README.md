# Stackoverflow app
The test project for piano.io company

## Install

Run:

  - `npm install`
  - `bower install`

Start server:

  - `gulp serve:dist`

## Features

### Stack

- AngularJS, Jade, SCSS, Gulp
- Component-based arhitecture
- Mobile-first

### Performance optimization

- All files was minified
- Was used one-way binding in the app, where possible
- Using $templateCache, $cacheFactory for not repeating requests

### Routing

- Browser-history for most of all browsers and Hash-history fallback for ie9
- The ability to view the list of questions/answers by search-form (+ tags) or by url

### Usability

- Using loader-interceptor for http-requests
- Filtering and sorting questions, including for 'Quick view' screen
- Animation for route changes and for some ui-components
- Modal window for quick search questions
- Adaptive markup
- 'No-result' screen
