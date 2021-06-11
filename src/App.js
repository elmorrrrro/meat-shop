import './App.css';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import logo from './images/lesniczowka-logo.png';
import logoText from './images/lesniczowka-text.png';
import sausage_1 from './images/meat_1.jpg'
import sausage_2 from './images/meat_2.jpg'
import sausage_3 from './images/meat_3.jpg'
import arrowRight from './images/arrow-right.png'
import certified from './images/certified.png'
import free from './images/free.png'
import full_logo from './images/logo-300x277.png'
import meat_human from './images/meat-human.jpg'
import polska from './images/polska.jpg'


<link rel="preconnect" href="https://fonts.gstatic.com"></link>


function App() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="App">
      <header>
          <img className="logo" src={logo}></img>
          <img className="logo_text" src={logoText}></img>
        <div className="row-header">
          <a href="#"><strong>HOME</strong></a>
          <a href="#"><strong>O NAS</strong></a>
          <a href="#"><strong>OFERTA</strong></a>
          <a href="#"><strong>BLOG</strong></a>
          <a href="#"><strong>WSPÓŁPRACA</strong></a>
          <a href="#"><strong>KONTAKT</strong></a>
          <div>
            <img className="flag_poland" src={polska}></img>
            <a style={{color: 'white'}} href="#"><div className="chevron_flag">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
              </svg>
            </div>
            </a>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="first_text">
          <h1 className="text_meat"><strong>Mięso prosto</strong><br /> z natury</h1>
          <p><span className="lesz_text">W Lesniczówce od blisko 30 lat kultuwujemy</span> <br/><strong>najlepszą tradycję</strong> <span className="lesz_text">i</span> <strong>sprawdzone receptury <br />
          produkcji dziczyzny</strong></p>
        </div>
        <a href="#">
          <div className="shop_online">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16" className="cart">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg>
            <div className="shop_online_block">
              <p id="shop_online_text">SKLEP <br />ON-LINE</p>
            </div>
          </div>
        </a>

        <div className="container_guarantees">
          <div className="container_guarantees_item">
            <div className='container_guarantees_item_label'></div>
            <img className='certified_img' src={free}></img>
            <p style={{textAlign: "center", marginTop: '80px'}}>MIĘSO <strong>BEZ ANTYBIOTYKÓW</strong></p>
          </div>
          <div className="container_guarantees_item">
            <div className='container_guarantees_item_label'></div>
            <img className='certified_img' src={certified}></img>
            <p style={{textAlign: "center", marginTop: '80px'}}>KAŻDA PARTIA MIĘSA <strong>BADANA</strong></p>
          </div>
          <div className="container_guarantees_item">
            <div className='container_guarantees_item_label'></div>
            <img className='certified_img' src={free}></img>
            <p style={{textAlign: "center", marginTop: '80px'}}>BEZPIECZNA <strong>TERMO DOSTAWA</strong></p>
          </div>
        </div>

        <div className='container_traditions'>
          <p style={{color:'silver'}}><strong>TRADYCJA I AUTENTYCZNOŚĆ</strong></p>
          <h1 style={{fontSize: '50px', fontWeight: 'bold'}}><strong>przetwórstwo dziczyzny</strong><br /> leśniczówka</h1>
          <p style={{color:'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
              Integer at laoreet tortor. Nullam in auctor justo.<br/>
              Donec dignissim porta fermentum. Proin suscipit a eros eget egestas. <br/>
              Sed a lacinia nisi. Pellentesque eu eros id elit condimentum convallis. <br/>
              Donec at luctus orci. Ut consectetur eu metus ac posuere.
            </p>
          <div className='container_traditions_bottom'>
            <img src={arrowRight} className="arrow_right"></img>
            <a href="#" id='see_link'><p className='arrow_text'>DOWEIEDZ SIĘ WIĘCEJ O NAS</p></a>
          </div>
        </div>
        <img src={meat_human}></img>
        

        <h1 style={{textAlign: 'center', color: 'white', fontWeight:'bold', padding: '40px'}}><strong>poznaj nasze specjały</strong></h1>

        <div style={{ padding: `0 ${chevronWidth}px`}}>
          <ItemsCarousel
            requestToChangeActive={setActiveItemIndex}
            activeItemIndex={activeItemIndex}
            numberOfCards={3}
            gutter={0}
            leftChevron={<button className="button_left"><span style={{fontSize: '25px', color: 'white'}}>{'<'}</span></button>}
            rightChevron={<button className="button_right"><span style={{fontSize: '25px', color: 'white'}}>{'>'}</span></button>}
            outsideChevron
            chevronWidth={chevronWidth}
          >
          <div className="card">
            <img className="item" src={sausage_1}></img>
            <div className="item_bottom"></div>
            <p className='item_bottom_text'>tradycyjne</p>
            <div className='item_bottom_text_more'>
              <div className='item_bottom_box'>
                <img src={arrowRight} className="arrow_right"></img>
                <a href="#" id='see_link'><p className='arrow_text'>ZOBACZ</p></a>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="item" src={sausage_2}></img>
            <div className="item_bottom"></div>
            <p className='item_bottom_text'>dojrzewające</p>
            <div className='item_bottom_text_more'>
              <div className='item_bottom_box'>
                <img src={arrowRight} className="arrow_right"></img>
                <a href="#" id='see_link'><p className='arrow_text'>ZOBACZ</p></a>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="item" src={sausage_3}></img>
            <div className="item_bottom"></div>
            <p className='item_bottom_text'>wędzonki</p>
            <div className='item_bottom_text_more'>
              <div className='item_bottom_box'>
                <img src={arrowRight} className="arrow_right"></img>
                <a href="#" id='see_link'><p className='arrow_text'>ZOBACZ</p></a>
              </div>
            </div>
          </div>
          <div className="card">
            <img className="item" src={sausage_1}></img>
            <div className="item_bottom"></div>
            <p className='item_bottom_text'>tradycyjne</p>
            <div className='item_bottom_text_more'>
              <div className='item_bottom_box'>
                <img src={arrowRight} className="arrow_right"></img>
                <a href="#" id='see_link'><p className='arrow_text'>ZOBACZ</p></a>
              </div>
            </div>
          </div>
          </ItemsCarousel>
        </div>
        {/* Carousel */}
      </div>
      {/* container */}

      <div className='forest_box'>
        <div className='forest_box_main'>
          <p className='forest_box_main_smalltext'><strong>PRZETWÓRSTWO DZIСZYZNY LEŚNICZÓWKA</strong></p>
          <h3 className='forest_box_main_averagetext'>Tradycyjnie. Zdrowo. Smacznie.</h3>
          <h1 className='forest_box_main_bigtext'>Naturalnie!</h1>
          <p style={{color:'grey', textAlign: 'center'}}><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Integer at laoreet tortor.<br /> Nullam in auctor justo.
              Donec dignissim porta fermentum. Proin suscipit a eros eget egestas.</strong>
            </p>
        </div>
      </div>

      <footer>
          <div className="footer_first">
            <div className="footer_first_labels">
              <div className="footer_first_labels_element">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </div>
              <div className="footer_first_labels_element">
                <svg className="footer_first_labels_element" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
              </div>
              <div className="footer_first_labels_element">
                <svg className="footer_first_labels_element" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                </svg>
              </div>
            </div>
            <p style={{color:'grey'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Integer at laoreet tortor. Nullam in auctor justo. 
              Donec dignissim porta fermentum. Proin suscipit a eros eget egestas. 
              Sed a lacinia nisi. Pellentesque eu eros id elit condimentum convallis. Donec at luctus orci. 
              Ut consectetur eu metus ac posuere.
            </p>
          </div>
          <div className="footer_second">
            <img src={full_logo} style={{width: '70%', height: '70%'}}></img>
          </div>
          <div className="footer_third">
              <img className='certified_img_footer' src={free}></img>
              <img className='certified_img_footer' src={certified}></img>
          </div>
      </footer>
    </div>
  );
}

export default App;
