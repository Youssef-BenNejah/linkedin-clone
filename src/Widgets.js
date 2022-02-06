import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className='widget__article'>
            <div className='widget__articleLeft'>
                <FiberManualRecordIcon />

            </div>
            <div className='widget__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>

            </div>
        </div>
    )
    return <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />

        </div>
        {newsArticle("Why do some people get Covid while others don't?","top news-1598 readers")}
        {newsArticle("Présidentielle 2022 : un nouveau sondage donne Macron vainqueur, égalité entre Le Pen et Zemmour au 1er tour","top news-1880 readers")}
        {newsArticle("Messenger : vous réfléchirez à deux fois avant de faire une capture d'écran dorénavant","top news-2068 readers")}
        {newsArticle("Dying Light 2 : problèmes de coop, récompenses... Techland est sur le coup !","top news-3608 readers")}
        

        




    </div>;
}

export default Widgets;
