import 'react-notion/src/styles.css';
import 'prismjs/themes/prism-tomorrow.css';
import { NotionRenderer } from 'react-notion';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Employment() {
  const [response, setResponse] = useState({});

  useEffect(() => {
    const NOTION_PAGE_ID = '3e1bad17f177450396de40a04a86ec36';
    axios.get(`https://notion-api.splitbee.io/v1/page/${NOTION_PAGE_ID}`).then(({ data }) => {
      setResponse(data);
    });
  }, []);

  return Object.keys(response).length && <NotionRenderer blockMap={response} fullPage={true} />;
}

export default Employment;
