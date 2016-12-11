require 'sinatra'

def find_listings
  6.times.map { random_listing }
end

def create_random_address
  "#{rand(200) + 1} #{['1st', '2nd', '3rd', 'Madison', 'Lexington', 'Park', '5th', '6th'].sample} Avenue"
end

def random_listing
  {
    address: create_random_address,
    location: 'New York',
    imageSrc:'./assets/real_estate_photo.jpg'
  }
end

get '/' do
  @title = 'Rentals Comparison'
  @listings = find_listings
  erb :index
end
