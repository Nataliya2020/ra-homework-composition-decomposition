/*Формирует блок с курсом валют и нефти*/
function Converter() {
  return (
    <div className={"converter-content"}>
      <p className={"converter-text"}>
        usd moex 63,52 <span className={"span-converter"}> +0,09 </span>
        eur moex 70,86 <span className={"span-converter"}> +0,14 </span>
        нефть 64,90 <span className={"span-converter"}> +1,63 </span>
      </p>
    </div>
  )
}

export default Converter;
