import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';

export interface ILayoutProps {
	hasLogoBar?: boolean;
	children?: React.ReactNode;
}

const Layout = ({ hasLogoBar = false, children }: ILayoutProps) => {
	return (
		<>
			<div className="main_container">
				<div className="main_box">
					<div className="logo_box">
						<div className="">aa</div>
						<div className="logo_image">
							<Link href="/">
								<Image src={'/logo.png'} alt="logo" width={90} height={45} />
							</Link>
						</div>
						<div className="logo_nav">
							<div>검색아이콘</div>
							<div>마이페이지 아이콘</div>
						</div>
					</div>

					{!hasLogoBar && (
						<div className="header_bar_container">
							<div>헤어 게시판</div>
							<select name="boards" onChange={e => Router.push(`/${e.target.value}`)}>
								<option value="hair">헤어 게시판</option>
								<option value="health">헬스 게시판</option>
								<option value="all">전체 게시판</option>
								<option value="test2">Audi</option>
							</select>
						</div>
					)}

					<div className="main_content">{children}</div>
					<div className="footer_nav_container">
						<div>
							<Link href="/">
								<a>Home</a>
							</Link>
							<Link href="/hair">
								<a>Hair</a>
							</Link>
							<Link href="/health">
								<a>Health</a>
							</Link>
							<Link href="/my">
								<a>My</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
