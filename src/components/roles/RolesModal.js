import { Modal, Button,Form,Input } from 'antd';
import React from 'react';

class RolesModal extends React.Component {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.onClick(values);
        this.setState({
          visible: false,
        });
      }
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    const {getFieldDecorator}=this.props.form;
    const button = this.props.modaltype === 'creat' ? <Button type="primary">{this.props.text}</Button> : <a>{this.props.text}</a>;

    const {name,display_name,description}=this.props.record;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 7 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 },
      },
    };
    return (
      <div style={{display:"inline-block"}}>
        <div onClick={this.showModal}>
          {button}
        </div>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Form>
            <Form.Item
              {...formItemLayout}
              label='Name'>
              {
                getFieldDecorator('name', {
                  initialValue:name,
                  rules: [{
                    required:true,
                    message:'不为空'
                  }]
                })(
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label='Display_Name'
            >
              {
                getFieldDecorator('display_name', {
                  initialValue:display_name,
                  rules: [{
                    required:true,
                    message:'不为空'
                  }],
                })(
                  <Input />
                )
              }
            </Form.Item>
            <Form.Item
              {...formItemLayout}
              label='Description'>
              {
                getFieldDecorator('description',{
                  initialValue:description
                })(
                  <Input />
                )
              }
            </Form.Item>
          </Form>
        </Modal>
      </div>
    );
  }
}

export default Form.create()(RolesModal);
