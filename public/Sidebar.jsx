import styled from "styled-components";
import Logo from "../src/ui/Logo";
import MainNav from "../src/ui/MainNav";
import Uploader from "../src/data/Uploader";

function Sidebar() {
  const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 3.2rem 2.4rem;
    border-right: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  `;
  return (
    <StyledSidebar>
      <Logo />
      <MainNav />
      <Uploader />
    </StyledSidebar>
  );
}
export default Sidebar;
