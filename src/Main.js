import React from 'react';
import Lesson from './Lesson';
import ContactForm from './ContactForm';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: '三ヶ日みかん',
        image: 'oranges-2533198_640.jpg',
        introduction: '三ケ日みかんは「甘さだけではなく、みかんらしい酸味がある」のが特徴。「酸味がある」＋「高い糖度」＝「コクのある奥深い味わい」として全国各地で三ケ日みかん人気が高まっています。',
      },
      {
        name: 'ぽんかん',
        image: 'oranges-2533198_640.jpg',
        introduction: '柑橘類の中では酸味が少なく、まろやかな甘味を楽しめるフルーツです。',
      },
      {
        name: 'はっさく',
        image: 'oranges-2533198_640.jpg',
        introduction: '皮は厚いですが、剥いた時のさわやかな香りがたまらない柑橘。独特のほろ苦さがあり、上品な甘さとほどよい酸味が特徴です。果肉は歯ごたえがあるので、食感も楽しむことができます。',
      },
      {
        name: '花き',
        image: 'rose-4372048_640.png',
        introduction: '南アフリカに自生する1年草もしくは宿根草です。 草丈は15～40cmほどで、葉はギザギザしており、伸びた茎の先に小さな花を連なって咲かせます。 赤や白、青をしたパステルカラーの花色が特徴で、花壇の寄せ植えによく用いられます。',
      },
    ];

    return (
      <div className='main-wrapper'>
        <div className='main'>
          <div className="App">
            <img src="tangerines-1208301_1920.jpg" class="orange-image"></img>
          </div>
          <div className='lesson-container'>
            <h3>選べる農作物</h3>
            {lessonList.map((lessonItem) => {
              return (
                <Lesson
                  name={lessonItem.name}
                  image={lessonItem.image}
                  introduction={lessonItem.introduction}
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