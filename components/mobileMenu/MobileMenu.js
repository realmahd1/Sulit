import { Drawer, Input } from '@material-ui/core';
import Link from 'next/link';
import React, { useRef, useState } from 'react'
import HamburgerMenu from '../hamburgerMenu/HamburgerMenu';
import useStyle from './style';
import Router from 'next/router';

export default function MobileMenu() {
    const classes = useStyle();
    const [state, setState] = useState(false);
    const [searchInput, setSearchInput] = useState(null);
    const closeRef = useRef();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState(open);
    };

    function openSearch() {
        document.getElementById("popup").style.display = "block";
    }

    function closeSearch() {
        document.getElementById("popup").style.display = "none";
    }

    const Menu = () => (
        <div className={classes.hamburgerMenu} onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <HamburgerMenu />
        </div>
    )
    const handleClose = () => {
        setState(false)
    }
    const submitWithEnter = (e) => {
        if (searchInput !== '' && searchInput !== null && e.key === 'Enter') {
            closeRef.current.click();
            Router.push({
                pathname: '/search',
                query: { q: encodeURI(searchInput) },
            })
        }
    }
    const search = () => {
        if (searchInput !== '' && searchInput !== null) {
            closeRef.current.click();
            Router.push({
                pathname: '/search',
                query: { q: encodeURI(searchInput) },
            })
        }
    }

    return (
        <header className={classes.root}>
            <img src={'/images/menu.svg'} alt={"menu"} loading="lazy" className={classes.hamburgerIcon} onClick={toggleDrawer(true)} />
            <Link href={'/'}><a style={{ margin: '0 auto' }}>
                <img src={'/images/logo.png'} alt={"logo"} loading="lazy" className={classes.logo} />
            </a></Link>

            <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)} handleClose={handleClose.bind(this)} style={{ backdropFilter: 'blur(14.6px)' }}>
                {Menu()}
            </Drawer>
            <img src={'/images/magnifying-glass.svg'} onClick={openSearch} style={{ width: '20px', position: 'relative', left: '2rem', bottom: '0.3rem' }} loading="lazy" alt={"search"} />

            <div id="popup" className={classes.overlay}>
                <span className={classes.closebtn} ref={closeRef} onClick={closeSearch} title="Close">×</span>
                <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className={classes.overlaycontent}>
                        <Input variant="filled" value={searchInput} type="search" onChange={(event) => setSearchInput(event.target.value)} onKeyDown={submitWithEnter} placeholder="جستجو کنید ..." className={classes.searchInput} />
                        <img src={'/images/magnifying-glassDark.svg'} onClick={search} className={classes.searchIcon} loading="lazy" alt={"search"} />
                    </div>
                </section>
            </div>
        </header>
    )
}
