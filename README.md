# Mobile App Frontend

## Description
This is the frontend for the mobile app built with React Native and Expo, responsible for providing an interface for users to authenticate using OAuth.

## Setup

### 1. Install Dependencies
Ensure you have Expo installed. If not, you can install it using:

```bash
npm install -g expo-cli
Then, install the dependencies for the project:
npm install

2. Environment Variables
Set up a .env file or directly place the following variable in your code:
BASE_URL=https://your-ngrok-url.ngrok-free.app
This is the backend URL where your server is running (usually your ngrok URL).

3. Running the App
To run the app on your device or simulator:

npx expo start -c
This will launch the app in Expo Go or in a simulator if configured.

4. OAuth Integration
The app supports Google authentication. After logging in, users are redirected back to the app via a deep link (yourapp://auth/callback).
