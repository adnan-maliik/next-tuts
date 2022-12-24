import Link from "next/link";
import { Container, Nav, NavItem, NavLink } from "reactstrap";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav fill pills color="light" className="bg-dark py-3">
        <NavItem>
          <Link href="/" passHref  legacyBehavior >
            <NavLink  className="text-light">Next Events</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/posts" passHref  legacyBehavior >
            <NavLink  className="text-light">Posts</NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link href="/ssr" passHref  legacyBehavior >
            <NavLink  className="text-light">SSR</NavLink>
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
