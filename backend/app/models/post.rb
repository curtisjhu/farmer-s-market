class Post
	include MongoMapper::Document
	include PublicActivity::Model
  
	key :image_src, String
	key :image_alt,  String
	key :description,  String
	key :price, Number

	tracked
  
end