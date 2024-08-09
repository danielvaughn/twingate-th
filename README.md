# Twingate TH

to run:

```
git clone git@github.com:danielvaughn/twingate-th.git
cd twingate-th
npm install
npm run dev
```

look inside the `/sample.json` file to easily copy over sample json data.

## Implementation Notes

I made some assumptions and took a few liberties:

1. In the case of invalid JSON, I did not render the error message in the output panel. Instead I performed an early exit and rendered the error message in the text editor. I did this because it's not as computationally expensive, and also provides a better UX. I realize this may differ slightly from the instructions, but I wasn't sure how literal to interpret them. If the intention was to instead render an error message in the panel, then what I would do is simply lift the JSON parsing call, as well as the `errorText` state hook, up to the `App` component. This way I could pass them down to the `Canvas` and render the error message there.
2. Normally I would add testing using Jest or Vitest or something, but decided not to for time and practicality sake.
3. There were no styling requirements, but I would normally pay attention to presentation during the loading sequence. In a real scenario, It would probably be worth trying to grab the dimensions of the images so that you could pass the `height` attribute to the `img` element, which would at least prevent layout shift. You'd also want to add a nicer loading state for the data node.
