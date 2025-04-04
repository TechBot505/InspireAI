# Inspire AI: Content Generator
Inspire AI is a modern content generation platform designed to revolutionize how you create content. Leveraging advanced AI capabilities, Inspire AI offers over 50+ customizable templates tailored to meet all your content needs. Whether you're drafting a blog post, generating social media content, or even writing code, Inspire AI has you covered. The platform is available in both free and premium tiers, ensuring that you have the flexibility to choose the features that best suit your requirements.

![Screenshot (564)](https://github.com/user-attachments/assets/529d8fbd-1bfe-487b-9c14-277ccc9c151f)

## Table of Contents
* Features
* Tech Stack
* Installation
* Usage
* Contributions
* License

## Features

### 1. Templates for All Types of Content
Inspire AI provides a vast library of over 50+ templates, including:

* Blog Titles & Content
* YouTube Descriptions
* Instagram Post Ideas
* Code Generation, Explanation, and Debugger
  
 _Free Plan_: Access 20 templates with **10,000 credits** and unlimited downloads and copies.  
 _Premium Plan_: Unlock all **50+ templates**, 100,000 credits and a premium resume generator.

 ![Screenshot (556)](https://github.com/user-attachments/assets/1ee8098d-1e14-4446-9675-0113e812b193)

 ### 2. Fast Responses with Gemini
Experience lightning-fast AI responses, powered by the cutting-edge Gemini API, ensuring your content is generated quickly and accurately.

![Google Ai Gemini](https://github.com/user-attachments/assets/bd8291e2-b0fb-4013-add3-5ae2cd23c458)

### 3. Rich Text Editor with Markdown Support
Modify AI-generated content directly within the platform using a rich text editor that supports all essential features, including Markdown. Perfect for making quick edits before copying or downloading your content.

![Screenshot (558)](https://github.com/user-attachments/assets/c9e4ab34-f461-42c6-9e76-5e36191699ae)

### 4. History Section
Keep track of all your content generation activities with the History section. Enjoy unlimited downloads and the ability to copy past content at any time.

![Screenshot (560)](https://github.com/user-attachments/assets/4f910ff8-8a26-4d2b-8de9-9f643cfa6a1f)

### 5. Customizable User Profiles
Personalize your experience by customizing your user profile. Tailor the platform to your preferences and make your content generation process even smoother.

![Screenshot (561)](https://github.com/user-attachments/assets/0fa0fa7c-1183-48c8-8961-64c8f890869b)

### 6. Search Functionality
Quickly find the perfect template using the built-in search feature. Save time by locating the exact content template you need without sifting through the entire library.

![Screenshot (563)](https://github.com/user-attachments/assets/53951251-977f-48f4-b54b-b2ed9a2a1477)

### 7. Billing Section
Easily manage your subscription through the Billing section. Upgrade to the premium plan directly within the platform to unlock additional features and templates.

![Screenshot (559)](https://github.com/user-attachments/assets/f5088388-8d26-408a-9950-b936cda55d61)

### 8. Secure Authentication with Clerk
Inspire AI uses Clerk for seamless and secure user authentication. Sign up and log in effortlessly, knowing your data is protected.

![Screenshot (566)](https://github.com/user-attachments/assets/35a7f698-6bda-4d61-bf85-5933b24ac8c5)

## Tech Stack
Inspire AI is built using a modern and robust tech stack:

* Next.js 14
* TypeScript
* Tailwind CSS
* Shadcn
* Gemini API
* Razorpay Payment Gateway
* Clerk for Authentication
* Drizzle ORM
* PostgreSQL

## Installation
To set up Inspire AI locally, follow these steps:

1.** Install Dependencies**

   ```bash
   npm install
   ```

2. **Environment Variables**
   * Create a `.env.local` file in the root directory.
   * Fill in the required environment variables as outlined in `.env.example
     
3. **API KEYS**
   * Fill in all the API keys from respoective sources.
   * Navigate to [Gemini studio](https://aistudio.google.com/prompts/new_chat) to create your Google Gemini API KEY.
   * Navigate to [Neon DB](https://console.neon.tech), create an account, select a drizzle project and get your connection url.
   * Navigate to [Clerk](clerk.com), create a new project and get the API key and Secret.
   * To get the Razorpay API keys and Secrets, you'll have to register for a test account which might take 2-3 days. **However, even without the Razorpay API keys and secrets, the cresit system will work in the free tier. Only the user cannot subscribe to the premium tier.**
  

4. **Run the Drizzle Orm Local Databse**
   Before running the project, make sure to use this command in a new terminal in order to sync the schema with the neon db schema in the database.

   ```bash
   npm run db:studio
   ```
  
6. **Run the Development Server**

   ```bash
   npm run dev
   ```

## Usage
Once set up, navigate to `http://localhost:3000` in your browser to start using Inspire AI. You can explore templates, generate content, and manage your profile and billing through the intuitive user interface.

## Contributions
We welcome contributions from the community! If you'd like to contribute, please fork the repository and submit a pull request with your changes. Be sure to follow the contribution guidelines.


