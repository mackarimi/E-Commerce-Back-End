# E-Commerce Back End

## Description

This is the back-end program for a website that sells things. It gives the website a working Express.js API that uses the latest technologies to power the website's features and allow it to compete with other e-commerce businesses.

## Table of Contents

💠[Installation](#installation)
💠[Usage](#usage)
💠[Screenshots](#screenshots)
💠[License](#license)
💠[Contribution](#contribution)
💠[Test](#test)
💠[Credits](#credits)
💠[Questions](#questions)
💠[GitHub](#github)
💠[GitHub-link](#Github-link)

## Installation

. Clone the repository: `git clone https://github.com/mackarimi/`
. Navigate to the repo directory: `cd`
. Open the repo in VSCode: `code .`
. Open the integrated terminal from the VSCode: `ctrl+~`
. Start the application with `npm start`

## Usage

1. Create the database: `mysql -u root -p`
   . Enter the password
   . Run the schema: `source db/schema.sql`
   . Quit MySQL: `quit`
2. Seed the database: `npm run seed`
3. Start the application: `npm start`
4. Start the server: `npm run watch` or `nodemon server.js`
5. Open Insomnia Core
   . Start GET, POST, PUT, and DELETE routes for categories, products, and tags as needed.

## Screenshots

![](/Assets/Pics/MySQL_ecommerce_tables.jpg)
![](/Assets/Pics/tags.jpg)
![](/Assets/Pics/products.jpg)
![](/Assets/Pics/categories.jpg)
![](/Assets/Pics/created_tag.jpg)
![](/Assets/Pics/updated_tag.jpg)
![](/Assets/Pics/deleted.jpg)

View demo video here:
https://www.loom.com/share/d8660b95ac5e4c7eb4bdeaef939c47b3?sid=c832a746-76fc-44a1-bafe-162880536c66

## License

This project is licensed under the None license.

## Contribution

Please let me know how I can improve this project. Issues and pull requests are always welcome.

## Test

Open Insomnia Core
. Start GET, POST, PUT, and DELETE routes for categories, products, and tags as needed.

.Run the following commands in the terminal to test the routes:
. GET all categories: `http://localhost:3001/api/categories`
. GET one category: `http://localhost:3001/api/categories/1`
. POST a category: `http://localhost:3001/api/categories`
. PUT a category: `http://localhost:3001/api/categories/1`
. DELETE a category: `http://localhost:3001/api/categories/1`

. GET all products: `http://localhost:3001/api/products`
. GET one product: `http://localhost:3001/api/products/1`
. POST a product: `http://localhost:3001/api/products`
. PUT a product: `http://localhost:3001/api/products/1`
. DELETE a product: `http://localhost:3001/api/products/1`

. GET all tags: `http://localhost:3001/api/tags`
. GET one tag: `http://localhost:3001/api/tags/1`
. POST a tag: `http://localhost:3001/api/tags`
. PUT a tag: `http://localhost:3001/api/tags/1`
. DELETE a tag: `http://localhost:3001/api/tags/1`

## Credits

icon8.com for the icons.
stackoverflow.com for the help with the code.
Starter code files were provided by the UCB Bootcamp for the purposes of studying and completing this assignment.

## Questions

Questions or feedbacks are always welcome and appreciated.💬

[![Email](./Assets/icon_images/image.png)](mailto:karimiabdolkarim0@gmail.com)

## GitHub 💻

[![Github](./Assets/icon_images/image-1.png)](https://github.com/mackarimi/)

## GitHub Link:

[![Github-link](./Assets/icon_images//image-2.png)](https://github.com/mackarimi/ecommerce_back_end)
