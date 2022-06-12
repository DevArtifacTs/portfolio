import React from 'react';
import { Progress } from 'antd';
import { red, green } from '@ant-design/colors';

const ProgressComponent = () => (
  <>
    <Progress percent={60} steps={5} strokeColor={[green[6], green[6], red[5]]} />
  </>
);

export default ProgressComponent;