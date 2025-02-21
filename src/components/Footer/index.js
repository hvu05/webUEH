import './Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__column">
                    <h3>Danh mục dịch vụ</h3>
                    <ul>
                        <li>Giới thiệu</li>
                        <li>Giao tiếp – Lãnh đạo</li>
                        <li>Định hướng sự nghiệp</li>
                        <li>Tài chính cá nhân</li>
                        <li>Thể chất – Dinh dưỡng</li>
                        <li>Tâm lý cảm xúc</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Liên kết nhanh</h3>
                    <ul>
                        <li>Chính sách bảo mật</li>
                        <li>Điều khoản và điều kiện</li>
                        <li>Tuyên bố từ chối trách nhiệm</li>
                    </ul>
                </div>
                <div className="footer__column">
                    <h3>Công ty CP Năng lực bứt phá</h3>
                    <p><strong>Mã số thuế:</strong> 0308035936</p>
                    <p><strong>Trụ sở chính:</strong> 82/18 Lê Văn Duyệt, Phường 1, Quận Bình Thạnh, TP.HCM, Việt Nam</p>
                    <p><strong>Đại diện pháp luật:</strong> Nguyễn Hữu Trí</p>
                    <p><strong>Ngày cấp giấy phép:</strong> 08/04/2009</p>
                    <p><strong>Số điện thoại:</strong> 0388528218</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
