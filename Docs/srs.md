# CookPit
## Software Requirements Specification
### 1. Introduction
The current document serves as a comprehensive blueprint for our project, outlining the detailed functional and non-functional requirements, system behavior, and constraints to guide the development team towards building a successful solution.

#### 1.1 Overview
In this Software Requirements Specification (SRS) document, we describe the details of the functional and non-functional prerequisites for the development of a captivating and highly interactive recipes website. The platform is designed with a multifaceted purpose, aiming to empower users to explore, discover, and archive a diverse array of culinary delights.

The primary audience comprises home cooks hailing from a wide spectrum of skill levels. With this diversity in mind, our objective is to construct an intuitive and user-friendly digital environment. This means ensuring that not only is the website easy to navigate, but it's also a delightful and informative hub for anyone with a passion for cooking. 

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


> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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


> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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


> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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




#### 2.5  Profile Management / Use Case 4
Users can edit and update their profile information, including name, email, profile picture, and other relevant details.
Enable users to change their password and update account settings (e.g., email preferences).

**User stories**
1. As a user, I want to create a profile on the cooking website, providing my name, email address, and a password, enabling me to access personalized features and save my favorite recipes.

2. As a user, I want to edit my profile information, including my name, email address, and profile picture, allowing me to keep my details up-to-date.


> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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

> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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

> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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

> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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



#### 2.7  Saved recipes / Use Case 6
The functional requirement of linking a cooking website to the OpenAI API is to enable users to receive AI-generated recipe suggestions, enhancing their culinary experience with creative and personalized cooking ideas.

**User stories**
1. As a Home Cook I want to receive AI-generated recipe recommendations for each day of the week.
2. As a User I want to access AI-generated recipe suggestions to discover new and exciting dishes.

> - **UI mockups**
> - **UML behavior diagrams** and necessary text specification


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


**Estimated efforts:** Medium efforts


### 3. Nonfunctional requirements

> [!IMPORTANT]  
> It is not necessary to cover all of the following categories, but focus on what your project will implement.  
> If some nonfunctional requirements are described as user stories in your backlog, add their **links** in this section, or any information to guide the reader find them in your backlog, such as a **label** of those relevant user stories.

> Categories: Usability, Reliability, Performance, Efficiency, Integrity, Maintainability, Flexibility, Testability, Reusability, Security.  


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
