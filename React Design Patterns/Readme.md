## React Design Patterns

### Compound Components

When multiple components work together to have a shared state and handle logic together, they are called compound components.

Think of compound components like the select and option elements in HTML. Apart they don’t do too much, but together they allow you to create the complete experience.

When you click on an option, select knows which option you clicked. Like select and option, the components share the state on their own

Compound components are a React pattern that provides a flexible way for a parent component to communicate with its children, while expressively separating logic and UI.

In compound components instead of passing state through props, we pass elements as children to a parent element.

```
<select name="places" id="places-select">
    <option value="paris">Paris</option>
    <option value="boston">Boston</option>
    <option value="london">London</option>
</select>
```

In HTML, we can pass options to a `<select>` element as children. The select element manages the state, and we clearly see what elements are passed as options to the select.

Another example is TabSwitcher

Ways to create these components:

    1. React.cloneElement
    2. Using Context API

### Higher Order Component

A Higher Order Component (HOC) is a component that receives another component. The HOC contains certain logic that we want to apply to the component that we pass as a parameter. After applying that logic, the HOC returns the element with the additional logic.

Say that we always wanted to add a certain styling to multiple components in our application. Instead of creating a style object locally each time, we can simply create a HOC that adds the style objects to the component that we pass to it

```
function withStyles(Component) {
  return props => {
    const style = { padding: '0.2rem', margin: '1rem' }
    return <Component style={style} {...props} />
  }
}

const Button = () = <button>Click me!</button>
const Text = () => <p>Hello World!</p>

const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
```

We just created a StyledButton and StyledText component, which are the modified versions of the Button and Text component. They now both contain the style that got added in the withStyles HOC!

### Container and Presentational Patterns

we can separate the view from the application logic.

Let’s say we want to create an application that fetches 6 dog images, and renders these images on the screen.

Ideally, we want to enforce separation of concerns by separating this process into two parts:

    1.Presentational Components: Components that care about how data is shown to the user. In this example, that’s the rendering the list of dog images.

    2.Container Components: Components that care about what data is shown to the user. In this example, that’s fetching the dog images.

Fetching the dog images deals with application logic, whereas displaying the images only deals with the view.

A presentational component receives its data through props. Its primary function is to simply display the data it receives the way we want them to, including styles, without modifying that data.

Presentational components are usually stateless: they do not contain their own React state, unless they need a state for UI purposes. The data they receive, is not altered by the presentational components themselves.

Presentational components receive their data from container components.

The primary function of container components is to pass data to presentational components, which they contain. Container components themselves usually don’t render any other components besides the presentational components that care about their data. Since they don’t render anything themselves, they usually do not contain any styling either.

Instead of having the data fetching logic in the a component, we can create a custom hook that fetches the images, and returns the array of dogs. without needing to create a container/ presentational component

### Render Props Patterns

A render prop is a function prop that is called in a render method

The term “render prop” refers to a technique for sharing code between React components using a prop whose value is a function.

A component with a render prop takes a function that returns a React element and calls it instead of implementing its own render logic.

The Render Props is a technique in ReactJS for sharing code between React components using a prop whose value is a function. Child component takes render props as a function and calls it instead of implementing its own render logic.

In brief, we pass a function from the parent component to the child component as a render props, and the child component calls that function instead of implementing its own logic.
