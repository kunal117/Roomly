import Button from "./ui/Button";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

function App() {
  const StyledApp = styled.main`
    padding: 20px;
  `;
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out</Heading>
              <Button variation="primary" size="medium">
                Check In
              </Button>
              <Button variation="secondary" size="small">
                Check Out
              </Button>
            </div>
          </Row>

          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="number of guests" />
              <Input type="number" placeholder="number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
