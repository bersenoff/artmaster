import React, { PureComponent } from 'react';
import { Button, Icon } from 'antd';
import './index.css';

export default class Call extends PureComponent {

  constructor() {
    super();
  }

  render() {
    return (
      <div className='call-btn'>
        <Button type='primary' size='large'><Icon type="phone" theme="filled" /></Button>
      </div>
    );
  }

}