import Link from 'next/link';
import Image from 'next/image';
import Router from 'next/router';
import {
	Home,
	Article,
	NotificationsActive,
	Settings,
	AddCircle,
	Search,
	AccountCircle,
} from '@mui/icons-material';

export interface ILayoutProps {
	hasLogoBar?: boolean;
	category?: string;
	changeBoard?: any;
	children?: React.ReactNode;
}

const Layout = ({ hasLogoBar = false, category, changeBoard, children }: ILayoutProps) => {
	const addNewArticle = () => Router.push('/post');
	return (
		<>
			<div className="main_container">
				<div className="main_box">
					<div className="logo_box">
						<div className="logo_image">
							<Link href="/">
								<Image src={'/logo.png'} alt="logo" width={80} height={40} />
							</Link>
						</div>
						<div className="logo_nav">
							<div>
								<Link href="/search">
									<Search sx={{ fontSize: 30 }} />
								</Link>
							</div>
							<div>
								<AccountCircle sx={{ fontSize: 30 }} />
							</div>
						</div>
					</div>

					{hasLogoBar && (
						<div className="header_bar_container">
							<div>{category}</div>
							<select
								name="boards"
								onChange={e => {
									changeBoard(e.target.value);
								}}
							>
								<option value="ALL">전체 게시판</option>
								<option value="HAIR">헤어 게시판</option>
								<option value="HEALTH">헬스 게시판</option>
							</select>
						</div>
					)}

					<div className="main_content">{children}</div>
					<div className="add_article_button" onClick={addNewArticle}>
						<AddCircle sx={{ fontSize: 50 }} />
					</div>
					<div className="footer_nav_container">
						<div>
							<Link href="/">
								<a>
									<Home />
								</a>
							</Link>
						</div>
						<div>
							<Link href="/board">
								<a>
									<Article />
								</a>
							</Link>
						</div>
						<div>
							<Link href="/chatting">
								<a>
									<NotificationsActive />
								</a>
							</Link>
						</div>
						<div>
							<Link href="/my">
								<a>
									<Settings />
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Layout;
