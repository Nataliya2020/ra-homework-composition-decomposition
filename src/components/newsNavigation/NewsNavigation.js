/*Блок новостей. Отображает навигацию по новостям и сами новости, дату и курс валют с нефтью*/
import {v4 as uuid} from "uuid";
import List from "../list/List";
import ListItem from "../listItem/ListItem";
import ListNews from "../listNews/ListNews"
import world from "./world.png";
import Converter from "../converter/Converter";
import ShowDate from "../showDate/ShowDate";
import ListNewsItem from "../ListNewsItem/ListNewsItem"

function NewsNavigation() {

  const newsNavigator = [
    {
      name: "Сейчас в СМИ",
      aHref: "https://www.google.ru/"
    },
    {
      name: "В Германии",
      aHref: "https://www.google.ru/"
    },
    {
      name: "Рекомендуем",
      aHref: "https://www.google.ru/"
    }];

  const news = [
    {
      title: "Получение автомобильных номеров упрощено",
      aHref: "https://www.google.ru/",
      urlMarker: world,
      alt: "иконка списка"
    },
    {
      title: "В небе обнаружен НЛО",
      aHref: "https://www.google.ru/",
      urlMarker: world,
      alt: "иконка списка"
    },
    {
      title: "Скоро весна: готовимся к таянию снега",
      aHref: "https://www.google.ru/",
      urlMarker: world,
      alt: "иконка списка"
    },
    {
      title: "Во дворах снеговики появляются в геометрической прогрессии",
      aHref: "https://www.google.ru/",
      urlMarker: world,
      alt: "иконка списка"
    },
    {
      title: "Новые технологии - клавиатура, пишушая за Вас",
      aHref: "https://www.google.ru/",
      urlMarker: world,
      alt: "иконка списка"
    }
  ]

  return (
    <div className={"news-content-block"}>
      <div className={"news-date"}>
        <nav className={"nav-news"}>
          <List className={"list"} items={newsNavigator}>
            {items => items.map((item) => <ListItem className={"list-item"} key={uuid()} props={item}
                                                    aClassName={"list-item-link"}/>)}
          </List>
        </nav>
        <div><ShowDate/></div>
      </div>
      <div className={"list-news-container"}>
        <ListNews className={"list-news"} items={news}>
          {items => items.map((item) => <ListNewsItem className={"list-item-news"} key={uuid()} props={item}
                                                      aClassName={"list-item-news-link"}/>)}
        </ListNews>
        <Converter/>
      </div>
    </div>
  )
}

export default NewsNavigation;
