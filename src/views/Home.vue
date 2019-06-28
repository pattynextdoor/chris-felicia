<template>
  <div class="home">
    <div class="container">
      <div class="content">

        <section id="hero">
          <h1 class="hero-h1" data-aos="fade-down">christian & felicia</h1>
          <h2 class="hero-h2" data-aos="fade-up" data-aos-delay="300">are getting married february 22, 2020</h2>
        </section>

        <section id="our-story" data-aos="flip-up" data-aos-anchor="center-center">
          <h2 class="section-h2">Our Story</h2>

          <carousel 
            :per-page="1" 
            :navigation-enabled="true" 
            :center-mode="true"
            @page-change="handlePageChange">
            <slide>
              <img class="slide-img" src="https://steamuserimages-a.akamaihd.net/ugc/947328169457231320/AEA74DB7BAD24CB9702738DBF1BA515A7F1AE3DC/">
              <slideout-panel></slideout-panel>
            </slide>
            <slide>
              <img class="slide-img" src="https://mondrian.mashable.com/uploads%252Fstory%252Fthumbnail%252F11031%252FShibaInuhelmet.png%252F950x534.png?signature=xDLCVnYXJz29jcmUnyexQ7HDuDA=&source=https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com">
            </slide>
            <slide>
              <img class="slide-img" src="https://66.media.tumblr.com/4ee4ae8014a70b7eb49000565e9257cd/tumblr_pt8x6mVIPv1qdqnr9_540.jpg">
            </slide>
            <slide>
              <img class="slide-img" src="https://i.imgur.com/MKqTaPu.png">
            </slide>

          </carousel>

          <p class="slide-text">{{ slideText[currentSlide] }}</p>

        </section>
        
        <section id="venue" data-aos="flip-down" data-aos-delay="100" >
          <h2 class="section-h2">
            Venue
          </h2>
          <div id="venue-grid" >
            <div class="venue-info">
              <h2 class="venue-title">The Mission Inn</h2>
              <p class="venue-sub">Riverside, CA</p>
              <div class="grid-2">
                <img class="venue-img" src="https://s-ec.bstatic.com/images/hotel/max1280x900/125/125386476.jpg" alt="Mission Inn venue">
                <p class="venue-p">“It is the most unique hotel in America. It’s a monastery, a museum, a fine hotel, a home, a boardinghouse, a mission, an art gallery and an aviator’s shrine. It combines the best features of all of the above. If you are ever in any part of California, <strong>don’t miss the famous Mission Inn of Riverside.</strong>”
                  <br/>
                  <br/>
                  - Will Rogers
                  <br/>
                  <br/>
                  <a href="https://www.missioninn.com/" style="font-style: normal">Learn More</a>
                </p>
                <p></p>
              </div>
            </div>

            <iframe width="75%" height="450" frameborder="0" style="border:0; display: block; margin: 0 auto; margin-bottom: 10%;" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg3TJrfqx3IARsr-VCrwey7I&key=AIzaSyAwG-CZCgy-J54KMnrVopJQudOe5YRSFE0" allowfullscreen></iframe> 

          </div>

          <h2 class="section-h2">Schedule</h2>

          <div class="schedule-grid">
            <div class="schedule-item" id="ceremony" data-aos="zoom-out" data-aos-delay="0">
              <img class="schedule-icon" src="@/assets/church.png">
              <h3>Ceremony</h3>
              <p class="schedule-location">St. Francis of Assisi Chapel</p>
              <p class="schedule-time">6:00PM</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="zoom-out" data-aos-delay="500">
              <img class="schedule-icon" src="@/assets/celebration.png">
              <h3>Cocktail Hour & Reception</h3>
              <p class="schedule-location">The Grand Parisian Ballroom</p>
              <p class="schedule-time">6:30PM</p>
            </div>
          </div>

          <h3 class="section-h3">Parking</h3>

          <div class="parking-info">
            <p><span class="parking-price">$17</span> for self-parking</p>
            <p><span class="parking-price">$23</span> for valet services</p>
          </div>
          
          <p style="text-align: center;">Limited street parking on 6th and Orange St. is available, as well as a parking garage with 90 minutes free.</p>

          

        </section>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from 'aos'
import { Carousel, Slide } from 'vue-carousel'
import VueSlideoutPanel from 'vue2-slideout-panel'

export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    VueSlideoutPanel
  },
  data: function() { 
    return {
      slideText: [
        'Slide 1 text Lorem ipsum dolor amet salvia distillery plaid flexitarian, letterpress organic meh pug. Viral squid you probably haven\'t heard of them mustache vexillologist jianbing migas PBR&B neutra craft beer. Stumptown snackwave literally, af celiac butcher master cleanse hashtag man braid artisan cornhole.',
        'Slide 2 text Gastropub retro ramps wayfarers green juice marfa microdosing, pork belly selvage sustainable. Retro hammock narwhal la croix chartreuse tilde enamel pin helvetica unicorn roof party photo booth brooklyn pour-over glossier church-key.',
        'Slide 3 text Pug kinfolk cornhole selvage la croix, organic farm-to-table ethical squid tattooed williamsburg. Kitsch hot chicken raclette mustache cliche disrupt, cred art party bicycle rights next level.',
        'Slide 4 text Try-hard small batch adaptogen YOLO chambray tilde. Hashtag occupy raclette waistcoat, hell of vinyl gastropub green juice chillwave iPhone brooklyn skateboard. Kale chips kogi polaroid swag readymade williamsburg cardigan intelligentsia microdosing twee.'
      ],
      currentSlide: 0
    }
  },
  methods: {
    handlePageChange: function(slideIndex) {
      this.$data.currentSlide = slideIndex;
    }
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Amatic+SC|Source+Sans+Pro&display=swap');

@font-face {
    font-family: 'Marigold';
    src: url('../assets/marigold/marigold-webfont.woff2') format('woff2'),
          url('../assets/marigold/marigold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #e5dfe7;
}

h1, h2 {
  font-family: 'Josefin Sans', sans-serif;
  }

section {
  background-color: #f7f7f7;
}

.container {
  padding: 0 10%;
}

.content {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

}

.section-h2 {
  font-family: 'Marigold', cursive;
  font-size: 3em;
  text-align: center;
}

.section-h3 {
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
}

section#hero {
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  background: url("https://i.imgur.com/2KUqUMp.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.hero-h1, .hero-h2 {
  text-align: center;
  text-transform: uppercase;
}

.hero-h1 {
  font-family: 'Josefin Sans', sans-serif;
  padding-top: 15%;
  font-size: 50px;
}

.hero-h2 {
  font-size: 40px;
  font-family: 'Amatic SC', cursive;
}

section#our-story {
  padding-top: 5%;
}

#story-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5%;
  padding: 0 15%;
}

.story-h2 {
  font-size: 2em;
}

.story-p {
  font-size: 1em;
  line-height: 1.5;
  color: #8c8c8c;
}

#gallery {
  padding-top: 10%;
  padding-bottom: 10%;
}

.slide-img {
  display: block;
  margin: auto;
  max-width: 1000px;
}

.slide-text {
  text-align: center;
  padding: 5% 30%;
}

section#venue {
  padding-top: 10%;
  background-color: #eee5d5;
}

#venue-grid {
}

.venue-info {
  padding: 0 10%;
  text-align: center;
}

.venue-title {
  margin-bottom: 0;
}

.venue-sub {
  color: #8c8c8c;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 5%;
  margin: 5% 0;
}

.venue-img {
  width: 100%;
  display: inline-block;
  margin: 0 auto;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.venue-p {
  font-style: italic;
  margin: auto;
  width: 50%;
  background-color: #f7f7f7;
  border-radius: 5px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  padding: 10%;
}

#map {
  height: 100%;
}

.schedule-grid {
  display: grid;
  padding: 3% 25%;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 15%;

}

.schedule-item {
  text-align: center;
}

.schedule-icon {
  width: 25%;
}

.schedule-location {
  font-size: 1.75em;
}

.parking-info {
  padding: 0 40%;
}

.parking-info > p {
  font-size: 1.5em;
}

.parking-price {
  font-size: 2em;
}

</style>