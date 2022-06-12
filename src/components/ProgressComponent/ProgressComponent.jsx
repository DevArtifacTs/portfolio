import React from 'react';
import { Progress } from 'antd';
import { red, green } from '@ant-design/colors';

const ProgressComponent = () => (
  <>
    <Progress percent={100} steps={5} size="small" strokeColor={green[6]} />
  </>
);

export default ProgressComponent;