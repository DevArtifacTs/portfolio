import { Button, Popover } from 'antd';
import React from 'react';
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const PopoverComponent = () => (
  <Popover content={content} title="Title">
    <Button type="primary">Hover me</Button>
  </Popover>
);

export default PopoverComponent;