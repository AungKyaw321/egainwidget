# UX Take Home Assignment - eGain Widget

## Overview

This project is an **interactive guidance widget** built using Vue.js. It allows users to describe a problem they are facing, answer a series of questions, and receive a recommended solution. The widget is fully customizable, embeddable, and features an admin panel for adjusting its appearance.

## How It Meets the Requirements

The application fully meets the assignment specifications by implementing the following features:

### User Journey & Interaction

1. **Start by Clicking the Logo**: The user begins by clicking the **floating logo** located at the bottom right-hand side of the page. This opens the widget interface.
2. **Enter Problem Description**: The user is first prompted to enter a description of the problem they are facing.
3. **Answer a Series of Questions**: The system presents a set of predefined questions, which the user must answer. These questions include:
   - Selecting from **text options** (e.g., "Software", "Hardware").
   - Selecting an **image** that best represents the issue.
   - Entering a **numerical** response (e.g., severity level from 1-10).
   - Providing **freeform text** input for additional details.
4. **Modify Previous Answers**: Users can review and edit their previous answers by clicking on them in the "Answered Questions" section.
5. **Receive a Solution**: After completing the questions, the system generates a recommended solution based on the user's responses.
6. **Provide Feedback**: Users can indicate whether the suggested solution was helpful or not.

### Compliance with Assignment Specifications

- ✅ **Problem Description Prompt**: Users must first describe their issue before answering questions.
- ✅ **Question & Answer Mechanism**: The widget supports all specified question types.
- ✅ **Displaying Answered Questions**: All responses are shown in the "Answered Questions" section, allowing easy review and editing.
- ✅ **Solution Generation**: The widget generates an automated solution based on user responses.
- ✅ **Feedback Mechanism**: Users can provide feedback on the effectiveness of the solution.
- ✅ **Embeddable & Customizable**: The widget can be embedded into any webpage and supports admin modifications.
- ✅ **Admin Access for Customization**: Admins can change background colors, fonts, font sizes, and logos.
- ✅ **Responsive Design**: The widget is optimized for different screen sizes and resolutions.

## Installation & Usage

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- Vue CLI (`npm install -g @vue/cli`)

### Setup

1. Clone the repository:
   ```sh
   git clone <repository-url>
   cd <project-folder>
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the development server:
   ```sh
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173/` (or the port specified in your terminal).

### Embedding the Widget

To embed the widget in another application, include the following component:

```vue
<WidgetContainer />
```

## Project Structure

```
📂 src/
├── components/
│   ├── WidgetContainer.vue   # Main widget container
│   ├── QuestionForm.vue      # Question input handling
│   ├── AnsweredQuestions.vue # Displays answered questions
│   ├── FeedbackForm.vue      # Solution feedback
├── mockData/
│   ├── questions.js          # Mock data for questions
├── assets/
│   ├── logo.png
└── App.vue                   # Root Vue component
```

## Customization

### Admin Settings

Admins can modify the widget’s:

- **Background color**
- **Font size**
- **Font style**
- **Logo image**

To access these settings:

1. Click the **Admin Access** button.
2. Enter the admin password (`admin123` by default).
3. Modify the settings as needed.
4. Click **Apply Changes** to update the widget.

## Future Enhancements

- 🔹 Store user responses persistently using a backend service.
- 🔹 Implement dynamic question flow based on previous answers.
- 🔹 Add multi-language support.

## Conclusion

I believe this Vue.js widget successfully meets all the requirements outlined in the UX take-home assignment. It is interactive, customizable, and responsive, making it a versatile solution for various web applications.
