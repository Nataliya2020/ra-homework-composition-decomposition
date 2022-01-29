/*Основной блок. Формирует структуру приложения, содержит в себе
 данные для вызываемых компонентов, отображает сформированные другими компонентами блоки*/
import Search from '../search/Search';
import Navigation from '../navigation/Navigation';
import NewsNavigation from '../newsNavigation/NewsNavigation';
import ContentAside from '../contentAside/ContentAside';
import Banner from '../banner/Banner';
import Info from '../info/Info'
import avatar from './avatar.jpg';
import banner from './banner.jpg';
import weather from './weather.png';
import {v4 as uuid} from "uuid";
import television from './television.png'

function MainContent() {

  const itemSearch = {
    nameSearchEngine: "Поисковик",
    buttonSearchName: "Найти",
    signatureSearch: "Напишите свой запрос. Например, погода на завтра"
  }

  const asideItems = {
    avatarUrl: avatar,
    title: "Кошки. Рекомендации",
    text: "Самая свежая и нужная информация",
    altPict: "Кошка в шапочке для душа",
    aHref: "https://www.google.ru/"
  }

  const bannerItems = {
    bannerUrl: banner,
    altPict: 'изображение баннера'
  }

  const weatherItem = {
    title: "Погода",
  }

  const visited = {
    title: "Посещаемое"
  }

  const visitedItem = [
    {
      name: "Недвижимость",
      text: " - о сталинках"
    },
    {
      name: "Маркет",
      text: " - люстры и светильники"
    },
    {
      name: "Авто.ру",
      text: " - привод 4х4 до 500 000"
    }
  ]

  const mapInfo = {
    title: "Карта Германии"
  }

  const mapInfoItem = [
    {
      text: "Расписания"
    }
  ]

  const teleprogram = {
    title: "Телепрограмма"
  }

  const teleprogramItem = [
    {
      time: "02:00",
      text: "ТНТ.Best",
      channel: "ТНТ International"
    },
    {
      time: "02:15",
      text: "Джинглики",
      channel: "Карусель INT"
    },
    {
      time: "02:25",
      text: "Наедине со всеми",
      channel: "Первый"
    },
  ]

  const broadcast = {
    title: "Эфир",
  }

  const broadcastItem = [
    {
      iconSrc: television,
      name: "Управление как искусство",
      telecast: "Успех"
    },
    {
      iconSrc: television,
      name: "Ночь. Мир в это время",
      telecast: "earth TV"
    },
    {
      iconSrc: television,
      name: "Как стать миллионером",
      telecast: "Совершенно секретно"
    }
  ]

  return (
    <div className={"container"}>
      <div className={"container-content"}>
        <div className={"news-content"}>
          <NewsNavigation/>
          <ContentAside props={asideItems}/>
        </div>
      </div>

      <Navigation/>
      <Search props={itemSearch}/>

      <div className={"container-content container-content-banner"}>
        <Banner props={bannerItems}/>
      </div>

      <div className={"container-content container-content-info"}>
        <Info props={weatherItem}>
          <div className={"info-content"}>
            <div className={"container-weather"}>
              <img className={"icon-weather weather-indent"} src={weather} alt={"иконка погоды"}/>
            </div>
            <div className={"weather-indent"}><span className={"weather-now"}> -10° </span></div>
            <div>
              <div> Утром -12°</div>
              <div> Днем -8°</div>
            </div>
          </div>
        </Info>

        <Info props={visited}>
          {visitedItem.map(item => <div key={uuid()}><span className={"visitedItem-span"}>{item.name}</span>{item.text}
          </div>)}
        </Info>

        <Info props={mapInfo}>
          {mapInfoItem.map(item => <div key={uuid()}>{item.text}</div>)}
        </Info>

        <Info props={teleprogram}>
          {teleprogramItem.map(item => <div key={uuid()}>{item.time} {item.text} <span
            className={"info-channel"}> {item.channel}</span></div>)}
        </Info>

        <Info props={broadcast}>
          {broadcastItem.map(item =>
            <div key={uuid()}>
              <img
                className={"info-broadcast-pict"}
                alt={"иконка тв"}
                src={item.iconSrc}
              />
              {item.name} <span className={"info-channel"}> {item.telecast} </span>
            </div>)}
        </Info>
      </div>
    </div>
  )
}

export default MainContent;
