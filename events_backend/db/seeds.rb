# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create([
    { name: "Gatsby" },
    { name: "Thomas" },
    { name: "JB" },
])

Event.create([
    { user_id: User.all.last.id, name: "That party", date: Time.now },
    { user_id: User.all.last.id, name: "Some gala", date: Time.now },
])

UserEvent.create([
    { user: User.all.first, event: Event.all.first },
    { user: User.all.second, event: Event.all.first }
])

puts "------- SEEDED ---------"
