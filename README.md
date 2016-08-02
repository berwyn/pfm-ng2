# Pony.fm on Angular 2

This is a proof-of-concept of [Pony.fm](https://github.com/Poniverse/Pony.fm) rebuilt as an Angular 2 application using TypeScript

This does not represent a fully working application at this point, but could be adapted into one.

### Setting Up
Installs npm dependencies, typings, builds the code, and starts a minimal
http server with browsersync to host the site

```bash
git clone git+ssh://git@github.com/berwyn/pfm-ng2
cd pfm-ng2
npm run update
npm run start
```

### Testing
Runs Karma on our Jasmine tests, now with 20% more nyan

```bash
npm test
```
