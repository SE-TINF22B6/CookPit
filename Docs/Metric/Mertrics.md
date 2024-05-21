# CookPit
## Measurements

### 1. Introduction
#### 1. Web Application Monitoring Tools
**Description:**
Web application monitoring involves tracking various aspects of our web application's performance and user interactions to ensure its smooth operation. This includes uptime monitoring, page load times, user sessions, and more.

**How to Measure:**
We will use Google Monitor (likely referring to Google Analytics and Google Cloud Monitoring) to track the number of users interacting with our website. These tools provide insights into user behavior, session durations, and other key metrics.

**Software Tools:**
- **Google Analytics:** Tracks user interactions, page views, session durations, and more. It provides real-time data and historical reports on how users are engaging with our website.
- **Google Cloud Monitoring:** Offers monitoring and observability for our web applications if hosted on Google Cloud. It helps track uptime, latency, and application health.

#### 2. Web Application Performance Metrics (User Satisfaction / Apdex Scores)
**Description:**
The Application Performance Index (Apdex) is a standard method to measure user satisfaction with the performance of web applications. It calculates a score based on predefined thresholds for response times, categorizing user experiences as satisfactory, tolerable, or frustrating.

**How to Measure:**
The Apdex score is calculated using the formula:
\[ \text{Apdex} = \frac{S + (T / 2)}{N} \]
where:
- **S** is the number of satisfactory responses (response time ≤ T threshold).
- **T** is the number of tolerable responses (response time ≤ 4T threshold but > T threshold).
- **N** is the total number of responses.

**Software Tools:**
- **New Relic:** Provides a comprehensive Apdex score calculation and detailed performance monitoring. It helps to set response time thresholds and visualize user satisfaction levels.
- **AppDynamics:** Offers Apdex score tracking along with deep application performance insights, enabling you to understand user satisfaction in real-time.

#### 3. Average Response Time
**Description:**
Average Response Time measures the time it takes for your web application to respond to user requests. It is a critical indicator of application performance and user experience.

**How to Measure:**
Average response time is calculated by dividing the total time taken to respond to requests by the number of requests over a specified period. It can be calculated using the formula:
\[ \text{Average Response Time} = \frac{\text{Total Response Time}}{\text{Number of Requests}} \]

**Software Tools:**
- **Google Cloud Monitoring:** Tracks response times and provides insights into the performance of your web application. It allows you to set alerts for when response times exceed acceptable thresholds.
- **New Relic:** Offers detailed response time analytics, allowing you to monitor and optimize the performance of individual transactions within your web application.

## 2. Measure results and analysis

To sum it up for the Project Cookpit, we are using three key metrics: 

1. **Web Application Monitoring**: Using Google Analytics to track user interactions and Google Cloud Monitoring to monitor uptime and performance.
2. **User Satisfaction (Apdex Scores)**: Using New Relic and AppDynamics to calculate Apdex scores, categorizing user experiences based on response times.
3. **Average Response Time**: Using Google Cloud Monitoring and New Relic to measure and analyze the average response time to optimize performance.
