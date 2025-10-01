export default function Home() {
  return (
    <>
      <center className="text-white">
        <div>
          <h1>Поиск жертв репрессий</h1>
          <p className="w-5/7">
            Этот сайт предназначен для поиска информации о людях, пострадавших
            от политических репрессий в Северо-Осетинской АССР.
          </p>
        </div>

        <div>
          <input type="text" />
          <div>checkboxs</div>
        </div>
      </center>

      <div className="bg-[url(/images/hero-bg.jpg)] absolute w-full h-full top-0 left-0 -z-20"></div>
    </>
  );
}
