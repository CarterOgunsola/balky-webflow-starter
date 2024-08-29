# Balky Webflow Starter

This is a boilerplate project designed to streamline Webflow development using Vite. It includes a modular structure for animations, page-specific routing, and customization options to fit various project needs.

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
4. [Development Workflow](#development-workflow)
   - [Using CodeSandbox (Recommended)](#using-codesandbox-recommended)
   - [Local Development](#local-development)
5. [Setting Up Environment Variables](#setting-up-environment-variables)
6. [Usage](#usage)
   - [Setting Up Pages](#setting-up-pages)
   - [Using the Simple Router](#using-the-simple-router)
   - [Using the Full Router](#using-the-full-router)
   - [Extending Animations](#extending-animations)
7. [Folder Structure](#folder-structure)
8. [Advanced Configuration](#advanced-configuration)
9. [Production Build](#production-build)
10. [Contributing](#contributing)
11. [License](#license)
12. [Credits](#credits)
13. [Acknowledgments](#acknowledgments)

## Overview

The **Balky Webflow Starter** is a comprehensive starter template that integrates modern development tools like Vite with Webflow. This boilerplate helps you manage custom code, modular animations, and page-specific scripts efficiently. It's designed to prevent code leakage, enhance performance, and simplify the development process.

## Features

- **Vite Integration**: Utilizes Vite for fast development, real-time updates, and efficient builds.
- **Modular Animations**: Organized structure for managing animations, including general animations and page-specific animations (e.g., Home, About).
- **Page Routing**: Implements a flexible page routing system using `data-page-name` attributes to initialize animations only on relevant pages.
- **Customizability**: Easily extend the router and animation setup to suit specific project needs, including options for custom attributes and hooks.

## Getting Started

### Prerequisites

To get started with the **Balky Webflow Starter**, you'll need:

- A Webflow account and project
- Basic knowledge of HTML, CSS, and JavaScript
- (Optional) A GitHub account for easier integration with CodeSandbox

### Installation

1. **Clone the Repository:**
   
   If you're comfortable with Git, you can clone the repository:

   ```bash
   git clone https://github.com/CarterOgunsola/balky-webflow-starter.git
   ```

   Alternatively, you can download the ZIP file from the GitHub repository and extract it on your computer.

2. **Choose Your Development Environment:**
   
   You have two options for development: using CodeSandbox (recommended for beginners) or setting up a local development environment.

## Development Workflow

### Using CodeSandbox (Recommended)

CodeSandbox is a cloud-based development environment that's easy to use and requires no local setup.

1. Go to [CodeSandbox](https://codesandbox.io/) and create an account if you don't have one.
2. Click on "Create Sandbox" and choose "Import Project".
3. Paste the URL of this GitHub repository: `https://github.com/CarterOgunsola/balky-webflow-starter`
4. CodeSandbox will automatically set up the project and install dependencies.
5. Once the sandbox is ready, you'll see a preview of your project and can start editing the files.

### Connecting CodeSandbox to Webflow

1. In your CodeSandbox project, look for the URL in the address bar. It should look something like `https://xxxxxxxx.csb.app`.
2. Go to your Webflow project and open the project settings.
3. In the "Custom Code" section, add the following to the `<head>` tag:

   ```html
   <script type="module" src="https://xxxxxxxx.csb.app/@vite/client"></script>
   <script type="module" src="https://xxxxxxxx.csb.app/js/index.js"></script>
   ```

   Replace `https://xxxxxxxx.csb.app` with your actual CodeSandbox URL.

4. Save and publish your Webflow project.
5. You should now see your changes in real-time as you edit in CodeSandbox.

### Local Development

If you prefer to develop locally:

1. Ensure you have [Node.js](https://nodejs.org/) installed on your computer.
2. Open a terminal and navigate to the project folder.
3. Install dependencies:
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```
5. You'll see a local URL (usually `http://localhost:3000`). Use this URL in your Webflow project's custom code section as described in the CodeSandbox instructions above.

## Setting Up Environment Variables

If your project requires API keys or other sensitive information:

1. Copy the `.env.template` file and rename it to `.env.local`.
2. Open `.env.local` and add your variables:
   ```
   VITE_GSAP_API_KEY=your_gsap_api_key_here
   ```
3. In your code, access these variables like this:
   ```javascript
   const gsapApiKey = import.meta.env.VITE_GSAP_API_KEY;
   ```

Remember: Never commit `.env.local` to version control.

## Usage

### Setting Up Pages

In your Webflow project, add the `data-page-name` attribute to the main wrapper of each page:

```html
<body>
  <div data-page-name="home" class="page-wrapper">
    <!-- Page content here -->
  </div>
</body>
```

### Using the Simple Router

For basic projects, use the simple router in your `index.js`:

```javascript
import { initPageRouter } from "./utils/pageRouter";

document.addEventListener("DOMContentLoaded", () => {
  initPageRouter();
});
```

### Using the Full Router

For more complex projects:

```javascript
import { initPageRouter } from "./utils/pageRouter";

initPageRouter({
  attributeName: "data-custom-page",
  defaultPage: "home",
  onBeforeInit: (pageName) => console.log(`Starting animations for: ${pageName}`),
  onAfterInit: (pageName) => console.log(`Finished initializing animations for: ${pageName}`),
});
```

### Extending Animations

- Add general animations in `/animations/general/`.
- For page-specific animations, create a new folder under `/animations/` (e.g., `/animations/contact/`) with an `index.js` file.

## Folder Structure

```
src/
├── js/
│   ├── animations/
│   │   ├── general/
│   │   ├── home/
│   │   └── about/
│   ├── utils/
│   └── index.js
└── styles/
    └── index.css
```

## Advanced Configuration

Refer to the [Advanced Configuration](#advanced-configuration) section in the original README for details on custom attributes, hooks, and edge case handling.

## Production Build

When you're ready to deploy:

1. Run the build command:
   ```bash
   npm run build
   # or
   yarn build
   ```
2. The generated `index.js` file needs to be hosted. Options include:
   - Upload to Webflow as a `.txt` file (rename `index.js` to `index.js.txt`).
   - Use a CDN like jsDelivr (upload to GitHub and use the jsDelivr URL).
   - Host on Cloudflare or other CDN services.

3. Update your Webflow project's custom code to use the hosted file:
   ```html
   <script type="text/javascript" src="https://your-hosted-file-url.js"></script>
   ```

## Contributing

We welcome contributions! Please see the [Contributing](#contributing) section in the original README for guidelines.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Credits

Based on the [Vite Webflow Starter](https://github.com/oluwadareseyi/vite-webflow-starter) by [Oluwadare Seyi](https://github.com/oluwadareseyi).

## Acknowledgments

- Thanks to the Webflow community for support and inspiration.
- Created with ❤️ by [Carter Ogunsola](https://github.com/CarterOgunsola) and the Balky Studio team.
