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

Error Handling: If there was an unsuccessful login attempt prior to the successful one, the system ensures that any error messages or alerts are cleared, providing a clean user experience after successful login.

Session Management: The system manages the user's session securely, ensuring that the session remains active as long as the user is actively interacting with the website and is automatically terminated after a period of inactivity to protect user security.


**Estimated efforts:** Low efforts




### 3. Nonfunctional requirements

> [!IMPORTANT]  
> It is not necessary to cover all of the following categories, but focus on what your project will implement.  
> If some nonfunctional requirements are described as user stories in your backlog, add their **links** in this section, or any information to guide the reader find them in your backlog, such as a **label** of those relevant user stories.

> Categories: Usability, Reliability, Performance, Efficiency, Integrity, Maintainability, Flexibility, Testability, Reusability, Security.  


### 4. Technical constraints
> Specify any major constraints, assumptions or dependencies, e.g., any restrictions about which type of server to use, which type of open source license must be complied, etc. 
