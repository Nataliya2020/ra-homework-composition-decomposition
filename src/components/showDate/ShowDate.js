/*Формирует дату и время для блока новостей*/
function ShowDate() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString().slice(0, -3);

  return (
    <div className={"data-time"}>
      {date} {time}
    </div>
  )
}

export default ShowDate;
