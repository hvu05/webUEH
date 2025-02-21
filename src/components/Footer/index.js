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
                    <h3>Đại học Kinh tế Thành phố Hồ Chí Minh</h3>
                    <p><strong>Trụ sở chính:</strong> 279 Đ. Nguyễn Tri Phương, Phường 8, Quận 10, Hồ Chí Minh</p>
                    <p><strong>Số điện thoại:</strong>  028 7306 1976</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
