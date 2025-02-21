import './Dashboard.scss'
import './ButtonDK.scss'
import { Col, Row, Button } from 'antd';

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

                    <Button className='signin' variant="solid">
                        LIÊN HỆ TƯ VẤN
                    </Button>
                </Col>
                <Col span={12} className='dashRight'>
                    <img src='https://images2.thanhnien.vn/528068263637045248/2023/10/29/khuong-ngoc-7-1698603790000615002651.jpeg' alt='anh' />
                </Col>
            </Row>
            </div>
        </>
    );
}

export default Dashboard;
