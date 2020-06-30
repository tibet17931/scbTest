import React from 'react';
import { Card } from 'antd';
import { Row, Col, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export default () => {
    const [form] = Form.useForm();
    const formRef = React.createRef();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16
        }
    };


    return (
        <>
            <div className="container">
                <Row>
                    <Col span={12}>
                        <Form
                            {...layout}
                            form={form}
                            ref={formRef}
                            name="control-ref"
                            initialValues={{ layout: 'inline' }}
                        >
                            <Form.Item label="ประเภทการบันทึก" name="ประเภทการบันทึก" rules={[{ required: true }]}>
                                <Select
                                    placeholder="Select a option and change input text above"
                                    allowClear
                                    onChange={value => {

                                    }
                                    }
                                >
                                    <Option value="male">male</Option>
                                    <Option value="female">female</Option>
                                    <Option value="other">other</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item  {...tailLayout}>
                                <Button type="primary" htmlType="submit">Submit</Button>
                                <Button htmlType="button" >
                                    Reset
                        </Button>
                            </Form.Item>
                        </Form>
                    </Col>
                </Row>
            </div >
            <div className="container">
                <Row>
                    <Col span={12}>
                        <Row gutter={16}>
                            <Col span={8}>
                                <Card title="รายรับ" >
                                    รายรับ
                            </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </>
    )
} 