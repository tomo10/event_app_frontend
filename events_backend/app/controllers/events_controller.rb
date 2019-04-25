class EventsController < ApplicationController

    def show
        event = Event.find_by(id: params[:id])
        
        if event 
            render json: event
        else 
            render json: {error: "Image not found."}, status: 404
        end 

    end 

    def index
        events = Event.all 
        render json: events 
    end 

    def create
        eventNew = Event.new(name: params[:name], user_id: params[:user_id], date: params[:date], image: params[:image_url])
        if eventNew.save 
            render json: eventNew 
        else 
            render json: { error: "Unable to create event." }, status: 400
        end 
    end 

    def destroy 
        event_del = Event.find_by(id: params[:id])
        
        event_del.destroy
    end 

end
