import SyntaxHighlighter from 'react-syntax-highlighter';
import { Container, Grid, Header, Segment, Divider } from 'semantic-ui-react';

const style = {
  h1: {
    marginTop: '3em',
  },
  h2: {
    margin: '4em 0em 2em',
  },
  h3: {
    // marginTop: '2em',
    // padding: '2em 0em',
  },
  last: {
    marginBottom: '300px',
  },
};

const step4_1 = `yarn add @skynethq/content-record-library@beta`;
const step4_2 = `import { ContentRecordDAC } from 'content-record-library';`;
const step4_3 = `const contentRecord = new ContentRecordDAC();`;
const step4_4 = `// load necessary DACs and permissions
await mySky.loadDacs(contentRecord);`;
const step4_5 = `// Use getJSON to load the user's information from SkyDB
const { data } = await mySky.getJSON(filePath);

// To use this elsewhere in our React app, save the data to the state.
if (data) {
  setName(data.name);
  setFileSkylink(data.skylinkUrl);
  setWebPageSkylink(data.dirSkylinkUrl);
  setUserColor(data.color);
  console.log('User data loaded from SkyDB!');
} else {
  console.error('There was a problem with getJSON');
}`;
const step4_6 = `console.log('Saving user data to MySky');

const jsonData = {
  name,
  skylinkUrl: fileSkylink,
  dirSkylinkUrl: webPageSkylink,
  color: userColor,
};

try {
  // write data with MySky
  await mySky.setJSON(filePath, jsonData);

  // Tell contentRecord we updated the color
  await contentRecord.recordInteraction({
    skylink: webPageSkylink,
    metadata: { action: 'updatedColorOf' },
  });
} catch (error) {
  console.log(\`error with setJSON: \${error.message}\`);
}`;
const step4_7 = `try {
  await contentRecord.recordNewContent({
    skylink: jsonData.dirSkylinkUrl,
  });
} catch (error) {
  console.log(\`error with CR DAC: \${error.message}\`);
}`;

const Part4 = ({ codeColor }) => {
  return (
    <>
      <Header
        as="h2"
        content="Part 4: Content Record DAC"
        style={style.h2}
        textAlign="center"
      />

      <Container>
        <Grid verticalAlign="middle" relaxed columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header
                as="h3"
                content="Code"
                style={style.h3}
                textAlign="center"
              />
            </Grid.Column>
            <Grid.Column>
              <Header
                as="h3"
                content="Notes"
                style={style.h3}
                textAlign="center"
              />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.1</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="console" style={codeColor}>
                  {step4_1}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                To use a DAC, we first want to install its "DAC Library", which
                makes communicating with DACs work just like importing a
                Javascript module.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.2</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_2}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>Import the Content Record DAC.</Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.3</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_3}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                Create a new contentRecord object we can use when we load DACs.
                This has information about the permissions needed by the DAC
                along with allowing us to communicate with the DAC's API.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.4</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_4}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                Uncomment this line from step 3.2 to now have MySky load the
                Content Record DAC.
                <br />
                <br />
                It will learn what permissions it needs, create it's iframe and
                load the DAC application in it.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.5</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_5}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                This code is called in the <code>loadData</code> function when
                the "Load Data" button is pressed.
                <br />
                <br />
                We load our file by just passing MySky it's path, then setting
                the state across our application.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.6</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_6}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                This code handles "updating" the MySky file (without reuploading
                our other assets). After the update is complete, we have the
                Content Record DAC record that we interacted with this content.
                <br />
                <br />
                This data is discoverable, meaning others can scrape it if they
                know your UserID.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>4.7</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step4_7}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                Before, we uploaded an image, a new web page and wrote its
                information to a file on MySky.
                <br />
                <br />
                We want to tell the Content Record DAC when we've made new
                content that can now be included other apps.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Part4;
