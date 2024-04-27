declare type RootState = ReturnType<typeof import('./index.ts').store.getState>;
declare type AppDispatch = typeof store.dispatch;
