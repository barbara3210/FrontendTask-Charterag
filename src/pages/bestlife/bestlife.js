"use client";
import BestLifeCards from "../../components/cards/bestlife-cards";
import SectionBlock from "../../components/section/section-block";
import "./bestlife.css"

export default function BestLife() {

  return (
    <div className="best-container">
      <div >
        <SectionBlock
          
          title="Come live your best life"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam."
          labelColor="#FFF"
          labelColorBack="#ECFBFF"
          titleColor="#062949"
          contentColor="#062949"

        />
      </div>


      <BestLifeCards></BestLifeCards>
    </div>
  );
}
