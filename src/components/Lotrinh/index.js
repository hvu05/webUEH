import LotrinhSteps from '../Step';
import './Lotrinh.scss';
import { Card, Divider, List } from 'antd';
const { Meta } = Card;
const item1 = [
    'Giới thiệu mentor, mentee và mô hình mentoring nhóm đang phát triển.',
    'Form đăng ký chi tiết để mentee chia sẻ về sở thích, ngành học, mục tiêu (dù còn mơ hồ).',
    'Ghép cặp mentor - mentee dựa trên lĩnh vực mentee quan tâm (kinh doanh, marketing, công nghệ, tài chính…).',
    'Buổi gặp đầu tiên:',
    '- Mentor giúp mentee tự đánh giá về bản thân mình (sở trường, sở đoản).',
    '- Đặt mục tiêu cho hành trình như tìm hiểu ngành nghề bản thân muốn hướng tới, cải thiện soft skills, quản lý thời gian.'
];
const item1_1 = [
    'Mentor giúp mentee tự đánh giá về bản thân mình (sở trường, sở đoản).',
    'Đặt mục tiêu cho hành trình như tìm hiểu ngành nghề bản thân muốn hướng tới, cải thiện soft skills, quản lý thời gian.'
];
const item2 = [
    'Tư duy phát triển và cách học hiệu quả',
    'Quản lí thời gian, cân bằng giữa việc học và trải nghiệm',
    'Kỹ năng giao tiếp và networking',    
];
const item2_1 = [
    'Mentee tham gia trải nghiệm các doanh nghiệp để hiểu thêm về ngành',
    'Mentor có thể giao tiếp một số task cho mentee như nghiên cứu về một ngành nghề, tìm hiểu xu hướng thị trường, ...',   
];
const item3 = [
    'Mentor tư vấn lộ trình tiếp theo hoặc giới thiệu về các cơ hội thực tập, khóa học chuyên sâu: ',  
    'Nếu chưa rõ định hướng -> Tư vấn lộ trình tiếp tục khám phá',
    'Nếu đã xác định ngành yêu thích -> Hướng dẫn về các cơ hội thực tập, khóa học chuyên sâu ...',
    'Mentor hướng dẫn mentee cách kết nối với cộng đồng (CLB/Đội/Nhóm, sự kiện, hội thảo, LinkedLn...' 
];
const item3_1 = [
    'Sự kiện tổng kết: ',
    '- Trải nghiệm ước mơ (những mentee tiềm năng được các mentor đánh giá phù hợp)',
    '- Mentee chia sẻ hành trình, những kiến thức và nhận chứng chỉ tham gia',
    '- Xây dựng cộng đồng mentee sau chương trình để tiếp tục hỗ trợ lẫn nhau'   
];
const data = [
    {
        id: 1,
        time: "Tháng 1",
        image: 'https://blog.goalf.vn/wp-content/uploads/2021/10/loi-ich-cua-viec-thiet-lap-muc-tieu-nhom.jpg',
        list: (
            <>
                <Divider orientation="left">Buổi kick-off</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item1}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Divider orientation="left">Buổi gặp đầu tiên</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item1_1}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </>

        )
    },
    {
        id: 2,
        time: "Tuần 1",
        image: 'https://inkythuatso.com/uploads/thumbnails/800/2023/03/1-hinh-anh-nhom-hoc-tap-inkythuatso-14-09-24-16.jpg',
        list: (
            <>
                <Divider orientation="left">Workshop kỹ năng thiết yếu</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item2}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Divider orientation="left">Trải nghiệm thực tế</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item2_1}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </>

        )
    },
    {
        id: 2,
        time: "Tuần 1",
        image: 'https://talentbold.com/Upload/news/20210315/155836554_vi-du-ve-ky-nang-lam-viec-nhom-hieu-qua-2.jpg',
        list: (
            <>
                <Divider orientation="left">Hỗ trợ mentee</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item3}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />

                <Divider orientation="left">Phát triển dài hạn</Divider>
                <List
                    size="large"
                    bordered
                    dataSource={item3_1}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            </>

        )
    },

]
function Lotrinh() {
    return (
        <>
            <div className="textLotrinh">Lộ trình 6 tháng đào tạo chuyên sâu</div>
            <LotrinhSteps />
            <div className="lo_trinh_container">
                {data.map((item) => (
                    <Card
                        className='lo_trinh'
                        hoverable
                        style={{ width: 400 }}
                        cover={<img alt="example" src={item.image} />}
                        key={item.id}
                    >
                        <Meta description={item.list} />
                    </Card>
                ))}
            </div>
        </>
    )
}

export default Lotrinh;