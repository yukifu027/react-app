import React from 'react';
import Lesson from './Lesson';
import People from './People';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: '三ヶ日みかん',
        image: 'oranges-2533198_640.jpg',
        introduction: '三ケ日みかんは「甘さだけではなく、みかんらしい酸味がある」のが特徴。「酸味がある」＋「高い糖度」＝「コクのある奥深い味わい」として全国各地で三ケ日みかん人気が高まっています。',
        price: '4000円/10kg'
      },
      {
        name: 'ぽんかん',
        image: 'oranges-2533198_640.jpg',
        introduction: '柑橘類の中では酸味が少なく、まろやかな甘味を楽しめるフルーツです。',
        price: '3000円/10kg',
      },
      {
        name: 'はっさく',
        image: 'oranges-2533198_640.jpg',
        introduction: '皮は厚いですが、剥いた時のさわやかな香りがたまらない柑橘。独特のほろ苦さがあり、上品な甘さとほどよい酸味が特徴です。果肉は歯ごたえがあるので、食感も楽しむことができます。',
        price: '3500円/10kg',
      },
      {
        name: '花き',
        image: 'rose-4372048_640.png',
        introduction: '南アフリカに自生する1年草もしくは宿根草です。 草丈は15～40cmほどで、葉はギザギザしており、伸びた茎の先に小さな花を連なって咲かせます。 赤や白、青をしたパステルカラーの花色が特徴で、花壇の寄せ植えによく用いられます。',
        price: '2500円/10kg',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className="App">
            <img src="tangerines-1208301_1920.jpg" className="orange-image"></img>
            <div className="orange-title">ちいさな農家がつくる<br></br>三ヶ日みかんのおみせ</div>
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
          </div>
          <div className='contact-container'>
            <h3>お問い合わせ</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;