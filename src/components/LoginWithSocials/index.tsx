import Button from '@components/Button';
import { FaceBookSquareIcon, GoogleIcon, Row } from '@theme/globalComponents';
import React from 'react';

const LoginWithSocials: React.FC = () => {
    return (
        <Row style={{ marginBottom: 10 }}>
            <Button bgColor={"#FFF"} style={{ flex: 1 }} icon={<FaceBookSquareIcon />} />
            <Button bgColor={"#FFF"} style={{ flex: 1 }} icon={<GoogleIcon />} />
        </Row>
    )
}

export default LoginWithSocials;