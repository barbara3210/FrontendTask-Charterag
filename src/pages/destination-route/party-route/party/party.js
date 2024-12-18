import Navbar from '../../../../components/navbar/navbar.js';
import Footer from '../../../footer/footer.js';
import Content from '../../../../components/content/content.js';
import ImageSlider from '../../../../components/image-slide/image-slider.js';
import PartyHero from '../../../party-hero/party-hero';
import Highlights from '../../../../components/highlights/highlights';
import SectionBlock from '../../../../components/section/section-block.js';
import PaymentCard from '../../../../components/cards/payment-card';
import './party.css';

const Party = () => {
  const images = [
    { src: '/crew/solo.png', alt: 'Party Image 1' },
    { src: '/crew/group.png', alt: 'Party Image 2' },
    { src: '/crew/skipper.png', alt: 'Party Image 3' },
  ];

  return (
    <div className='party-container'>
      <section id='book-now'>
        <Navbar />

        <PartyHero />

        <Highlights />

        <div style={{ color: '#F4FAFF', marginTop: '180px' }}>
          <SectionBlock
            label="step 1."
            title="Choose your route"
            content="Explore what you can get for in each route"
            labelColor="#fff"
            labelColorBack="#062949"
            titleColor="#062949"
            contentColor="#062949"
          />
        </div>

        <div style={{ color: '#F4FAFF', marginTop: '180px' }}>
          <SectionBlock
            label="step 2."
            title="Choose your crew"
            content="Lorem ipsum dolor sit amet"
            labelColor="#fff"
            labelColorBack="#062949"
            titleColor="#062949"
            contentColor="#062949"
          />
        </div>

        <div className='flex-row'>
          <div className='image-slider'>
            <ImageSlider images={images} />
          </div>

          <div className='content'>
            <Content
              title="Solo, Cabin or Group of Friends"
              text="Solo, with a friend or with the whole crew, we got it all covered! Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
              buttonText="Compare cabins"
            />
          </div>
        </div>

        <div className='flex-row reverse'>
          <div className='image-slider'>
            <ImageSlider images={images} />
          </div>

          <div className='content'>
            <Content
              title="Catamaran or Monohull"
              text="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
              buttonText="Compare yachts"
            />
          </div>
        </div>

        <div className='flex-row'>
          <div className='image-slider'>
            <ImageSlider images={images} />
          </div>

          <div className='content'>
            <Content
              title="Skipper and Host"
              text="Lorem ipsum dolor sit amet consectetur. Tellus lectus non purus odio amet fermentum eu morbi id. Risus sed facilisis maecenas urna nunc."
              buttonText="About us"
            />
          </div>
        </div>

        <div className='step-pay'>
          <div style={{ color: '#F4FAFF', marginTop: '180px' }}>
            <SectionBlock
              label="step 3."
              title="Pay and sail"
              content="We make it easy to split the cost between your crew and pay in instalments."
              labelColor="#fff"
              labelColorBack="#062949"
              titleColor="#062949"
              contentColor="#062949"
            />
          </div>


          <div className="payment-cards">
            <PaymentCard
              price="1"
              title="10%"
              description="pay when booking"
              progressValue={10}
            />
            <PaymentCard
              price="2"
              title="40%"
              description="pay 30 days after booking"
              progressValue={50}
            />
            <PaymentCard
              price="3"
              title="50%"
              description="pay 60 days before trip"
              progressValue={100}
            />
          </div>
        </div>

        <Footer />
      </section>
    </div>
  );
};

export default Party;
