import React from 'react'
import importAll from '../../common/importAll'
import Carousel from './Carousel'

const CarouselLayout = () => {
	const Images = importAll(require.context('/assets/icons/homepage', false, /\.(png|jpe?g|svg)$/))

	const tools = [
		{
			icon: Images['icon-phishing.png'],
			label: 'Mã độc trong mạng',
			link: 'https://congcu.khonggianmang.vn/check-ipma'
		},
		{
			icon: Images['icon-scam.png'],
			label: 'Lộ lọt thông tin',
			link: 'https://congcu.khonggianmang.vn/check-data-leak'
		},
		{
			icon: Images['icon-breach.png'],
			label: 'Lừa đảo trực tuyến',
			link: 'https://congcu.khonggianmang.vn/check-phishing'
		},
		{
			icon: Images['icon-test.png'],
			label: 'Trắc nghiệm an toàn',
			link: 'https://congcu.khonggianmang.vn/phishing-quiz'
		}
	]

	const utilities = [
		{
			icon: Images['icon-protect.png'],
			label: 'Bảo vệ tài khoản',
			link: 'https://camnang.visafe.vn/4.2.-thiet-lap-cac-tinh-nang-bao-mat-cho-tai-khoan-mang-xa-hoi'
		},
		{
			icon: Images['icon-report.png'],
			label: 'Báo lừa đảo',
			link: 'https://canhbao.ncsc.gov.vn/#!/'
		},
		{
			icon: Images['icon-software.png'],
			label: 'Phần mềm hữu ích',
			link: '#'
		},
		{
			icon: Images['icon-leaderboard.png'],
			label: 'Vinh danh',
			link: 'https://tinnhiemmang.vn/vinh-danh'
		}
	]

	const knowledge = [
		{
			icon: Images['icon-remote.png'],
			label: 'Làm việc từ xa',
			link: 'https://camnang.visafe.vn/chuyen-de-1-lam-viec-tu-xa-an-toan'
		},
		{
			icon: Images['icon-study.png'],
			label: 'Học trực tuyến',
			link: 'https://khonggianmang.vn/uploads/TAI_LIEU_HUONG_DAN_V1_d36536104b.PDF'
		},
		{
			icon: Images['icon-connect.png'],
			label: 'Liên lạc, kết nối',
			link: 'https://camnang.visafe.vn/chuyen-de-3-lien-lac-ket-noi-an-toan'
		},
		{
			icon: Images['icon-entertainment.png'],
			label: 'Giải trí',
			link: 'https://camnang.visafe.vn/chuyen-de-4-giai-tri-an-toan'
		},
		{
			icon: Images['icon-ios.png'],
			label: 'Cẩm nang sử dụng iOS an toàn',
			link: '#'
		},
		{
			icon: Images['icon-android.png'],
			label: 'Cẩm nang sử dụng Android an toàn',
			link: '#'
		},
		{
			icon: Images['icon-windows.png'],
			label: 'Cẩm nang sử dụng Windows an toàn',
			link: '#'
		},
		{
			icon: Images['icon-ios.png'],
			label: 'Cẩm nang sử dụng MacOs an toàn',
			link: '#'
		}
	]
	return (
		<div className='home-content'>
			<div className='container mb-10'>
				<Carousel title='Công cụ kiểm tra' data={tools} />
				<Carousel title='Tiện ích, Vinh danh' data={utilities} />
				<Carousel title='Nâng cao kiến thức an toàn, an ninh mạng' data={knowledge} />
			</div>
		</div>
	)
}

export default CarouselLayout
