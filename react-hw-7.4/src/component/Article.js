import React from 'react'
import photo from '../imgs/building.jpg'
import people from '../imgs/img-2.jpg'


function Article() {
  return (
    <div>
      <div className="article">
        <h3>11/12/20</h3>
        <h2>On the Street in Brooklyn</h2>
        <div >
        <img src={photo} alt="photo"></img>
        </div>
        <div >
          <p>Cray culpa stumptown, flexitarian ex Odd Future do fugiat Wes Anderson proident 3 wolf moon officia bitters small batch. Et consequat do, nulla you probably haven't heard of them High Life scenester. Vinyl fugiat High Life, kogi do VHS in aliqua lo-fi leggings gentrify Neutra tumblr. Odio vegan PBR, Marfa forage blue bottle try-hard readymade meggings retro delectus Echo Park. Ugh consectetur farm-to-table forage, laboris blue bottle McSweeney's tattooed excepteur yr. Magna ut Schlitz flexitarian, vinyl craft beer proident yr forage 8-bit ethical sustainable placeat retro. Officia pickled beard, adipisicing gluten-free sint craft beer quis thundercats id 3 wolf moon fashion axe.</p>
          <h4 className="container-link"><a href="#">Continues...</a></h4>
          
        </div>
      </div>


      <div className="article" >
      <h3>11/12/20</h3>
      <h2>Vintage in Vogue</h2>
      <div >
      <img src={people} alt="people"></img>
      </div>
      <div>
        <p>Selfies sunt Tumblr, delectus small batch DIY umami sint. Polaroid chambray selfies McSweeney's Cosby sweater, Pitchfork tattooed assumenda Wes Anderson Blue Bottle twee Carles ennui. Nisi locavore fugiat sapiente salvia aliqua. Shoreditch kogi exercitation fashion axe. Wolf semiotics Pinterest, laboris quis master cleanse tousled small batch street art bespoke fingerstache dreamcatcher ethical labore. Dreamcatcher iPhone typewriter, tote bag four loko fanny pack master cleanse organic PBR reprehenderit actually. Craft beer drinking vinegar wayfarers, pork belly narwhal pariatur polaroid cupidatat in 8-bit distillery anim literally</p>
        <h4 className="container-link"><a href="#">Continues...</a></h4>
        
      </div>
    </div>
  </div>
  )
}

export default Article