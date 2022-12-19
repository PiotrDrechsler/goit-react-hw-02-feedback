import { Counter } from './Counter';

export const App = () => (
  <>
    <h1>Hello from the App</h1>
    <Counter initialValue={0} step={1} />
  </>
);
