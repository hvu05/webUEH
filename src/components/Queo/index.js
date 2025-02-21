import './Queo.scss';
import img from '../../assets/image/phat.png';
function Queo() {
    return (
        <>
            <div className="vanban">
                "Không có ước mơ nào là không thực hiện được, chỉ là bạn chưa làm đúng cách."
            </div>

            <div className="anhQueo">
                <img src={img} alt="Nguyễn Hữu Trí"/>
            </div>

            <div className="ten">
                Nguyễn Huỳnh Thuận Phát
            </div>

            <div className="chucvu">
            Sinh viên Đại học Kinh tế Thành phố Hồ Chí Minh
            </div>
        </>
    );
}

export default Queo;
