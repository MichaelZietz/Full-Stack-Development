# Full-Stack-Development
CS-465-11254-M01 Full Stack Development I 2024 C-4

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

During this website's development, various architectures were implemented to achieve a Single Page Application (SPA). Initially, there wasd a static website where all the pages contained data directly embedded in the HTML files. This was not very secure and only allowed data to be hosted locally so extracting data from the HTML and storing it in separate, static JSON files was set up. This approach reduced the size of the HTML files, and we used tools like Handlebars and JavaScript to dynamically insert the data into the HTML when the pages were viewed. Next, the data was moved from static JSON files to MongoDB, a NoSQL database which could store all data rather than residing inside the website itself. Node Express was used to fetch the data from MongoDB when a client requested a page. This process was still server-side, with the pages being served fully populated with data. Finally, for the SPA, Angular was utilized to build the application, and unlike Node Express, Angular assembles the application from separate files into a single unit, which the browser downloads when accessing the localhost url. This file represents the entire website without data, and when a user selects a view that requires data, the SPA requests the data from the server, which retrieves it from the database. MongoDB, a NoSQL product, posseses a flexible structure and allows there to be JWT, JSON Web Tokens, for secure access to data. Traditional structured databases require data to be organized into tables of similar records, but MongoDB is capable of storing “documents,” which are objects that can contain different types of data. This flexibility allows for storing various data structures within a single database collection, simplifying application design by eliminating the need to manage multiple tables or collections and complex join statements to compile different data for viewing.

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON serves as a data model or format specification, while JavaScript is a programming language that manipulates data. JSON is utilized to define records, representing their content as key/value pairs. JavaScript can read from or write to this data structure, producing the necessary output. During the code base's development, there were several times where the code was refactored to importove funcitonality and efficiencies. The main one that sticks out to me was when we recfactored the travel objects' HTML code, so rather than repeating the same code for every object, we could use logic to repeat that HTML for each database element. This was particularly efficient because it reduced significant clutter in the code base and made understanding different sections of the HTML code easier, but it also improved the website's effectiveness as well. The first way meant that for every new trip that was added to the database, a new portion of HTML code also had to be replicated. This dynamic refactoring of code allowed the website to function properly from back end modifications like when trips are added, changed, or removed. 

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Endpoints are the destinations where requests are directed, resembling URL addresses. Methods are the operations that create the request and send it to the endpoint or, if on the server, handle and process the request.
Security is essential in full stack development for protecting data. It primarily involves two aspects: authentication and authorization. Authentication verifies the identity of the user to ensure access is secure. Authorization checks that the authenticated user has the necessary permissions to access the resource.

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course took me through the entire full stack development experience from start to finish, and guided me through each phase while leaving interesting challenges and problems of my own to solve. I really appreciated the experience and find myself not just better at web development which I had tought myself up until this point but also a better programer with a more well rounded knowledge. I look forward to using this knowledge in my career as a software engineer utilizing various programs and APIs to establish cross-platform functionality through the Internet of things. 
