import logo from "../../assets/logo.svg";
import { Container, Content } from "./stles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button>Nova transação</button>
      </Content>
    </Container>
  );
}