# Base Drupal App

Description for the base drupal app



# How to start

First go through the application and rename areas that
have place-holder {drupal_base} or {custom...} to the 
proper name of new project.

Locations to change:

webpack.config.js
```
// line: 5
	entry: "./drupal_base/web/themes/{custom/testTheme/src/js/index.js}",

// line: 8
  path:  path.resolve(__dirname,"drupal_base/web/themes/{custom/testTheme/js/}"),

//line: 39
	filename: '../css/{theme.style.css}'

```

package.json
```
// line: 2
  "name": "drupal_base",
```

composer.json
```
// line: 2
  "name": "drupal_base",
```

Then run this command to install the latest drupal 8.x version
```
composer create-project drupal-composer/drupal-project:8.x-dev {insert drupal app name} --stability dev --no-interaction
```

Finally change this line in .lando.yml to follow the directory path to the /web root.
```
// line 4
  webroot: drupal_base/web
```
