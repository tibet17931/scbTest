import React from "react";
import { Result } from 'antd'
export default () => {

    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
            // extra={<Button type="primary">Back Home</Button>}
            />
        </div>
    );
}