import { Divider, Grid, Typography } from '@material-ui/core';
import React from 'react'
import useStyle from './style';

export default function Footer() {
  const classes = useStyle();
  return (
    <footer className={classes.footer}>
      <section>
        <Grid container direction="row">
          <Grid container item lg={7} xl={7} md={7} sm={8} direction="column" justifyContent="center" alignItems="center">
            <Typography className={classes.footerTitle}>درباره سولیت</Typography>
            <Typography className={classes.footerDescription}>در پلتفرم سولیت کتاب های معروف و معتبر خارجی در زمینه برنامه نویسی را بصورت خلاصه فصل به فصل با هم پیش میبریم و علاوه بر اون مطالب مهم سایت های معتبر دیگر رو هم با هم بررسی می کنیم و یاد میگیریم و تمام تلاش ما بیان کردن مطالب پیچیده به ساده ترین شکل ممکن هست. پس همراه ما باشید.😉</Typography>
          </Grid>

          <Grid container item lg={4} xl={4} md={4} sm={4} direction="column" justifyContent="center" alignItems="center">
            <img src={'/images/logo.png'} alt={"logo"} className={classes.footerLogo} />
            <Typography style={{ marginTop:'-2rem',fontSize: '15px' }}>ساخته شده با &#10084;&#65039; در ایران</Typography>
            <section style={{ display: 'flex' }}>
              <a href="mailto:info@sulit.ir" rel="follow">
                <img src={'/images/gmail.svg'} alt={'gmail'} className={classes.socialIcon} />
              </a>

              <a href="https://t.me/sulit_ir" rel="follow">
                <img src={'/images/telegram.svg'} alt={'telegram'} className={classes.socialIcon} />
              </a>

              <a target="_blank" href="https://www.instagram.com/sulit__ir" rel="follow">
                <img src={'/images/instagram.svg'} alt={'instagram'} className={classes.socialIcon} />
              </a>
            </section>
          </Grid>
        </Grid>
        <Divider className={classes.footerDivider} />
        <section style={{ display: 'flex', justifyContent: 'center', marginTop: '1.8rem' }}>
          <Typography className={classes.copyRightText}> تمامی حقوق مادی و معنوی این وب سایت متعلق به <span style={{ color: '#ffa144' }}>سولیت</span> می باشد. © 1400</Typography>
        </section>
      </section>
    </footer>
  )
}
