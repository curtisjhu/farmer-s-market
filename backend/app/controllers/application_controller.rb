class ApplicationController < ActionController::API
	# Necessary include if you plan on access controller instance
	# in Procs passed to #tracked method in your models
	include PublicActivity::StoreController
	include ActionView::Helpers::TextHelper  
	
end