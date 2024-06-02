# Chat app demo

This project is a simple Node.js application using Express to serve a static site and handle chat completion requests via the OpenAI API.

## Table of Contents

- [Chat app demo](#chat-app-demo)
  - [Table of Contents](#table-of-contents)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Dependencies](#dependencies)

## Prerequisites

Before you begin, make sure you have Node.js and npm (Node Package Manager) installed on your machine. You can download them from [nodejs.org](https://nodejs.org/). Additionally, you need an API token from OpenAI. If you don't have one, you can get it from the [OpenAI API](https://beta.openai.com/signup/).

## Installation

1. **Clone the repository:** ```bash git clone https://github.com/your-username/node-chat-completion-api.git cd node-chat-completion-api ```
2. **Install the dependencies:** ```bash npm install ```
3. **Set your OpenAI API token:** Open the `server.js` file and replace `'YOUR_OPEN_AI_API_TOKEN'` with your actual OpenAI API token. ```javascript const OPEN_AI_TOKEN = 'YOUR_OPEN_AI_API_TOKEN'; ```

## Usage

To start the server, run: ```bash npm start ``` Your application will be running on [http://localhost:3434](http://localhost:3434). You can send POST requests to `/messages` endpoint with the following body structure: ```json { "messages": [ { "role": "user", "content": "Your message here" }, ... ] } ```

## Dependencies

- [express](https://expressjs.com/): Fast, unopinionated, minimalist web framework for Node.js. To install the dependencies, run: ```bash npm install ```
