import { Sidenav, Nav, Dropdown } from "rsuite";
import Dashboard from "@rsuite/icons/Dashboard";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div style={{ width: 220 }}>
      <Sidenav defaultOpenKeys={["3", "4"]} activeKey="1" appearance="inverse">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Dashboard />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2">
              <Link href="/customers">
                <a className="no-underline hover:no-underline hover:text-current">
                  Customers
                </a>
              </Link>
            </Nav.Item>
            {/* <Dropdown eventKey="2" title="Product">
              <Dropdown.Item eventKey="2-1">
                <Link href="/add/product">
                  <a className="no-underline hover:no-underline hover:text-current">
                    Add Product
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="3" title="Categories">
              <Dropdown.Item eventKey="3-1">
                <Link href="/add/category">
                  <a className="no-underline hover:no-underline hover:text-current">
                    Add Category
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-2">
                <Link href="/add/sub-category">
                  <a className="no-underline hover:no-underline hover:text-current">
                    Add Sub-Category
                  </a>
                </Link>
              </Dropdown.Item>
              <Dropdown.Item eventKey="3-3">
                <Link href="/add/product">
                  <a className="no-underline hover:no-underline hover:text-current">
                    Add Product
                  </a>
                </Link>
              </Dropdown.Item>
            </Dropdown>
            <Dropdown eventKey="4" title="Settings">
              <Dropdown.Item eventKey="4-1">Applications</Dropdown.Item>
              <Dropdown.Item eventKey="4-2">Channels</Dropdown.Item>
              <Dropdown.Item eventKey="4-3">Versions</Dropdown.Item>
              <Dropdown.Menu eventKey="4-5" title="Custom Action">
                <Dropdown.Item eventKey="4-5-1">Action Name</Dropdown.Item>
                <Dropdown.Item eventKey="4-5-2">Action Params</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown> */}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

export default Sidebar;
