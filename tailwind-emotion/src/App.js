import React from 'react';
import styled from '@emotion/styled';
import tw from 'tailwind.macro';

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
        THE HEADER
      </Header>
      <Main>
        Yo
      </Main>
    </div>
  );
}

export default App;
