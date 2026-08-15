import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
  // const data = useContext(AppContext);
  //const data = useGlobalContext();
  //console.log(data);

  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button type="button" className="sidebar-toggle" onClick={openSidebar}>
        <FaBars />
      </button>
      <button type="button" className="btn" onClick={openModal}>
        show Modal
      </button>
    </main>
  );
};

export default Home;
