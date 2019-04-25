class EventSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :image, :user_id
end
