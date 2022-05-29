# fragment-test


## npmrc content

Add a file .npmrc at the root with the following content

> user:registry=npm.pkg.github.com
> 
> npm.pkg.github.com/:_authToken=<token>


## local development

in package.json dependencies, use a path to the npm library

> "@cobreti/fragment-site": "file:../jslibs/fragment-site"


