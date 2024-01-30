import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import DarkModeToggle from "./DarkModeToggle";

const StyledHeaderMenu = styled.ul`
  display: flex;
  gap: 0.4rem;
`;
function HeaderMenu() {
  const navigate = useNavigate();
  return (
    <StyledHeaderMenu>
      <li>
        <ButtonIcon onClick={() => navigate("/account")}>
          <HiOutlineUsers />
        </ButtonIcon>
      </li>
      <li>
        <DarkModeToggle />
      </li>
      <li>{/* <Logout /> */}</li>
    </StyledHeaderMenu>
  );
}

export default HeaderMenu;
