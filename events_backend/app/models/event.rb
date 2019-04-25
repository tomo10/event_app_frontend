class Event < ApplicationRecord
    belongs_to :host, class_name: "User", foreign_key: :user_id
    has_many :user_events
    has_many :guests, through: :user_events, source: :user
end
