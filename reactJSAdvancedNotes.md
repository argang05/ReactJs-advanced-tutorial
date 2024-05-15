Q. What is two way binding in react?

- Two-way binding in ReactJS is a way to keep your UI (the stuff users see) and your data (the stuff your app works with) in sync. 

Q. What is API Calling in ReactJS?

- API calling in ReactJS refers to fetching data from a server (API) and using it within your React application. This is commonly done using fetch or a library like axios. When you make an API call, you request data from an external source, wait for the response, and then update your component's state with the retrieved data.

Q. What is useEffectHook in ReactJS simple explanation?

- The useEffect hook in ReactJS allows you to perform side effects in function components. Side effects can include things like fetching data, updating the DOM, setting up subscriptions, and more. useEffect is similar to lifecycle methods in class components (such as componentDidMount, componentDidUpdate, and componentWillUnmount) but is used in functional components.

Q. What is the concept of Context API in ReactJS?

- The Context API in ReactJS is a way to manage state globally in a React application, making it easier to pass data through the component tree without having to pass props down manually at every level.

- Purpose: Context API allows you to share data across many components without passing props through every level of the component tree.

- Components:

1. Context Provider: A component that holds and provides the state.
2. Context Consumer: A component that uses the state provided by the context.
Steps to Use Context API:

- Create Context: Define a context using React.createContext().
- Provide Context: Use the Provider component to wrap your component tree and provide the context value.
- Consume Context: Use the useContext hook or the Consumer component to access the context value in your components.

Q. What is React Toastify?

- React Toastify is a library that helps you display notifications in your React application. Here’s an extremely simple explanation in points:

- Purpose: Displays toast notifications (temporary pop-up messages) in a React app.

Q. What is client side and server side rendering in ReactJS?

- Server-Side Rendering (SSR) and Client-Side Rendering (CSR) in ReactJS
1. Server-Side Rendering (SSR) Explanation in Points:

- Render on Server: The server generates the HTML for a page and sends it to the client.
- Initial Load: Faster initial load because the HTML is pre-rendered.
- SEO Friendly: Better for SEO because search engines can easily crawl the content.
- Hydration: Once the HTML is loaded, React takes over the client-side interactions.

2. Client-Side Rendering (CSR) Explanation in Points:

- Render on Client: The browser downloads a minimal HTML file and JavaScript bundle, which then - - renders the HTML on the client-side.
- Initial Load: Initial load might be slower due to the need to download and execute JavaScript.
- SEO Challenges: Not as SEO-friendly unless additional tools like prerendering or dynamic rendering are used.
- Single Page Application (SPA): Better for dynamic interactions and transitions without reloading the page.