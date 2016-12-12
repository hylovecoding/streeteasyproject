require 'sinatra'
require 'sass/plugin/rack'
require './app'



Sass::Plugin.options[:style] = :nested
use Sass::Plugin::Rack

run Sinatra::Application
