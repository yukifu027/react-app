import React from 'react';
import Lesson from './Lesson';

class Main extends React.Component {
  render() {
    const lessonList = [
      {
        name: '三ヶ日みかん',
        image: 'oranges-2533198_640.jpg',
        introduction: 'WEBページはHTML、CSSという言語によってその見た目が作られています。 実際にWEBページを作りながら学んでみましょう！',
      },
      {
        name: 'ぽんかん',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/sass.svg',
        introduction: 'SassはCSSをより便利に効率的にするための言語です。',
      },
      {
        name: 'はっさく',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/es6.svg',
        introduction: 'JavaScriptはフロントエンドだけでなく、サーバーサイドまで広い可能性を持つプログラミング言語です。',
      },
      {
        name: '花き',
        image: 'https://s3-ap-northeast-1.amazonaws.com/progate/shared/images/lesson/react/react.svg',
        introduction: 'ReactはHTMLのように、サイトの見た目をつくることができるJavaScriptのライブラリです。',
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
        </div>
      </div>
    );
  }
}

export default Main;