# CookPit
## Introduction 
This report will outline how we implement and adhere to established Clean Code principles in the future. For each principle, we will explain its significance to our project and provide specific examples to illustrate its application. Our goal is to demonstrate the value these principles bring to our codebase and the overall quality of our project.
## 1. Names, Declaration and co.
The first prinicple we want to follow is clear naming. We have established a strict convention for naming components and other important things in the fututre in our project. This ensures consistency, clarity, and ease of understanding throughout the codebase. Each component name is carefully chosen to be descriptive and intuitive, reflecting its purpose and functionality. By adhering to these naming conventions, we facilitate better communication among team members and make the code more maintainable and scalable. Here are some key aspects of our naming conventions:

1. **Descriptive Names**: Each component name clearly indicates its role and functionality, allowing developers to understand its purpose at a glance.
2. **Consistency**: We maintain a uniform naming pattern throughout the project, which helps keep the codebase organized and coherent.
3. **Readability**: Our conventions prioritize readability, making it easy for new team members or external contributors to quickly understand the structure and logic of the code.

Here are our naming rules we want to establish and follow ind the futute: 


#### Id´s, classnames, singelword variables are written in lowercase


![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/e31efb53-7070-4804-bdad-b14b07e69fda)


#### Components, functions, doubleword variables are written im ´camelCase'


![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/70931a4a-0136-4bd6-8fd7-3988ab0a07d4)


#### Folder are written in uuper case

  
![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/634b138a-ca4f-49c0-b14e-6b1df5416fd1)

## 2. Commenting and Documentation
Well-commented code and comprehensive documentation are essential for clean code. Comments should explain the purpose and functionality of the code, especially for complex algorithms or unconventional implementations. This helps both current and future developers to quickly understand and work with the code. By prioritizing good commenting and documentation practices, we enhance the readability and usability of our codebase.

#### Example: 

![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/ce37286d-57a0-4d4f-b526-8077e9d7cc9d)

## 3. Consistent Code Formatting 

Maintaining consistent code formatting is essential, even when creating new features. This ensures that our codebase remains clean, organized, and easy to read. If a developer encounters incorrectly formatted code, they should either correct the formatting themselves or bring it to the attention of the responsible developer. By doing so, we collectively uphold high standards of code quality and maintainability. This practice not only improves readability and reduces errors but also fosters a culture of continuous improvement and teamwork within our development process. One importasnt reason for that is the usage of react. We want to make sure everything is correct indented.

#### Example: 

![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/ffa959e3-82fa-4c2e-93c9-16e68ac65029)

## 4. Single Responsibility Principle

The Single Responsibility Principle (SRP) is straightforward. Each function and method should have a specific responsibility, focused on performing a single action or a set of related actions. When requirements change, only the relevant method should require modification, without impacting other parts of the codebase. We strive to adhere to SRP by abstracting commonly used logic into separate methods. One example of this is our use of MapperClasses. Instead of creating objects within methods, we utilize static methods from the respective MapperClass. These methods take source data as input and return the required data model. This practice enhances code clarity and maintainability. In the accompanying images, you'll observe this approach in action. Additionally, you'll notice that logic for retrieving the number of comments and tags for each post is encapsulated within separate functions.









