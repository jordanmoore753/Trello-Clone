class Api::CardsController < ApplicationController
	def create
		new_card = card_params[:card].merge({ list_id: card_params[:list_id]}) 
		@card = Card.new(new_card)

		if !@card.save
			return render 'api/shared/error', status: :unprocessable_entity
		end

		render :create, :status => 201 
	end

	def show
		@card = Card.find_by_id(params[:id])

		return render :json => { :error => 'not found' }, :status => 404 if @card.nil?
	end

	private

	def card_params
		params.permit(:list_id, :card => :title)
	end
end