import './Dashboard.scss'
import './ButtonDK.scss'
import { Col, Row, Button } from 'antd';
const scrollToForm = () => {
    window.scrollBy({ top: 2500, behavior: 'smooth' }); 
};

function Dashboard() {
    return (
        <>
            <div className='bodyDashboard'>
            <Row>
                <Col span={12} className='dashLeft'>
                    <div className='dashLeft--tongquan'>DỰ ÁN UEH IGNITE                     </div>
                    <div className='dashLeft--chitiet'>
                        Nơi Mentee được kết nối với Mentor phù hợp dựa theo ngành nghề, sở thích hoặc kỹ năng mà bản thân cần phát triển
                    </div>

                    <div className='inner'>
                        <span className='inner--block'>
                            <div>Lộ trình</div>
                            <div>3 - 6 tháng</div>
                        </span>
                        <span className='inner--block'>
                            <div>Hình thức</div>
                            <div>Online + Offline</div>
                        </span>
                        <span className='inner--block'>
                            <div>Học phí</div>
                            <div>Liên hệ</div>
                        </span>
                    </div>

                    <Button className='signin' variant="solid" onClick={scrollToForm} >
                        ĐĂNG KÍ NGAY
                    </Button>
                </Col>
                <Col span={12} className='dashRight'>
                    <img src='https://www.ueh.edu.vn/images/upload/editer/dien%20mao%20UEH%20don%20xuan%202022_1_N.jpg' alt='anh' />
                </Col>
            </Row>
            </div>
        </>
    );
}

export default Dashboard;
