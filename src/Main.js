import React, {useEffect, useState} from 'react';
import Lesson from './Lesson';
import People from './People';
import Price from './Price';
import Buy from './Buy';
import ContactForm from './ContactForm';

function Main() {
  const [mikanNumber, setMikanNumber] = useState(0);
  const [ponkanNumber, setPonkanNumber] = useState(0);
  const [hassakuNumber, setHassakuNumber] = useState(0);
  const [kakiNumber, setKakiNumber] = useState(0);

  const calcMikanNumber = (number) => {setMikanNumber(Number(number))}
  const calcPonkanNumber = (number) => {setPonkanNumber(Number(number))}
  const calcHassakuNumber = (number) => {setHassakuNumber(Number(number))}
  const calcKakiNumber = (number) => {setKakiNumber(Number(number))}

  const lessonList = [
    {
      name: '三ヶ日みかん',
      image: 'oranges-2533198_640.jpg',
      introduction: '三ケ日みかんは「甘さだけではなく、みかんらしい酸味がある」のが特徴。「酸味がある」＋「高い糖度」＝「コクのある奥深い味わい」として全国各地で三ケ日みかん人気が高まっています。',
      price: '4000'
    },
    {
      name: 'ぽんかん',
      image: 'oranges-2533198_640.jpg',
      introduction: '柑橘類の中では酸味が少なく、まろやかな甘味を楽しめるフルーツです。',
      price: '3000',
    },
    {
      name: 'はっさく',
      image: 'oranges-2533198_640.jpg',
      introduction: '皮は厚いですが、剥いた時のさわやかな香りがたまらない柑橘。独特のほろ苦さがあり、上品な甘さとほどよい酸味が特徴です。果肉は歯ごたえがあるので、食感も楽しむことができます。',
      price: '3500',
    },
    {
      name: '花き',
      image: 'rose-4372048_640.png',
      introduction: '南アフリカに自生する1年草もしくは宿根草です。 草丈は15～40cmほどで、葉はギザギザしており、伸びた茎の先に小さな花を連なって咲かせます。 赤や白、青をしたパステルカラーの花色が特徴で、花壇の寄せ植えによく用いられます。',
      price: '2500',
    },
  ];

    return (
      <>
      <div className='main-wrapper'>
        <div className='main'>
          <div className="App">
            <div id="animation-text">
              <img src="tangerines-1208301_1920.jpg" className="orange-image"></img>
              <div className="orange-title">ちいさな農家がつくる<br></br>三ヶ日みかんのおみせ</div>
            </div>
          </div>
          <div className="about-items">
            <h3>三ヶ日みかんとは</h3>
            <div className="about-content">
              <img src="mandarins-2043983_1280.jpg" className="about-image"></img>
              <p className="about-sentense"><b>―甘味と酸味がマッチした濃厚な味わいの地域ブランド―</b><br></br><br></br>静岡県浜松市北区三ヶ日町産の温州みかん。「青島みかん」を中心とする三ヶ日みかんは甘さと酸味のバランスが絶妙。浜名湖周辺の山肌で育った三ヶ日みかんは、光センサーなどを使い、糖度とクエン酸（酸度）・大きさ・形状・外観が計測され、厳しい基準をクリアしたものだけが選別、出荷されています。</p>
            </div>
          </div>
          <div className="reason-items">
            <h3>私たちのみかんが選ばれる3つの理由</h3>
            <div className="reason-contents">
              <div className="reason-content">
                <img src="sun-3588618_1280.jpg" className="reason-image"></img>
                <h2><span><b>日照量の多さ</b></span><br></br>三ヶ日みかんの甘さを作る</h2>
                <p>浜松市は日本でもトップクラスの日照量を誇ります。この太陽の日差しが、ミカンを甘くしてくれます。</p>
              </div>
              <div className="reason-content">
                <img src="plant-4036130_1280.jpg" class="reason-image"></img>
                <h2><span><b>三ヶ日の土壌</b></span><br></br>三ヶ日みかんにコクを与える</h2>
                <p>三ヶ日の土は石ガラも多い反面、水はけが良く、味を濃厚にすることができます。</p>
              </div>
              <div className="reason-content">
                <img src="winning-2829615_640.png" className="reason-image2"></img>
                <h2><span><b>認められた美味しさ</b></span><br></br>数多くの賞を授与</h2>
                <p>これまでに農協や自治体から多くの賞をいただいている認められた美味しさです。県外から、わざわざお越しになるお客様も多いです。</p>
              </div>
            </div>
          </div>
          <div className="people-items">
            <h3>私たちが作っています！</h3>
            <People />
          </div>
          <div className='lesson-container'>
            <h3>選べる農作物</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
                  price={lessonItem.price}
                />
              );
            })}
            <Price
              name={lessonList[0].name}
              image={lessonList[0].image}
              introduction={lessonList[0].introduction}
              price={lessonList[0].price}
              func = {calcMikanNumber}
            />
            <Price
              name={lessonList[1].name}
              image={lessonList[1].image}
              introduction={lessonList[1].introduction}
              price={lessonList[1].price}
              func = {calcPonkanNumber}
            />
            <Price
              name={lessonList[2].name}
              image={lessonList[2].image}
              introduction={lessonList[2].introduction}
              price={lessonList[2].price}
              func = {calcHassakuNumber}
            />
            <Price
              name={lessonList[3].name}
              image={lessonList[3].image}
              introduction={lessonList[3].introduction}
              price={lessonList[3].price}
              func = {calcKakiNumber}
            />
          </div>
          <div class="totalprice">
            合計金額{Math.round(lessonList[0].price * Number(mikanNumber) * 1.1 + lessonList[1].price * Number(ponkanNumber) * 1.1 + lessonList[2].price * Number(hassakuNumber) * 1.1 + lessonList[3].price * Number(kakiNumber) * 1.1)}円
          </div>
          <div className="buy-items">
          <h3>購入方法</h3>
            <Buy />
            <div class="googleMap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.480803271069!2d137.65987095058665!3d34.819001980308116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQ5JzA4LjQiTiAxMzfCsDM5JzQzLjQiRQ!5e0!3m2!1sja!2sjp!4v1598491822681!5m2!1sja!2sjp" width="600" height="450" frameborder="0" style={{border:'0'}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe></div>
          </div>
          <div className='contact-container'>
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div>
        </div>
      </div>
      </>
    );
  }

export default Main;