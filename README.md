# css-core
CSS-Core is a set of rules, standards and methodology. It sets the architecture you will follow for having **scalable design system**. It will not style your site, but it will lead you, how to style it.

It follows components orientated development, has very low specifity, use REM units, simple grid, _BEM and OOCSS methodology and contains small tools, I've written during my career and find them useful.

The whole concept of utility classes driven UI is transformed into *_general-classes.scss* file. Architecture of CSS-core is prepared to handle multiple themes by dividing code of each component to its base part (behaviour) and its styles parts. As using utility classes could lead to multiple class reference, I encourage to use brackets, [ class1 class2 ], to divide groups with the same meaning on the HTML elements.

CSS-Core contains .scss source maps for development and livereload for view after any change is saved. This is supposed to be a kick-starter package you can based on for any new project, and immediately benefit from set concept and standards.

# css-core installation
1. npm install
2. npm install grunt -g && npm install grunt-cli -g
3.  - 'grunt prod' for production
    - 'grunt dev' for development
    - 'grunt server' for serving to localhost:9001
