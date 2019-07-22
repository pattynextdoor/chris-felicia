<template>
  <div class="home">
    <div class="container">

      <div class="top">

        <section id="hero">
          <h1 class="hero-h1" data-aos="fade-down">christian & felicia</h1>
          <h2 class="hero-h2" data-aos="fade-up" data-aos-delay="300">february 22, 2020</h2>
          <div class="password" v-if="passwordSuccess === false">
            <div class="password-input">
              <input type="text" ref="passwordText" placeholder="Password (case sensitive)">
              <button id="password-button" v-on:click="checkPassword">Send</button>
            </div>
          </div>
        </section>

      </div>

      <div class="content" v-if="passwordSuccess === true">

        <section id="our-story" >

          <carousel 
            :per-page="1" 
            @page-change="handlePageChange"
            >
            <slide class="slide">
              <img src="https://i.imgur.com/90AK0vh.jpg" alt="UV Blue & Orange Soda" class="slide-img">
              <h2 class="slide-title">2013</h2>
              <h3 class="slide-subtitle">UV Blue & Orange Soda</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/luM1KqL.jpg" alt="Mabolow" class="slide-img">
              <h2 class="slide-title">2014</h2>
              <h3 class="slide-subtitle">Mabolow</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/8SMZMDF.jpg" alt="F*ck Cancer" class="slide-img">
              <h2 class="slide-title">2015</h2>
              <h3 class="slide-subtitle">F*ck Cancer</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/g3f428R.jpg" alt="Gday Mate" class="slide-img">
              <h2 class="slide-title">2016</h2>
              <h3 class="slide-subtitle">G'day Mate!</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/TH2nJ8P.jpg" alt="Moving Up & Moving In" class="slide-img">
              <h2 class="slide-title">2017</h2>
              <h3 class="slide-subtitle">Moving Up & Moving In</h3>
            </slide>

            <slide class="slide">
              <img src="https://i.imgur.com/LLnaDLD.jpg" alt="Sunrise Surprise" class="slide-img">
              <h2 class="slide-title">2018</h2>
              <h3 class="slide-subtitle">Sunrise Surprise</h3>
            </slide>
            
            <slide class="slide">
              <img src="https://i.imgur.com/mzzI6DV.jpg" alt="Mission: Down the Aisle" class="slide-img">
              <h2 class="slide-title">2019-2020</h2>
              <h3 class="slide-subtitle">Mission: Down the Aisle</h3>
            </slide>
          </carousel>

          <div class="sound-btn" v-on:click="toggleAudio">
            <img class="sound-icon" src="@/assets/sound.png">
          </div>

          <p class="slide-text">{{ slideText[currentSlide] }}</p>

        </section>

        <section id="gallery">
          <carousel 
            :per-page="1" 
            >

            <slide class="slide"><img src="https://i.imgur.com/zmVMgee.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/SsFDdBZ.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/f55FZ22.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/ti7XerO.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/sD1qZ6r.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/6IhUCbd.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/iXLyod2.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/WFPiQib.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/BijwowR.jpg" alt="" class="slide-img gal-img"></slide>
            <slide class="slide"><img src="https://i.imgur.com/T4yhOai.jpg" alt="" class="slide-img gal-img"></slide>

          </carousel>
          <iframe class="youtube" width="1000" height="750" src="https://www.youtube.com/embed/LPSqSW9nrzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:0; display: block; margin: 0 auto; margin-top: 5%;"></iframe>
        </section>
        
        <section id="venue">
          <h2 class="section-h2" data-aos="fade-down" data-aos-duration="500">
            Venue
          </h2>
          <hr class="hr" data-aos="zoom-in" data-aos-duration="750" data-aos-delay="300">
          <div id="venue-grid" data-aos="fade-up" data-aos-duration="500" data-aos-delay="500">
            <div class="venue-info">
              <h2 class="venue-title">The Mission Inn</h2>
              <p class="venue-sub">Riverside, CA</p>
              <img class="venue-img" src="https://markshimazuphotography.files.wordpress.com/2013/07/mission_inn_riverside_california_1.jpg" alt="Mission Inn venue">
              <p class="venue-blurb">The Mission Inn is a historical venue we both loved, especially because of our sentimental ties to Riverside. After our trip to Europe, we felt the venue mixed our Southern California roots and the architectural marvels we saw on our trip. In addition, we loved the convenience of having a ceremony, cocktail hour, and reception area all in one space.</p>
                <p class="venue-p">“It is the most unique hotel in America. It’s a monastery, a museum, a fine hotel, a home, a boardinghouse, a mission, an art gallery and an aviator’s shrine. It combines the best features of all of the above. If you are ever in any part of California, <strong>don’t miss the famous Mission Inn of Riverside.</strong>”
                  <br/>
                  <br/>
                  - Will Rogers
                  <br/>
                  <br/>
                  <a href="https://www.missioninn.com/" style="font-style: normal">Learn More</a>
                </p>
            </div>

            <iframe width="75%" height="450" frameborder="0" style="border:0; display: block; margin: 0 auto; margin-bottom: 10%;" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJg3TJrfqx3IARsr-VCrwey7I&key=AIzaSyAwG-CZCgy-J54KMnrVopJQudOe5YRSFE0" allowfullscreen></iframe> 

          </div>

          <h2 class="section-h2">Schedule</h2>
          <hr class="hr">

          <div class="schedule-grid">
            <div class="schedule-item" id="ceremony" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="0">
              <img class="schedule-icon" src="@/assets/church.png">
              <h3>Ceremony</h3>
              <p class="schedule-time">6:00PM</p>
              <p class="schedule-location">St. Francis of Assisi Chapel</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="250">
              <img class="schedule-icon" src="@/assets/celebration.png">
              <h3>Cocktail Hour</h3>
              <p class="schedule-time">6:30PM</p>
              <p class="schedule-location">Glenwood Tavern</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="fade-down" data-aos-duration="1000" data-aos-delay="500">
              <img class="schedule-icon" src="@/assets/wedding-reception.png">
              <h3>Reception</h3>
              <p class="schedule-time">7:30PM</p>
              <p class="schedule-location">The Grand Parisian Ballroom</p>
            </div>
          </div>

          <h3 class="section-h3">Parking</h3>

          <div class="parking-info">
            <p><span class="parking-price">$17</span> for self-parking</p>
            <p><span class="parking-price">$23</span> for valet services</p>
          </div>
          
          <p class="parking-disc" >Street parking is available, as well as a parking garage and parking lots available on Orange St. Please see map for details.</p>

          <h3 class="section-h3">Accomodations</h3> 

          <div class="acc-grid">
            <a href="https://www.missioninn.com/stay.html" class="acc">
              <img src="@/assets/mission.png" alt="Mission Inn Logo" class="acc-logo">
            </a>
            

            <a href="https://www.hyatt.com/en-US/hotel/california/hyatt-place-riverside-downtown/ralzr/maps-parking-transportation" class="acc">
              <img src="@/assets/hyatt-logo.png" alt="Hyatt Logo" class="acc-logo">
            </a>
          </div>


          <h3 class="section-h3">Whose Side? R'Side!</h3>
          <p class="rside-blurb">Below are a couple of places we feel are hidden gems in Riverside and many are places we went to together in our first year of dating.</p>
        
          <tabs class="activities" data-aos="flip-down" data-aos-delay="150">
            <tab title="What To Do">
              <ul class="list">
                <li>
                  <a href="https://missioninnmuseum.org/">Historic Mission Inn Museum</a>
                </li>
                <li>
                  <a href="https://www.planning.org/greatplaces/spaces/2011/fairmountpark.htm">Fairmount Park</a>
                </li>
                <li>
                  <a href="https://www.tripadvisor.com/Attraction_Review-g32978-d3850394-Reviews-Mount_Rubidoux_Park-Riverside_California.html">Mt.Rubidoux</a>
                </li>
                <li>
                  <a href="https://www.shopriversideplaza.com/">Riverside Plaza</a>
                </li>
                <li>
                  <a href="http://www.weirdca.com/location.php?location=421">World's Largest Paper Cup</a>
                </li>
                <li>
                  <a href="https://belltower.ucr.edu/subpage.php?content=history.html">UCR Belltower</a>
                </li>
                <li>
                  <a href="https://gardens.ucr.edu/">UCR Botanical Garden</a>
                </li>
                <li>
                  <a href="https://vanburendriveintheatre.com/">Van Buren Drive-In Theater</a>
                </li>
                <li>
                  <a href="http://www.parks.ca.gov/?page_id=649">California Citrus State Historic Park</a>
                </li>
                <li>
                  <a href="https://market.glessranch.com/">Gless Ranch Farmer's Market</a>
                </li>
              </ul>
            </tab>

            <tab title="Where To Eat">
              <ul class="list">
                <li>
                  <a href="https://www.proabition.com/">ProAbition</a>
                </li>
                <li>
                  <a href="https://www.simplesimonsbakerybistro.com/">Simple Simon's</a>
                </li>
                <li>
                  <a href="https://www.riversidefoodlab.com/">Riverside Food Lab</a>
                </li>
                <li>
                  <a href="http://www.back2thegrind.com/">Back To The Grind</a>
                </li>
                <li>
                  <a href="https://www.heroesrestaurantandbrewery.com/">Heroes Restaurant & Brewery</a>
                </li>
                <li>
                  <a href="http://www.thesaltedpig.com/">The Salted Pig</a>
                </li>
                <li>
                  <a href="http://punjabpalacecuisine.com/">Punjab Palace</a>
                </li>
                <li>
                  <a href="https://www.oceanpho.com/riverside-menu">Ocean Pho</a>
                </li>
                <li>
                  <a href="http://losjilbertosriverside.com/">Los Jilbertos</a>
                </li>
                <li>
                  <a href="https://www.rice-spice.com/">Thai Rice & Spice</a>
                </li>
              </ul>
            </tab>
          </tabs>

        <p style="text-align: center; margin-top: 25%; font-size: 1.5em;">More information to be announced as the event date approaches!</p>
          
        </section>


        <div class="footer">
            Website by <a href="https://patricktumbucon.com">Patrick Tumbucon</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AOS from 'aos'
import { Carousel, Slide } from 'vue-carousel'
import { Tabs, Tab } from 'vue-slim-tabs'
import { Howl, Howler } from 'howler'

export default {
  name: 'home',
  components: {
    Carousel,
    Slide,
    Tabs,
    Tab,
  },
  data: function() { 
    return {
      slideText: [
        'In the spring of 2013, we met at a mutual friend’s kickback birthday party.  We took a group shot of UV Blue together (his handle of choice in his frat days), and we shared a chaser of orange soda.  Throughout the night, we took many drunken selfies together on Snapchat.  We continued to communicate through Snapchat well after the party was over and then finally exchanged number, and the rest was history.',
        'We took our first international trip together to the Philippines where we met each other’s family abroad and were able to take a side trip to Palawan. Some of our favorite experiences were island-hopping, snorkeling and living it up in Mabolo (a.k.a. Mabolow to Christian, Felicia’s Lolo’s house.)',
        'Thinking about 2015 makes us not want to think about 2015. We lost several close family members to cancer and , most notably,  both of our dads were diagnosed with pancreatic cancer  within 10 days of each other.  Both lost their battle to the disease within a year.  Somehow, we were lucky in the most unlucky way to be going through this together.  Ultimately, we are thankful that our dads are no longer suffering and that we got that time with them when we did. We know that they are looking down at us today and just as excited as the rest of our families.',
        'After the difficult year, we decided to treat ourselves to an international trip Down Under. We stayed in a little beach town called Cottesloe not far from Perth in Western Australia, which was the perfect mix of relaxation and adventure. Some of our favorite memories were feeding the kangaroos and, ironically, cooking kangaroo meat. We loved meeting all the other Australian animals like wombats, quokkas, and koalas.',
        'Christian received a position for the county and now worked in DTLA, meaning that we worked only two blocks from each other and it made sense for us to move in together. Our favorite part about living together is getting to see each other everyday.',
        'For our 5th year anniversary, we had a European trip planned for the fall that would start in Barcelona. We excitedly planned our itinerary but there was one part of the  plan that half of us was not privy to.  We got engaged right at sunrise on top of a fortress from the Spanish Civil that had a 360-degree view of the city, with a secret photographer to capture everything.  We celebrated with a bottle of Cava and got to enjoyed the rest of our trip in engaged bliss.',
        'It’s finally time! We have decided to throw it back to Riverside and celebrate our union with closest family and friends at the Mission Inn.  We are so excited to get married and have a great time with everyone on our big day.'
      ],
      voiceClips: [
        'voice/2013.mp3',
        'voice/2014.mp3',
        'voice/2015.mp3',
        'voice/2016.mp3',
        'voice/2017.mp3',
        'voice/2018.mp3',
        'voice/2019.mp3',
      ],
      currentSlide: 0,
      passwordSuccess: false,
    }
  },
  computed: {
    currentClip: function() {
      return new Howl({
        src: [this.voiceClips[this.currentSlide]]
      });
    }
  },
  methods: {
    handlePageChange: function(slideIndex) {
      this.$data.currentSlide = slideIndex;
      
      let currentClip = this.$data.currentClip;

      currentClip.stop();
      this.$data.currentClip = new Howl({
          src: [this.$data.voiceClips[this.$data.currentSlide]],
          html5: true,
          onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error)}
      });
    },
    toggleAudio: function() {
      let currentClip = this.$data.currentClip;

      if (!currentClip) {
        let currentClip = new Howl({
          src: [this.$data.voiceClips[this.$data.currentSlide]],
          html5: true,
          onloaderror: function(id, error) { console.log('loadError: ' + id +' - ' + error)}
        });

        this.$data.currentClip = currentClip;
      }

      console.log(currentClip)

      if (currentClip.playing()) {
        currentClip.stop();
        console.log('Clip stopped')
      }

      else {
        currentClip.play();
        console.log('Clip playing')
      }
    },
    checkPassword: function() {
      this.$data.passwordSuccess = this.$refs.passwordText.value === "cmftwed"
      console.log(this.passwordSuccess)
    }
  },
  mounted() {
    AOS.init();
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans|Nunito+Sans|Lato|Amatic+SC|Source+Sans+Pro&display=swap');

@font-face {
    font-family: 'Marigold';
    src: url('../assets/marigold/marigold-webfont.woff2') format('woff2'),
          url('../assets/marigold/marigold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.home {
  overflow-x: hidden;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: 'Source Sans Pro', sans-serif;
  font-family: 'Nunito Sans', sans-serif;
  background-color: #e5dfe7;
}

h1, h2 {
  font-family: 'Josefin Sans', sans-serif;
  }

.container {
  padding: 0 10%;
}

.content {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.hr {
  width: 25%;
}

.section-h2 {
  font-family: 'Marigold', cursive;
  font-size: 5em;
  text-align: center;
  margin-bottom: 0;
}

.section-h3 {
  font-size: 2em;
  text-align: center;
  text-transform: uppercase;
  margin: 5% 0;
}

section#hero {
  min-width: 100%;
  min-height: 100vh;
  position: relative;
  background: url("https://i.imgur.com/D8cNkgn.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.hero-h1, .hero-h2 , .password {
  text-align: center;
  text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
              0px 8px 13px rgba(0,0,0,0.1),
              0px 18px 23px rgba(0,0,0,0.1);
}


.hero-h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Marigold', cursive;
  padding-top: 12%;
  margin-bottom: 0;
  font-size: 5em;
  color: white;
}

.hero-h2 {
  margin-top: 10px;
  font-size: 2em;
  font-family: 'Marigold', cursive;
  color: white;
}

.password-input > input {
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 5%;
}

.password {
  font-family: 'Nunito Sans'
}

section#our-story {
  background-color: #282828;
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

.gal-img {
  max-height: 750px;
}

.slide {
  background-color: #282828;
  display: flex;
  align-items: center;
}

.slide-title, .slide-subtitle {
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
}

.slide-title {
  position: absolute;
  top: 20%;
  text-align: center;
  font-size: 8em;
  color: white;
  width: 100%;
  font-family: 'Marigold', cursive;
}

.slide-subtitle {
  position: absolute;
  top: 45%;
  text-align: center;
  font-size: 3em;
  color: white;
  width: 100%;
  font-family: 'Source Sans Pro', cursive;
  font-family: 'Nunito Sans', sans serif;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.slide-img {
  display: inline-block;
  margin: auto;
  max-width: 100%;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.VueCarousel-navigation-button {
  font-size: 2em;
}

.slide-text {
  text-align: center;
  padding: 5% 20%;
  line-height: 1.6;
  color: white;
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
  font-size: 1.2em;
  margin-bottom: 0;
}

.sound-btn {
  display: block;
  margin: auto;
  width: 100%;
  max-width: 25px;
  background-color: white;
  border-radius: 50%;
  border: 1px solid black;
  padding: 10px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  margin-top: 2%;
}

.sound-icon {
  max-width: 25px;
  display: block;
  margin: 0 auto;
  cursor: pointer;
}

section#gallery {
  background-color: #282828;
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
  font-size: 3em;
}

.venue-sub {
  color: #8c8c8c;
}

.venue-blurb {
  padding: 0 12.5%;
}

.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 5%;
}

.venue-img {
  width: 66%;
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
  padding: 5% 7%;
  margin: 5% auto;
}

#map {
  height: 100%;
}

.schedule-grid {
  display: grid;
  padding: 3% 15%;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 25%;
}

.schedule-item {
  text-align: center;
  font-size: 1.25em;
}

.schedule-icon {
  width: 50%;
}

.schedule-time {
  font-size: 1.75em;
}

.schedule-location {
  font-size: 1em;
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

.parking-disc {
  text-align: center;
  padding: 0 33%;
}

.acc-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.acc {
  display: inline-block;
  margin: 0 auto;
  width: 50%;
}

.acc-logo {
  max-width: 250px;
  border-radius: 5%;
  transition-duration: 0.4s;
  transition-property: transform;
}

.acc-logo:hover {
  transform: scale(1.1);
}

section#whattodo {
  background-color: white;
}

.rside-blurb {
  text-align: center;
  padding: 0 33%;
}

.activities {
  width: 33%;
  margin: 0 auto;
  background-color: white;
  box-shadow: 19px 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}

ul.list {
  list-style: none;
  padding-bottom: 5%;
  line-height: 2;
}

ul.list>li>a {
  color: black;
}

.vue-tablist {
  list-style: none;
  display: flex;
  padding-left: 0;
  border-bottom: 1px solid #e2e2e2;
}

.vue-tab {
  padding: 4% 10%;
  cursor: pointer;
  user-select: none;
  border: 1px solid transparent;
  border-bottom-color: #e2e2e2;
  border-radius: 3px 3px 0 0;
  background-color: white;
  position: relative;
  bottom: -1px;
}

.vue-tab[aria-selected="true"] {
  border-color: #e2e2e2;
  border-bottom-color: transparent;
}

.vue-tab[aria-disabled="true"] {
  cursor: not-allowed;
  color: #999;
}

section {
  padding-bottom: 25%;
}

.footer {
  text-align: center;
  background-color: transparent;
}

.footer > a {
  text-decoration: none;
}

.password {
  margin-top: 16px;
  font-size: 2em;
  font-family: 'Marigold', cursive;
  color: white;
}

.password > label {
  display: inline-block;
}

.password > .password-input {
  margin: auto;
  display: block;
}

@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 667px)
  {
    .container {
      padding: 0;
    }

    .hero-h1 {
      margin-top: 0;
      padding-top: 60%;
      font-size: 50px;
    } 

    .hero-h2 {
      font-size: 30px;
    }

    .section-h2 {
      font-size: 3em;
    }

    .slide-title {
      font-size: 2em;
    }

    .slide-subtitle {
      font-size: 1em;
    }

    .slide-img {
      max-width: 375px;
    }

    .slide-text {
      font-size: 1.1em;
      padding: 5% 12%;
    }

    .youtube {
      width: 100%;
      height: 250px;
    }

    .venue-title {
      font-size: 2em;
    }

    .venue-img {
      width: 100%;
    }

    .venue-blurb {
      padding: 0 6%;
    }

    .venue-p {
      width: 75%;
    }

    .schedule-icon {
      width: 25%;
    }

    .schedule-grid {
      padding: 3% 0;
      grid-template-columns: 1fr;
      grid-row-gap: 5%;
    }

    .section-h3 {
      padding-top: 25%;
    }

    .schedule-time {
      font-size: 1.25em;
    }

    .schedule-location {
      font-size: 0.75em;
    }

    .parking-info {
      padding: 0 15%;
    }

    .parking-info > p {
      font-size: 1em;
      text-align: center;
    }

    .parking-disc {
      padding: 0 12.5%;
    }

    .acc-logo {
      max-width: 100px;
    }

    .rside-blurb {
      padding: 0 12%;
    }

    .activities {
      width: 80%;
    }
  }

</style>
