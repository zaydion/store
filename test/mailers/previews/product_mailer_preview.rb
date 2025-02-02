# Preview all emails at http://localhost:3000/rails/mailers/product_mailer
class ProductMailerPreview < ActionMailer::Preview
  # Preview this email at http://localhost:3000/rails/mailers/product_mailer/in_stock
  def in_stock
    ProductMailer.with(product: Product.first, subscriber: Subscriber.first).in_stock
  end
end
