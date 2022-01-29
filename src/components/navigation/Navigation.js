/*Формирует блок навигации для блока поиска, данные для отображения содержит в себе*/
import {v4 as uuid} from "uuid";
import List from "../list/List";
import ListItem from "../listItem/ListItem";

function Navigation() {

  const news = [
    {
      name: "Видео",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Картинки",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Новости",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Карты",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Маркет",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Переводчик",
      aHref: 'https://www.google.ru/'
    },
    {
      name: "Эфир",
      aHref: 'https://www.google.ru/'
    }
  ]

  return (
    <nav className={"nav"}>
      <List className={"list"} items={news}>
        {items => items.map((item) => <ListItem className={"list-item"} key={uuid()} props={item}
                                                aClassName={"list-item-link"}/>)}
      </List>
    </nav>
  )
}

export default Navigation;
