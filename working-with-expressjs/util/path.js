const path = require('path') // Import the built-in 'path' module for handling and transforming file paths

// Get the directory name of the main module's file
module.exports = path.dirname(require.main.filename); // Export the directory name of the main module's file