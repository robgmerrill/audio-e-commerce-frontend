import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    --dark-orange: #D87D4A;
    --light-orange: #FBAF85;
    --black: #101010;
    --pure-black: #000000;
    --light-gray: #f1f1f1;
    --light-grey: var(--light-gray);
    --off-white: #fafafa;
    --pure-white: #ffffff;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
    --max-width: 1000px;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: border-box;
  }
  body {
    font-family: 'manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: var(--black);
  }
  a:hover {
    text-decoration: underline;
  }
  h1 {
    font-size: 3.5rem;
    letter-spacing: 2px;
  }
  h2 {
    font-size: 2.5rem;
    letter-spacing: 1.5px;
  }
  h3 {
    font-size: 2rem;
    letter-spacing: 1.25px;
  }
  h4 {
    font-size: 1.5rem;
    letter-spacing: 1.15px;
  }
  h5 {
    font-size: 1.25rem;
    letter-spacing: 1.1px;
  }
  h6 {
    font-size: 1rem;
    letter-spacing: 1.05px;
  }

  button {
    font-family: 'manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`;

const InnerStyles = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 2rem;
`;

export default function Page({ children }) {
  return (
    <>
      <GlobalStyle />
      <h1>h1 header</h1>
      <h2>h2 header</h2>
      <h3>h3 header</h3>
      <h4>h4 header</h4>
      <h5>h5 header</h5>
      <h6>h6 header</h6>
      <InnerStyles>{children}</InnerStyles>
      <div>Universal Footer</div>
    </>
  );
}
