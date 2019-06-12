import styled from '@emotion/styled';
import tw from 'tailwind.macro';
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const Header = styled.header`
${tw`bg-red-900 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

const Main = styled.main`
${tw`bg-green-300 min-h-screen flex flex-col items-center justify-center text-xl text-white`};
`;

function App() {
  return (
    <div>
      <Header>
        This requires styled + the tw macro
      </Header>
      <Main>
        <p css={{
          color: 'red'
        }}>
          This only requires the pragma + jsx import
        </p>
        <p css={css`
          color: hotpink;
        `}>
          This requires the css import
        </p>
        <p css={tw`bg-red-300`}>
          This works as you'd expect because it was referenced via the tw macro
        </p>
        <p className="bg-red-300">
          And as you can see this one does not!
        </p>
      </Main>
    </div>
  );
}

export default App;
