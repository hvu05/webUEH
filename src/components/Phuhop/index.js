import './Phuhop.scss';
import { Col, Row, Card } from 'antd';

const data = [
    {
        img: "https://ayp.vn/wp-content/uploads/2024/06/khoa-hoc-ky-nang-the-underground-leader-3.webp",
        text: "Cảm thấy áp lực từ đồng trang lứa và môi trường cạnh tranh, muốn tìm cách vượt qua để phát triển bản thân.",
    },
    {
        img: "https://ayp.vn/wp-content/uploads/2024/06/khoa-hoc-ky-nang-the-underground-leader-8.webp",
        text: "Mất phương hướng trong việc xác định con đường sự nghiệp, mong muốn có định hướng rõ ràng và phù hợp với ước mơ.",
    },
    {
        img: "https://ayp.vn/wp-content/uploads/2024/10/ldpim_hinh_hocvien_tintuongkhoahoc_cu.webp",
        text: "Gặp khó khăn trong quản lý sắp xếp thời gian để làm việc học tập hiệu quả.",
    },
    {
        img: "https://ayp.vn/wp-content/uploads/2024/06/khoa-hoc-ky-nang-the-underground-leader-5.webp",
        text: "Thường trì hoãn, dễ nản trước những thách thức của cuộc sống",
    }
];

function Phuhop() {
    return (
        <div className="phuhop">
            <h2 className="phuhop__title">Khóa học phù hợp với những ai?</h2>
            <Row gutter={[16, 16]} justify="center">
                {data.map((item, index) => (
                    <Col xs={24} sm={12} md={6} key={index} className='phuhop__title--pad'>
                        <Card
                            hoverable
                            className="phuhop__card"
                            cover={<img alt="example" src={item.img} />}
                        >
                            <div className="phuhop__text">{item.text}</div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Phuhop;
