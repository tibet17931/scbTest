import React from 'react';
import { Row, Col } from 'antd';
import { TableComponent } from '../table/TableComponent'

export default () => {

    const data = [{
        index: 1,
        type: 'รายรับ',
        amount: 200,
        detail: 'ค่าขนม'
    }, {
        index: 2,
        type: 'รายจ่าย',
        amount: 1200,
        detail: 'ค่าเดินทาง'
    }, {
        index: 3,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่าขนม'
    }, {
        index: 4,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่านม'
    }, {
        index: 5,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่าขนม'
    }, {
        index: 6,
        type: 'รายรับ',
        amount: 200,
        detail: 'ค่าขนม'
    }, {
        index: 7,
        type: 'รายจ่าย',
        amount: 1200,
        detail: 'ค่าเดินทาง'
    }, {
        index: 8,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่าขนม'
    }, {
        index: 9,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่านม'
    }, {
        index: 10,
        type: 'รายจ่าย',
        amount: 200,
        detail: 'ค่าขนม'
    }]

    const columns = [
        {
            title: '#',
            dataIndex: 'index',
            sorter: (a, b) => a.index - b.index,
            key: 'index',
        },
        {
            title: 'ประเภท',
            dataIndex: 'type',
            sorter: (a, b) => a.type.length - b.type.length,
            key: 'type',
        }, {
            title: 'รายละเอียด',
            dataIndex: 'detail',
            key: 'detail',
        },
        {
            title: 'จำนวนเงิน',
            dataIndex: 'amount',
            key: 'amount',
        }
    ];
    return (
        <div className="container">
            <Row>
                <Col span={12}>
                    <Row gutter={16}>
                        <TableComponent
                            rowKey={'index'}
                            data={data}
                            columns={columns}
                            style_pagination={false}
                            pageSizeOptions={['5', '15', '30']}
                            defaultPageSize={5}
                            showSizeChanger={true}
                            scroll={{ x: 800 }}
                        />
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
