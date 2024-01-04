## How to Import the Svg in Next JS using SVGR 

1. SVGR (https://react-svgr.com/playground/) is a third-party package for converting an SVG image to a React component.

+ Install it as a development dependency to start importing SVGs as React components in your Next.js application:

# NPM
npm install --save-dev @svgr/webpack

# Yarn 
yarn add --dev @svgr/webpack

## How to Add Dynamic background to Navbar.
- For Adding the Dynamic Background We have Used useWindowScroll Hook. 

- This custom React hook tracks the vertical scroll position of the window. It uses the useState and useEffect hooks to manage and update the scroll position state.

# How to Use useWindowScroll Hook?

1. Initialization: Initializes state using the useState hook to hold the vertical scroll position (scrollY) with an initial value of 0.


2.Event Listener on Window Scroll:

- Uses useEffect to handle side effects within the component.
- Adds an event listener to the scroll event of the window.
- Defines a handleScroll function that updates the scrollY state with the current vertical scroll position (window.scrollY).

3. Cleanup and Unmounting:

- Removes the event listener on cleanup by returning a cleanup function from useEffect.
- Ensures the event listener is removed when the component using the hook is unmounted to prevent memory leaks.

4. Return Value:

Returns the scrollY state, representing the vertical scroll position of the window.

# Usage 
 <!-- const scrollY = useWindowScroll();
    const backgroundColor = `rgba(0,0,0,${scrollY / 1000})`; -->

- As shown in the above code we have used scrollY from the useWindowScroll Hook and changed the background color using that.
- So, as the user scrolls, the backgroundColor variable will change dynamically based on the vertical scroll position, transitioning from an almost transparent color (alpha = 0) to a more opaque color (alpha = 1) as scrollY increases.

## How to use scrollIntoView for horizontal navigation in a component

- For Creating Horizontal navigation we have used useRef Hook to create references to different elements in the DOM.

- Firstly we have created References for all the Steps required using the useRef Hook.
- THe scrollIntoView Funtion is used to scroll smoothly to that element within a container, adjusting the scrolling behavior.
- We can adjust different parameters like behavior, inline and block according to the Scrolling behaviour.
- FOr Triggering the Scrolling behaviour we have to pass an onClick funtion to all the buttons where we want the Horizontal Effect.
- Finally we have to pass the Reference in every div element so that they can hold the information when the scrolling occurs.
