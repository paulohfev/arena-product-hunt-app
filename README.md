# Arena Product Hunt App
This is a sample application leveraging data from the Product Hunt API to render popular and recent posts.

It was built using [Next.js](https://nextjs.org/), [React.js](https://react.dev/), [TypeScript](https://www.typescriptlang.org/) and [styled-components](https://styled-components.com/). In addition, [Apollo Client](https://www.apollographql.com/docs/react) was used for caching and data management, and [React Toastify](https://fkhadra.github.io/react-toastify/introduction/) was used to generate a helpful message with server errors.

## Considerations
The root route of the application is automatically redirecting the user to `/posts` route, as there is no content to render on the root route. The following pattern was taken into account:
- the page showing the list of posts is pathed to `/posts`
- individual posts are pathed to: `/posts/:id`

## Access the application live:
Please feel free to access the application running live at: https://arena-product-hunt-app.vercel.app/

## Documentation
Please refer to the following document for a list of improvements and enhancements, had I been given more time.
- [Suggestions and Improvements](./SUGGESTIONS_IMPROVEMENTS.md)

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd arena-product-hunt-app
```

2. Environment variables
In order to get the application up and running, you will need to create an account in [Product Hunt](https://www.producthunt.com/) and access their API dashboard. From there, create an application and make sure to give the redirect URI a value of `https://localhost:3000/users/auth/producthunt/callback`. Afterwards, you will be given a developer token - use this in respective environment variables:

```bash
NEXT_PUBLIC_API_URL=https://api.producthunt.com/v2/api/graphql
API_TOKEN=<developer token from Product Hunt>
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Available Scripts

### Development
- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server

### Code Quality
- `npm run lint` - Run ESLint to check for code issues
- `npm run lint:fix` - Run ESLint and automatically fix issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is properly formatted

### Testing
- `npm test` - Run all tests
- `npm run test -- -u` - Updates snapshot testing
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report