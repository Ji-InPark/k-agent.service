import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import QuestionMark from '@assets/icon/QuestionMark';
import logo from '@assets/icon/title.png';

const Container = styled.div`
  background: #777d71;
  max-height: 4rem;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 1rem;
`;

const Hover = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const Logo = styled.img`
  height: 2rem;
`;

function Header() {
  return (
    <Container>
      <Content>
        <Hover>
          <Link to="/">
            <Logo src={logo} />
          </Link>
        </Hover>
        <Hover>
          <Link to="/information">
            <QuestionMark width="2rem" height="2rem" />
          </Link>
        </Hover>
      </Content>
    </Container>
  );
}

export default Header;
