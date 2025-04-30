import style from "./PhotoCarousel.module.css";
import { useEffect, useState, MouseEvent, FC } from "react";
import { PropagateLoader } from "react-spinners";
import photoData from "./Photo.json";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

interface PhotoItem {
  id: number;
  photo: string;
  coment?: string;
  car?: string;
}

const PhotoCarousel: FC = () => {
  const [numOfFoto, setNumOfFoto] = useState<number>(1);
  const [photoArray, setPhotoArray] = useState<PhotoItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  function hendlerPlus(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (numOfFoto < photoArray.length) setNumOfFoto((prev) => prev + 1);
  }

  function hendlerMinus(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (numOfFoto > 1) setNumOfFoto((prev) => prev - 1);
  }

  useEffect((): void => {
    setPhotoArray(photoData);
    setIsLoading(false);
  }, []);

  const currentPhoto: PhotoItem | undefined = photoArray.find(
    (item) => item.id === numOfFoto
  );

  return (
    <>
      <div className={style.galery}>
        {isLoading ? (
          <PropagateLoader
            size={"15px"}
            color={"#3cc0ef"}
            speedMultiplier={0.5}
          />
        ) : (
          <div className={style.blockOfPhotoAndComent}>
            <h5 className={style.headerMyCarSearch}>Мої автопідбори</h5>
            <p className={style.markAndModelCar}>{currentPhoto?.car}</p>
            <div className={style.imgAndBtns}>
              {numOfFoto > 1 ? (
                <button
                  onClick={hendlerMinus}
                  className={style.buttonForGalerySwitch}
                >
                  <FiArrowLeftCircle className={style.svgForGalery} />
                </button>
              ) : (
                <button
                  onClick={hendlerMinus}
                  className={style.buttonForGalerySwitch}
                  disabled
                >
                  <FiArrowLeftCircle className={style.svgForGaleryDis} />
                </button>
              )}
              <img
                src={currentPhoto?.photo}
                alt="Тут мало бути фото авто"
                className={style.galeryImg}
              />
              {numOfFoto < 10 ? (
                <button
                  onClick={hendlerPlus}
                  className={style.buttonForGalerySwitch}
                >
                  {" "}
                  <FiArrowRightCircle className={style.svgForGalery} />{" "}
                </button>
              ) : (
                <button
                  onClick={hendlerPlus}
                  className={style.buttonForGalerySwitch}
                  disabled
                >
                  <FiArrowRightCircle className={style.svgForGaleryDis} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
      <p className={style.history}>{currentPhoto?.coment}</p>
    </>
  );
};

export default PhotoCarousel;
