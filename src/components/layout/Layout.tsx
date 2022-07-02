import Link from 'next/link';
export interface ILayoutProps {
	children?: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
	return (
		<>
			<div className="main_container">
				<div className="main_box">
					<div className="header_bar_container">
						<div>헤어 게시판</div>
						<select name="boards">
							<option value="hair">헤어 게시판</option>
							<option value="health">헬스 게시판</option>
							<option value="test1">Fiat</option>
							<option value="test2">Audi</option>
						</select>
					</div>
					<div className="main_content">{children}</div>
					<div className="footer_nav_container">
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
		</>
	);
};

export default Layout;
