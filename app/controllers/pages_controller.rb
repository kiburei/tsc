class PagesController < ApplicationController
  def welcome
    @store = Store.all
  end
end
