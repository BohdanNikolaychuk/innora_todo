import { BrowserRouter } from './router-provider';
import { ReduxProvider } from './redux-provider';
export const Provider = () => {
  return (
    <ReduxProvider>
      <BrowserRouter />
    </ReduxProvider>
  );
};
