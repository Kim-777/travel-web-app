import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./theme";
const queryClient = new QueryClient();

ReactDOM.render(
  <>
    <React.StrictMode>
      <ThemeProvider theme={darkTheme}>
        <RecoilRoot>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </RecoilRoot>
      </ThemeProvider>
    </React.StrictMode>
  </>,
  document.getElementById("root")
);
