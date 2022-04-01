import React, { useEffect, useState } from 'react';
import Header from '../../Components/header/Header';
import axios from 'axios';
import Head from 'next/head';
import Loading from '../../Components/Loading';
import { Button, Divider, FormControl, Grid, IconButton, Input, InputAdornment, TextareaAutosize, Typography } from '@material-ui/core';
import useStyle from '../../Components/styles/singlePostPageStyle';
import Footer from '../../Components/footer/Footer';
import parse from "html-react-parser";
import classNames from 'classnames';
import Gravatar from 'react-gravatar'
import CategoryHandler from '../../Components/CategoryHandler';
import { toast } from 'react-toastify';
import moment from 'jalali-moment';
import ReCAPTCHA from "react-google-recaptcha";
import { newComment, postComments, newReply, likePost, dislikePost, savePost, deleteSavedPost, userInfo } from '../../Components/api/apiUsage';
import "animate.css";
import Link from "next/link";
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import Router from 'next/router'
import Prism from "prismjs";
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

export default function PostDetail({ post, newPosts }) {
  const classes = useStyle();
  const [commentInput, setCommentInput] = useState();
  const [captchaValue, setCaptchaValue] = useState();
  const [comments, setComments] = useState([]);
  const [replyCommentId, setReplyCommentId] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const recaptchaRef = React.createRef();
  const [isLike, setIsLike] = useState(false);
  const [likeAction, setLikeAction] = useState(false);
  const [dislikeAction, setDislikeAction] = useState(false);
  const [likeCount, setLikeCount] = useState([]);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [bookmarkAction, setBookmarkAction] = useState(false);
  const [unBookMarkAction, setUnBookMarkAction] = useState(false)
  const [user, setUser] = useState('');

  useEffect(() => {
    if (localStorage.getItem('x-auth-token'))
      setIsLogin(true)
  }, []);

  useEffect(() => {
    setIsBookmarked(false);
    setUnBookMarkAction(false);
    setBookmarkAction(false);
    setIsLike(false);
    setDislikeAction(false);
    setLikeCount([]);
    setLikeAction(false);
  }, [post]);

  useEffect(() => {
    Prism.highlightAll();
    if (post !== undefined) {
      postComments(post._id, (isOk, data) => {
        if (!isOk)
          return data.errors.map((item) => toast.error(item.message))
        else {
          setComments(data)
        }
      });
    }
  }, [post]);

  const submit = () => {
    if (replyCommentId === null) {
      if (commentInput !== undefined) {
        const data = {
          text: commentInput,
          token: captchaValue
        };
        newComment(post._id, data, (isOk, data) => {
          if (!isOk)
            return data.errors.map((item) => toast.error(item.message))
          else {
            toast.success(data.message)
            return window.location.reload();
          }
        });
      } else return toast.error("لطفا ابتدا نظر خود را وارد کنید!")
    } else {
      if (commentInput !== undefined) {
        const data = {
          text: commentInput,
          token: captchaValue
        };
        newReply(replyCommentId, data, (isOk, data) => {
          if (!isOk)
            return data.errors.map((item) => toast.error(item.message))
          else {
            toast.success(data.message)
            return window.location.reload();
          }
        });
      } else return toast.error("لطفا ابتدا نظر خود را وارد کنید!")
    }
  }
  const handleChange = (value) => {
    setCaptchaValue(value)
  }

  const likePosts = () => {
    if (localStorage.getItem('id') !== null) {
      setDislikeAction(false);
      likePost(post._id, (isOk, data) => {
        if (!isOk)
          return data.errors.map((item) => toast.error(item.message))
        else {
          setLikeCount(data.likes)
          setIsLike(true);
          return setLikeAction(true);
        }
      });
    } else return Router.push('/auth');
  }
  const savingPost = () => {
    if (localStorage.getItem('id') !== null) {
      setUnBookMarkAction(false);
      savePost(post._id, (isOk, data) => {
        if (!isOk)
          return data.errors.map((item) => toast.error(item.message))
        else {
          setIsBookmarked(true);
          return setBookmarkAction(true);
        }
      });
    } else return Router.push('/auth');
  }
  const unSavingPost = () => {
    setBookmarkAction(false);
    deleteSavedPost(post._id, (isOk, data) => {
      if (!isOk)
        return data.errors.map((item) => toast.error(item.message))
      else {
        setIsBookmarked(false);
        return setUnBookMarkAction(true);
      }
    });
  }

  const dislikePosts = () => {
    setLikeAction(false);
    dislikePost(post._id, (isOk, data) => {
      if (!isOk)
        return data.errors.map((item) => toast.error(item.message))
      else {
        setLikeCount(data.likes)
        setIsLike(false);
        return setDislikeAction(true);
      }
    });
  }

  useEffect(() => {
    if (isLogin) {
      userInfo((isOk, data) => {
        if (!isOk)
          return data.errors.map((item) => toast.error(item.message))
        else {
          setUser(data);
        }
      });
    }
  }, [isLogin]);
  useEffect(() => {
    if (post.likes.length === 0) {
      return setIsLike(false);
    } else {
      post.likes.map(item => {
        if (item.id === localStorage.getItem('id'))
          return setIsLike(true);
        else return setIsLike(false);
      })
    }
  }, [post]);

  useEffect(() => {
    if (user === '') {
      return setIsBookmarked(false);
    } else {
      user.savePost.map(item => {
        if (item.postId == post._id)
          return setIsBookmarked(true);
      })
    }
  }, [user, post]);

  return (
    <>
      {(post === undefined && newPosts === undefined) ? <Loading /> : <>
        <Head>
          <title>{post.header}</title>
          <meta name="description" content={post.shortExplanation} />
          <meta property="og:title" content={post.header} />
          <meta property="og:description" content={post.shortExplanation} />
          <meta property="og:image:secure_url" content={post.image} />
          <meta property="og:url" content={`https://sulit.ir/post/${post._id}/${post.header}`} />
          <meta name="twitter:title" content={post.header} />
          <meta name="twitter:description" content={post.shortExplanation} />
          <meta name="twitter:image" content={post.image} />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content={`https://sulit.ir/post/${post._id}/${post.header}`} />
        </Head>
        <Header />
        <main>
          <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
            <Grid item container lg={7} xl={7} md={7} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
              <div style={{ display: 'flex', flexDirection: 'column', marginTop: '5rem', justifyContent: 'center', alignItems: 'center', overflowX: 'hidden', width: '100%' }}>
                <section className={classes.postDetailParent}>
                  <section className={classes.postImageSection}>
                    <img src={post.image} alt={post.header} loading="lazy" className={classes.postImage} />
                    {(isBookmarked === true || bookmarkAction === true) ? <IconButton onClick={unSavingPost} className={classes.bookmarkIcon}><BookmarkIcon style={{ color: '#ffffff' }} /></IconButton>
                      : (isBookmarked === false || unBookMarkAction === true) && <IconButton onClick={savingPost} className={classes.bookmarkIcon}><BookmarkBorderIcon style={{ color: '#ffffff' }} /></IconButton>}

                    <Typography variant={'h1'} className={classNames(classes.postHeader, "unselectable")}><strong>{post.header}</strong></Typography>
                  </section>
                  <div style={{ display: 'flex', justifyContent: 'flex-start', flexDirection: 'column', alignItems: 'flex-start', marginRight: '2%' }}>

                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '2rem' }}>
                      {post.authorAvatar == 'false' ? <Gravatar email={post.authorEmail} rating="g" className={classes.authorImage} default={'identicon'} /> : <img src={post.authorAvatar} alt={post.author} loading="lazy" className={classes.authorImage} />}
                      <section style={{ flexDirection: 'column' }}>
                        <Typography className={classes.postAuthor}>{post.author}</Typography>
                        <CategoryHandler categoryId={post.categoryId} />
                        <Typography className={classes.text}><span className={classes.postTime}>{moment(post.createdAt).locale("fa").format("YYYY/MM/DD")}</span></Typography>
                      </section>
                    </section>

                  </div>
                  <Divider className={classes.postDivider} />
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <section className={classes.postTextParent}>
                      <Typography style={{ lineHeight: '1.88' }}>{parse(post.text)}</Typography>
                    </section>
                  </div>
                  <a name="reply"></a>
                  <Divider className={classes.postDivider} />
                  {post.source !== null && <Typography style={{ margin: '2rem 3% 2rem 0', display: 'flex', alignItems: 'center' }}><img src="/images/folder.png" alt="source" style={{ width: '20px', height: '20px', marginLeft: '0.5rem' }} /><span style={{ color: ' #ffa144' }}>منبع : </span><span style={{ maxWidth: '26rem', wordBreak: 'break-word', overflow: 'auto', paddingRight: '0.1rem', fontSize: '14px' }}>{post.source}</span></Typography>}
                  <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '1.625rem 0 0.5rem 0.4rem' }}>
                    <section style={{ display: 'flex', margin: '0 1rem' }}> {(isLike === true || likeAction === true) ? <IconButton className={classes.likeBtn} onClick={dislikePosts}><FavoriteSharpIcon style={{ color: 'red' }} /></IconButton>
                      : (isLike === false || dislikeAction === true) && <IconButton className={classes.likeBtn} onClick={likePosts}><FavoriteBorderSharpIcon /></IconButton>}
                      <Typography className={classes.likeCount}>{(isLike === true || isLike === false || likeAction === true || dislikeAction === false) && likeCount.length === 0 ? post.likes.length : likeCount.length}</Typography>
                    </section>
                    <FormControl className={classes.shortLinkParent}>
                      <Input disabled value={post.shortUrl} onClick={() => { navigator.clipboard.writeText(post.shortUrl); toast.success('لینک کپی شد!') }} endAdornment={<InputAdornment position="end"><Divider className={classes.dividerPhone} />
                        <img src={"/images/link.svg"} loading="lazy" alt={"link"} className={classes.phone} /></InputAdornment>}
                        className={classes.shortLinkChildren} />
                    </FormControl>
                  </section>
                </section>
              </div>

              <section className={classes.commentSection}>
                <section style={{ display: 'flex' }}>
                  <Typography variant="h3" className={classes.commentTitle}><img src={'/images/comment.png'} loading="lazy" alt={'comment'} className={classes.commentIcon} />نظرات کاربران</Typography>
                  {replyCommentId !== null && <Typography className={classNames(classes.noticeText, "animate__animated animate__flash animate__repeat-3")}>لطفا پاسخ را در اینجا وارد کنید! 👇 <span style={{ marginRight: '2px', color: '#ffa144' }} onClick={() => setReplyCommentId(null)}>لغو پاسخ</span></Typography>}
                </section>
                {isLogin && <>
                  <TextareaAutosize value={commentInput} onChange={(event) => setCommentInput(event.target.value)} placeholder="خوشحال میشیم نظرتو بدونیم 😊" minRows={5} className={classes.commentInput} />

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', margin: '2rem 0', flexWrap: 'wrap' }}>
                    <ReCAPTCHA
                      ref={recaptchaRef}
                      sitekey={process.env.CAPTCHA_KEY}
                      theme={"dark"}
                      onChange={handleChange}
                    />
                    <Button variant="contained" onClick={submit} color={'primary'} className={classes.commentButton}><Typography className={classes.buttonText}>ثبت دیدگاه</Typography></Button>
                  </div></>}
                {!isLogin && <Typography className={classes.loginText}>برای ثبت نظر ابتدا باید <Link href="/auth"><a><span style={{ color: '#ffa144' }}>وارد</span></a></Link> شوید!</Typography>}
                <Divider className={classes.postDivider} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem' }}>
                  {comments.length > 0 && comments.map((item) => <React.Fragment key={item._id}><section className={item.userEmail === 'm.mahdisaeidi99@gmail.com' ? classes.adminCommentBox : classes.commentBox}>
                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0.8rem' }}>
                      {item.userAvatar == 'false' && <Gravatar email={item.userEmail} rating="g" className={classes.commentImg} default={'identicon'} />}
                      {item.userAvatar !== 'false' && <img src={item.userAvatar} alt={item.sender} loading="lazy" className={classes.commentImg} />}
                      <section style={{ flexDirection: 'column' }}>
                        <Typography className={classes.postAuthor}>{item.sender}</Typography>
                        <Typography className={classes.text}><span className={classes.postTime}>{moment(item.createdAt).locale("fa").format("mm")} : {moment(item.createdAt).locale("fa").format("HH")} </span> {moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
                      </section>
                    </section>
                    <Typography className={classes.commentText}>{parse(item.text)}</Typography>
                    <a href="#reply">
                      <section style={{ width: '20px', float: 'left', margin: '0 0 0.5rem 1rem' }} onClick={() => setReplyCommentId(item._id)}>
                        <img src={'/images/reply-all.svg'} loading="lazy" className={classes.replyIcon} alt={'reply'} />
                      </section>
                    </a>

                  </section>{item.replies.length > 0 && item.replies.map((itemReply) => <section className={itemReply.userEmail === 'm.mahdisaeidi99@gmail.com' ? classes.adminReplyBox : classes.replyBox} key={itemReply._id}>
                    <section style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', margin: '0.8rem' }}>
                      {itemReply.userAvatar == 'false' && <Gravatar email={itemReply.userEmail} rating="g" className={classes.commentImg} default={'identicon'} />}
                      {itemReply.userAvatar !== 'false' && <img src={itemReply.userAvatar} alt={item.sender} loading="lazy" className={classes.commentImg} />}
                      <section style={{ flexDirection: 'column' }}>
                        <Typography className={classes.postAuthor}>{itemReply.sender}</Typography>
                        <Typography className={classes.text}><span className={classes.postTime}>{moment(itemReply.createdAt).locale("fa").format("mm")} : {moment(itemReply.createdAt).locale("fa").format("HH")} </span> {moment(itemReply.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
                      </section>
                    </section>
                    <Typography className={classes.commentText}>{parse(itemReply.text)}</Typography>
                  </section>)}</React.Fragment>)}
                  {comments.length === 0 && <Typography className={classes.noCommentAlert}>مثل اینکه لذت اولین کامنت به شما رسیده از دستش نده! 😉</Typography>}
                </div>
              </section>
            </Grid>
            <Grid item container lg={3} xl={3} md={3} sm={12} xs={12} direction="column" justifyContent="center" alignItems="center">
              <Link href={`/posts/newPosts`}><a>
                <Typography className={classes.newPostTitle}>تازه ترین ها 🌌</Typography>
              </a></Link>
              <article className={classes.worldSection}>
                {newPosts.map((item, index) => <section key={item._id} className={classes.mostviewparent}>
                  <Link href={`/post/${item._id}/${item.header}`}>
                    <a>
                      <div style={{ display: 'flex' }}>
                        <section className={classes.worldPostImg}>
                          <div style={{ background: `url(${item.image}) no-repeat center center`, backgroundSize: 'cover', height: '100%', width: '100%', borderRadius: '5px' }} ></div>
                        </section>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                          <Typography className={classes.newPostHeader} variant="h1"><strong>{item.header}</strong></Typography>
                          <Typography className={classes.worldShortExplanation} variant="h2">{item.shortExplanation}</Typography>
                        </div>
                      </div>
                    </a>
                  </Link>

                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <section className={classes.categoryParent}>
                      <Typography className={classes.categoryTitle}>{item.sourceTitle}</Typography>
                    </section>
                    <section className={classes.dateParent}>
                      <Typography className={classes.newestPostDate}>{moment(item.createdAt).locale("fa").format("YYYY/MM/DD")}</Typography>
                      <img src={'/images/clock.svg'} className={classes.dateIcon} />
                    </section>
                  </div>
                  {index !== newPosts.length - 1 && <Divider className={classes.mostViewDivider} />}
                </section>)}
                <Link href={`/posts/newPosts`}><a>
                  {newPosts.length === 10 ? <Typography className={classes.showAllText}>مشاهده همه</Typography> : <Typography className={classes.showAllText}></Typography>}
                </a></Link>
              </article>
            </Grid>
          </Grid>
        </main>
        <Footer />
      </>}
    </>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  const response = await axios.get(process.env.URL + "/post/" + id[0]);
  const newPosts = await axios.get(process.env.URL + "/posts?limit=10")
  return {
    props: {
      post: response.data,
      newPosts: newPosts.data
    }
  }
}