# Development

## Product issues/opportunities

- _The information we show about venues is insufficient_: Currently it's just a name, photos (if available), description (if available) and location. It would be beneficial for the product to see if we can get more out of 4Square API or if we can integrate with some other APIs as well.
- _Image lightbox_: We show only small preview of the photos, having the option to see the images in detail could be beneficial for the user.
- _Improve randomised selection_: The way how we select a random venue is very primitive, at the moment we only randomly select from the same 10 venues.
- _Deep-link to google/apple maps_: At the moment user can only see direction from CogentLabs office.
- _Image carousel is not apparent_: Venue images appear in carousel, but without carousel controls the user might not discover there are more images.

## Tech issues/opportunities

- _Missing component/integration tests_: `Search` and `LinkRandomVenue` would deserve their own integration tests. I had trouble setting up `msw` with `jest` and postponed this for later.
- _Using pre-commit hooks for running tests is an antipattern_: Pre-commit hooks can be skipped, we should set up our CI to run tests (including e2e tests) on the cloud before merging feature branches to `main`.
- _Analytics_: No analytics or monitoring are set-up. We should setup product analytics to know how do our users interact with the app and engineering analytics to know about any issues and unhandled errors.

## Bugs

- Search Dropdown should get disappear on input blur
- Search Dropdown should be accessible by keyboard
- `Map` should react to the `window` being resized
