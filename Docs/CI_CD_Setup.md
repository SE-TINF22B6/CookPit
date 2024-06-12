# CI/CD Setup
## Introduction
Three CI/CD setups are currently used for the Cookpit project, which test the code in the background. However, these are only carried out on the main branch as this is our productive branch which is connected to our server.  The other branches have not been tested as they are not productive. 
## Docker Image 
The workflow is started when changes are made in the ‘main’ branch, checks out the code and builds a Docker image with a unique tag based on the time of the build.

Docker Images advantages :

1. **Consistent development environment**:
    - Docker images ensure that all developers and CI/CD pipelines use the same environment.

2. **Isolation of dependencies**:
    - Docker isolates the project's dependencies from those of other projects and the host system. This means that different versions of Node.js, SQLite or other libraries can coexist without any problems.

3. **Scalability and load balancing**:
    - With Docker, the application can be easily scaled by simply launching multiple containers of the same image. This is especially useful for load balancing and high availability.

![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/b80db4a6-6fe5-413b-aa77-0104cd328de4)



## NodeJS
Our workflow ensures that with every push or pull request to the ‘main’ branch, the project is built and tested on different Node.js versions to ensure compatibility and functionality.

NodeJS advantages :

## Advantages for cockpit

1. **Consistent builds**
   - The workflow ensures that the code is built consistently on a standardised environment (Ubuntu) and multiple Node.js versions. This reduces the likelihood of environment-dependent problems.

2 **Automated tests**
   - By executing tests with every push and pull request, errors are recognised at an early stage. This improves the quality of the code and the reliability of the cockpit application.

3 **Faster development**
   - Automated build and test processes speed up the development cycle by allowing developers to focus on writing code rather than manually executing builds and tests.

4 **Version compatibility**
   - The workflow tests the code against multiple Node.js versions (14.x, 16.x, 18.x). This ensures that the cockpit application remains compatible with different Node.js versions, which is particularly helpful in environments with different Node.js versions.#

![image](https://github.com/SE-TINF22B6/CookPit/assets/123726577/b74f8f5c-8ce0-4662-b414-8c10fe48c21f)

### Future
Further workflows could be of interest to Cookpit in the future. Since we now have a website hosting provider for the project, a workflow must be implemented for the future that always pulls the current status of the project onto the server. 
