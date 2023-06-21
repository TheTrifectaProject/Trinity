# FEC-Sprint
We are creating a front end application that mimics an e-commerce site. 


👀 This document is best viewed on GitHub or in your IDE’s Markdown Preview

✍️ JotNet
Today you'll be building out a minimal blogging platform called ✍️ JotNet.

In its most complete form, the app should allow you to view a list of published blog posts and see each one in detail, add and delete posts, toggle the draft-status, and count the number of views.

⏰ There are many more requirements listed here than you have time to complete. That is by design. The goal is to complete as much as possible in the time allotted.

You may skip requirements marked “(OPTIONAL)”; while completing them can increase your grade, they only offer a chance to demonstrate skills not otherwise required for the app to function. Try not to skip any other requirements.

System Requirements
Phase 0: Before Beginning...
Phase 1: The List
Part 1. Set up the server
Part 2. Implement the client
Phase 2: POSTing Posts
Phase 3: Seeing Details
Phase 4: Algorithmic Interlude
Phase 5: Head to Headers
Phase 6: Coding Coda
The End
☞ Approved Resources
System Requirements
Local, running MySQL (v8) server
Node (v16) and npm (v8)
Google Chrome or a browser with equivalent dev tools
VS Code or a similar Web IDE with default settings
You may use the Prettier extension to format code when necessary
Phase 0: Before Beginning...
 Navigate to the cloned assessment directory (the folder this file is in!) in your terminal and git remote rm origin to prevent yourself from accidentally pushing code during the assessment.
 Navigate to the prompt directory and install the project’s dependencies.
 Create a copy of the 📄 example.env file and call it .env, if such a file doesn't exist. The values in the new file will populate your environment variables, and database credentials in particular.
 Ensure that the MySQL server is running on your computer (by logging in via the terminal or using brew services list if you installed it with Homebrew).
If it is not, you may need to run brew services start mysql, mysql.server start, or a similar command, depending on how you installed MySQL.
 Quickly scan the requirements below and study the provided codebase to assess what's been provided to you, what you will need to refactor, and what you might need to create to complete the app.
 When ready, in two separate terminals, run the server-dev and client-dev scripts.
Don't be alarmed if you are greeted with errors! We are going to fix things in Phase 1. 🧘
Remember to run all scripts from prompt directory JotNet/ (not the outer assessment directory or any sub-directories). Commands, environment variables or build steps may break if they are run from the wrong location.
Phase 1: The List
Let’s build the main view of the app: a list of posts.

Part 1. Set up the server
📞 Callbacks or 🤞 Promises? You may use either pattern to complete any async requirements below.

 For the rest of the assessment, make sure to still add and commit work after each checkbox step, at minimum! Use descriptive commit messages.

 Create a database jotnet in MySQL. You may use the terminal to do this.

 In 📄 server/db.js, create a connection to the jotnet database, using the values in 📄 .env

 In 📄 server/seed.js, complete the query to create a table of "posts". Each record should contain:

ID (a primary key integer)
title (a short string)
content (multiple paragraphs)
summary (a single paragraph)
status ("public" or "draft")
image ID (an Unsplash Image ID, about 12 characters long)
views (integer)
... and created_at / updated_at fields (provided). See the 📄 examples/postsData.json file for example data.
 Implement the createOne method in the Post model, in 📄 models/Post.js (deleteAll is completed for you).

 Seed the database by running the 📄 seed.js file.

 Debug any errors by updating your model or table definition.
 Rerunning the seed script will drop and re-create your table, and re-populate your table with sample data
 (OPTIONAL) Also consider adding an NPM script that will run the seed file.
 Implement the findAll method in the Post model by writing an SQL query.

Note that the results should be in reverse-chronological order (newest first).
Make sure to handle errors in this and other async methods.
 Implement the getPosts request-handler in 📄 controllers/posts.js.

 Set up a route in 📄 server/index.js by which clients can retrieve all the posts saved in the database.

 Add the ability for the server to serve up static assets from the 📂 client/dist directory - this is where Webpack is already configured to put generated client files.

 (OPTIONAL) In 📄 server/middleware/logger.js write a custom middleware function which will log the type and path (and query parameters) of the incoming request.

 Mount this middleware function so that it runs for all incoming requests.
At this point in the project you should have a populated database and a running server.

Part 2. Implement the client
 Read the commentary in 📄 client/src/components/App.jsx; this file will need to be minimally edited in later steps.
 In 📄 client/src/components/List.jsx, initialize some state to hold an array of “posts”.
 When the component is mounted, retrieve the posts from your server with an AJAX request.
 Render each post in the retrieved list as a Card component:
Example markup of the List and Card components can be found in the 📂 example folder. The rendered DOM should be as close to the provided markup as possible – the provided CSS only works for specific tags and nesting.
 Implement a Card component using props passed to it from the List component in 📄 client/src/components/Card.jsx.
Note: the Card component should only render a post’s summary, not its full text.
Only show the <sup>Draft</sup> tag if the post’s status is “draft”.
 (OPTIONAL) The Card component should display when its post was created in a human-friendly format. Research how to format the creation date using the imported function, from the date-fns library.
You may skip formatting the date until it's required in Phase 3.
 If there are no posts, the List component should conditionally render a message alerting the user.
You should now be able to navigate to the app in your browser and see a list of cards for each of the posts in your database.

Phase 2: POSTing Posts
Let’s implement the ability to add new posts to our budding blogging platform!

 Implement the addPost function in the server-side controllers, using the createOne model method from earlier.
 Add a server route that handles a POST request
 Ensure that you are able to read the request’s body data.
 In 📄 client/src/components/App.jsx, un-comment the “New Post” navigation list-item. Refresh the page; you should see a new option on the page to navigate to the “New Post” form.
 In the Form component (📄 client/src/components/Form.jsx) convert the inert inputs into controlled components:
 Each input should update its corresponding state when interacted with.
Warning: the draft-status checkbox will need to be handled differently than the text-inputs. When checked, the value should be “draft”. When unchecked – and by default – the value should be “public”. Look for the checked property on the input. You may skip this input and tackle it after the rest of your form is working.
 Each input should reflect its corresponding state’s value
 When the form is submitted, send the data to the server to be saved.
 Solve for any errors or unexpected behaviors.
You may need to provide a summary field when submitting the form. Feel free to use some placeholder string. We will tackle parsing out a summary in a future phase.
 Note that the App component gives the form an onSubmit prop. Make sure this is called at the appropriate time, after the submission has been saved.
You should now be able to navigate to the form and submit a post which gets saved in the database. Once the request is successfully completed, you should be navigated to the list view, where you should be able to see your new post in the list.

Phase 3: Seeing Details
It’s all well and good to be able to retrieve and create posts but a blog is only good if you can actually read it. Let’s allow user to click on a post and see all its contents...

 Implement the findByID method in the Post model.
 Set up a route in 📄 server/index.js (and corresponding controller getPost)by which clients can retrieve a single post based on the parameter. For example, a GET request for /posts/2 to return the post with the ID “2”.
In 📄 client/src/components/App.jsx, note that the List is given a showPostOnClick prop. This will switch the view to the Detail component, which in turn will be given an id prop.
 In 📄 client/src/components/List.jsx, pass an onClick prop to each Card. This function should call showPostOnClick and pass the ID of the Card’s post as an argument.
Due to the way the App component has been implemented, showPostOnClick accepts an ID in the format {id: post.id}.
 Inside the Card component, make sure the onClick prop is invoked whenever the <aside/> is clicked.
 Complete the Detail component based on the HTML markup in 📄 example/Detail.html
 When it is mounted, it should make a request to the API for the individual post, based on the id prop
 Like a Card, the Detail view should render the creation time in a human-friendly format.
 Unlike a Card, the Detail view must render the content of a post instead of just the summary. Make sure each paragraph of the content is rendered in a discrete paragraph element.
At this point in the project you should be able to click on a post in the list and see a full view of the post.

Phase 4: Algorithmic Interlude
In the previous phases we skipped over creating true summaries for the posts. Let’s fix that by creating a helper function which will accept the content of our posts and extract a summary from that text:

 A stub of this function can be found in 📄 client/src/lib/parseContent.js. Make sure it is correctly exported from that file and imported into the Form component, where it will be invoked.
 In the Form component, replace the content and summary fields of the outgoing request body with the properties returned by the helper function.
 Back in the parseContent function, complete its implementation to meet the following criteria:
 It should return an object containing content and summary fields.
 The summary field should be taken from the start of the content, whatever it is.
 The summary should have an ellipses, “...”, at the end of the string.
 The summary should be no greater than 256 characters long.
 The content should be edited so that there are exactly two newline characters, \n, between each paragraph. (This will help reliably format the paragraphs in the Detail view; see the contents in 📄 examples/postsData.json for guidance).
 (OPTIONAL) Instead of just using the first 256 characters, allow authors of posts to mark where they want their summaries to end with <!-- summary --> in their text.
For example, the input "This is the summary<!-- summary --> and this is the rest of the content" should produce a result object: {content: "This is the summary and this is the rest of the content", summary: "This is the summary"}
 Add one new test to the 📄 client/src/lib/parseContent.spec.js suite to ensure your function is working as expected.
 Install the Jest npm module, which we can use to run our tests. Once Jest is installed, the test file can be run with the command npx jest
Once you are done with the algorithm, any new posts will be saved with auto-extracted summaries.

Phase 5: Head to Headers
We’re going to practice with sending and receiving headers to augment our requests with metadata. But first let’s build some routes and components to practice with:

 Within the post model, complete the deleteByID method.
 Within your server-side controllers, complete the deletePost request-handler (with an id url-parameter, so you know which post to delete!).
 Un-comment the code in 📄 client/src/components/App.jsx that will allow the user to navigate to the Admin Panel
In the 📄 client/src/components/Admin.jsx component:
 Set up state to hold onto a list of all the posts (just like in the List component).
 Download all the posts when the component mounts (just like in the List component).
 Render the list of posts as a table (just like in the List component check the Admin HTML file for what the component should render).
 Write a deletePost method which will send a DELETE request for a single post
 Add a listener which will invoke it every time any post’s red “X” icon (❌) is clicked.
Don’t worry about the views or toggling the draft status for now.
At this point we should be able to click on the Admin button in the navigation and see a table-list of all the posts. Once there, we should be able to delete a post.

Now that we have a route in place, let’s make it a little harder to delete a post... Our server should require every delete request to contain a particular header. If there is no header or the secret passcode does not match, the request should result in an error.

 In the Admin component, make sure the outgoing DELETE request contains a header with the key “Auth” and a value that matches the AUTH_SECRET set in 📄 .env.
Due to some Webpack-enabled magic, you may refer to process.env.AUTH_SECRET in your client-side code. 🤯
 In 📄 server/middleware/authChecker.js write a middleware function:
 That checks the headers of the incoming request for an “Auth” header and compares it to the secret.
If the codes match, allow the deletion to progress; if the codes don’t match, send a 401-Unauthorized response instead.
 Ensure the middleware function you just defined runs before the deletePost request-handler.
Woohoo! We now have a mechanism by which we can allow or disallow certain actions to be taken on the server. We can upgrade this in the future to use user-identifying sessions as a basis for authorization but headers will need to be enough for now.

Phase 6: Coding Coda
This last section will round out the functionality of the Admin view and put finishing touches on the app. The requirements are a little more vague; tip: plan / pseudo-code your approach before jumping into code.

 Complete any other incomplete or skipped requirements, marked as “(OPTIONAL)” above.
 Allow the user to toggle the draft status of a post in the admin view’s checkboxes.
 When a user navigates to the detail view of a post, send a PUT or PATCH request to the server to increment the number of views for that post.
The End
You’re all done! 🏁

 Please follow the submission instructions to complete the assessment.
☞ Approved Resources
🔍 Google: only to search for and within the following resources...
🔍 Stack Overflow answers related to technology used during the assessment
MDN's JavaScript Reference for standard methods, constructors, etc.
mysql2 and mysql (interface) npm packages
SQL syntax reference (MySQL v8)
Express.js (v4 docs)
React (v17 docs);
⚠️ v18 has some major breaking changes in the ReactDOM API!
axios library docs
date-fns library docs
Jest testing docs (expect assertions)
Postman, to test API routes without needing to implement client-side AJAX.
Webpack docs (refrain from editing the configuration)
