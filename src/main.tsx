import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

console.log("🚀 main.tsx: Starting app initialization");

const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("❌ Root element not found!");
  document.body.innerHTML = '<div style="padding:20px;color:red;font-family:sans-serif;"><h1>Error: Root element not found!</h1><p>The &lt;div id="root"&gt;&lt;/div&gt; element is missing from the HTML.</p></div>';
  throw new Error("Root element not found");
}

console.log("✅ Root element found");

try {
  console.log("📦 Creating React root...");
  const root = createRoot(rootElement);
  console.log("✅ React root created");
  
  console.log("🎨 Rendering App component...");
  root.render(<App />);
  console.log("✅ App rendered successfully!");
} catch (error) {
  console.error("❌ Failed to render app:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: #fee; border: 2px solid #f00; max-width: 800px; margin: 20px auto;">
      <h1 style="color: red;">❌ Failed to initialize application</h1>
      <p><strong>Error:</strong> ${error instanceof Error ? error.message : String(error)}</p>
      <details style="margin-top: 10px;">
        <summary style="cursor: pointer; font-weight: bold;">Error Details (Click to expand)</summary>
        <pre style="background: #fff; padding: 10px; overflow: auto; margin-top: 10px; border: 1px solid #ccc;">${error instanceof Error ? error.stack : 'No stack trace available'}</pre>
      </details>
      <p style="margin-top: 20px;"><strong>Please:</strong></p>
      <ol>
        <li>Open the browser console (Press F12)</li>
        <li>Check for any error messages</li>
        <li>Take a screenshot of the console and share it</li>
      </ol>
    </div>
  `;
}
