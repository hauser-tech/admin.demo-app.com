import { Navbar, Nav, Dropdown } from "rsuite";

const NavBar = () => {
  return (
    <Navbar className="">
      <Navbar.Brand>Ecommerce</Navbar.Brand>
      <Nav pullRight>
        <Nav.Item>Home</Nav.Item>
        <Nav.Item>News</Nav.Item>
        <Nav.Item>Products</Nav.Item>
        <Dropdown title="About">
          <Dropdown.Item>Company</Dropdown.Item>
          <Dropdown.Item>Team</Dropdown.Item>
          <Dropdown.Item>Contact</Dropdown.Item>
        </Dropdown>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
