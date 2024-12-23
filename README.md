# Frontend Challenge of QikServe

This is a react application that will present some restaurant data and it's menu. We should be able to visualize items and build a basket.

## Table of Contents

1. [Installation and Setup](#installation-and-setup)
2. [My assumptions](#assumptions)
3. [Process and choices](#Libs-and-project-choices)

## Installation and Setup

Before you begin, make sure you have the following installed on your system:

- **Node.js** (version 16.8 or higher)
- **npm** (comes with Node.js) or **yarn**

### Clone the Repository

To get started, clone this repository to your local machine using Git:

```bash
git clone https://github.com/CarlosAlbertoTI/frontend-challenge-qsengineers
cd qikServe-frontend-challenge
```
### Install Dependencies
Once you have cloned the repository, navigate into the project folder and install the necessary dependencies:

Using npm:
```bash
npm install
```
Or, if you prefer yarn:
```bash
yarn install
```
This command will install all required dependencies specified in the package.json file.

### Run the Development Server
After installing the dependencies, you can start the development server using the following command:

Using npm:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```
Once the server is running, open your browser and navigate to:
```
http://localhost:5173/
```
You should see the React application running in the browser.

## My assumptions

### My strategie to code this project
After reviewing the Figma design, I started planning the steps: what to do first and how long each step would take. I wrote everything down in a notebook to think it through. After some time, I decided to first code the basic structure of the app, then create all the basic components (without any logic). Once that was done, I focused on refactoring them and adding logic and libraries.

### Process and Choices

#### Code Stucture 

###### 
`src/`: Contains the source code for your React application.
- **`components/`**: Stores reusable React components that can be imported and used across different parts of the application.
- **`hooks/`**: Contains custom React hooks that provide reusable logic for use in components.
- **`lib/`**: Stores third-party libraries and configs like React Querie.
- **`locales/`**: Contains localization files for supporting multiple languages, often used in internationalization (i18n).
- **`routes/`**: Defines the application's routes and navigation, typically using a library like React Router.
- **`screens/`**: Houses the main screens or views of your application, where different views are rendered based on routes.
- **`services/`**: Contains all request to API.
- **`store/`**: Holds the Redux store or state management setup (e.g., with Redux, Context API) for managing the global application state.
- **`theme/`**: Contains the application's theme settings with styled-components.
- **`utils/`**: Contains utility functions for various purposes, such as data manipulation or formatting like formatCurrency.

#### Choices

##### Vite

I chose Vite because it's easy to configure and add plugins, such as configuring TypeScript paths for imports and adding types.
##### Radix UI

I used Radix UI because it works with minimal configuration and offers unstyled components, which helps in creating reusable components. Components like Avatar, Skeleton, Dialog and ScrollArea were particularly useful.
##### Custom Modal

Initially, I considered using a custom library for modals, but I couldn’t find one that met the specific requirements for my application (modals that are full-screen on mobile but smaller on larger screens). To save time, I decided to build a custom modal component.
##### Proxy Server

While working on API requests, I encountered a CORS issue that blocked the requests. Although I considered sending an email about it, I wanted to finish faster, especially with Christmas approaching. So, I created a proxy server that handles requests, forwarding them to the appropriate API and returning the required data.
