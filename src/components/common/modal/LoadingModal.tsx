import Colors from '../../../assets/colors';
import Loading from '../../../assets/icon/Loading';
import styled from '@emotion/styled';

const Container = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${Colors.LIGHTGRAY};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  position: absolute;
  width: 150px;
  height: 150px;
  padding: 40px;
  text-align: center;
  background: transparent;
  border-radius: 10px;
  animation: spin 1s ease infinite;
`;

function LoadingModal() {
  return (
    <Container>
      <Circle>
        <Loading />
      </Circle>
    </Container>
  );
}

export default LoadingModal;
