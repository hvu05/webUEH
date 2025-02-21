import { Steps } from 'antd';

const { Step } = Steps;

const LotrinhSteps = () => {
    return (
        <div style={{ width: "80%", margin: "0 auto" }}>
            <Steps progressDot current={2}>
                <Step title="Tháng 1: Khỏi động và định hướng cá nhân" />
                <Step title="Tháng 2 - 4: Khám phá ngành nghề và phát triển kỹ năng nền tảng" />
                <Step title="Tháng 5 - 6: Ứng dụng và mở rộng networking" />
            </Steps>
        </div>
    );
};

export default LotrinhSteps;
