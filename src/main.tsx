// Playground: run `npm run dev` and import whichever challenge you want to look at.
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Greeting from './challenges/L1-components-props/01-greeting/Greeting';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Greeting name="Barry" />
  </StrictMode>,
);
