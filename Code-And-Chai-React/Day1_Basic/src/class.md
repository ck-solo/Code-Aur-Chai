# Introduction to React

## What is React?

React is an **open-source JavaScript library** used to build **fast, interactive, and scalable user interfaces**, especially for **single-page applications (SPAs)**.  
It was developed and is maintained by **Meta (Facebook)** and a large community of developers.

React focuses mainly on the **View layer** of an application and helps developers create reusable UI components.

---

## Why React?

Modern web applications need:

- Fast performance
- Reusable UI components
- Efficient state management
- Easy maintenance

React solves these problems by introducing:

- Component-based architecture
- Virtual DOM
- One-way data binding
- Declarative UI

---

## Key Features of React

### 1. Component-Based Architecture

React applications are built using **components**.  
Each component is an independent, reusable piece of UI.

Example:

```js
function Button() {
  return <button>Click Me</button>;
}
```

2. Virtual DOM

React uses a Virtual DOM, which is a lightweight copy of the real DOM.

How it works:

1. React creates a virtual representation of the UI
2. When state changes, React updates the Virtual DOM
3. React compares it with the previous version (Diffing)
4. Only the changed elements are updated in the real DOM
   ➡️ This makes React very fast and efficient.

3. Declarative UI
   React allows developers to describe what the UI should look like, not how to update it.
   return <h1>Hello, React</h1>;
   React handles DOM updates automatically.

4. JSX (JavaScript XML)
JSX allows writing HTML-like code inside JavaScript.
const element = <h1>Hello World</h1>;

JSX makes code:
• More readable
• Easier to understand
• Closer to HTML structure

5. One-Way Data Binding

Data flows in one direction (parent → child), making applications
• Predictable
• Easier to debug
• More maintainable


6. State and Props
• Props: Used to pass data from one component to another (read-only)
• State: Used to manage dynamic data inside a component

Example:

const [count, setCount] = useState(0);


Advantages of React
• Reusable components
• High performance due to Virtual DOM
• Strong community support
• SEO-friendly (with SSR)
• Easy integration with other libraries
• Backed by Meta (Facebook)

Where is React Used?

React is widely used by top companies like:

• Facebook
• Instagram
• Netflix
• Airbnb
• Uber
• WhatsApp Web
