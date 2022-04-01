import { Card, Divider, Grid, Typography } from "@material-ui/core";
import Header from "../Components/header/Header";
import ParticleComponent from "../Components/ParticleComponent";
import useStyle from '../Components/styles/Globalstyle';
import Head from 'next/head'
import axios from "axios";
import moment from "jalali-moment";
import Footer from "../Components/footer/Footer";
import Link from "next/link";

export default function Home({ mostViewLastWeek, newest, tips, globalPost }) {
	const classes = useStyle();

	return (
		<>
			<Head>
				<title>سولیت - پلتفرم عاشقان برنامه نویسی</title>
				<meta name="description" content="در پلتفرم سولیت کتاب های معروف و معتبر خارجی در زمینه برنامه نویسی را بصورت خلاصه فصل به فصل با هم پیش میبریم و علاوه بر اون مطالب مهم سایت های معتبر دیگر رو هم با هم بررسی می کنیم و یاد میگیریم و تمام تلاش ما بیان کردن مطالب پیچیده به ساده ترین شکل ممکن هست. پس همراه ما باشید.😉" />
				<meta property="og:title" content='سولیت - پلتفرم عاشقان برنامه نویسی' />
				<meta property="og:description" content="در پلتفرم سولیت کتاب های معروف و معتبر خارجی در زمینه برنامه نویسی را بصورت خلاصه فصل به فصل با هم پیش میبریم و علاوه بر اون مطالب مهم سایت های معتبر دیگر رو هم با هم بررسی می کنیم و یاد میگیریم و تمام تلاش ما بیان کردن مطالب پیچیده به ساده ترین شکل ممکن هست. پس همراه ما باشید.😉" />
				<meta property="og:url" content={`https://sulit.ir`} />
			</Head>

			<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
				<ParticleComponent />
				<div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
					<Header />

					<main className={classes.main}>
						<Grid container direction="column" justifyContent="flex-start" alignItems="flex-start">
							<Grid item container lg={12} xl={12} md={12} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
								<Grid item container lg={11} xl={11} md={11} sm={10} xs={10} justifyContent="flex-start" alignItems="flex-start" >
									<Typography className={classes.title1}>پربازدیدهای هفته گذشته ⚡</Typography>
								</Grid>
								<article style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around' }}>
									{mostViewLastWeek.map((item) =>
										<Card className={classes.postCard} key={item._id}>
											<section className={classes.postImageParent}>
												<Link href={`/post/${item._id}/${item.header}`}>
													<a>
														<div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%' }} ></div>
													</a></Link>
											</section>
											<Link href={`/post/${item._id}/${item.header}`}>
												<a>
													<section style={{ flexDirection: 'column' }}>
														<Typography variant="h1" className={classes.mostViewPostHeader}><strong>{item.header}</strong></Typography>
														<Typography variant="h2" className={classes.mostViewShortExplanation}>{item.shortExplanation}</Typography>
														<div style={{ display: 'flex', justifyContent: 'space-between' }}>
															<section className={classes.mostViewcategoryParent}>
																<Typography className={classes.category}>{item.sourceTitle}</Typography>
															</section>
															<section className={classes.mostViewDate}>
																<Typography className={classes.postDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
																<img src={'/images/clock.svg'} className={classes.dateIcon} alt={'clock'}/>
															</section>
														</div>
													</section>
												</a></Link>
										</Card>)}
								</article>
							</Grid>
						</Grid>

						<Grid container direction="row" justifyContent="flex-start" alignItems="flex-start">
							<Grid item container lg={8} xl={8} md={7} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
								<Grid item container lg={11} xl={11} md={10} sm={10} xs={10} justifyContent="flex-start" alignItems="flex-start" >
									<Link href={`/posts/newPosts`}><a>
										<Typography className={classes.title2}>تازه ترین ها 🌌</Typography>
									</a>
									</Link>
								</Grid>

								<article className={classes.newestPostSection}>
									{newest.length > 0 && newest.map((item, index) => <section key={item._id} className={classes.newestparent}>
										<Link href={`/post/${item._id}/${item.header}`}>
											<a>
												<div style={{ display: 'flex' }}>
													<section className={classes.newestPostImg}>
														<div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%', borderRadius: '5px' }} ></div>
													</section>
													<div style={{ display: 'flex', flexDirection: 'column' }}>
														<Typography className={classes.newestPostHeader} variant="h1"><strong>{item.header}</strong></Typography>
														<Typography className={classes.newestShortExplanation} variant="h2">{item.shortExplanation}</Typography>
													</div>
												</div>
											</a>
										</Link>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<section className={classes.categoryParent}>
												<Typography className={classes.category}>{item.sourceTitle}</Typography>
											</section>
											<section className={classes.dateParent}>
												<Typography className={classes.newestPostDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
												<img src={'/images/clock.svg'} className={classes.dateIcon} alt={'clock'}/>
											</section>
										</div>
										{index !== newest.length - 1 && <Divider className={classes.newestDivider} />}
									</section>)}
									{newest.length === 10 ? <Link href={`/posts/newPosts`}><a><Typography className={classes.showAllText}>مشاهده همه</Typography>	</a>
									</Link> : <Typography className={classes.showAllText}></Typography>}
								</article>
							</Grid>

							<Grid container item lg={4} xl={4} md={5} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
								<Grid item container lg={11} xl={11} md={10} sm={10} xs={10} justifyContent="flex-start" alignItems="flex-start">
									<Link href={`/category/1/نکات سرعتی 🌠`}><a>
										<Typography className={classes.title4}><strong>نکات سرعتی 🌠</strong></Typography>
									</a></Link>
								</Grid>
								<article className={classes.tipsSection}>
									{tips.length > 0 && tips.map((item, index) => <section key={item._id} className={classes.tipsparent}>
										<Link href={`/post/${item._id}/${item.header}`}>
											<a>
												<div style={{ display: 'flex' }}>
													<section className={classes.newestPostImg}>
														<div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%', borderRadius: '5px' }} ></div>
													</section>
													<div style={{ display: 'flex', flexDirection: 'column' }}>
														<Typography className={classes.newestPostHeader} variant="h1"><strong>{item.header}</strong></Typography>
														<Typography className={classes.tipsShortExplanation} variant="h2">{item.shortExplanation}</Typography>
													</div>
												</div>
											</a>
										</Link>
										<div style={{ display: 'flex', justifyContent: 'space-between' }}>
											<section className={classes.categoryParent}>
												<Typography className={classes.category}>{item.sourceTitle}</Typography>
											</section>
											<section className={classes.dateParent}>
												<Typography className={classes.newestPostDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
												<img src={'/images/clock.svg'} className={classes.dateIcon} />
											</section>
										</div>
										{index !== tips.length - 1 && <Divider className={classes.newestDivider} />}
									</section>)}
									{tips.length === 10 ? <Link href={`/category/1/نکات سرعتی 🌠`}><a><Typography className={classes.showAllText}>مشاهده همه</Typography></a></Link> : <Typography className={classes.showAllText}></Typography>}
								</article>
							</Grid>
						</Grid>

						<Grid item container lg={8} xl={8} md={7} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
							<Grid item container lg={11} xl={11} md={10} sm={10} xs={10} justifyContent="flex-start" alignItems="flex-start" >
								<Link href={`/category/3/اطلاعات تصادفی 🌈`}><a>
									<Typography className={classes.title3}>اطلاعات تصادفی 🌈</Typography>
								</a></Link>
							</Grid>

							<article className={classes.newestPostSection}>
								{globalPost.length > 0 && globalPost.map((item, index) => <section key={item._id} className={classes.newestparent}>
									<Link href={`/post/${item._id}/${item.header}`}>
										<a>
											<div style={{ display: 'flex' }}>
												<section className={classes.newestPostImg}>
													<div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%', borderRadius: '5px' }} ></div>
												</section>
												<div style={{ display: 'flex', flexDirection: 'column' }}>
													<Typography className={classes.newestPostHeader} variant="h1"><strong>{item.header}</strong></Typography>
													<Typography className={classes.newestShortExplanation} variant="h2">{item.shortExplanation}</Typography>
												</div>
											</div>
										</a>
									</Link>
									<div style={{ display: 'flex', justifyContent: 'space-between' }}>
										<section className={classes.categoryParent}>
											<Typography className={classes.category}>{item.sourceTitle}</Typography>
										</section>
										<section className={classes.dateParent}>
											<Typography className={classes.newestPostDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
											<img src={'/images/clock.svg'} className={classes.dateIcon} alt={'clock'}/>
										</section>
									</div>
									{index !== globalPost.length - 1 && <Divider className={classes.newestDivider} />}
								</section>)}
								{globalPost.length === 10 ? <Link href={`/category/3/اطلاعات تصادفی 🌈`}><a>
									<Typography className={classes.showAllText}>مشاهده همه</Typography> </a></Link> : <Typography className={classes.showAllText}></Typography>}
							</article>
						</Grid>
					</main>
					<Footer />
				</div>
				<ParticleComponent />
			</div>
		</>
	)
}

export async function getServerSideProps() {
	try {
		const response = await axios.get(process.env.URL + "/posts?filter=weekView&limit=4")
		const newest = await axios.get(process.env.URL + "/posts?limit=10")
		const tips = await axios.get(process.env.URL + "/posts?categoryId=1&limit=10")
		const globalPost = await axios.get(process.env.URL + "/posts?categoryId=3&limit=10")

		return {
			props: {
				mostViewLastWeek: response.data,
				newest: newest.data,
				tips: tips.data,
				globalPost: globalPost.data,
			}
		}
	} catch (error) {
		return {
			props: {
				error: error,
			},
		};
	}
};