import { Container } from "reactstrap";
import NavMenu from "./Layout/NavMenu";
const Layout = ({ children }) => {
  return (
    <div>
      <NavMenu/>
      <Container>
        {children}  
      </Container>
    </div>
  );
};

export default Layout;
