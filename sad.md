# CookPit
## Software Architecture Documentation
# 1. Introduction
## 1.1 Overview
**selling points of our architecture design**
- Modularity and Separation of Concerns: We can separate different aspects of our application, such as presentation, business logic, and data access, into distinct layers. This makes our codebase more modular, easier to understand, maintain, and scale.
- Scalability: By separating concerns, we can scale different layers independently. For example, if our application experiences increased traffic, we can scale the presentation layer separately from the data access layer.
- Reusability: Each layer can be reused independently. For instance, our presentation layer can be reused across different interfaces (web, mobile), which promotes code reusability and reduces duplication. Its easier to deploy our application to different screensizes.
- Flexibility and Maintainability: With a clear separation of concerns, making changes to one layer does not necessarily affect the others. This makes it easier for us to modify, update, or replace individual components without impacting the entire system.
## 1.2 Constraints
- Performance Overhead: Implementing multiple layers can introduce some performance overhead due to the communication between layers.
- Complexity: With multiple layers, the overall complexity of the system increases. This can make understanding and debugging more challenging.
- Data Transfer: Passing data between layers can become complex, especially when dealing with large volumes of data or complex data structures.
- Team Communication: Effective communication among team members is crucial to ensure that each layer integrates smoothly and that changes in one layer do not adversely affect others.
- Testing Strategies: Conventions for testing include writing unit tests for each layer individually, as well as integration tests to ensure that layers work together correctly.
## 1.3 References
> A complete list of all documents referenced -- hyperlinks to those documents.

# 2. Architecture Tactics
## Architecturally Significant Requirements (ASRs) from Semester 3:
1. **Performance** Ensure that the application can handle a high volume of concurrent users without significant degradation in response time.
2. **Security** Implement robust security measures to protect user data and prevent unauthorized access.
3. **Scalability** Design the system to easily scale up.
4. **Maintainability**  Structure the codebase in a way that facilitates ease of maintenance, updates, and bug fixes. 
5. **CUstomer needs** Ensure compatibility with various customer need to reach a wider audience.
6. **Usability** Design a user-friendly interface that enhances the overall user experience and encourages engagement.

## Revised Architecture Tactics:
1. **Performance Optimization**
2. **dAuthentication**
3. **Load Balancing**
4. **Code Modularity**
5. **API Design**
6. **User Feedback**

# 3. Architecture Design
## 3.1 Overview 

The architecture of CookPit is meticulously crafted to cater to the aforementioned requirements and constraints, all the while providing users with a scalable, maintainable, and secure platform for seamless interactions. At its nucleus, CookPit adheres to a layered architecture pattern, leveraging the power of React. This strategic choice champions modularity, reusability, and adaptability within the system.

By embracing React as its cornerstone for the user interface, CookPit achieves a pristine separation of concerns between presentation and logic. This not only streamlines development and maintenance efforts but also empowers developers to create and reuse individual components with utmost efficiency.

Moreover, the stratified architecture of CookPit fosters enhanced scalability. With its clear segregation into distinct layers, resources are optimally utilized, mitigating bottlenecks even amidst burgeoning user traffic. This becomes paramount in ensuring smooth performance, especially as the user base expands.

The modular design, facilitated by the layered pattern and utilization of React, equips CookPit to swiftly adapt to changes and novel requirements. New features seamlessly integrate into the existing framework, allowing for agile responsiveness to evolving demands.


## 3.2 Runtime View Diagramm

![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/07451297-575a-4e16-adb3-50cd5f44ffca)



##Description:
The  diagram illustrates the interaction between various components during a typical user interaction with CookPit. It depicts the flow of control and data as a user performs actions such as browsing on the website.

1.  State management components: These components are responsible for managing the state of the user interface. They can be Redux Store or other state management solutions, for example.

2.  Data Fetching Components: These components are responsible for retrieving data from the API endpoints and can process GraphQL queries, for example.

3.  Database: Here, the database is represented as a separate entity to emphasize the separation of backend services and the database.

4.  Backend Logic: This layer represents the logic that the backend services implement in order to execute the system's business logic.

# 3.3 Deployment View
![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/79729fa3-0d7c-42da-9488-065f1166f531)

## Description:
The deployment diagram depicts the physical deployment of CookPit components across different servers and environments. It illustrates how the  layerers and data access layer are distributed and interconnected to form the complete system.

1.  Internet: The entry point for user requests.
2.  Load balancer: Distributes the incoming data traffic evenly across the web servers in order to distribute the load and improve reliability.
3.  Firewall: Additional security measures to protect against cyber attacks
4.  Web server: Receives user requests and forwards them to the application server cluster.
5.  Application Server Cluster: Consists of multiple nodes that host the Cookpit application and execute the business logic. These nodes are organised in a cluster to ensure scalability and reliability.
6.  Service nodes: Each node in the cluster hosts specific services provided by Cookpit.


# 3.4 Component Diagram



 ## Overview:
The component diagram for the cooking website "Cookpit" illustrates its high-level architecture, showcasing the various components and their interactions. Cookpit is built using React for the frontend, utilizes a SQL database for data storage, and incorporates the ChatGPT API for recipe generation.
![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/07451297-575a-4e16-adb3-50cd5f44ffca)
## Components
1. **Frontend Components**:
   - **User Interface Components**: React components responsible for rendering the website's interface, including features such as navigation bars, recipe cards, and search functionalities. The main features for the user are the SearchEngine for searching a recipe, the RecipeCreation to create an new recipe, the Favorites feature to safe recipes as favorites and the Authentication or the login to save the favorite recipes of a specific user.

2. **Server-Side Components**:
   - **Application Server**: The implemented API manages the requests made from the user and creates the connection to the actual OpenAI API which then works with the given data and sends a recipe with the requested ingredient back to our API for the user to be shown. 
   - **User**: The Backend also handles the Authentication of users, to validate the users information and to provide all user specific data such as the own recipes and the favorites.
   
3. **OpenAI API**:
   - **OpenAI API Integration**: Represents the integration with the ChatGPT API for generating recipes using AI.
  
4. **Database**:
   -**Recipe**: The Database manages all recipes saved. This provides the function to search for a specific recipe or to show a user his own or favorits recipes in connection with the user validation.
   -**User**: The Authentication is also using the Database to validate users and to release user specific data. 

## Communication Channels
1. **Client-Server Communication**:
   - **RESTful APIs**: Facilitate communication between the client-side components and the application server, enabling data transmission and interaction.
   
2. **Server-Database Communication**:
   - **Database Queries**: Illustrates the interaction between the application server and the SQL database server, showing the flow of database queries and data retrieval operations.

## External Dependencies
   - **Third-Party Services**: External services, such as the ChatGPT API for recipe generation, are integrated into the system, enriching Cookpit's functionality.

The component diagram provides a visual representation of how the different components of Cookpit interact to deliver its functionality, aiding in understanding the system's architecture and design.


# 3.5 ... (Continue with other views as necessary)

