// animations/general/index.js

import { buttonStarter } from "./buttonStarter";
import { navStarter } from "./navStarter";

// Initializes general animations used across multiple pages.
// This is a boilerplate setup, customize these functions as needed for your project.
export function generalStarter() {
  buttonStarter();
  navStarter();
}
