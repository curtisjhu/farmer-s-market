
class PostsController < ApplicationController

	def index
		@posts = Posts.all
		render json: @posts
	end
	
	def show 
		@posts = Posts.find(params[:id])
		render json: @posts
	end

	def create
		@post = Posts.create(
			image_src: params[:image_src], 
			title: params[:title],
			description: params[:description]
		)
		render json: @post
	end

	def update 
		@post = Posts.find(params[:id])
		@post.update(
			image_src: params[:image_src], 
			title: params[:title],
			description: params[:description]
		)
		render json: @post
	end

	def destroy 
		@post = Posts.find(params[:id])
		@post.destroy
		render json: @post
	end
end
