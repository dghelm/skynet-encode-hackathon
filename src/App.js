import Challenges from './sections/Challenges';
import Part0 from './sections/Part0';
import Part1 from './sections/Part1';
import Part2 from './sections/Part2';
import Part3 from './sections/Part3';
import Part4 from './sections/Part4';
import DragUploader from './components/DragUploader';
import PortalAlternatives from './components/PortalAlternatives';
import FilePreview from './components/FilePreview';
import SkyDB from './components/SkyDB';
import Base32Subdomain from './components/Base32Subdomain';
import Registry from './components/Registry';
import HNSLookup from './components/HNSLookup';
// import FilePreviewer from './components/FilePreviewer';
import {
  Header,
  Embed,
  Container,
  Segment,
  Radio,
  Transition,
  Divider,
} from 'semantic-ui-react';

import { useState } from 'react';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const style = {
  h1: {
    marginTop: '1.5em',
  },
  h2: {
    // margin: '4em 0em 2em',
  },
  h3: {
    // marginTop: '2em',
    // padding: '2em 0em',
    textDecoration: 'underline',
    marginTop: '2em',
    marginBottom: '1.5em',
  },
  last: {
    marginBottom: '300px',
  },
};

function App() {
  const [hideVideo, setHideVideo] = useState(false);
  const [hideWalkthrough, setHideWalkthrough] = useState(false);
  const [hideInteractive, setHideInteractive] = useState(false);

  return (
    <div className="App">
      <Header
        as="h1"
        content="Skynet x ENCODE Hackathon"
        style={style.h1}
        textAlign="center"
      />
      <Header
        as="h2"
        content="Introduction Workshop | March 10th, 2021"
        style={style.h2}
        textAlign="center"
      />
      <Transition animation="scale" visible={!hideVideo}>
        <Container text>
          <Embed
            placeholder="https://siasky.net/MAAmPGtMDwf8LVPsD28guYegd04ahPviQyU2rAdwdFxQ2Q"
            hd={true}
            iframe={{
              src:
                'https://www.youtube-nocookie.com/embed/rcAxLswES9g?start=2205',
              allowfullscreen: true,
            }}
            source="youtube"
            brandedUI={false}
          />
          {/* <Embed
          id="rcAxLswES9g"
          placeholder="https://siasky.net/MAAmPGtMDwf8LVPsD28guYegd04ahPviQyU2rAdwdFxQ2Q"
          source="youtube"
          brandedUI={false}
        /> */}
        </Container>
      </Transition>
      <Container>
        <a
          href="https://skynetlabs.typeform.com/to/aVBLrQh3"
          target="_blank"
          rel="noreferrer"
        >
          <Header
            as="h3"
            content="Workshop Feedback Survey"
            style={style.h3}
            textAlign="center"
          />
        </a>
        <a
          href="https://github.com/NebulousLabs/skynet-workshop"
          target="_blank"
          rel="noreferrer"
        >
          <Header
            as="h3"
            content="Workshop Github Repo"
            style={style.h3}
            textAlign="center"
          />
        </a>
      </Container>
      <Container>
        <Segment.Group horizontal>
          <Segment textAlign="center">
            <Radio
              toggle
              label="Hide Workshop Video &amp; Challenges"
              checked={hideVideo}
              onClick={() => setHideVideo(!hideVideo)}
            />
          </Segment>
          <Segment textAlign="center">
            <Radio
              toggle
              label="Hide Interactive Components"
              checked={hideInteractive}
              onClick={() => setHideInteractive(!hideInteractive)}
            />
          </Segment>
          <Segment textAlign="center">
            <Radio
              toggle
              label="Hide Workshop Walkthrough"
              checked={hideWalkthrough}
              onClick={() => setHideWalkthrough(!hideWalkthrough)}
            />
          </Segment>
        </Segment.Group>
      </Container>

      <Transition visible={!hideVideo}>
        <Container>
          <Challenges />
        </Container>
      </Transition>
      <Transition visible={!hideWalkthrough}>
        <Container>
          <Part0 codeColor={monokaiSublime} />
        </Container>
      </Transition>
      <Transition visible={!hideWalkthrough}>
        <Container>
          <Part1 codeColor={monokaiSublime} />
        </Container>
      </Transition>
      <br />
      <br />

      <Transition visible={!hideInteractive}>
        <Container text>
          <Segment.Group>
            <Segment>
              <DragUploader />
            </Segment>
            <Segment>
              <PortalAlternatives />
            </Segment>
          </Segment.Group>
        </Container>
      </Transition>

      <Transition visible={!hideWalkthrough}>
        <Container>
          <Part2 codeColor={monokaiSublime} />
        </Container>
      </Transition>
      <br />
      <br />

      <Transition visible={!hideInteractive}>
        <Container text>
          <Segment.Group>
            <Segment>
              <FilePreview />
            </Segment>
            <Segment>
              <Base32Subdomain />
            </Segment>
          </Segment.Group>
        </Container>
      </Transition>

      <Transition visible={!hideWalkthrough}>
        <Container>
          <Part3 codeColor={monokaiSublime} />
        </Container>
      </Transition>
      <br />
      <br />

      <Transition visible={!hideInteractive}>
        <Container text>
          <Segment.Group>
            <Segment>
              <SkyDB />
            </Segment>
          </Segment.Group>
        </Container>
      </Transition>

      <Transition visible={!hideWalkthrough}>
        <Container>
          <Part4 codeColor={monokaiSublime} />
        </Container>
      </Transition>

      <br />
      <br />

      <Transition visible={!hideInteractive}>
        <Container text>
          <Segment.Group>
            <Segment>
              <HNSLookup />
            </Segment>
            <Segment>
              <Registry />
            </Segment>
          </Segment.Group>
        </Container>
      </Transition>
      <br />
      <br />

      <Header as="h2" style={style.h2} textAlign="center">
        <a href="https://discord.gg/sia" target="_blank">
          Join Our Discord
        </a>
      </Header>
      <Header as="h2" style={style.h2} textAlign="center">
        <a href="https://support.siasky.net/the-technology/developing-on-skynet">
          Skynet Guide - Developer Resources
        </a>
      </Header>
      <Header as="h2" style={style.h2} textAlign="center">
        <a href="https://siasky.net/docs/" target="_blank">
          SDK Documentation
        </a>
      </Header>
      <br />
      <Divider style={style.last} />
      <br />
      <br />
    </div>
  );
}

export default App;
