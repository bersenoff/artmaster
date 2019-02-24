import React, { PureComponent } from 'react';
import { Button, Form, Input, Tabs, Icon, Slider, message } from 'antd';
import axios from 'axios';
import './index.css';

const Tab = Tabs.TabPane;

export default class Order extends PureComponent {

  constructor() {
    super();

    this.state = {
      data: { 
        price: {
          1: 1650,
          2: 1850,
          3: 2250,
          4: 2350,
          5: 2750,
          6: 2850,
          7: 3150,
          8: 3650,
          9: 4150,
          10: 4750
        }
      }, // данные
      activeView: 1, // активный вид
      activeViewName: 'Digital Art',
      activeTab: '1', // активный Tab
      activeSize: 1, // выбранный размер
      height: 40, // высоты демонстрационного портрета
      width: 30, // ширина демонстрационного портрета
      name: '',
      phone: '',
      sending: false
    }
  }

  resize = (width, height, activeSize) => {
    this.setState({
      activeSize,
      height,
      width
    });
  }

  handleChangeView = (view, name) => {
    this.setState({
      activeView: view,
      activeViewName: name
    });
  }

  handleChangeTab = (e) => {
    if (e == 1) {
      this.setState({
        activeTab: e,
        activeSize: 1,
        height: 40,
        width: 30
      });
    } else {
      this.setState({
        activeTab: e
      });
    }
  }

  handleInputChange = (e, name) => {
    this.setState({
      [name]: e.target.value
    });
  }

  send = () => {
    const {
      activeViewName,
      width,
      height,
      name,
      phone
    } = this.state;

    if (!phone.length) {
      message.error('Введите номер телефона');
      return;
    }

    if (!name.length) {
      message.error('Введите имя');
      return;
    }

    this.setState({
      sending: true
    });

    axios({
      method: 'post',
      url: 'http://artmaster38.ru/send',
      data: {
        type: activeViewName,
        width,
        height,
        name,
        phone
      }
    }).then((res) => {
      if (res.data.result) {
        message.success(res.data.data);
        this.setState({
          name: '',
          phone: '',
          sending: false
        }); 
      } else {
        message.error(res.data.error_text);
        this.setState({
          sending: false
        });
      }
    });
  }

  render() {
    const {
        data,
        activeView,
        activeTab,
        activeSize,
        height,
        width,
        name,
        phone,
        sending
    } = this.state;

    return (
      <div className='wrapper'>
        <div className='step-section' id="order-form">
          <div className='step-title'>1. Выберите вид стилизованного портрета</div>
          <div className='step-body'>
            <div className='views-section'>
              <div className='view-block'>
                <div className={(activeView === 1 ? 'view-img view-img-active' : 'view-img')} onClick={() => this.handleChangeView(1, 'Digital Art')}>
                  <img src='/images/digital_art.jpg' alt='' />
                </div>
                <div className='view-title'>{(activeView === 1) && <Icon type="check-circle" theme="filled" />} Digital Art</div>
              </div>
              <div className='view-block'>
                <div className={(activeView === 2 ? 'view-img view-img-active' : 'view-img')} onClick={() => this.handleChangeView(2, 'Pop Art')}>
                  <img src='/images/pop_art.jpg' alt='' />
                </div>
                <div className='view-title'>{(activeView === 2) && <Icon type="check-circle" theme="filled" />} Pop Art</div>
              </div>
              <div className='view-block'>
                <div className={(activeView === 3 ? 'view-img view-img-active' : 'view-img')} onClick={() => this.handleChangeView(3, 'Dream Art')}>
                  <img src='/images/dream_art.jpg' alt='' />
                </div>
                <div className='view-title'>{(activeView === 3) && <Icon type="check-circle" theme="filled" />} Dream Art</div>
              </div>
              <div className='view-block'>
                <div className={(activeView === 4 ? 'view-img view-img-active' : 'view-img')} onClick={() => this.handleChangeView(4, 'Ретушь')}>
                  <img src='/images/retouch.jpg' alt='' />
                </div>
                <div className='view-title'>{(activeView === 4) && <Icon type="check-circle" theme="filled" />} Ретушь</div>
              </div>
            </div>
          </div>
        </div>
        <div className='step-section'>
          <div className='step-title'>2. Укажите размеры портрета</div>
          <div className='step-body'>
            <Tabs defaultActiveKey={activeTab} onChange={this.handleChangeTab}>
              <Tab tab={<span><Icon type="picture" /> Стандартные размеры</span>} key='1'>
                <div className='sizes-left-column'>
                  <div className='size-demonstration'>
                    <img src='/images/man.png' alt='' style={{float: 'left'}} />
                    <div className='demonstration-portret' style={{height: height * 2 + 'px', width: width * 2 + 'px'}}>
                      <img src='/images/logo.jpg' alt='' />
                    </div>
                    <div className='cost'>Стоимость: {data.price[activeSize]} рублей.</div>
                  </div> 
                </div>
                <div className='sizes-right-column'>
                  <div className='sizes-container'>
                    <div className={(activeSize === 1 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(30, 40, 1)}>30x40</div>
                    <div className={(activeSize === 2 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(40, 40, 2)}>40x40</div>
                    <div className={(activeSize === 3 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(40, 60, 3)}>40x60</div>
                    <div className={(activeSize === 4 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(50, 50, 4)}>50x50</div>
                    <div className={(activeSize === 5 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(50, 70, 5)}>50x70</div>
                    <div className={(activeSize === 6 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(60, 60, 6)}>60x60</div>
                    <div className={(activeSize === 7 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(60, 80, 7)}>60x80</div>
                    <div className={(activeSize === 8 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(70, 90, 8)}>70x90</div>
                    <div className={(activeSize === 9 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(80, 100, 9)}>80x100</div>
                    <div className={(activeSize === 10 ? 'size-block size-block-active' : 'size-block')} onClick={() => this.resize(100, 100, 10)}>100x100</div>
                  </div>
                </div>
              </Tab>
              <Tab tab={<span><Icon type="setting" /> Свой размер</span>} key='2'>
                <div className='sizes-left-column'>
                  <div className='size-demonstration'>
                    <img src='/images/man.png' alt='' style={{float: 'left'}} />
                    <div className='demonstration-portret' style={{height: height * 2 + 'px', width: width * 2 + 'px'}}>
                      <img src='/images/logo.jpg' alt='' />
                    </div>
                    <div className='cost'>Стоимость рассчитывается индивидуально.</div>
                  </div> 
                </div>
                <div className='sizes-right-column'>
                  <span style={{fontWeight: 'bold'}}>Ширина ({width}см):</span>
                  <Slider
                    min={30}
                    max={100}
                    value={width}
                    onChange={(e) => this.resize(e, height, 1)}
                  />  
                  <span style={{fontWeight: 'bold'}}>Высота ({height}см):</span>
                  <Slider
                    min={30}
                    max={100}
                    value={height}
                    onChange={(e) => this.resize(width, e, 1)}
                  />  
                </div>
              </Tab>
            </Tabs>
          </div>
        </div>
        <div className='step-section'>
          <div className='step-title'>3. Оставьте контактные данные</div>
          <div className='step-body' style={{textAlign: 'center'}}>
            <Form>
              <Form.Item label='Номер телефона' className='feedback-field'>
                <Input onChange={(e) => this.handleInputChange(e, 'phone')} value={phone} />
              </Form.Item>
              <Form.Item label='Имя' className='feedback-field'>
                <Input onChange={(e) => this.handleInputChange(e, 'name')} value={name} />
              </Form.Item>
            </Form>
            <div style={{marginTop: '20px'}}>
              <Button disabled={sending} type='primary' onClick={this.send} size='large' style={{height: '50px'}}><Icon type="check-circle" theme="filled" /> {(sending) ? 'Отправка...' : 'Отправить заявку'}</Button>
            </div>
          </div>
        </div>
      </div>
    );  
  }

}