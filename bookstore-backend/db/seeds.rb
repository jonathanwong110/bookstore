# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Book.create([
    { title: "Introduction to Algorithms", author: "Thomas H. Cormen, Charles E. Leiserson, Ronald Rivest, Clifford Stein", price: 25, description: "Introduction to Algorithms is a book on computer programming by Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein.", image: "https://prodimage.images-bn.com/pimages/9780262033848_p0_v1_s1200x630.jpg", category: "Non-Fiction" }, 
    { title: "Einstein: His Life and Universe", author: "Walter Isaacson", price: 30 , description: "By the author of the acclaimed bestsellers Benjamin Franklin and Steve Jobs, this is the definitive biography of Albert Einstein. How did his mind work? What made him a genius? Isaacson’s biography shows how his scientific imagination sprang from the rebellious nature of his personality. His fascinating story is a testament to the connection between creativity and freedom. Based on newly released personal letters of Einstein, this book explores how an imaginative, impertinent patent clerk—a struggling father in a difficult marriage who couldn’t get a teaching job or a doctorate—became the mind reader of the creator of the cosmos, the locksmith of the mysteries of the atom, and the universe. His success came from questioning conventional wisdom and marveling at mysteries that struck others as mundane. This led him to embrace a morality and politics based on respect for free minds, free spirits, and free individuals. These traits are just as vital for this new century of globalization, in which our success will depend on our creativity, as they were for the beginning of the last century, when Einstein helped usher in the modern age.", image: "https://images-na.ssl-images-amazon.com/images/I/816W3z2T3cL.jpg", category: "Biography"}, 
    { title: "The Intelligent Investor", author: "Benjamin Graham", price: 20 , description: "The greatest investment advisor of the twentieth century, Benjamin Graham taught and inspired people worldwide. Graham's philosophy of “value investing”—which shields investors from substantial error and teaches them to develop long-term strategies—has made The Intelligent Investor the stock market bible ever since its original publication in 1949.", image: "https://prodimage.images-bn.com/pimages/9780060555665_p0_v5_s600x595.jpg", category: "Business"}, 
    { title: "The Daughter of Sherlock Holmes", author: "Leonard Goldberg", price: 17 , description: "From USA Today and internationally bestselling author Leonard Goldberg comes The Daughter of Sherlock Holmes, a new thrilling tale of the great detective’s daughter and her companion Dr. John Watson, Jr. as they investigate a murder at the highest levels of British society.", image: "https://prodimage.images-bn.com/pimages/9781250181244_p0_v2_s600x595.jpg", category: "Mystery"}, 
    { title: "You Don't Know JS: Scope & Closures", author: "Kyle Simpson", price: 20.00, description: "No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. ... ", image: "https://images-na.ssl-images-amazon.com/images/I/71pK8dU+SCL.jpg", category: "Non-Fiction"},
    { title: "Ruby on Rails Tutorial: Learn Web Development with Rails", author: "Michael Hartl", price: 20.00, description: "This is the eBook of the printed book and may not include any media, website access codes, or print supplements that may come packaged with the bound book. ... ", image: "https://images-na.ssl-images-amazon.com/images/I/71wC40VdmCL.jpg", category: "Non-Fiction"},
    { title: "The Kite Runner", author: "Khaled Hosseini", price: 15.00 , description: "The Kite Runner is the first novel by Afghan-American author Khaled Hosseini. Published in 2003 by Riverhead Books, it tells the story of Amir, a young boy from the Wazir Akbar Khan district of Kabul, whose closest friend is Hassan.", image: "https://images-na.ssl-images-amazon.com/images/I/81RUfP0ZOjL.jpg", category: "Fiction"},
    { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", price: 15.00 , description: "A Thousand Splendid Suns is a 2007 novel by Afghan-American author Khaled Hosseini. It is his second, following his bestselling 2003 debut, The Kite Runner. Mariam is an illegitimate child, and suffers from both the stigma surrounding her birth along with the abuse she faces throughout her marriage.", image: "https://images-na.ssl-images-amazon.com/images/I/A1uFME3KaSL.jpg", category: "Fiction"}
])

Review.create([
    { content: "This was so helpful!", book_id: 1},
    { content: "I had to buy it after seeing the book was about Einstein!", book_id: 2},
    { content: "I can see why Warren Buffet loved this book!", book_id: 3},
    { content: "I couldn't put the book down!", book_id: 4},
    { content: "I'm now an expert in JavaScript", book_id: 5},
    { content: "I'm now an expert in Ruby", book_id: 6},
    { content: "Amazing is the only way to describe this book", book_id: 7},
    { content: "The sequel was even better!", book_id: 8}
])