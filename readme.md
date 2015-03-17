When I first came across Browserify I thought it would be a client-side script to add support for CommonJS modules. I thought it would add some sort of global `module` variable
and define a `require` function and work the exact same as `RequireJS`, except for not being asynchronous.

I was wrong. Browserify works on the server-side. It's an NPM package. Here's a quick description taken from [handbook](https://github.com/substack/browserify-handbook):

> Browserify starts at the entry point files that you give it and searches for any require() calls it finds using static analysis of the source code's abstract syntax tree.

Browserify is a compiling tool. Every `require()` and `module.exports` call will be removed and Browserify will generate a bundle file that will automatically contain every dependencies, in
an order that will not break the codebase.