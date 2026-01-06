# React Class Notes – Background Color Changer App

## 📘 Class Objective

In this class, we build and understand a **React Background Color Changer App**.  
This project demonstrates how **state**, **event handling**, and **dynamic styling** work together in React.

By the end of this class, you will clearly understand:
- How React updates UI without page reload
- How `useState` works internally
- How button events change application state
- How styles can be changed dynamically using state

---

## 🧠 What This App Does

- Displays a full-screen page
- Shows multiple color buttons
- Clicking a button changes the background color of the entire screen
- No page reload happens
- UI updates instantly using React’s re-rendering system

---

## 📦 Complete Code Used in This Class

import React from "react";
import { useState } from "react";

Why this is needed:
React → Required for JSX
useState → Used to store and update values dynamically
Without useState, the UI would not update automatically


What is State?

State is data that can change over time and controls what appears on the screen.

Breakdown:

 • bgColor → Current background color
 • setbgColor → Function to update the color
 • 'gray-' → Initial value (default background)

Important Rule:
When state changes, React re-renders the component.

🔁 How React Re-render Works
1.Button click happens
2.setbgColor() is called
3.React updates state
4.Component function runs again
5.JSX is recalculated
6.DOM updates automatically
This is called Reactive UI.


Background Color change
const changeBg = (Color) => {
  setbgColor(Color)
  console.log("Color is changed")
}

Purpose of this function:
• Accepts a color name
• Updates the state
• Triggers re-render
This function is reusable and works for all buttons.


🔘 Buttons & Event Handling
onClick={() => changeBg('red')}

if written as
onClick={changeBg('red')}

❌ Function would run immediately during render.
Arrow function ensures:
✔ Function runs only on click


🎓 Concepts Covered in This Class

• React Functional Components
• React Hooks (useState)
• State & Re-rendering
• Event Handling
• Dynamic Styling
• Tailwind CSS Utilities
• Inline Style Override