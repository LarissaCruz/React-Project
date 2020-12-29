import * as S from '../Main/styles';

const Main = ({
  title = 'React Avançado',
  description = 'Typscript NextJS E Styled Components'
}) => (
  <>
    <S.Wrapper>
      <S.Logo
        src="https://d33wubrfki0l68.cloudfront.net/6b19a409f82c8c0c94fff2c927f4dc5bb3291ccd/b93d3/img/logo.svg"
        alt="React Avançado"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description} </S.Description>
      <S.Ilustration
        src="https://d33wubrfki0l68.cloudfront.net/cf9dfe86983925690340feb07037ee260f872e34/74dff/img/hero-illustration.svg"
        alt="Ilustração de um desenvolvedor em frente a um computador com várias linhas de código."
      />
    </S.Wrapper>
  </>
);

export default Main;
