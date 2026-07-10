import { Link, useLocation } from "react-router";
import {
  Navbar as BarrelrollaNavbar,
  NavbarBrand,
  NavbarLink,
  NavbarToggle,
} from "@barrelrolla/react-components-library";
import { navLinks } from "../../data/navLinks";
import { motion, Transition } from "motion/react";
import { MotionCollapse } from "../motion/motion";
import { navContent } from "../../data/content";

export default function Navbar() {
  const path = useLocation().pathname;
  const transition: Transition = { duration: 0.2 };
  return (
    <BarrelrollaNavbar collapseAt="md">
      <motion.div
        initial={{ opacity: 0, translateX: -100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={transition}
        className="md:w-[130px]"
      >
        <NavbarBrand as={Link} className="w-min font-medium" to={"/"}>
          {navContent.brandName}
        </NavbarBrand>
      </motion.div>
      <MotionCollapse
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={transition}
        className="md:space-x-6 capitalize"
      >
        {navLinks.map((link) => (
          <NavbarLink
            key={link.path}
            as={Link}
            to={`/${link.path}`}
            data-selected={path.includes(`/${link.path}`)}
          >
            {link.path}
          </NavbarLink>
        ))}
      </MotionCollapse>
      <motion.div
        initial={{ opacity: 0, translateX: 100 }}
        animate={{ opacity: 1, translateX: 0 }}
        transition={transition}
        className="flex flex-wrap items-center justify-end gap-4 md:w-[130px]"
      >
        <NavbarToggle />
      </motion.div>
    </BarrelrollaNavbar>
  );
}
