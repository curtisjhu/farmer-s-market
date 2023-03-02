
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
			title: params[:title],
			description: params[:description],
			location: params[:location],
			date: params[:date]
		)
		render json: @post
	end

	def update 
		@post = Posts.find(params[:id])
		@post.update(
			title: params[:title],
			description: params[:description],
			location: params[:location],
			date: params[:date]
		)
		render json: @post
	end

	def destroy 
		@post = Posts.find(params[:id])
		@post.destroy
		render json: @post
	end
end
