import Link from "next/link";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav fill pills color="light" className="bg-dark py-3">
        <NavItem>
          <Link href="/" passHref  legacyBehavior >
            <NavLink  className="text-light">Featured Events</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/events" passHref  legacyBehavior >
            <NavLink  className="text-light">Events</NavLink>
          </Link>
        </NavItem>
      </Nav>
      <Container>
        {children}  
      </Container>
    </div>
  );
};

export default Layout;
