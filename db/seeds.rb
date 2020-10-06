# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Board.destroy_all

board1 = Board.create({title: "First board"})
# board2 = Board.create({title: "Second board"})

list1 = List.create(title: "First List", board: board1)
list2 = List.create(title: "Second List", board: board1)

card1 = Card.create(title: "First Card", description: "One card", list: list1)
card2 = Card.create(title: "Second Card", description: "Another card", list: list1)

card3 = Card.create(title: "Third Card", description: "One more card", list: list2)
card4 = Card.create(title: "Fourth Card", description: "Yet another card", list: list2)
card5 = Card.create(title: "Fifth Card", description: "Last card", list: list2)

# Seed the database with the following data:
#
#     A board
#     Two lists belonging to that board
#     Two cards in the first list, three in the second
