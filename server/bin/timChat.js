#! /usr/bin/env node

import getApp from '..';

const port = process.env.PORT || 5000;
const address = '0.0.0.0';
const app = getApp({ port });

app.listen(port, address, () => {
  console.log(`Server has been started on ${port}`);
});
