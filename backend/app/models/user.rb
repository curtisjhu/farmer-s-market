class User < ActiveRecord::Base
	include MongoMapper::Document
	devise :database_authenticatable

	attr_accessible :email, :nickname, :avatar_url, :password, :password_confirmation, :remember_me
	has_many :posts
  
	key :name, String
	key :location,  String
  
  end