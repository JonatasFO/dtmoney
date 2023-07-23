import logo from "../../assets/logo.svg";
import { Container, Content } from "./stles";

interface HeaderProps {
  onOpenNewTranslationModal: () => void;
}

export function Header({ onOpenNewTranslationModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="dt money" />
        <button onClick={onOpenNewTranslationModal}>Nova transação</button>
      </Content>
    </Container>
  );
}
