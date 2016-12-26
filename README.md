# Brunch app

This is a client side HTML5 asset pipeline that lives harmoniously with Rails
and Sprockets, built with [Brunch](http://brunch.io). It is designed to be used INSIDE your
Rails application, at the top level folder.

It was inspired by the Phoenix Framework's elegant use of Brunch.
It can be a real pain setting up a client side asset pipeline to work
alongside Rails and Sprockets. This does just that using the fantastically
productive tool Brunch.

Don't waste your days bootstrapping Webpack!

Once you're up and going, you can add all the bells and whistles,
including React and ES2016. It already has sass, Babel, and autoreload out the box.

## Getting started
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
* Run:
    * `cd rails-application` Make sure you are in the top level of your Rails directory.
    * `brunch new -s dimroc/brunch-with-rails`
    * `brunch watch` — watches the project with continuous rebuild and refreshes the browser on changes.
    * Run `rails server` to serve up the compiled files from vendor/assets/(javascripts|stylesheets).
* Learn:
    * Write your code in `client/` dir. It will be processed through the node pipeline and written to `vendor/assets/javascripts/client.js`
    * Place static files you want to be copied from `client/assets/` to `vendor/assets/`.
    * [Brunch site](http://brunch.io), [Getting started guide](https://github.com/brunch/brunch-guide#readme)


### Rendering the output

Most Brunch samples render the output to a `build/` folder. In this skeleton, we write it to the app assets folder.
A simple `ClientController` with the following javascript will load the HTML5 application:

#### app/views/client/show.html.erb

```erb
<script>require('client/js/initialize');</script>

```

### Working with Guard

Rather than having to run `rails server` and `brunch watch`, you can use the following `Guardfile` to run both:


```ruby
guard 'rails' do
  watch('Gemfile.lock')
  watch(%r{^(config|lib)/.*})
end

guard 'process', name: 'brunch', command: 'brunch watch' do
  watch('brunch-config.js')
  watch('package.json')
end
```

You will need the gems `guard-rails` and `guard-process`:

Gemfile.rb

```ruby
group :development do
  gem 'guard-process'
  gem 'guard-rails', require: false
  ...
end
```


## Demo

See this [repo for an example](https://github.com/dimroc/brunch-with-rails-demo.git).


