import { useState } from "react";
import { Burger, Container, Group, Image } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";
import classes from "./HeaderSimple.module.css";

const links = [
  { link: "/", label: "Home" },
  { link: "/ContactUs", label: "ContactUs" },
];

function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.logoWrapper}>
          <Image src={Logo} alt="HabitForge Logo" height={150} fit="contain" />
        </div>
        <Group gap={20} visibleFrom="xs" className={classes.navLinks}>
          {items}
        </Group>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}

export default Header;
