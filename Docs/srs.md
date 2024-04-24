# CookPit
## Software Requirements Specification
### 1. Introduction
The current document serves as a comprehensive blueprint for our project, outlining the detailed functional and non-functional requirements, system behavior, and constraints to guide the development team towards building a successful solution.

#### 1.1 Overview
In this Software Requirements Specification (SRS) document, we describe the details of the functional and non-functional prerequisites for the development of a captivating and highly interactive recipes website. The platform is designed with a multifaceted purpose, aiming to empower users to explore, discover, and archive a diverse array of culinary delights.

The primary audience comprises home cooks hailing from a wide spectrum of skill levels. With this diversity in mind, our objective is to construct an intuitive and user-friendly digital environment. This means ensuring that not only is the website easy to navigate, but it's also a delightful and informative hub for anyone with a passion for cooking. 

To avoid overcrwoding this documents, many diagrams will not be added directly here. You can check all the diagrams related to this project in the following link:
https://github.com/SE-TINF22B6/CookPit/tree/main/Docs/SRS%20Images

There you can find sequence, activity and usecase diagrams. 

#### 1.2 Scope

This SRS document provides an exhaustive exploration of both the functional and non-functional requisites essential for the successful realization of the entire system. The scope of this document cover the whole project, but also it extends its purview to encompass specifications for various constituent modules that collectively constitute this software. 

Some of the functional requirements that will be listed in this SRS are the possibility of having a search bar to find a specific recipe, giving any user the chance of uploading a recipe at any moment, following other accounts, leaving comments in a recipe, the ability to save favorite recipes, the ability to view recipes in a detailed format, and setting tags to a recipe. The most important non functional requirements that will be discussed in this specification are maintainability, usability, reliability and documentation. The characteristics of each requirement will be detailed in their respective sections.

All the requirements of this projects are listed in the current document. Other resources may need to be consulted for more visual hints. For example, the diagrams of the use cases or the mockup of the graphical interface. The link to these materials will be shared below.

In addition to the description of the functional and non-functional dimensions, this SRS delves into the inherent technical constraints and opportunities inherent in the project. Furthermore, this SRS, explores the possibilities and limitations of the technologies that will be employed. Each technology is meticulously dissected, with explicit attention to the prerequisites.

To enhance clarity, this document incorporates a dedicated section explaining the technical concepts related to this undertaking.

By the nature of this project, the budget limitations will not be covered. This is because this is an academic project, therefore, there are not monetary resources assigned for its development. Realated to the previous point, this document does not cover neither the topic of generating economic profit after the deployment of this software. In addition, no legal concerns will be covered in this document.
#### 1.3 Definitions, Acronyms and Abbreviations
This section contains the definitions of all terms, acronyms, and abbreviations required to properly interpret this document.

- **SRS:**  Software Requirements Specification: A comprehensive document outlining the functional and non-functional requirements of the cooking website.
- **DB:** Database: Structured collection of organized data that can be easily accessed, managed, and updated.
- **DBMS:** Database Management System: Software for creating, managing, and interacting with the website's database.
- **API:** pplication Programming Interface: A set of rules and protocols that allow different software applications to communicate with each other.
- **URL:** Uniform Resource Locator: The address used to access a specific webpage on the internet.
- **UX/UX Design:** User Interface/User Experience Design: The process of designing the website's layout, visual elements, and overall user experience.

#### 1.4 References
> A complete list of all documents referenced. Each document should be identified by title, date, and publishing organization. You can also insert hyperlinks, in order to open the references conviniently.

### 2. Functional requirements
In this section, we delve into the specific functions the software application must perform, detailing the inputs required, processing logic, and the expected outputs under various conditions. These requirements are derived from extensive discussions with stakeholders, including end-users, product managers, and developers, ensuring that the software solution aligns seamlessly with the business objectives and user expectations.

> The links to your UML diagrams and UI mockupds will be added to this document.

#### 2.1 Overview 
This software is a digital platform designed to provide users with a wide range of culinary resources and tools to enhance their cooking experience. It offers the following functionalities:

1. **Recipes Database:** A vast collection of recipes spanning various cuisines, dietary preferences, and difficulty levels. Users can search for specific dishes or ingredients.

2. **Step-by-Step Guides:** Detailed instructions accompanied by images that guide users through the cooking process, ensuring they understand each step.

3. **User-generated Content:** Features that allow users to submit their recipes, photos, and cooking tips, fostering a sense of community and shared knowledge.

4. **Interactive Features:** Forums, comments sections, or social media integration to facilitate discussions, recipe sharing, and feedback among users.

5. **Personalized Recommendations:** Support from the OpenAI API that allows the users to prepare a meal with the ingredients they desire, instead of being restricted to get the ingredients for a given recipe.

In summary, this cooking website serves as a comprehensive culinary hub, offering recipes, instructional content, community interaction, and helpful tools to empower users in their cooking endeavors.  
> Include one or more **UML use case** diagram(s) and necessary description to specify the major use cases of your application.

#### 2.2 Search Bar / Use Case 1
The search bar in the website enables users to input specific keywords, initiating a search algorithm that locates and displays relevant content or information within the site, facilitating efficient navigation and access for users.

**User stories**
1. As a user, I want to be able to enter keywords into the search bar so that I can quickly find relevant articles, products, or information on the website.

2. As a user, I want to see clear and relevant search results when I submit a query, ensuring that the most pertinent content appears at the top of the results list.

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/FavoritesMockup.png)


UML Diagram of the oeverview of the system.


**Preconditions**
- <ins>User Interface Loaded:</ins> The search bar functionality assumes that the website's user interface is loaded and accessible to the user.

- <ins>Database Connectivity:</ins> The system must be connected to the necessary databases or data sources containing the information to be searched.

- <ins>Data Indexing:</ins> The content to be searched must be properly indexed, allowing the search algorithm to retrieve relevant results efficiently.

- <ins>Internet Connection:</ins> Users must have an active internet connection to enable real-time searching and retrieval of data from online sources.

- <ins>Browser Compatibility:</ins> The search bar should be compatible with commonly used web browsers to ensure consistent functionality across different platforms and devices.

- <ins>Correct Input Format:</ins> Users are expected to input search queries in a valid format compatible with the search algorithm (e.g., text, keywords) to receive accurate results.

- <ins>Data Integrity:</ins> The data stored in the database or sources must be accurate and up-to-date to ensure the search results are relevant and reliable.

- <ins>System Availability:</ins> The system hosting the website and search functionality must be operational and available for users to perform searches.
  

**Postconditions**
- <ins>Search Results Displayed:</ins> After entering a search query, the search bar displays a listf relevant recipes, cooking tips, or articles matching the query.

- <ins>Results Sorting:</ins> Users have the option to sort search results based on criteria such as relevance, popularity, ratings, or publication date, allowing for a customized viewing experience.

- <ins>Clickable Results:</ins> Each search result displayed is clickable, leading users to the detailed page of the recipe or article, providing in-depth information about the selected item.

- <ins>Clear Search Option:</ins> Users have the option to clear the search bar, removing the query and resetting the search results, enabling them to perform a new search or browse the website afresh.

- <ins>Correct Search Algorithm:</ins> The search results reflect the application of the correct search algorithm, ensuring accurate and relevant matches to the user's query.

- <ins>Fast Loading:</ins> Search results and associated content load quickly, ensuring users have a seamless experience without significant delays.


**Estimated efforts:** Medium efforts


#### 2.3 User Registration / Use Case 2
Users can create an account by providing basic information such as username, email address, and password.

**User stories**
1. As a new user, I want to be able to register for an account on the cooking website so that I can access personalized features and save my favorite recipes.

2. As a visitor, I want the registration process to be simple and intuitive, allowing me to sign up with my email address and create a secure password without unnecessary complications.


**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/SignUpMockup.png)


**Preconditions**
- <ins>User Website Accessibility:</ins> The cooking website must be accessible and operational, allowing users to navigate to the registration page.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and complete the registration process online.

- <ins>User Interface Loaded:</ins> The user interface elements, including the registration form and relevant buttons, must be properly loaded and visible on the webpage.

- <ins>Database Connectivity:</ins> The website must be connected to the appropriate database where user account information will be stored securely.

- <ins> Browser Compatibility:</ins> The registration process should be compatible with commonly used web browsers, ensuring a consistent experience across different platforms and devices.

  

**Postconditions**
- <ins>User Account Creation:</ins> After successful registration, a new user account is created in the website's database, storing the user's provided information such as username, email address, and password hash.

- <ins>User Authentication:</ins> The registered user can log in using the provided username/email and password, gaining access to the website's features and personalized content.

- <ins>Profile Information Stored:</ins> The user's profile information, including optional details such as name and profile picture, is stored securely and associated with the user's account.

- <ins>Security Measures Implemented:</ins> The registration system ensures the secure storage of user passwords using appropriate encryption and hashing techniques to protect sensitive user data.

- <ins>User Interface Update:</ins> The user interface is updated to reflect the user's registration status, potentially showing a welcome message and providing access to additional features available to registered users.

- <ins>Error Handling:</ins> If any errors occurred during the registration process (e.g., invalid input, database connection issues), appropriate error messages are displayed to the user, guiding them on how to resolve the issue.

- <ins>Password Recovery Option:</ins> After registration, the user has the option to recover their password through the provided email address in case they forget their login credentials.

- <ins>Database Integrity:</ins> The user registration process ensures the integrity of the database, preventing duplicate accounts and maintaining consistency in user data storage.


**Estimated efforts:** Low efforts


#### 2.4  Log in / Use Case 3
Registered users can log in securely using their username/email and password credentials.
Implement password recovery/reset functionality in case users forget their passwords.

**User stories**
1. As a registered user, I want to log into my account using my username/email and password, ensuring secure access to my personalized content and saved recipes.

2. As a user, I want to receive clear and informative error messages if I enter incorrect login credentials, guiding me on how to rectify the issue and successfully log in.

**Use Case Diagram**

![Login Use Case Diagram](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/activity-diagramm-login.png)

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/LoginMockup.png)



**Preconditions**

- <ins>User Registration:</ins> Users must have previously registered and created an account on the cooking website. The registration process includes providing a valid email address or username and setting a secure password.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and initiate the login process.

- <ins>User Interface Loaded:</ins> The user interface elements, including the login form and relevant buttons, must be properly loaded and visible on the webpage.

- <ins>Website Accessibility:</ins> The cooking website must be accessible and operational, allowing users to navigate to the login page.

- <ins>Correct Input Format:</ins> Users must enter their login credentials (username or email address and password) in the correct format, following any specified guidelines or restrictions.
  

**Postconditions**
- <ins>User Authentication:</ins> After successful login, the system authenticates the user's credentials (username/email and password), verifying their identity against the stored information in the database.

- <ins>Session Creation:</ins> A secure session is established for the user, allowing them to navigate the website, access personalized content, and perform actions related to their account.

- <ins>User Interface Update:</ins> The user interface is updated to reflect the user's logged-in status, potentially displaying personalized content, greetings, and a user menu with options for account management.

- <ins>Access to Account Features:</ins> Upon logging in, the user gains access to account-specific features such as saved recipes, favorite items, and user-generated content, enhancing their interactive experience.

- <ins>Password Security:</ins> After successful login, the system ensures the user's password remains confidential and is not transmitted or stored in plain text within the session or any subsequent interactions.

**Estimated efforts:** Low efforts

**We have also done a two other activity diagramms. In our SRS we have only looked at this digram in detail. you can find our other diagrams under the links:** <br>
https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/ViewRecipe_activityDiagramm.png
https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/UploadRecipe_activityDiagram.png




#### 2.5  Profile Management / Use Case 4
Users can edit and update their profile information, including name, email, profile picture, and other relevant details.
Enable users to change their password and update account settings (e.g., email preferences).

**User stories**
1. As a user, I want to create a profile on the cooking website, providing my name, email address, and a password, enabling me to access personalized features and save my favorite recipes.

2. As a user, I want to edit my profile information, including my name, email address, and profile picture, allowing me to keep my details up-to-date.


**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/MenuMockup.png)



**Preconditions**

- <ins>User Authentication:</ins> Users must be logged into their accounts on the cooking website to access the Profile Management feature. This ensures that only authorized users can edit their profiles.

- <ins>User Registration:</ins> Users must have successfully registered and created an account on the cooking website. The registration process includes providing valid credentials such as username/email and password.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and initiate actions related to Profile Management.

- <ins>User Interface Loaded:</ins> The user interface elements, including the profile editing form and relevant buttons, must be properly loaded and visible on the webpage.


- <ins>Session Continuity:</ins> Users' login sessions must be active and continuous. If a session has expired, users need to log in again before accessing Profile Management features.


**Postconditions**
- <ins>Updated Profile Information:</ins> After making changes, the user's profile information, including name, email, profile picture, and other details, is updated and stored securely in the website's database.

- <ins>Session Continuity:</ins> Users remain logged in after managing their profiles, ensuring a seamless transition without the need to log in again.

- <ins>Security Measures:</ins> The system ensures that any sensitive information, especially password changes, is securely processed and stored using encryption and hashing techniques to protect user data.

- <ins>Notification Preferences:</ins> Changes to notification preferences are applied, ensuring that users receive alerts and newsletters based on their updated settings.

- <ins>Password Recovery Option:</ins> After updating their profile, users still have the option to reset their password using the updated email address if they forget their login credentials.

- <ins>Confirmation Message:</ins> Users receive a confirmation message indicating that their profile changes have been successfully saved, providing a positive user experience and assurance that their updates were processed.

**Estimated efforts:** Medium efforts



#### 2.6  Saved recipes / Use Case 5
Users can bookmark or save their favorite recipes to their profile for quick access.
Implement folders or categories within the saved recipes section for better organization.

**User stories**
1.As a user, I want to be able to save my favorite recipes to a designated section on the website, allowing me to easily find and access them later.

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/FavoritesMockup.png)




**Preconditions**

- <ins>User Authentication:</ins> Users must be logged into their accounts on the cooking website to access and utilize the Favorite feature. This ensures that only authorized users can add recipes to their favorites.

- <ins>Recipe Availability:</ins> The recipes that users want to mark as favorites must be available and accessible on the website. Users cannot mark recipes as favorites if the recipes are hidden, deleted, or inaccessible.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and utilize the Favorite feature, enabling real-time interaction with the website's database.

- <ins>User Interface Loaded:</ins> The user interface elements, including the recipe pages and the favorite button/icon, must be properly loaded and visible on the webpage.

- <ins>Session Continuity:</ins> Users' login sessions must be active and continuous. If a session has expired, users need to log in again before accessing the Favorite feature.


**Postconditions**

- <ins>Marked Recipes:</ins> After marking a recipe as a favorite, the system records the user's action, associating the selected recipe with the user's profile.

- <ins>User Interface Update:</ins> The user interface reflects the change, displaying a visual indicator (such as a heart icon) next to the marked recipe, signifying that it has been added to the user's favorites list.

- <ins>Favorite List Update:</ins> The selected recipe is added to the user's favorites list, which can be accessed via the user's profile or a dedicated "Favorites" section on the website.

- <ins>Persistent Storage:</ins> Marked recipes persistently remain in the user's favorites list across sessions and devices, ensuring consistency and accessibility whenever the user logs in.

Removal Option: Users have the option to remove recipes from their favorites. If a recipe is removed, the system updates the favorites list and user interface accordingly.


**Estimated efforts:** Low efforts


#### 2.7 Profile Management / Use Case 6
User-submitted recipes, photos, and cooking tips, fostering a sense of community and allowing users to showcase their culinary creations.

**User stories**
1. As a user, I want to submit my own recipes to the website, including ingredients, step-by-step instructions, and images, so that I can share my culinary creations with the community.

2. As a culinary expert, I want the option to submit cooking tips, techniques, and video tutorials, sharing my knowledge with others and enhancing the learning experience of users.

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/MenuMockup.png)




**Preconditions**

- <ins>User Authentication:</ins> Users must be logged into their accounts on the cooking website to access and utilize the Posting a Recipe feature. This ensures that only authorized users can submit recipes.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and initiate actions related to posting a recipe, enabling real-time interaction with the website's database.

- <ins>User Interface Loaded:</ins> The user interface elements, including the recipe submission form and relevant buttons, must be properly loaded and visible on the webpage.

- <ins>Session Continuity:</ins> Users' login sessions must be active and continuous. If a session has expired, users need to log in again before accessing the Posting a Recipe feature.

- <ins>Recipe Availability:</ins> Users must have all the necessary details for the recipe, including ingredients, measurements, instructions, and optional images, before initiating the posting process.



**Postconditions**
- <ins>Recipe Publication:</ins> After successful submission, the recipe is published on the website, making it publicly accessible to other users and visitors, adhering to any specified content guidelines and moderation rules.

- <ins>User Interface Update:</ins> The user interface is updated to reflect the newly posted recipe, which may include adding the recipe to relevant categories, tags, or featured sections, ensuring visibility to users browsing the website.

- <ins>Recipe Details Display:</ins> The posted recipe details, including ingredients, measurements, instructions, and optional images, are displayed accurately and clearly on the recipe page, ensuring users can understand and follow the recipe.

- <ins>Visibility Options (if applicable):</ins> If the website offers visibility options, such as public, private, or friends-only recipes, the posted recipe respects the user's chosen visibility setting, ensuring the recipe is accessible only to the specified audience.

- <ins>Searchable and Indexable:</ins> The posted recipe is searchable within the website's search functionality, allowing users to find it based on relevant keywords, ingredients, or tags.

**Estimated efforts:** Medium efforts



#### 2.6  Saved recipes / Use Case 5
Users can bookmark or save their favorite recipes to their profile for quick access.
Implement folders or categories within the saved recipes section for better organization.

**User stories**
1.As a user, I want to be able to save my favorite recipes to a designated section on the website, allowing me to easily find and access them later.

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Mockups/FavoritesMockup.png)



**Preconditions**

- <ins>User Authentication:</ins> Users must be logged into their accounts on the cooking website to access and utilize the Favorite feature. This ensures that only authorized users can add recipes to their favorites.

- <ins>Recipe Availability:</ins> The recipes that users want to mark as favorites must be available and accessible on the website. Users cannot mark recipes as favorites if the recipes are hidden, deleted, or inaccessible.

- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and utilize the Favorite feature, enabling real-time interaction with the website's database.

- <ins>User Interface Loaded:</ins> The user interface elements, including the recipe pages and the favorite button/icon, must be properly loaded and visible on the webpage.

- <ins>Session Continuity:</ins> Users' login sessions must be active and continuous. If a session has expired, users need to log in again before accessing the Favorite feature.


**Postconditions**

- <ins>Marked Recipes:</ins> After marking a recipe as a favorite, the system records the user's action, associating the selected recipe with the user's profile.

- <ins>User Interface Update:</ins> The user interface reflects the change, displaying a visual indicator (such as a heart icon) next to the marked recipe, signifying that it has been added to the user's favorites list.

- <ins>Favorite List Update:</ins> The selected recipe is added to the user's favorites list, which can be accessed via the user's profile or a dedicated "Favorites" section on the website.

- <ins>Persistent Storage:</ins> Marked recipes persistently remain in the user's favorites list across sessions and devices, ensuring consistency and accessibility whenever the user logs in.

Removal Option: Users have the option to remove recipes from their favorites. If a recipe is removed, the system updates the favorites list and user interface accordingly.


**Estimated efforts:** Low efforts



#### 2.7  OpenAI API Integration / Use Case 6
The functional requirement of linking a cooking website to the OpenAI API is to enable users to receive AI-generated recipe suggestions, enhancing their culinary experience with creative and personalized cooking ideas.

**User stories**
1. As a Home Cook I want to receive AI-generated recipe recommendations for each day of the week.
2. As a User I want to access AI-generated recipe suggestions to discover new and exciting dishes.




**Preconditions**

- <ins> OpenAI API Integration:</ins> The OpenAI API should be successfully integrated into the cooking website's infrastructure, and the necessary API credentials should be obtained and configured.

- <ins> Stable Internet Connection:</ins> Users accessing the website should have a stable internet connection to send requests to the OpenAI API and receive recipe suggestions in a timely manner.

- <ins> User Authentication:</ins> The website should have a user authentication system in place, ensuring that users are logged in before they can access AI-generated recipe suggestions.

- <ins> Recipe Database:</ins> The website should have a database of recipes or access to recipe data that the AI can use as a reference when generating suggestions.

- <ins> AI Model and API Availability:</ins> The OpenAI API, including the specific AI model used for generating recipe suggestions, should be available and operational.


**Postconditions**

- <ins> AI Recipe Suggestions Available:</ins> Users of the cooking website can access AI-generated recipe suggestions based on their preferences and needs.

- <ins> User Personalization:</ins> Users receive recipe suggestions that are tailored to their dietary preferences, dietary restrictions, and other relevant information stored in their user profiles.

- <ins> Diverse Recipe Content:</ins> The website offers a wider variety of recipe options, including new and creative dishes, thereby enhancing the user's culinary experience.

- <ins> Enhanced Meal Planning:</ins> Users can easily plan their meals with AI-generated recipe recommendations, and they may have the option to add these recipes to their meal plans and shopping lists.

- <ins> Reduced Search Effort:</ins> Users experience reduced effort in searching for recipes, as the AI system streamlines the recipe discovery process.

Here you can see one exampel of a sequence diagram, where the user interacts with the OpenAI application: <br>
![sequence-diagram-openai](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/sequence-diagram-api.png)


**Estimated efforts:** Medium efforts

#### 2.8  Upload a recipe/ Use Case 7

Users can post their own recipes on CookPit and present their latest recipe to the community.

**User stories**

1.As a user, I want to be able to upload my favorite recipes to a designated section on the website, allowing me to easily share and upload them to the website.

**UI mockups**

![Login Mockup](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/CookPit_RecipeUpload.png)



**Preconditions**

- <ins>User Authentication:</ins> Users must be logged into their accounts on the cooking website to access and utilize the Recipeupload feature. This ensures that only authorized users can add recipes to the website.

- <ins>Recipe Standard:</ins> The recipes that users want to upload must be agreed to our recipe agreement on the website. Users cannot upload recipes if the recipes are not confirmed.
- 
- <ins>Internet Connection:</ins> Users must have an active internet connection to access the cooking website and utilize the Upload feature, enabling real-time interaction with the website's database.

- <ins>User Interface Loaded:</ins> The user interface elements, including the recipe pages and the Upload button/icon, must be properly loaded and visible on the webpage.

- <ins>Session Continuity:</ins> Users' login sessions must be active and continuous. If a session has expired, users need to log in again before accessing the Upload feature.


**Postconditions**

- <ins>Uploaded Recipes:</ins> After uploading a recipe, the system records the user's action, associating the new recipe with the user's and saving it in the database.

- <ins>User Interface Update:</ins> The user interface reflects the change, displaying a visual indicator, signifying that  user's has uploaded a recipe.

- <ins>Your Recipes List Update:</ins> The selected recipe is added to the user's upload list, which can be accessed via the user's profile or a dedicated "Your Recipe" section on the website.


Removal Option: Users have the option to remove recipes from their uploads. If a recipe is removed, the system updates the recipe list and user interface accordingly.


**Estimated efforts:** High efforts


#### 2.9  Identified classes / Class diagram

# CookPit Class Diagram Explanation

## User:

- The central class that represents a user of the cooking website.
- Has subclasses "Guest" and "Admin" to represent the different roles of the users.
- Contains methods and attributes that are common to all users.

## Guest:

- A subclass of "User", represents a non-registered user.
- Has access to basic functions such as browsing recipes but cannot perform special actions reserved for registered users.

## Admin:

- A subclass of "User", represents an administrator of the website.
- Has extended rights, such as adding or deleting recipes, managing user accounts, etc.

## Recipe:

- Represents a recipe and contains all relevant information such as ingredients, preparation steps, ratings, etc.
- May have methods for editing or displaying recipe details.

## Ingredient:

- A class that represents an ingredient used in a recipe.
- May contain information such as the name, quantity, units, etc.

## Role:

- A class that defines the different roles in the system, e.g., "Guest" and "Admin".
- May possibly contain authorizations and responsibilities associated with each role.

## GUI (Graphical User Interface):

- Represents the graphical user interface of the website.
- May contain methods for displaying user interactions and receiving user actions.

The class diagram will show the relationships between these classes, such as the fact that "User" is a general class, "Guest" and "Admin" are subclasses of "User," and that a "Recipe" contains ingredients. It will also show the associations and possible methods between these classes to model the functionality of the cooking website.

![class-diagram](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/ClassDiagramm_CookPit.png)


# CookPit Entity Relationship (Database) Diagram Explanation
In this section we explain the different tables of our PostgreSQL databse and how the tables relate to each other.

## User
As the name implies, this table will store the data of the user. It contains important information like the username, password, description and picture. The picture is a foreign key to another table that manages that.

## Recipe
This is a very important table in our project. It contains fields as the name, id, description, servings, preparation time, cooking time, calories, creation date and rating. It has a foreign key to the User table to manage the author. It also points to the Images table to add images to the recipe. It stores the list of ingredients as a JSON.

 ## Image
 This table is quite simple. It only contains the name and file location of the image.

 ## Category
 This category is also a small table. It has the fields of name and description of the category.

 ## Comment
 This table is very useful. Allows a better community interaction and engagement. It contains the comment itself (the text) and the posting date. In addition, it has a foreign key to the User table to get who published that comment. In addition, it also has a foreign key to the Recipe table to know to which recipe is this comment related.

 ## FavoriteRecipes
 This works as a cross table for N:N relations. This has a foreign key to the Recipe table and User table. This allows to have a register of which recipes a user has liked.

 ## CategoryXRecipe
 This works as a cross table for N:N relations. This has a foreign key to the Recipe table and Category table. This allows to new the categories of a given recipe.

 ## ImageXRecipe
  This works as a cross table for N:N relations. This has a foreign key to the Recipe table and Image table. This allows to set the images a given recipe. It has a third field named favourite. This allows to set one single favourite picture that is the one that will show in the preview of the recipe.

-- Note: All the tables have a serial id, except the cross tables. They rely on a compound key made of the two foreign keys.

Find the ![database-diagram](https://github.com/SE-TINF22B6/CookPit/blob/main/Docs/SRS%20Images/Recipe%20Website%20DB%20Model.png)


### 3. Nonfunctional requirements

Non-functional requirements (NFRs) outline how the cooking website should operate, defining its quality attributes and ensuring a positive user experience. These requirements encompass aspects like performance, scalability, usability, security, and accessibility.

By addressing these NFRs, the cooking website can provide a valuable and enjoyable experience for its users, fostering a thriving online culinary community.

Following this non quality requirements will ensure that the website will meet the necessities of the user. It is not only important to make sure that the planned functional requirements are covered, but also to meet the outline of the non functional requirements to achieve an app that is highly usable in the real world.


#### 3.1  Performance
In the cooking website, non-functional performance requirements play a pivotal role in the user experience. These requirements ensure that the website operates efficiently. A paramount consideration is response time, with the expectation that pages load swiftly, particularly those featuring recipes, fostering user engagement.


**User stories**
1. As a user, I want the cooking website to load recipe pages quickly so that I can access information promptly and efficiently. This way, I can navigate through recipes seamlessly without experiencing delays, enabling a smooth and enjoyable cooking experience.
2. As a user, I want the cooking website to support multiple users interacting with various features concurrently. This includes searching for recipes, viewing cooking tips, and participating in community discussions. This way, I can engage with the website alongside other users without encountering delays or disruptions.


**Preconditions**

- <ins> Stable Network Connection:</ins> The cooking website assumes a stable and reliable network connection for users. Users are expected to have a consistent and uninterrupted internet connection to ensure seamless access to the website's content.
  
- <ins> Up-to-Date Web Browsers:</ins> Users are required to access the cooking website using up-to-date and supported web browsers. The website assumes that users have browsers that are compatible with the latest web standards, ensuring optimal performance and a consistent user experience.
  
- <ins> Adequate Device Resources:</ins> Users must access the cooking website from devices with sufficient resources, including processing power, memory, and storage. Inadequate device resources may affect the website's ability to load quickly and respond promptly to user interactions.

- <ins> Server Availability:</ins> The performance of the cooking website is contingent upon the availability and proper functioning of the hosting servers. The servers must be operational and responsive to user requests to meet the performance expectations outlined in the non-functional requirements.

- <ins> User Traffic within Expected Range:</ins> The website's performance expectations are based on an anticipated range of user traffic. Extreme fluctuations or unexpected spikes in user activity may impact performance, and the non-functional requirements are designed to accommodate traffic within the specified parameters.



**Postconditions**

- <ins> Achieved Response Time Targets:</ins> The cooking website consistently meets the specified response time targets, ensuring that pages, especially those containing recipes, load within the defined time frame (e.g., 3 seconds). Users experience quick and responsive interactions with the content.
  
- <ins> Scalability Validation:</ins> The website demonstrates scalability by successfully handling increased traffic during peak times without significant degradation in performance. It maintains responsiveness and user satisfaction even as the user base grows or experiences sudden surges in activity.
  
- <ins> Concurrency Maintenance:</ins> The cooking website effectively supports multiple users concurrently interacting with various features, ensuring a smooth and uninterrupted user experience. Users can simultaneously search for recipes, view content, and engage in community discussions without noticeable performance issues.
  
- <ins> High Reliability and Availability:</ins> The website achieves and maintains high reliability, as evidenced by its uptime exceeding the defined threshold (e.g., 99.9%). Users can access the cooking website consistently, with minimal downtime for maintenance or unexpected issues affecting availability.
  
- <ins> Optimized Resource Utilization:</ins> The cooking website optimally utilizes server resources, with CPU and memory usage consistently within acceptable limits. Effective resource management ensures that the website operates efficiently without unnecessary strain on the infrastructure.
  
- <ins> Successful Load Testing Outcomes:</ins> Load testing results confirm that the cooking website can handle an increased load, surpassing the specified target (e.g., 1.5 times the expected peak traffic). The website remains responsive, ensuring a positive user experience during periods of high demand.


**Estimated efforts:** Medium efforts


#### 3.2 Modifiability
The non-functional requirement of modifiability in a cooking website addresses the platform's flexibility and ease of adaptation to changes over time. This encompasses the website's capability to undergo modifications, updates, and enhancements without causing significant disruptions to its functionality. Modifiability is crucial for accommodating evolving user needs, incorporating new features, and seamlessly integrating improvements in response to technological advancements or shifts in culinary trends. This requirement necessitates a well-organized and modular architecture, allowing developers to make changes efficiently while minimizing the risk of unintended side effects. A highly modifiable cooking website ensures that it remains agile and responsive to emerging requirements, fostering a dynamic and user-centric online culinary experience.


**User stories**
1. As a website administrator, I want the cooking platform to be easily modifiable so that I can seamlessly add new features such as interactive cooking tutorials, advanced search capabilities, or collaborative cooking projects to enhance the overall user experience without disrupting existing functionalities..
2. As a user who utilizes cooking tools and gadgets, I want the cooking website to be modifiable to seamlessly integrate with new and innovative cooking technologies. This ensures that I can benefit from the latest tools and techniques without experiencing disruptions or compatibility issues.


**Preconditions**

- <ins> Flexible Architecture:</ins> The cooking website assumes an underlying architecture designed with modifiability in mind. The system architecture should be modular and loosely coupled, allowing for independent modifications to different components without causing cascading effects on other parts of the system.

- <ins>Version Control System in Place:</ins> The website assumes the use of a version control system (e.g., Git) to manage and track changes to the codebase. This ensures that modifications can be tracked, rolled back if necessary, and collaboratively worked on by development teams without disruptions.

- <ins>Clear Documentation:</ins> The cooking website assumes the availability of clear and comprehensive documentation outlining the system's architecture, coding standards, and best practices. This documentation serves as a reference for developers, enabling them to understand the system's structure and make modifications efficiently.

- <ins>Testing Environment Ready:</ins> A dedicated testing environment is available to validate modifications before they are deployed to the production environment. This ensures that any potential issues or conflicts resulting from the modifications can be identified and addressed without impacting the live website.

- <ins> Backup and Recovery Procedures:</ins> The cooking website assumes the existence of robust backup and recovery procedures. Before modifications are made, a reliable backup of the current system should be in place, enabling quick recovery in case unforeseen issues arise during or after the modification process.
  
- <ins> Development Team Collaboration:</ins> Effective collaboration among development teams is assumed. Developers should communicate and coordinate effectively, sharing insights and updates to ensure a cohesive approach to modifications without conflicting changes.


**Postconditions**

- <ins> Stable System Operation:</ins> The cooking website operates stably after modifications, with all existing functionalities performing as expected. Users can navigate the platform, access recipes, and engage in community activities without encountering unexpected errors or disruptions.

- <ins> Compatibility Across Browsers and Devices:</ins> The modified cooking website maintains compatibility across various web browsers and devices. Users experience a consistent and reliable interface, ensuring that the modifications do not negatively impact the user experience on different platforms.

- <ins> Verified Version Control:</ins> The modifications have been appropriately managed through the version control system, ensuring that the changes are tracked, documented, and can be rolled back if necessary. The version control history reflects the details of the modifications made to the codebase.

- <ins> Validation in Testing Environment:</ins> Before deployment, the modifications were successfully validated in the testing environment. Testing has confirmed that the changes do not introduce new bugs or conflicts with existing features, providing confidence in the reliability of the modified system.

- <ins> User Notification and Communication:</ins> Users have been appropriately notified of the modifications, and communication channels have been utilized to provide information about the changes. Users are aware of any new features or improvements, contributing to a transparent and informed user community.

- <ins> Compliance with Documentation:</ins> The modifications adhere to the documented architecture, coding standards, and best practices outlined in the system's documentation. Developers have followed the established guidelines, ensuring consistency and maintainability in the modified codebase.


**Estimated efforts:** Medium efforts



#### 3.3 Testability
The non-functional requirement of testability in a cooking website underscores the need for a platform that can be effectively and comprehensively tested. This involves creating an environment where developers and quality assurance teams can systematically evaluate the website's functionalities, features, and performance. A testable cooking website should offer clear and well-documented test cases, ensuring that various aspects, from recipe searching and user interactions to backend processes, can be examined thoroughly. This requirement promotes the implementation of automated testing frameworks, allowing for efficient regression testing as the website evolves. A highly testable cooking website contributes to a robust quality assurance process, enabling the identification of potential issues, bugs, or performance bottlenecks early in the development cycle and ensuring a reliable and error-free user experience.


**User stories**
1. As a QA tester, I want the cooking website to be testable, with comprehensive test cases covering various scenarios related to recipe searching. This includes testing different search queries, filters, and sorting options to ensure accurate and efficient results, providing users with a seamless recipe discovery experience.
2. As a QA tester, I want the cooking website to be testable for performance and load scenarios. This includes conducting tests to assess how the website performs under various loads, ensuring that it can handle peak traffic without degrading in performance and maintaining responsiveness during high-demand periods.


**Preconditions**

- <ins> Access to Testing Environments:</ins> Testing teams have access to dedicated testing environments that mirror the production environment. These environments should accurately replicate the conditions under which the cooking website operates, allowing for realistic and comprehensive testing.

- <ins> Availability of Test Data:</ins> The testing environment is populated with relevant and diverse test data, including a variety of recipes, user profiles, and interaction scenarios. Test data should be representative of actual usage patterns to ensure realistic testing scenarios.

- <ins> Testing Tools and Frameworks:</ins> The necessary testing tools and frameworks, including automation tools, are available and configured. Testers should have access to tools that facilitate efficient testing, automation of repetitive tasks, and generation of test reports for comprehensive analysis.

- <ins> Well-Defined Test Cases:</ins> Testers have access to well-defined and up-to-date test cases that cover various aspects of the cooking website, including recipe searching, user interactions, performance benchmarks, and security considerations. These test cases serve as a guide for systematic and comprehensive testing.

- <ins> Documentation of System Functionality:</ins> There is comprehensive documentation outlining the functionality and features of the cooking website. Testers rely on this documentation to understand the expected behavior of the system and to design test cases that align with the defined functionalities.

- <ins> Collaboration with Development Teams:</ins> There is effective collaboration between testing and development teams. Testers should have open communication channels with developers to discuss changes, updates, and potential issues, ensuring a coordinated effort in maintaining and enhancing testability.


**Postconditions**

- <ins> Successful Execution of Test Cases:</ins> All defined test cases have been successfully executed, covering various aspects of the cooking website, including recipe searching, user interactions, performance benchmarks, and security considerations.

- <ins> Test Data Integrity:</ins> The integrity of test data is maintained throughout the testing process. Any data modifications or interactions during testing do not compromise the consistency and accuracy of the test data, ensuring reliable and repeatable test results.

- <ins> Automation Test Scripts Completion:</ins> Automated test scripts have been successfully executed, providing efficient regression testing capabilities. The completion of automation test scripts ensures rapid and consistent testing of critical functionalities, contributing to overall test coverage.

- <ins> Documentation of Test Results:</ins> Comprehensive documentation of test results is available. This documentation includes detailed reports on test outcomes, identified issues, and any necessary follow-up actions. Testers can use this information to communicate results effectively with development teams and stakeholders.

- <ins> Collaboration Insights:</ins> Effective collaboration between testing and development teams has resulted in meaningful insights. Any identified issues or challenges have been communicated, facilitating a collaborative approach to resolving potential bugs, improving features, and enhancing overall system quality.

- <ins> Version Control Integrity:</ins> The integrity of the version control system is maintained. Any necessary rollbacks or reversions have been executed successfully, ensuring that the codebase is aligned with the intended version for testing and future development. 


**Estimated efforts:** Medium efforts



#### 3.4 Security
The non-functional requirement of security in a cooking website is paramount to establishing a trustworthy and protected online culinary platform. Security measures within this context involve safeguarding user data, ensuring secure authentication mechanisms, and protecting against potential cyber threats. This requirement encompasses the implementation of robust encryption protocols to secure data in transit and at rest, safeguarding sensitive user information such as personal details and payment data. Furthermore, secure user authentication and authorization mechanisms, including multi-factor authentication, bolster the website's defenses against unauthorized access. Regular security audits, vulnerability assessments, and proactive monitoring contribute to the continuous identification and mitigation of potential security risks. By prioritizing security in its non-functional requirements, a cooking website can inspire user confidence, foster a safe online cooking community, and mitigate the risk of data breaches or unauthorized access to sensitive information.


**User stories**
1. As a user, I want the cooking website to prioritize security, ensuring the protection of my account details. This includes robust password policies, the option for multi-factor authentication, and secure storage practices to prevent unauthorized access and safeguard my personal information.
2. As a user who engages in online transactions, I expect the cooking website to prioritize security measures during payment processes. Secure and encrypted payment gateways, adherence to Payment Card Industry Data Security Standard (PCI DSS), and clear communication about transaction security instill confidence in the safety of my financial information.


**Preconditions**

- <ins> Secure Development Practices:</ins> The development teams follow secure coding practices and principles. This includes regular training for developers on security best practices, secure code reviews, and adherence to industry standards for preventing common vulnerabilities such as SQL injection, cross-site scripting (XSS), and cross-site request forgery (CSRF).

- <ins> Access Control Policies:</ins> The cooking website has well-defined access control policies in place. Access to sensitive information and critical functionalities is restricted based on user roles and responsibilities. Access controls are regularly reviewed and updated as necessary to maintain a secure environment.
Regular Security Audits and Assessments:

- <ins> Precondition:</ins> The website undergoes regular security audits and assessments conducted by internal or external security experts. These assessments help identify potential vulnerabilities, assess the effectiveness of implemented security measures, and guide the implementation of necessary improvements.

- <ins> Encrypted Communication Protocols:</ins> The cooking website ensures that all communication between users and the website, as well as between server components, is encrypted using secure protocols such as HTTPS. This helps protect sensitive information during data in transit and enhances overall communication security.

- <ins> Secure Authentication Mechanisms:</ins> The website employs secure authentication mechanisms, such as strong password policies, multi-factor authentication (MFA), and secure password storage practices. These measures ensure that user accounts are protected from unauthorized access attempts.


**Postconditions**

- <ins>Effective Access Controls in Place:</ins> The cooking website has successfully implemented and maintained effective access controls, ensuring that only authorized users have access to sensitive information and critical functionalities. Access controls are regularly reviewed and updated as needed to address evolving security requirements.

- <ins> Continuous Regulatory Compliance:</ins> The website consistently adheres to legal and regulatory requirements related to data protection, privacy, and online transactions. Compliance is regularly reviewed and updated to align with changes in regulations, ensuring ongoing adherence to industry standards.

- <ins> No Identified Security Vulnerabilities:</ins> Regular security audits and assessments confirm that no critical security vulnerabilities exist within the cooking website. Any identified vulnerabilities are promptly addressed through remediation efforts, ensuring a proactive stance against potential security threats.

- <ins> Secure Communication Channels:</ins> All communication channels between users and the website, as well as between server components, remain secure. Encrypted communication protocols, such as HTTPS, are consistently enforced to protect sensitive information during data transmission.

- <ins> No Incidents of Unauthorized Access:</ins> The website has experienced no incidents of unauthorized access to user accounts or sensitive information. The secure authentication mechanisms, including strong password policies and multi-factor authentication, effectively prevent unauthorized access attempts.

- <ins> Successful Incident Responses:</ins> In the event of a security incident, the incident response plan is executed successfully. The website's response team follows established procedures for communication, investigation, and mitigation, minimizing the impact of the incident and preventing recurrence.

**Estimated efforts:** High efforts


#### 3.5 Usability
The non-functional requirement of usability in a cooking website focuses on ensuring an intuitive, efficient, and enjoyable user experience for individuals of varying culinary expertise. Usability encompasses the website's overall design, navigation, and functionality, aiming to simplify the process of discovering, accessing, and engaging with culinary content. This requirement emphasizes clear and visually appealing interfaces, straightforward navigation paths, and easily understandable features, fostering a positive interaction between users and the platform. Whether users are searching for recipes, participating in cooking forums, or exploring new cooking techniques, a highly usable cooking website enhances accessibility, encourages user engagement, and accommodates the diverse needs and preferences of its audience, ultimately contributing to a satisfying and user-friendly culinary journey.


**User stories**
1. As a user, I want the cooking website to have high usability, ensuring a seamless recipe discovery experience. This involves an intuitive search interface, clear categorization, and filters that allow me to easily find recipes based on ingredients, cuisine, dietary preferences, or cooking difficulty levels, enhancing the overall efficiency of my culinary exploration.
2. As a user browsing recipes, I expect the cooking website to prioritize usability in recipe navigation. Clear and concise recipe layouts, well-organized ingredient lists, and step-by-step instructions with visually appealing images contribute to an intuitive cooking experience, allowing me to follow recipes effortlessly.


**Preconditions**

- <ins> Clear User Interface Design Standards:</ins> The cooking website adheres to clear and consistent user interface design standards. A well-defined design system ensures that users encounter a cohesive and predictable visual experience throughout the website, enhancing overall usability.

- <ins> User Persona and Use Case Understanding:</ins> The development team has a comprehensive understanding of user personas and common use cases. Knowledge of the target audience's preferences, behaviors, and expectations ensures that the website is designed to meet the specific needs of its users, contributing to enhanced usability.

- <ins> Usability Testing Framework in Place:</ins> The cooking website incorporates a usability testing framework. This involves the availability of a testing environment, testing protocols, and a diverse group of users for conducting usability testing sessions. Regular testing sessions ensure ongoing improvements based on user feedback.

- <ins> Cross-Browser and Device Compatibility:</ins> The website is designed to be compatible with various web browsers and devices. Cross-browser and device testing ensure that users have a consistent and user-friendly experience, regardless of their choice of browser or device


**Postconditions**

- <ins> Reduced User Errors and Frustration:</ins> Usability improvements contribute to a reduction in user errors and frustration. Users encounter fewer obstacles, experience fewer errors in navigation or interactions, and are less likely to express frustration with the platform, resulting in a smoother and more enjoyable experience.

- <ins> Increased User Engagement Metrics:</ins> Usability enhancements are reflected in increased user engagement metrics. Key performance indicators, such as time spent on the website, the number of recipes saved or shared, and participation in community activities, demonstrate that users are actively and positively engaging with the platform.

- <ins> Enhanced Task Completion Rates:</ins> Usability improvements contribute to enhanced task completion rates. Users can efficiently complete tasks, such as finding recipes, interacting with community features, and managing their profiles, leading to higher user satisfaction and overall platform effectiveness.
  
- <ins> Positive Usability Testing Outcomes:</ins>  Usability testing sessions validate the effectiveness of implemented usability features. Testing outcomes indicate that users navigate the website with ease, accomplish tasks successfully, and express positive sentiments regarding the improved usability of the platform.

- <ins> Consistent User Interface Experience:</ins> The cooking website ensures a consistent user interface experience. Users encounter a uniform and familiar interface design across different sections of the website, reinforcing predictability and ease of use.

- <ins> High Accessibility Standards Adherence:</ins> The website adheres to high accessibility standards, as reflected in positive evaluations from accessibility audits. Compliance with accessibility guidelines ensures that users with diverse abilities can access and navigate the platform seamlessly.

**Estimated efforts:** Medium efforts

#### 3.6  Integrability
The non-functional aspect of integrability in a cooking website presents a significant challenge in user experience and functionality. Integrability issues could arise from incompatible APIs or systems, hindering seamless connections with external platforms or services, such as shopping carts, recipe databases, or social media sharing functionalities. This limitation impacts the website's ability to smoothly integrate with various tools, reducing its versatility and hindering users' ability to access a comprehensive cooking experience. It might lead to disjointed workflows, frustrating users who expect a cohesive platform for recipe discovery, ingredient procurement, and culinary exploration. Addressing integrability concerns becomes pivotal for enhancing user satisfaction and ensuring a more holistic culinary journey on the website.


**User stories**
1. As a frequent user, I want the website to seamlessly connect with my social media accounts so that I can easily share my favorite recipes and culinary achievements with my friends and followers. I expect the integrability to work smoothly without any disruptions, allowing me to showcase my cooking journey effortlessly.

2. As a user who loves exploring new recipes, I expect the website to integrate with online grocery platforms for easy ingredient shopping. I want to click on a recipe and have the option to add all the required ingredients directly to my preferred shopping cart for a hassle-free purchasing experience. This integration would save me time and make the cooking process more convenient.


**Preconditions**

- <ins> Clear API Documentation:</ins> A precondition for successful integrability is having comprehensive and well-documented APIs. The website should ensure that its APIs are thoroughly documented, providing developers with clear instructions, endpoints, parameters, and authentication methods required for seamless integration.


- <ins> Compatibility Standards:</ins> The website should establish compatibility standards and protocols to ensure that external systems or platforms intending to integrate can meet the necessary requirements. This could involve adhering to specific data formats, security protocols, or technology standards for smooth interoperability.


- <ins> Stable Infrastructure:</ins> The website's own infrastructure and systems should be stable and reliable. It's crucial to ensure that the website's servers, databases, and hosting services are robust enough to handle integration processes without performance issues or downtimes.


- <ins> Authentication and Security Measures:</ins> Integrating external systems should prioritize security. Implementing secure authentication methods, such as OAuth or API keys, and following best practices for data encryption and protection are preconditions for integrations to safeguard user data and maintain trust.


- <ins> User Consent and Control:</ins> Preparing the website with mechanisms that prioritize user consent and control over data shared or accessed during integrations is vital. Users should have clear options to authorize or revoke access to their information within the integrated systems.


**Postconditions**

- <ins> AI Recipe Suggestions Available:</ins> Users of the cooking website can access AI-generated recipe suggestions based on their preferences and needs.
Improved User Experience: Users should experience an enhancement in their interaction with the website. Post-implementation, users should find it easier to access integrated functionalities, such as seamless social media sharing, streamlined ingredient procurement, or synchronized smart kitchen device usage, contributing to a more enjoyable and efficient cooking experience.

- <ins> Data Security and Compliance:</ins> Post-integration, it's crucial to confirm that the security measures implemented during integration are effectively safeguarding user data. The postcondition involves ensuring that user data shared across integrated systems is protected, maintaining compliance with relevant privacy regulations and standards.

- <ins> Performance and Stability:</ins> The website's performance and stability should remain intact or show improvement post-integration. Conducting performance tests and monitoring the website's response times, uptime, and overall stability ensures that the integrations haven't negatively impacted the website's core functionalities or speed.

- <ins> User Feedback and Adoption:</ins> Gathering user feedback post-integration is crucial. Positive user feedback, increased engagement with the integrated features, and higher adoption rates among users indicate the successful implementation of integrations, demonstrating that they add tangible value to the cooking website.

- <ins> Scalability and Maintenance:</ins> Postconditions involve confirming that the integrations are scalable and maintainable. Future updates or enhancements should not disrupt the existing integrations, and the framework should be adaptable to accommodate evolving technology or additional integrations without significant redevelopment efforts.
**Estimated efforts:** High efforts

### 4. Technical constraints
This sections specifies any major constraints, assumptions or dependencies.

#### 4.1 Assumptions

Firstly, it's assumed that users have access to a stable internet connection, a fundamental prerequisite for using the website. Additionally, it's expected that users possess compatible devices, such as smartphones, tablets, or laptops, enabling them to access the website. Moreover, it is assumed that users are equipped with modern web browsers that support the website's features and functionalities.

Furthermore, the accuracy and completeness of recipe data are contingent on user-generated content and publicly available information. Hence, the website cannot guarantee the correctness of such data. Another assumption is that users will create profiles and accurately provide their dietary preferences, restrictions, and other personalization information.

In the context of AI services, it is assumed that the OpenAI API or other similar services for generating recipe suggestions will be accessible and operational. Data privacy and security are vital concerns, with the expectation that users will adhere to best practices, while the website's security measures will be effective in safeguarding user data.
ill face competition from other cooking and recipe-related websites, and user preferences may shift accordingly. 

Additionally, it's expected that users will positively embrace and adopt the AI-generated recipe suggestion feature to enhance their culinary experiences.

These assumptions collectively establish the foundational expectations for the cooking website project. They are vital for stakeholders to comprehend the project's context and recognize potential risks associated with its development and operation.

#### 4.2 Technical Limitations and dependencies

Firstly, the website does not include provisions for offline functionality or graceful degradation in situations where an internet connection is unavailable.

While the website aims to be compatible with a variety of modern web browsers, achieving complete compatibility with every possible browser and version is not guaranteed. The primary focus will be on testing and optimizing for major browsers.

The website relies on third-party services and APIs for specific functionalities. The availability, performance, and changes to these external services are beyond the project's control. Consequently, the website may experience disruptions or limitations due to such dependencies.

The accuracy and quality of user-generated content, such as recipes and reviews, cannot be guaranteed. The website relies on user contributions, and errors or inaccuracies may exist in the content.

While the website aims to handle a reasonable amount of traffic, performance under extremely high traffic loads is not guaranteed. The project will involve load testing and optimization efforts, but inherent limitations may persist.

The website's capacity for data storage and scalability may have constraints. As the user base and content expand, infrastructure upgrades or optimizations may become necessary.

The project includes provisions for maintenance and updates. However, the availability of resources and the timeliness of updates may be subject to constraints, which could potentially impact the website's performance and functionality.

The project cannot control or predict user behavior. Users may misuse the website or engage in activities that violate the platform's terms and conditions.

The effectiveness and accuracy of AI-powered features, such as recipe suggestions, are subject to the quality of data and algorithms. The website cannot guarantee that the AI will always provide flawless recommendations.

The project cannot control changes in the market landscape, user preferences, or the emergence of new technologies. These external factors may impact the website's competitiveness and relevance.

While the website aims to adhere to accessibility standards, achieving complete compliance with all regulations and guidelines may pose technical challenges.

These technical limitations serve as essential guidance for managing expectations and shaping the project's development. They provide stakeholders with a realistic understanding of what the project can achieve within its technical constraints.
