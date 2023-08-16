# Redux Baseball Pitchers

- Fork
- Clone
- `npm install`
- `npm start`

## Base Requirements

Our application is a hit! Baseball coaches around the world are using our application to track their list of pitchers and catchers. They love that clicking a name updates immediately and they can add new pitchers or catchers on the fly.

We're about to add a ton of new features to our application, but before we do, we should add redux to our application so that our `App.jsx` component doesn't get out of control.

### Add Redux to Project

Add redux into the project. You'll need to add `redux` and `react-redux` packages in order to do this.

### Move Data to Reducers

Move the `pitcherList` and `catcherList` to reducers! Refactor app to use that data from Redux.

You will need to `dispatch` from your forms submission -- eg `handleCatcherSubmit`. The logic for adding will happen in the reducer!


### Make New Components
Now that we've got redux setup, time to start making components.

In `App.jsx` replace the line:

```JSX
<div>Total Pitchers: {pitcherList.length}</div>
```

with

```JSX
<TotalPitchers />
```

It shouldn't need props passed, because the `pitcherList` should be stored in Redux. Have your new component reach out!


In `App.jsx` replace the line:

```JSX
<div>Total Catchers: {catcherList.length}</div>
```

with

```JSX
<TotalCatchers />
```

This will also use Redux for the data, just like the Pitchers.

## Stretch Goals

### Keep Going in App.jsx

One of the joys of redux is that it can really clean up our components. Make `App.jsx` look like this:

```JSX
function App() {
  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <OnTheMound />
      <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <h3>All Pitchers</h3>
      <PitcherForm />
      <PitcherList />
      <h3>All Catchers</h3>
      <CatcherForm />
      <CatcherList />
    </div>
  ); 
}

export default App;

```

There are about nine stretch goals wrapped up into this one stretch goal, so break things down into very small steps.

### Clean Index.js

If you have moved everything out of `App.jsx`, your `index.js` is probably getting a little crowded. Move each of your reducers to a separate file in a new `src/redux/reducers` folder.
