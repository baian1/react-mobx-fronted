import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class RoleModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  showModalHandler = (e) => {
        if (e) e.stopPropagation();
        this.setState({
            visible: true,
        });
    };

    hideModalHandler = () => {
        this.setState({
            visible: false,
        });
    };

    okHandler = () => {
        const { onOk } = this.props;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                onOk(values);
                this.hideModalHandler();
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { name, display_name, description } = this.props.record;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 },
        };
        const button = this.props.modaltype === 'creat' ? <Button type="primary">{this.props.action}</Button> :
            <a>{this.props.action}</a>;

        return (
            <div style={{ display: 'inline-block' }}>
        <span onClick={this.showModalHandler}>
          {button}
        </span>
                <Modal
                    title={this.props.title}
                    visible={this.state.visible}
                    onOk={this.okHandler}
                    onCancel={this.hideModalHandler}
                >
                    <Form horizontal onSubmit={this.okHandler}>
                        <FormItem
                            {...formItemLayout}
                            label="Name"
                        >
                            {
                                getFieldDecorator('name', {
                                    initialValue: name,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Display_Name"
                        >
                            {
                                getFieldDecorator('display_name', {
                                    initialValue: display_name,
                                })(<Input />)
                            }
                        </FormItem>
                        <FormItem
                            {...formItemLayout}
                            label="Description"
                        >
                            {
                                getFieldDecorator('description', {
                                    initialValue: description,
                                })(<Input />)
                            }
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Form.create()(RoleModal);
