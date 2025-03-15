class ProductsController < ApplicationController
  allow_unauthenticated_access only: %i[ index show ]
  before_action :set_product, only: %i[ show edit update destroy ]

  def index
    render inertia: 'Products/Index', props: {
      products: Product.all.map do |product|
        product.as_json(
          only: [ :id, :name, :description, :inventory_count ]
        ).merge(
          show_url: product_path(product),
        )
      end
    }
  end

  def show
    render inertia: "Products/Show", props: {
      product: @product.as_json(
        only: [ :id, :name, :description, :inventory_count ]
      ).merge(
        featured_image_url: @product.featured_image.attached? ? url_for(@product.featured_image) : "",
        is_out_of_stock: @product.inventory_count.zero?,
        delete_url: product_path(@product),
      )
    }
  end

  def new
    @product = Product.new

    render inertia: "Products/New", props: {
      product: @product
    }
  end

  def create
    @product = Product.new(product_params)

    if @product.save
      redirect_to @product
    else
      redirect_to new_product_url, inertia: { errors: @product.errors }
    end
  end

  def edit
    render inertia: "Products/Edit", props: {
      product: @product
    }
  end

  def update
    if @product.update(product_params)
      redirect_to @product
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @product.destroy
    redirect_to products_path
  end

  private
  def set_product
    @product = Product.find(params[:id])
  end

  def product_params
    params.expect(product: [ :name, :description, :featured_image, :inventory_count ])
  end
end
