# Gleamify

Gleamify is an e-commerce platform that
allows users to discover, explore, and
purchase the latest products. The
platform provides a clean and intuitive
user interface and integrates with a
robust product catalog.

## Features

- **Product Catalog**: Browse and
  explore a variety of products.
- **User-friendly UI**: A responsive and
  modern interface built with Tailwind
  CSS.
- **State Management**: Global state
  management using `Zustand` for product
  data.
- **GraphQL API Integration**: Fetch
  product data from a GraphQL API using
  `graphql-request`.
- **SEO Optimized**: Includes meta tags
  and Open Graph for better visibility
  on social media platforms.
- **Server-Side Rendering (SSR)**: The
  app utilizes SSR to render pages on
  the server and send them to the
  browser.
- **App Router**: Organizes pages and
  API routes using Next.js App Router
  for better performance and structure.

## Technologies Used

- **Next.js (App Router)**: A React
  framework for building server-side
  rendered and statically generated
  applications, using the App Router for
  enhanced routing and layout handling.
- **React**: A JavaScript library for
  building user interfaces.
- **Tailwind CSS**: A utility-first CSS
  framework for rapidly building custom
  designs.
- **TypeScript**: A strongly typed
  programming language that builds on
  JavaScript.
- **Zustand**: A state management
  library for React.
- **GraphQL**: A query language for APIs
  and a runtime for executing those
  queries by using a type system.
- **graphql-request**: A simple and
  minimal GraphQL client to make API
  requests.

## Getting Started

To get a local copy of the project up
and running on your machine, follow
these steps:

### Prerequisites

Make sure you have the following
installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or
  [Yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/gleamify.git
   cd gleamify
   ```

2. Install the dependencies:

   Using npm:

   ```bash
   npm install
   ```

   Or using Yarn:

   ```bash
   yarn install
   ```

3. Run the development server:

   ```bash
   npm run dev or yarn dev
   ```

4. Open your browser and navigate to
   [http://localhost:3000](http://localhost:3000)
   to see the app in action.

### Setting Up the Environment

1.  Create a `.env.local` file at the
    root of your project if it doesn't
    already exist.

2.  Add the following environment
    variables to the `.env.local` file:

    ```bash
    CANOPY_GRAPHQL_ENDPOINT="https://graphql.canopyapi.co/"
     CANOPY_API_KEY="API-KEY"
     ENV="LOCAL"
     or
     ENV="PROD"
    ```

    • Replace API-KEY with your actual
    CanopyAPI key.

    • Set ENV to either LOCAL or PROD:

        If you choose LOCAL, the application will consume data from mock data.


        If you choose PROD, the application will consume data from the actual CanopyAPI, and it will send real requests.

3.  Important Consideration:

        Be cautious with the PROD
        environment as CanopyAPI has a limit
        of 100 requests per month. Make sure
        not to exceed this limit.

You can check `.example.env` file.

Finally the deployed version on vercel:
[gleamify-eight.vercel.app](https://gleamify-eight.vercel.app/)
