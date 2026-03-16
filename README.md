# Chop Logic CMS

**Content Management System for Chop Logic Portal**

A modern, headless CMS built with [Strapi](https://strapi.io/) and TypeScript, designed to manage content for the Chop Logic Portal. This project provides a flexible and scalable backend solution for content management with built-in API functionality, user permissions management, and cloud deployment capabilities.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Available Scripts](#available-scripts)
- [Code Quality](#code-quality)
- [Testing](#testing)
- [Strapi CMS Development Flow](#strapi-cms-development-flow)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **Headless CMS**: Strapi provides a flexible, API-first content management system
- **User Permissions**: Built-in user authentication and role-based access control via the Users Permissions plugin
- **Cloud Support**: Integrated Strapi Cloud plugin for easy deployment
- **TypeScript**: Full TypeScript support for type-safe development
- **Testing**: Jest testing framework with coverage reporting
- **Code Quality**: Biome for fast code formatting and linting
- **Git Hooks**: Husky and lint-staged for automated pre-commit checks
- **Conventional Commits**: CommitLint ensures consistent commit messages

## 🔧 Prerequisites

- **Node.js**: >= 20.0.0, <= 24.x.x
- **npm**: >= 6.0.0
- **SQLite** (better-sqlite3): Default database driver

## 📁 Project Structure

```
chop-logic-cms/
├── src/
│   ├── index.ts                  # Main entry point
│   ├── api/                      # API routes and controllers
│   │   └── article/              # Article content type
│   │       ├── controllers/      # Request handlers
│   │       ├── routes/          # Route definitions
│   │       ├── services/        # Business logic
│   │       └── content-types/   # Content type schemas
│   ├── admin/                    # Admin panel customizations
│   ├── extensions/               # Plugin extensions
│   ├── utils/                    # Utility functions
│   └── __tests__/               # Test files
├── types/
│   └── generated/               # Auto-generated TypeScript types
├── config/                       # Strapi configuration files
│   ├── api.ts                   # API configuration
│   ├── database.ts              # Database configuration
│   ├── middlewares.ts           # Middleware setup
│   ├── plugins.ts               # Plugin configuration
│   ├── admin.ts                 # Admin panel configuration
│   └── server.ts                # Server configuration
├── database/
│   └── migrations/              # Database migrations
├── public/
│   └── uploads/                 # Uploaded files
├── coverage/                     # Test coverage reports
├── package.json                  # Project dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── jest.config.js               # Jest testing configuration
├── biome.json                    # Biome formatter/linter configuration
└── README.md                     # Project documentation
```

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory with necessary environment variables:

```bash
# Example .env configuration
NODE_ENV=development
```

### 3. Start Development Server

```bash
npm run dev
```

The Strapi admin panel will be available at `http://localhost:1337/admin`.

### 4. Access the API

- **REST API**: `http://localhost:1337/api/`

## 💻 Development Workflow

### Local Development

1. **Start the development server**:
   ```bash
   npm run dev
   ```
   This launches Strapi in development mode with hot-reload enabled.

2. **Create or modify content types**:
   - Use the Strapi admin panel at `http://localhost:1337/admin`
   - Navigate to Content-type Builder to create/modify schemas

3. **Write custom API logic**:
   - Create controllers in `src/api/[content-type]/controllers/`
   - Add services in `src/api/[content-type]/services/`
   - Define routes in `src/api/[content-type]/routes/`

4. **Run code quality checks**:
   ```bash
   npm run lint
   npm run format
   npm run typecheck
   ```

5. **Run tests**:
   ```bash
   npm run test           # Watch mode
   npm run test:coverage  # With coverage report
   ```

### Code Quality Standards

All code must adhere to:
- **Biome formatting** standards
- **TypeScript** strict mode
- **ESLint/Biome** rules with no errors
- **Jest** test coverage

Git hooks (via Husky) automatically enforce these on commit.

## 📜 Available Scripts

| Script | Command | Description |
|--------|---------|-------------|
| **Development** | | |
| `dev` | `strapi develop` | Start Strapi in development mode with file watching |
| `start` | `strapi start` | Start Strapi in production mode |
| `console` | `strapi console` | Open interactive Strapi console |
| **Building & Deployment** | | |
| `build` | `strapi build` | Build the admin panel and backend for production |
| `deploy` | `strapi deploy` | Deploy to Strapi Cloud |
| `upgrade` | `npx @strapi/upgrade latest` | Upgrade Strapi to the latest version |
| `upgrade:dry` | `npx @strapi/upgrade latest --dry` | Preview upgrade changes without applying |
| **Code Quality** | | |
| `lint` | `biome check` | Check code for linting issues |
| `lint:errors` | `biome check --diagnostic-level error --max-diagnostics 100` | Check and display only errors (max 100) |
| `lint:warnings` | `biome check --diagnostic-level warn --max-diagnostics 100` | Check and display warnings (max 100) |
| `lint:fix` | `biome check --write` | Auto-fix linting issues |
| `format` | `biome format --write` | Auto-format code files |
| `typecheck` | `tsc --pretty --noEmit` | Type-check TypeScript without emitting files |
| **Testing** | | |
| `test` | `jest --watch` | Run tests in watch mode |
| `test:ci` | `jest --passWithNoTests --runInBand` | Run tests in CI environment (sequential) |
| `test:coverage` | `jest --coverage` | Run tests with coverage report |
| **Utilities** | | |
| `strapi` | `strapi` | Direct Strapi CLI access |
| `prepare` | `husky` | Setup Husky git hooks |

## 🧪 Testing

The project uses **Jest** for unit and integration testing.

### Run Tests

- **Watch mode** (for development):
  ```bash
  npm run test
  ```

- **Coverage report**:
  ```bash
  npm run test:coverage
  ```
  Reports are generated in the `coverage/` directory.

- **CI mode** (for automated testing):
  ```bash
  npm run test:ci
  ```

### Test Files Location

Test files are located in `src/__tests__/` and should follow the naming convention: `*.test.ts` or `*.spec.ts`.

## 🔄 Strapi CMS Development Flow

### Understanding the Strapi Architecture

Strapi follows a **layered architecture** pattern:

```
Routes → Controllers → Services → Models
```

- **Routes**: Define API endpoints (e.g., `GET /api/articles`)
- **Controllers**: Handle HTTP requests and responses
- **Services**: Contain business logic and database operations
- **Models**: Define content structure and relationships

### Step-by-Step Development Process

#### 1. **Define Content Types**

Use the Strapi admin panel's Content-type Builder:

1. Navigate to `http://localhost:1337/admin/content-manager`
2. Click "Create new content type"
3. Define fields (text, rich text, relations, etc.)
4. Configure permissions in the Settings tab

**Auto-generated files** (after creating a content type):
- `src/api/[content-type]/models/` - Database models
- `src/api/[content-type]/services/` - Default service
- `src/api/[content-type]/controllers/` - Default controller
- `src/api/[content-type]/routes/` - Default route definitions

#### 2. **Create Custom Controllers**

Controllers handle business logic and HTTP responses:

```typescript
// src/api/article/controllers/article.ts
import { factories } from '@strapi/strapi';

export default factories.createCoreController('api::article.article', {
  async find(ctx) {
    // Custom find logic
    return await super.find(ctx);
  },

  async create(ctx) {
    // Custom create logic
    return await super.create(ctx);
  }
});
```

#### 3. **Implement Services**

Services encapsulate reusable business logic:

```typescript
// src/api/article/services/article.ts
import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', {
  async getPublishedArticles() {
    return await strapi.entityService.findMany('api::article.article', {
      filters: { publishedAt: { $ne: null } }
    });
  }
});
```

#### 4. **Define Routes**

Routes map HTTP requests to controllers:

```typescript
// src/api/article/routes/article.ts
export default {
  routes: [
    {
      method: 'GET',
      path: '/articles/published',
      handler: 'article.find',
      config: { auth: false, policies: [] }
    }
  ]
};
```

#### 5. **Set Up Permissions**

Configure role-based access control:

1. Admin panel → Settings → Roles
2. Define permissions for each content type
3. Map routes to specific roles (Public, Authenticated, Admin, etc.)

#### 6. **Test the API**

Access the API at `http://localhost:1337/api/`:

```bash
# Get articles
curl http://localhost:1337/api/articles

# Create article
curl -X POST http://localhost:1337/api/articles \
  -H "Content-Type: application/json" \
  -d '{"data": {"title": "My Article"}}'
```

### Database Migrations

Strapi manages the database schema automatically based on content types. For custom migrations:

```bash
# Generate migration
npm run strapi migrate:create <migration-name>

# Run migrations
npm run strapi migrate:up
```

### Plugins Configuration

Plugins are configured in `config/plugins.ts`:

- **@strapi/plugin-users-permissions**: User authentication and roles
- **@strapi/plugin-cloud**: Cloud deployment integration
- **Custom plugins**: Can be placed in `src/plugins/` or installed from npm

### Environment-Specific Configuration

Configuration files in `config/` support environment variables:

```typescript
// config/database.ts - automatically loads based on NODE_ENV
export default ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      }
    }
  }
});
```

## 🛠️ Code Quality

This project enforces code quality standards using:

### Biome

Fast formatter and linter for JavaScript/TypeScript:

```bash
# Format code
npm run format

# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

**Configuration**: `biome.json`

### TypeScript

Static type checking:

```bash
npm run typecheck
```

**Configuration**: `tsconfig.json`

### Husky & Lint-Staged

Automatic pre-commit checks:

- Type-checks all `.ts` files
- Formats and lints `.js`, `.ts`, `.json`, etc.
- Prevents commits with errors

## 📦 Dependencies

### Core Dependencies

- **@strapi/strapi** - Headless CMS framework
- **@strapi/plugin-users-permissions** - User authentication
- **@strapi/plugin-cloud** - Cloud deployment
- **better-sqlite3** - SQLite database driver
- **React** (^18.0.0) - Admin panel UI library
- **styled-components** (^6.0.0) - CSS-in-JS styling

### Development Dependencies

- **TypeScript** (^5) - Static type checking
- **Jest** - Testing framework
- **Biome** - Code formatter and linter
- **Husky** - Git hooks
- **CommitLint** - Commit message validation

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build.

### Deploy to Strapi Cloud

```bash
npm run deploy
```

Requires authentication with Strapi Cloud account.

### Docker Deployment

Create a `Dockerfile` in the root directory for containerized deployment:

```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
```

## 🤝 Contributing

### Commit Guidelines

This project uses Conventional Commits enforced by CommitLint:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

**Valid types**: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:
```
feat(article): add article search functionality

Implement full-text search for articles
- Add search endpoint
- Create search service

Closes #123
```

### Pull Request Process

1. Create a feature branch: `git checkout -b feat/my-feature`
2. Make changes and commit with conventional messages
3. Push to GitHub
4. Create a pull request with description
5. Ensure all checks pass (tests, linting, types)

## 📝 License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## 👨‍💻 Author

**Dmitrii Suroviagin**

## 🔗 Resources

- [Strapi Documentation](https://docs.strapi.io/)
- [Strapi Community](https://discord.strapi.io/)
- [REST API Documentation](https://docs.strapi.io/dev-docs/api/rest)
- [Content Type Builder Guide](https://docs.strapi.io/user-docs/content-manager/content-types-builder)
- [Users & Permissions Plugin](https://docs.strapi.io/user-docs/users-roles-permissions)

---

**Last Updated**: January 28, 2026

