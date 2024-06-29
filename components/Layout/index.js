import { Bag, Buy, Category, Graph, Logo, ThreeUsers, TwoUsers } from "@/assets/svg";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Notification } from "@/assets/svg";
import { Avatar } from "@/assets/images";
import {
  LayoutContainer,
  LogoContainer,
  MainContainer,
  SidebarContainer,
  SidebarNavlink,
  SidebarNavlinkContainer,
  TopBarContainer,
} from "./Layout.style";

const NavMenu = [
  {
    name: "Dashboard",
    icon: Category,
    link: "/",
  },
  {
    name: "Products",
    icon: Bag,
    link: "#",
  },
  {
    name: "Purchase Orders",
    icon: Buy,
    link: "#",
  },
  {
    name: "Customers",
    icon: TwoUsers,
    link: "#",
  },
  {
    name: "Suppliers",
    icon: ThreeUsers,
    link: "#",
  },
  {
    name: "Metrics",
    icon: Graph,
    link: "#",
  },
];

const Layout = ({ pageTitle = "Dashboard", children }) => {
  const router = useRouter();

  return (
    <LayoutContainer>
      <SidebarContainer>
        <LogoContainer>
          <Link href="/">
            <Image src={Logo} alt="logo" quality={100} />
          </Link>
        </LogoContainer>

        <SidebarNavlinkContainer>
          {NavMenu.map((item) => (
            <SidebarNavlink key={item.name} $active={router.pathname === item.link}>
              <Link href={item.link}>
                <Image src={item.icon} alt={`${item.name} icon`} quality={100} />
                {item.name}
              </Link>
            </SidebarNavlink>
          ))}
        </SidebarNavlinkContainer>
      </SidebarContainer>

      <MainContainer>
        <TopBarContainer>
          <div>
            <h1>{pageTitle}</h1>

            <div className="user-section">
              <button className="user-section__notification">
                <Image src={Notification} alt="notification icon" quality={100} />
              </button>

              <button className="user-profile">
                <Image src={Avatar} alt="avatar" className="user-profile__avatar" width={40} height={40} />
                {/* <span>John Doe</span> */}
              </button>
            </div>
          </div>
        </TopBarContainer>
        {children}
      </MainContainer>
    </LayoutContainer>
  );
};

export default Layout;
