import { useState } from 'react';
import {
  Paper,
  Typography,
  Button,
} from "@mui/material";
import SyntaxHighlighter from 'react-syntax-highlighter';
import axios from 'axios';
import { 
  useBasisTheory,
  CardElement
} from '@basis-theory/basis-theory-react';

export const CardForm = () => {
  const { bt } = useBasisTheory();
  const [token, setToken] = useState('');
  const [proxyResponse, setProxyResponse] = useState('');

  const submit = async () => {
    const response = await bt.tokenize({
      type: 'card',
      data: bt.getElement('card'),
    });

    setToken(response);
  };

  const proxy = async () => {
    const { data } = await axios.post('/api/proxy', { cardTokenId: token.id });

    setProxyResponse(data);
  };

  return (
    <>
      <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
        <form onSubmit={submit} className="form">
          <div className="field-columns">
            <div className="field-wrapper">
              <span className="field-title">
                Card Number
              </span>
              <div className="row-input">
                <CardElement id="card" />
              </div>
            </div>
          </div>

          <Button size="large" variant="contained" onClick={submit}>Submit</Button>
        </form>
      </Paper>

      {token &&
        <>
          <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6">
              Card Token
            </Typography>

            <SyntaxHighlighter language="json">
              {JSON.stringify(token, undefined, 2)}
            </SyntaxHighlighter>
          </Paper>

          <Paper variant="outlined" sx={{ my: { xs: 2, md: 4 }, p: { xs: 2, md: 3 } }}>
            <Button size="large" variant="contained" onClick={proxy}>Proxy to Card Processor</Button>

            {proxyResponse &&
              <SyntaxHighlighter language="json">
                {JSON.stringify(proxyResponse, undefined, 2)}
              </SyntaxHighlighter>
            }
          </Paper>
        </>
      }
    </>
  );
}