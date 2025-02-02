class Subscriber < ApplicationRecord
  belongs_to :product
  generates_token_for :unsubscribe

  validates :email, presence: true, uniqueness: { scope: :product_id }
end
