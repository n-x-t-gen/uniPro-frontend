import React, { FC, useState, useEffect } from 'react';
import styles from './homeFooter.module.scss';
import HomeFooterCreatedBy from '../homeFooterCreatedBy/homeFooterCreatedBy';
import HomeFooterSponsors from '../homeFooterSponsors/homeFooterSponsors';
import cx from 'classnames';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

interface HomeFooterProps { }

export interface Sponsors {
  id: number;
  name: string;
  url?: string;
  image: string;
}

export const shownSponsors = [
  {
    id: 1,
    name: 'Bomba Patch',
    url: "https://superbombapatch.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 2,
    name: 'Globo',
    url: "https://www.globo.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 3,
    name: 'Nova Ordem Mundial',
    url: "https://www.neworder.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 4,
    name: 'Zap',
    url: "https://web.whatsapp.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 1,
    name: 'Bomba Patch',
    url: "https://superbombapatch.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 2,
    name: 'Globo',
    url: "https://www.globo.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 3,
    name: 'Nova Ordem Mundial',
    url: "https://www.neworder.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },
  {
    id: 4,
    name: 'Zap',
    url: "https://web.whatsapp.com",
    image: "https://i.imgur.com/zsRJbYk.jpg"
  },


]

const HomeFooter: FC<HomeFooterProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // func pra monitorar a largura da janela
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  // se a largura da tela bater 1019, retorna bool pra alterar o conteudo da div.wideLarge para um link
  const shouldRenderLink = windowWidth < 1020;

  return (
    <div className={styles.HomeFooter}>
      <div className={styles.lowerFooter}>
        <h4>
          Todos os direitos reservados <span>UniProduções</span>
        </h4>
        <HomeFooterCreatedBy />
      </div>
      <div className="sponsorsArea">
        <Container>
          

          <div className="wideLarge">
            {shouldRenderLink ? (
              <Row className={cx(styles.sponsorRow)}>
                <Col>
                  <Link to="#link" className={cx(styles.sponsorLabelText)}>Conheça nossos parceiros clicando aqui</Link>
                </Col>
              </Row>
            ) : (
              <>
                <Row>
                  {shownSponsors.map(event => (

                    <div className="col-md-3" id="eventCard" style={{ 'margin': '12px', "width":"248px" }}>
                      <Link to={event.url}  title={event.name} >

                        <div className="card">

                          <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src={event.image} className="img-fluid"/>
                            <a href={event.url}>
                              <div className="mask"></div>
                            </a>
                          </div>

                        </div>

                      </Link>
                    </div>
                  ))}
                  </Row>
              </>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default HomeFooter;
