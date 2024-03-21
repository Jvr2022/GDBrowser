# GDBrowser (wip)

Welcome to GDBrowser, a tool for browsing Geometry Dash servers locally. Below you'll find instructions on how to run it and some insights into its structure.

## How to Run

If you're looking to use GDBrowser locally, follow these steps:

1. Install [Node.js](https://nodejs.org/en/download/) if you haven't already.
2. Clone or download this repository.
3. Navigate to the main folder (where `index.js` is located) in your command line interface.
4. Run `npm i` to install dependencies.
5. Execute `node index` to start the web server.
6. GDBrowser is now accessible locally at [http://localhost:2000](http://localhost:2000).

## Adding GDPS Servers

If you're interested in adding your GDPS server to GDBrowser, please fill out [this form](https://forms.gle/kncuRqyKykQX42QD7) with your server's details. Alternatively, you can add a private server to your fork by editing the `servers.json` file with the required information.

## Structure Overview

### API

This folder contains backend logic responsible for fetching data from servers and serving it as JSON.

### Assets

Here, you'll find various assets related to Geometry Dash, organized for convenience.

### Classes

Contains JavaScript classes for specific functionalities, such as parsing level data and encrypting/decrypting information.

### HTML

Basic HTML files for different pages of the browser. Note that some files have placeholders replaced dynamically by the server.

### Misc

A miscellaneous folder with additional resources and files.

### Level Analysis Stuff

Contains JSON files with information related to block IDs, color properties, object properties, etc.

### Everything Else

Includes JSON files for achievements, credits, music, sample icons, and other miscellaneous data.

---

Happy browsing with GDBrowser, and thank you for using it!
