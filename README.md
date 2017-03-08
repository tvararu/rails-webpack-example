# Rails 5.1 webpack yarn React hot reload

… or how to write a title that looks like it was generated by a Markov chain.

It's meant to be a project that demos how to use the new [webpacker](https://github.com/rails/webpacker) integration in Rails 5.1 with React.js and hot module reloading.

## What am I supposed to do with this

```bash
$ ruby -v
ruby 2.4.0p0 (2016-12-24 revision 57164) [x86_64-darwin15]
$ bundle -v
Bundler version 1.14.6
$ git clone git@github.com:tvararu/rails-webpack-example.git
$ cd rails-webpack-example
$ bundle
$ yarn
$ bundle exec rails s
$ # open new shell
$ ./bin/webpack-dev-server --hot --inline
$ # open new shell
$ open http://localhost:3000
```

Edit `app/javascript/components/Hello.jsx`, and marvel at how the content that was dynamically rendered by JavaScript in your browser will update without a full page reload.

## License

MIT.
