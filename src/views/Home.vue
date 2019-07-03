<template>
  <div class="home">
    <div class="container">
      <div class="content">

        <section id="hero">
          <h1 class="hero-h1" data-aos="fade-down">christian & felicia</h1>
          <h2 class="hero-h2" data-aos="fade-up" data-aos-delay="300">february 22, 2020</h2>
        </section>

        <section id="our-story" data-aos="flip-up" data-aos-anchor="center-center">

          <carousel 
            :per-page="1" 
            :navigation-enabled="true" 
            @page-change="handlePageChange">
            
            <slide class="slide">
              <img src="@/assets/slide1.jpg" alt="UV Blue & Orange Soda" class="slide-img">
              <h2 class="slide-title">2013</h2>
              <h3 class="slide-subtitle">UV Blue & Orange Soda</h3>
            </slide>

            <slide class="slide">
              <img src="@/assets/slide2.jpg" alt="Work/Love Balance" class="slide-img">
              <h2 class="slide-title">2014</h2>
              <h3 class="slide-subtitle">Work/Love Balance</h3>
            </slide>

            <slide class="slide">
              <img src="@/assets/slide3.jpg" alt="F*ck Cancer" class="slide-img">
              <h2 class="slide-title">2015</h2>
              <h3 class="slide-subtitle">F*ck Cancer</h3>
            </slide>

            <slide class="slide">
              <img src="@/assets/slide4.jpg" alt="Gday Mate" class="slide-img">
              <h2 class="slide-title">2016</h2>
              <h3 class="slide-subtitle">G'day Mate!</h3>
            </slide>

            <slide class="slide">
              <img src="@/assets/slide5.jpg" alt="Moving Up & Moving In" class="slide-img">
              <h2 class="slide-title">2017</h2>
              <h3 class="slide-subtitle">Moving Up & Moving In</h3>
            </slide>

            <slide class="slide">
              <img src="@/assets/slide6.jpg" alt="Barcelona Sunrise Surprise" class="slide-img">
              <h2 class="slide-title">2018</h2>
              <h3 class="slide-subtitle">Barcelona Sunrise Surprise</h3>
            </slide>
            
            <slide class="slide">
              <img src="@/assets/slide7.jpg" alt="Mission: Down the Aisle" class="slide-img">
              <h2 class="slide-title">2019-2020</h2>
              <h3 class="slide-subtitle">Mission: Down the Aisle</h3>
            </slide>
          </carousel>

          <div class="sound-btn" v-on:click="toggleAudio">
            <img class="sound-icon" src="@/assets/sound.png">
            <audio id="audio">
              <source :src="voiceClips[currentSlide]" type="audio/mp4">
              Your browser does not support the audio element.
            </audio>
          </div>

          <p class="slide-text">{{ slideText[currentSlide] }}</p>

        </section>

        <section id="gallery">
          <carousel 
            :per-page="1" 
            :navigation-enabled="true" >

            <slide class="slide"><img src="@/assets/gal1.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal2.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal3.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal4.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal5.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal6.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal7.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal8.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal9.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal10.jpg" alt="" class="slide-img"></slide>
            <slide class="slide"><img src="@/assets/gal11.jpg" alt="" class="slide-img"></slide>

          </carousel>

          <iframe width="1000" height="750" src="https://www.youtube.com/embed/LPSqSW9nrzU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="border:0; display: block; margin: 0 auto; margin-top: 5%;"></iframe>
        </section>
        
        <section id="venue" data-aos="zoom-in-down" data-aos-delay="" data-aos-duration="500">
          <h2 class="section-h2">
            Venue
          </h2>
          <div id="venue-grid" >
            <div class="venue-info">
              <h2 class="venue-title">The Mission Inn</h2>
              <p class="venue-sub">Riverside, CA</p>
              <p class="venue-blurb">The Mission Inn is a historical venue we both loved, even more so because of our sentimental ties in Riverside. Especially after our trip to Europe, we felt the venue mixed our Southern California roots and the architectural marvels we saw on our trip. In addition, we loved the convenience of having a ceremony, cocktail hour, and reception area all in one space.</p>
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
            <div class="schedule-item" id="reception" data-aos="zoom-out" data-aos-delay="250">
              <img class="schedule-icon" src="@/assets/celebration.png">
              <h3>Cocktail Hour</h3>
              <p class="schedule-location">The Grand Parisian Ballroom</p>
              <p class="schedule-time">6:30PM</p>
            </div>
            <div class="schedule-item" id="reception" data-aos="zoom-out" data-aos-delay="500">
              <img class="schedule-icon" src="@/assets/wedding-reception.png">
              <h3>Reception</h3>
              <p class="schedule-location">The Grand Parisian Ballroom</p>
              <p class="schedule-time">7:30PM</p>
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

export default {
  name: 'home',
  components: {
    Carousel,
    Slide
  },
  data: function() { 
    return {
      slideText: [
        'Christian and Felicia met in spring of 2013 at a mutual friend’s kickback birthday party. Felicia was convinced to take a group shot of UV blue, Christian’s signature handle, and they shared a chaser of orange soda. Throughout the night, Christian was pouring UV blue shots for everybody but kept coming back to Felicia. He convinced her to re-download Snapchat so they can take drunk selfies to send. They continued to communicate through Snapchat well after the party was over and finally exchanged numbers, and literally haven’t stopped texting ever since.',
        'As 2 UCR graduates, we both joined the workforce, Felicia with city government and Christian for a financial firm. Transitioning from school to career was tough but they also had a lot of fun celebrating their first anniversary, going to 3 different county fairs in one summer, and taking their first international trip together to the Philippines where they met each others family abroad and were able to take a side trip to Palawan.',
        'Thinking about 2015 makes us not want to think of 2015. We lost a handful of close family members to cancer, and most notably both of our dads were diagnosed with pancreatic cancer, receiving the diagnosis just 10 days between each other. Both lost their battle to the disease within a year of diagnosis. Somehow we were lucky in the most unlucky way to be going through this together. Ultimately, we are thankful that they are no longer suffering, and that we got that time with them that we did. We know that they are looking down at us today and just as excited as the rest of our families.',
        'After the difficult year, Christian and Felicia decided to treat themselves to an international trip down under. They stayed in a little beach town called Cottesloe not far from Perth in Western Australia, which was the perfect mix of relaxing and adventure.',
        'Christian received a position for the county and now worked in DTLA, meaning that they worked only 2 blocks from each other and it made sense for them to move in together. They bought their first Christmas tree together and even had a tree lighting ceremony. They found in easy to live together (especially since they do not share a bathroom).',
        'For their 5 year anniversary, Christian surprised Felicia with tickets to Barcelona that fall. They excitedly planned a Europe trip around those tickets and less than a week before Felicia jokingly said that he could propose to her on the trip ‘if he wanted’. Little did she know that he had the ring since January. Once in Barcelona, Christian asked Felicia why she didn’t get her nails done before the trip since she had gotten her hair and eyelashes done. Suddenly, Felicia was paranoid at every turn and quickly got her nails done just in case. One morning they decided to watch the sunrise and Christian said he had  heard of a place. Exactly as the sun rose, from the top of a fortress overlooking the city from the spanish civil war, Christian got on one knee. They celebrated with a bottle of Cava from the secret photographer and enjoyed the rest of their European vacation in engaged bliss.',
        'It’s finally time! We have decided to throw it back to Riverside and celebrate our marriage with our closest family and friends at the historic Mission Inn, with its European inspired architecture Inland Empire hidden gem. We are doing our best to enjoy the process but mostly excited to have fun with everyone and to be married.'
      ],
      voiceClips: [
        '@/assets/voice/2013.m4a',
        '../assets/voice/2014.m4a',
        '../assets/voice/2015.m4a',
        '../assets/voice/2016.m4a',
        '../assets/voice/2017.m4a',
        '../assets/voice/2018.m4a',
        '../assets/voice/2019.m4a',
      ],
      currentSlide: 0
    }
  },
  methods: {
    handlePageChange: function(slideIndex) {
      this.$data.currentSlide = slideIndex;
    },
    toggleAudio: function() {
      let clip = new Audio(this.$data.voiceClips[this.$data.currentSlide]);

      if (!clip.paused || clip.currentTime) {
        clip.pause();
        console.log('Paused');
      } 
      else {
        clip.play();
        console.log('Playing');
      }

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
  padding: 0 20%;
}

.content {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  background-color: #282828;

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
  background: url("../assets/hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}

.hero-h1, .hero-h2 {
  text-align: center;
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
}

.hero-h1 {
  font-family: 'Josefin Sans', sans-serif;
  font-family: 'Marigold', cursive;
  padding-top: 15%;
  margin-bottom: 0;
  font-size: 60px;
  color: white;
}

.hero-h2 {
  font-size: 25px;
  font-family: 'Marigold', cursive;
  color: white;
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
  top: 25%;
  text-align: center;
  font-size: 5em;
  color: white;
  width: 100%;
  font-family: 'Marigold', cursive;
}

.slide-subtitle {
  position: absolute;
  top: 50%;
  text-align: center;
  font-size: 2em;
  color: white;
  width: 100%;
  font-family: 'Source Sans Pro', cursive;
  letter-spacing: 1px;
}

.slide-img {
  display: inline-block;
  margin: auto;
  max-width: 1000px;
  max-height: 800px;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.VueCarousel-pagination {
}

.slide-text {
  text-align: center;
  padding: 5% 20%;
  line-height: 1.6;
  color: white;
  text-shadow: 3px 3px 0px rgba(0,0,0,0.2);
  font-size: 1.2em;
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
}

.sound-icon {
  max-width: 25px;
  display: block;
  margin: 0 auto;
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
}

.venue-sub {
  color: #8c8c8c;
}

.venue-blurb {
  padding: 0 25%;
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
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15%;
}

.schedule-item {
  text-align: center;
}

.schedule-icon {
  width: 75%;
}

.schedule-location {
  font-size: 1.25em;
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