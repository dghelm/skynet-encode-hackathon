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

const step3_1 = `// choose a data domain for saving files in MySky
const dataDomain = 'localhost';`;

const step3_2 = `// define async setup function
async function initMySky() {
  try {
    // load invisible iframe and define app's data domain
    // needed for permissions write
    const mySky = await client.loadMySky(dataDomain);

    // load necessary DACs and permissions
    // await mySky.loadDacs(contentRecord);

    // check if user is already logged in with permissions
    const loggedIn = await mySky.checkLogin();

    // set react state for login status and
    // to access mySky in rest of app
    setMySky(mySky);
    setLoggedIn(loggedIn);
    if (loggedIn) {
      setUserID(await mySky.userID());
    }
  } catch (e) {
    console.error(e);
  }
}

// call async setup function
initMySky();`;

const step3_3 = `// Try login again, opening pop-up. Returns true if successful
const status = await mySky.requestLoginAccess();

// set react state
setLoggedIn(status);

if (status) {
  setUserID(await mySky.userID());
}`;
const step3_4 = `// call logout to globally logout of mysky
await mySky.logout();

//set react state
setLoggedIn(false);
setUserID('');`;
const step3_5 = `console.log('Saving user data to MySky file...');`;
const step3_6 = `// create JSON data to write to MySky
const jsonData = {
  name,
  skylinkUrl,
  dirSkylinkUrl,
  color: userColor,
};

// call helper function for MySky Write
await handleMySkyWrite(jsonData);`;
const step3_7 = `// Use setJSON to save the user's information to MySky file
try {
  console.log('userID', userID);
  console.log('filePath', filePath);
  await mySky.setJSON(filePath, jsonData);
} catch (error) {
  console.log(\`error with setJSON: \${error.message}\`);
}`;
const step3_8 = `const webPage = generateWebPage(name, skylinkUrl, userID, filePath);`;

const Part3 = ({ codeColor }) => {
  return (
    <>
      <Header
        as="h2"
        content="Part 3: Make it Dynamic with MySky"
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
            <Divider vertical>3.1</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_1}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                We need to tell MySky what the Data Domain of our application
                will be. If our URL doesn't match it, we'll be prompted for
                permissions.
                <br />
                <br />
                Permissions requests is currently unavailable, so for the time
                being it's best to match your Data Domain to your application
                URL.
                <br />
                <br />
                <em>
                  If you want to bypass permissions, see "Dev Mode" below.
                </em>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.2</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_2}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                Here, we first initialize MySky, which creates an iframe in our
                app to host the protected application.
                <br />
                <br />
                Once loaded, we see if the user is already logged in to MySky
                and has all the permissions they need for our app.
                <br />
                <br />
                <em>Permissions getting you down?</em> Dev Mode uses an
                alternative MySky instance that does no permission-checking. Try
                <pre>{'client.loadMySky(dataDomain, {dev: true})});'}</pre>
                Unless you're at localhost or an HNS name, you'll need it.
                <br />
                <br />
                <br />
                <em>
                  Need more info on what's happening in MySky and DACs?
                </em>{' '}
                Try
                <pre>{'client.loadMySky(dataDomain, {debug: true})});'}</pre>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.3</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_3}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                This code will be run when the "Login with MySky" button is
                pressed.
                <br />
                <br />
                This will lauch a window to prompt the user to use a Seed
                Provider and approve any permissions.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.4</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_4}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                We need to be able to logout too! Let's logout and then clear
                any state in our application that stores information about the
                user.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.5</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_5}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                We'll uncomment this line so we can keep track of what's
                happening in our code.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.6</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_6}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                Here, we continuing after our web directory is uploaded to
                Skynet. We'll build the JSON object we want to save to Skynet,
                then pass it to a helper function for writing this to MySky.
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.7</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_7}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                We do some logs before calling having MySky save the JSON data
                to the filepath. This is a "Discoverable" file, which means if
                someone knows the path and our public, Skynet-wide UserID, they
                will be able to locate this skyfile.
                <br />
                <br />
                <em>
                  We will be adding "Hidden" files with unique keys and
                  encryption to MySky soon.
                </em>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Divider vertical>3.8</Divider>
            <Grid.Column>
              <Segment>
                <SyntaxHighlighter language="javascript" style={codeColor}>
                  {step3_8}
                </SyntaxHighlighter>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                We need to modify the arguments passed to our website generating
                helper function.
                <br />
                <br />
                For the web page to lookup our saved color, it needs our userID
                and the filePath of where we're saving that data.
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
};

export default Part3;
