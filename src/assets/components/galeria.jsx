const Galeria = () => {
  const fotos = [
    "/src/assets/components/img/img1.jpeg",
    "/src/assets/components/img/img2.jpeg",
    "/src/assets/components/img/img3.jpeg",
    "/src/assets/components/img/img4.jpeg",
    "/src/assets/components/img/img5.jpeg",
    "/src/assets/components/img/img6.jpeg",
    "/src/assets/components/img/img7.jpeg",
    "/src/assets/components/img/img8.jpeg",
    "/src/assets/components/img/img9.jpeg",
    "/src/assets/components/img/img10.jpeg",
    "/src/assets/components/img/img11.jpeg",
    "/src/assets/components/img/img12.jpeg",
    "/src/assets/components/img/img13.jpeg",
    "/src/assets/components/img/img14.jpeg",
    "/src/assets/components/img/img15.jpeg",
    "/src/assets/components/img/img16.jpeg",
    "/src/assets/components/img/img17.jpeg",
    "/src/assets/components/img/img18.jpeg",
    "/src/assets/components/img/img19.jpeg",
  ];

  return (
    <div className="p-5 md:p-19">
      <div
        className="columns-1 gap-5 lg:gap-6 sm:columns-2 lg:columns-3 xl:columns-4 
      [&>img:not(:firs-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 "
      >
        {fotos.map((foto, index) => (
          <img key={index} src={foto} alt={`Foto ${index + 1}`} className="hover:scale-110 transition-all rounded-lg" />
        ))}
      </div>
    </div>
  );
};

export default Galeria;
