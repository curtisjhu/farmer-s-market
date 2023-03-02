class Posts < ApplicationRecord
	has_many :comments, dependent: :destroy
end
