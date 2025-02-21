import './Menu.scss'
// import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Button, Flex } from 'antd';
const gioithieu = [
    {
        key: '1',
        label: 'Triết lí K.I.N',
    },
    {
        key: '2',
        label: 'Các thương hiệu',
    },
];
const GT_LD = [
    {
        key: '1',
        label: '7 thói quen của người hiệu quả',
    },
    {
        key: '2',
        label: 'Kỹ nắng thể hiện, tự tin chia sẻ',
    },
    {
        key: '3',
        label: 'Kỹ năng phối hợp, dẫn dắt đội nhóm',
    },
    {
        key: '4',
        label: '5 Bí mặt tự tin giao tiếp',
    }
];
const dinhhuongsunghiep = [
    {
        key: '1',
        label: '7 thói quen của người hiệu quả',
    },
    {
        key: '2',
        label: 'Dẫn dắt sự nghiệp của bạn',
    },
    {
        key: '3',
        label: 'Tư vẫn ứng dụng sinh trắc học CAD',
    },
    {
        key: '4',
        label: 'CAD Career Navigation - Điều hướng sự nghiệp',
    },
    {
        key: '5',
        label: 'Personal Skills Evaluation - Tư vấn giải pháp cá nhân',
    },
];
const taichinhcanhan = [
    {
        key: '1',
        label: 'Workshop Financial Well-Being - Quản lý tài chính cá nhân',
    },
    {
        key: '2',
        label: 'Intelligent Money - Quản lý tài chính cá nhân & Đầu tư cơ bản',
    },
    {
        key: '3',
        label: 'Easy Dividend - Đầu tư cổ phiếu hưởng cổ tức',
    },
    {
        key: '4',
        label: 'Đầu tư chứng chỉ quỹ',
    },
    {
        key: '5',
        label: 'The Intelligent Investor - Đầu tư chứng khoán thông minh',
    },
    {
        key: '6',
        label: 'First Home - Sở hữu căn nhà đầu tiên',
    },
    {
        key: '7',
        label: 'Intelligent Property Investment - Đầu tư BĐS thông minh',
    },
];
const TC_DD = [
    {
        key: '1',
        label: 'Energy For Life – Ăn cho mình',
    },
    {
        key: '2',
        label: 'AYP Adventure – Tập cho mình',
    },
    {
        key: '3',
        label: 'Free Webinar: Khoẻ đẹp nhưng vẫn ăn ngon',
    },
];
const tamlicamxuc = [
    {
        key: '1',
        label: 'Awaken Your Power – 7 thói quen của người hiệu quả',
    },
    {
        key: '2',
        label: 'Personal Skills Evaluation – Tư vấn giải pháp cá nhân',
    },
    {
        key: '3',
        label: 'Personality Consultation – Tư vấn tính cách',
    },
    {
        key: '4',
        label: 'Center of Applied Dermatoglyphics (CAD) – Tư vấn sinh trắc vân tay (dành cho sinh viên & người đi làm)',
    },
    {
        key: '5',
        label: 'CAD for parents – Tư vấn sinh trắc vân tay (dành cho phụ huynh)',
    },
];
const blog = [
    {
        key: '1',
        label: 'Học Viện AYP',
    },
    {
        key: '2',
        label: 'Nguyễn Hữu Trí',
    },
    {
        key: '3',
        label: 'Huỳnh Duy Khương',
    },
    {
        key: '4',
        label: 'Intelligent Money',
    },
    {
        key: '5',
        label: 'Insideout CAD',
    },
];

function Menu() {
    return (
        <>
            <div className='menu'>
                <div className='menu--above'>
                    <span className='menu--above__logo'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/7/71/Logo_UEH_xanh.png' alt='logo-ueh' />
                    </span>
                    <span>
                        <span>
                            <Dropdown menu={{ items: gioithieu }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Giới thiệu
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: GT_LD }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Giao tiếp - Lãnh đạo
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: dinhhuongsunghiep }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Định hướng sự nghiệp
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: taichinhcanhan }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Tài chính cá nhân
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: TC_DD }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Thể chất - Dinh dưỡng
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: tamlicamxuc }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Tâm lí cảm xúc
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>

                        <span>
                            <Dropdown menu={{ items: blog }}>
                                <button className="dropdown-btn">
                                    <Space>
                                        Blog
                                        <DownOutlined />
                                    </Space>
                                </button>
                            </Dropdown>
                        </span>
                    </span>

                </div>
                <div className="line"></div>
                <div className='menu--after'>
                    <Flex gap="small" wrap className='buttonAfter'>
                        <Button>Học hành - Sự nghiệp</Button>

                        <Button>Lối sống - Sức khỏe</Button>

                        <Button>Tài chính - Đầu tư</Button>

                        <Button>Tâm lý- Mối quan hệ</Button>
                    </Flex>
                </div>
            </div>
        </>
    )
}
export default Menu;