import styled from "styled-components";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  return (
    <StyledDashboardLayout>
      <div>Test1</div>
      <div>Test2</div>
      <div>Test3</div>
      <div>Test4</div>
    </StyledDashboardLayout>
  );
}
export default DashboardLayout;
