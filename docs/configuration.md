## Configuration

You can configure `leva` by using the `<Leva>` component anywhere in your App:

```jsx
import { Leva } from 'leva'

export default function MyApp() {

  return (
    <>
      <Leva
        theme={myTheme}  // you can pass a custom theme (see the styling section)
        detached         // default = true,  false would make the pane fill the parent dom node it's rendered in.
        oneLineLabels    // default = false, alternative layout for labels, with labels and fields on separate rows  
        hideTitleBar     // default = false, hides the GUI header
        collapsed        // default = false, when true the GUI is collpased
        hidden           // default = false, when true the GUI is hidden
      />
    </>
  )

}
```

- TODO // Add default config for LevaPanel as well