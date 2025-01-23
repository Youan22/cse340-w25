// Import express using ESM syntax
import express from "express";

// Add these imports to your existing imports
import { fileURLToPath } from "url";
import path from "path";

// Create __dirname and __filename variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define important variables
const PORT = process.env.PORT || 3000;

// Create an instance of an Express application
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Define a route handler for the new route ('/new-route')
app.get("/new-route", (req, res) => {
  res.send("This is a new route!");
});

// Define routes to serve HTML pages
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/home.html"));
});

app.get("/page1", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/page1.html"));
});

app.get("/page2", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/page2.html"));
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
