import './Dangki.scss'
import { Button, Form, Input, DatePicker, Select } from "antd";

const onFinish = (values) => {
    console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
};

const options = [
    { value: 'Kinh doanh quốc tế', label: 'Kinh doanh quốc tế' },
    { value: 'Kinh doanh thương mại', label: 'Kinh doanh thương mại' },
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Tài chính - Ngân hàng', label: 'Tài chính - Ngân hàng' },
    { value: 'Kế toán', label: 'Kế toán' },
    { value: 'Kiểm toán', label: 'Kiểm toán' },
    { value: 'Quản trị kinh doanh', label: 'Quản trị kinh doanh' },
    { value: 'Hệ thống thông tin quản lý', label: 'Hệ thống thông tin quản lý' },
    { value: 'Kinh tế', label: 'Kinh tế' },
    { value: 'Kinh tế đầu tư', label: 'Kinh tế đầu tư' },
    { value: 'Luật', label: 'Luật' },
    { value: 'Quản trị dịch vụ du lịch và lữ hành', label: 'Quản trị dịch vụ du lịch và lữ hành' },
    { value: 'Quản trị khách sạn', label: 'Quản trị khách sạn' },
    { value: 'Logistics và Quản lý chuỗi cung ứng', label: 'Logistics và Quản lý chuỗi cung ứng' },
    { value: 'Thương mại điện tử', label: 'Thương mại điện tử' },
    { value: 'Ngôn ngữ Anh', label: 'Ngôn ngữ Anh' },
    { value: 'Công nghệ thông tin', label: 'Công nghệ thông tin' },
    { value: 'Khoa học dữ liệu', label: 'Khoa học dữ liệu' },
    { value: 'Kỹ thuật phần mềm', label: 'Kỹ thuật phần mềm' },
    { value: 'Truyền thông đa phương tiện', label: 'Truyền thông đa phương tiện' },
    { value: 'Thiết kế đồ họa', label: 'Thiết kế đồ họa' },
    { value: 'Quản lý công', label: 'Quản lý công' },
    { value: 'Quản trị nhân lực', label: 'Quản trị nhân lực' },
    { value: 'Kinh doanh nông nghiệp', label: 'Kinh doanh nông nghiệp' },
    { value: 'Bất động sản', label: 'Bất động sản' },
    { value: 'Kinh tế quốc tế', label: 'Kinh tế quốc tế' },
    { value: 'Kinh tế và quản lý công', label: 'Kinh tế và quản lý công' },
    { value: 'Tài chính công', label: 'Tài chính công' },
    { value: 'Quản trị bệnh viện', label: 'Quản trị bệnh viện' },
    { value: 'Quản trị sự kiện', label: 'Quản trị sự kiện' },
    { value: 'Quản trị truyền thông', label: 'Quản trị truyền thông' }
]
function Dangki() {
    // const labelRender = (props) => {
    //     const { label, value } = props;
    //     if (label) {
    //       return value;
    //     }
    // }
    return (
        <>
            <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }} className='form'>
                <h1 style={{ fontSize: "30px", fontWeight: "bold" }}>FORM ĐĂNG KÝ THAM GIA</h1>
                <Form
                    name="registration"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Họ và tên"
                        name="fullname"
                        rules={[{ required: true, message: "Vui lòng nhập họ và tên!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Ngày tháng năm sinh" name="dob">
                        <DatePicker size="large" style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Chọn ngành học"
                        name="major"
                        rules={[{ required: true, message: "Vui lòng chọn ngành học!" }]}
                    >
                        <Select
                        className="custom-select"
                            style={{ width: '100%' }}
                            options={options}
                    
                        />
                    </Form.Item>


                    <Form.Item
                        label="Thư điện tử"
                        name="email"
                        rules={[{ required: true, message: "Vui lòng nhập email!" }, { type: "email", message: "Email không hợp lệ!" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item label="Điện thoại" name="phone">
                        <Input />
                    </Form.Item>

                    <Form.Item label="Bạn mong muốn được hỗ trợ như thế nào từ UEH IGNITE?" name="support">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item label="Thông tin khác" name="support">
                        <Input.TextArea rows={4} />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                            Gửi Đăng Ký
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default Dangki;