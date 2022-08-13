import React from 'react';
import { Link } from 'react-router-dom';

import RMDBLogo from '../../images/movie.png';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg className='movieLogo' src={RMDBLogo} alt="rmdb-logo"></LogoImg>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo'></TMDBLogoImg>
        </Content>
    </Wrapper>
);

export default Header