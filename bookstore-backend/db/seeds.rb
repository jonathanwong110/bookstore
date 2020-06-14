# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein", price: 25, description: "Introduction to Algorithms is a book on computer programming by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.", image: "https://prodimage.images-bn.com/pimages/9780262033848_p0_v1_s1200x630.jpg", category: "Non-Fiction" }, 
    { title: "You Don't Know JS: Scope & Closures", author: "Kyle Simpson", price: 20, description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. ... ", image: "https://images-na.ssl-images-amazon.com/images/I/71pK8dU+SCL.jpg", category: "Non-Fiction"},
    { title: "Ruby on Rails Tutorial: Learn Web Development with Rails", author: "Michael Hartl", price: 20, description: "This is the eBook of the printed book and may not include any media, website access codes, or print supplements that may come packaged with the bound book. ... ", image: "https://images-na.ssl-images-amazon.com/images/I/71wC40VdmCL.jpg", category: "Non-Fiction"},
    { title: "The Kite Runner", author: "Khaled Hosseini", price: 15 , description: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan.", image: "https://images-na.ssl-images-amazon.com/images/I/81RUfP0ZOjL.jpg", category: "Fiction"},
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", price: 15 , description: "A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini. It is his second, following his bestselling 2003 debut, The Kite Runner. Mariam is an illegitimate child, and suffers from both the stigma surrounding her birth along with the abuse she faces throughout her marriage.", image: "https://images-na.ssl-images-amazon.com/images/I/A1uFME3KaSL.jpg", category: "Fiction"}
])

Review.create([
    { content: "This was so helpful!", book_id: 1},
    { content: "I'm now an expert in JavaScript", book_id: 2},
    { content: "I'm now an expert in Ruby", book_id: 3},
    { content: "Amazing", book_id: 4},
    { content: "The sequel was even better!", book_id: 5}
])