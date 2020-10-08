class Api::ListsController < ApplicationController
  def create
    @list = List.new(list_params)

    if @list.save
      render :create
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end

    rescue ActionController::ParameterMissing
      @error = "Invalid list data provided"
      render 'api/shared/error', status: :unprocessable_entity
  end

  def update
  end

  def list_params
    params.require(:list).permit(:title, :board_id)
  end
end