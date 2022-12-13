import React, { useState } from "react";
import styled from "@emotion/styled";
import { Tabs, Tab } from "@mui/material";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const [route, setRoute] = useState(router.route);

  const handleChange = (e: React.SyntheticEvent, path: string) => {
    router.push(path);
    setRoute(path);
  };

  return (
    <S.header>
      <h1>
        <img className="logo" src="/images/logo.png" alt="logo" />
      </h1>
      <nav>
        <Tabs
          value={route}
          onChange={handleChange}
          aria-label="Navigation bar"
        >
          <Tab value="/projects" label="Projects" />
          <Tab value="/community" label="Community" />
          <Tab value="/about" label="About" />
        </Tabs>
      </nav>
    </S.header>
  );
};

export default Header;

const S = {
  header: styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 64px;
    border-bottom: 1px solid;
    nav {
      * {
        margin: auto 0;
        bottom: 0;
      }
      height: inherit;
    }
    .logo {
      height: 64px;
      object-fit: contain;
    }
  `,
};
