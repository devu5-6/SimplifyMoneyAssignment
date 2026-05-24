# Simplify Money: Live Precious Metals Tracker

### **Project Overview**
I built a cross-platform mobile application using **React Native and Expo** to track live precious metal prices. The app fetches simulated live data for Gold, Silver, Platinum, and Palladium, displaying them in a modern, responsive interface. 

### **My Approach**
* **Modern Navigation:** I used **Expo Router** for file-based routing. This provides a cleaner project structure and handles complex navigation states natively without relying on nested navigation containers.
* **Independent Loaders:** I designed the `MetalTile` component to handle its own state. When the app loads, each tile independently calls the API, showing its own loading spinner. If one API call fails, only that specific tile shows an error and a "Retry" button, rather than crashing the whole screen.
* **Mock API Simulation:** To make the assignment easy to review without needing third-party API keys, I created a robust Mock API. It includes artificial network delays (1-3 seconds), calculates realistic price fluctuations, and has a 10% simulated failure rate to demonstrate proper error handling.
* **Modern UI Styling:** I integrated **NativeWind (Tailwind CSS)**. This allowed me to rapidly build a highly aesthetic, "fintech-style" user interface with clean typography, rounded cards, and dynamic text coloring (e.g., green for positive trends, red for negative or errors) without writing massive custom stylesheets.
* **TypeScript Integration:** I used TypeScript to define strict interfaces for the metal data. This ensures that the data passed from the home screen to the details screen is completely type-safe, preventing runtime errors.

### **Solution Details**
* **Home Screen:** Displays a scrollable list of the four requested metals. Each tile displays the metal name, purity (karat), current price per gram, and the exact timestamp of the last update.
* **Details Screen:** Clicking on a tile seamlessly transitions to a details page. To optimize performance, the app passes the already-fetched data through the router parameters, eliminating the need for a redundant secondary API call. It displays expanded stats like previous close and today's open.

### **Deployment & Execution Notes**

**Prerequisites:**
You will need Node.js installed on your machine. To view the app on your physical phone, download the **Expo Go** app from the iOS App Store or Google Play Store.

**Steps to Run Locally:**
1. **Unzip the project** and open the folder in your terminal.
2. **Install dependencies:** Run `npm install` to download all necessary packages.
3. **Start the server:** Run `npx expo start -c` (the `-c` flag ensures the cache is cleared so Tailwind compiles perfectly).
4. **View the app:** * **On your phone:** Open the Expo Go app and scan the QR code generated in your terminal.
   * **On an emulator:** Press `a` in the terminal to open it in an Android Emulator, or `i` for an iOS Simulator.