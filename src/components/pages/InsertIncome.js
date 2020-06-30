import React, { useState } from 'react';
import { Row, Col, Form, Input, Button, Select } from 'antd';

const { Option } = Select;

export default () => {
    const [form] = Form.useForm();
    const formRef = React.createRef();

    const [formAudit, setFormAudit] = useState({
        recordType: 'revenue',
        amount: 10,
        detail: 'ค่าอาหาร'
    });

    let onReset = () => {
        formRef.current.resetFields();
    };

    let handleSubmit = () => {
        console.log(formAudit)
    }

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
        <div className="container">
            <Row>
                <Col span={12}>
                    <Form
                        {...layout}
                        form={form}
                        ref={formRef}
                        name="control-ref"
                        initialValues={{ layout: 'inline' }}
                        onFinish={handleSubmit}
                    >
                        <Form.Item label="ประเภทการบันทึก" name="ประเภทการบันทึก" rules={[{ required: true }]}>
                            <Select
                                placeholder="Select a option and change input text above"
                                allowClear
                                onChange={value => {
                                    setFormAudit({ ...formAudit, recordType: value })
                                }
                                }
                            >
                                <Option value="male">male</Option>
                                <Option value="female">female</Option>
                                <Option value="other">other</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item label="จำนวนเงิน" name="จำนวนเงิน" rules={[{ required: true }]}>
                            <Input placeholder="input placeholder" onChange={e => {
                                setFormAudit({ ...formAudit, amount: e.target.value })
                            }
                            } />
                        </Form.Item>
                        <Form.Item label="ชื่อรายการ" name="ชื่อรายการ" rules={[{ required: true }]}>
                            <Input placeholder="input placeholder" onChange={e => {
                                setFormAudit({ ...formAudit, detail: e.target.value })
                            }
                            } />
                        </Form.Item>

                        <Form.Item  {...tailLayout}>
                            <Button type="primary" htmlType="submit">Submit</Button>
                            <Button htmlType="button" onClick={onReset}>
                                Reset
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div >
    )
} 