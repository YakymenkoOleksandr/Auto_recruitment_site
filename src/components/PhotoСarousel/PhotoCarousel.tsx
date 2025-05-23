import style from "./PhotoCarousel.module.css";
import { useEffect, useState, MouseEvent, FC } from "react";
import { PropagateLoader } from "react-spinners";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { useTranslation } from "react-i18next";

interface PhotoItem {
  id: number;
  photo: string;
  coment?: string;
  car?: string;
}

const PhotoCarousel: FC = () => {
  const [numOfFoto, setNumOfFoto] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { t } = useTranslation();

  const photoArray = t("photoCarousel.items", {
    returnObjects: true,
  }) as PhotoItem[];

  function hendlerPlus(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (numOfFoto < photoArray.length) setNumOfFoto((prev) => prev + 1);
  }

  function hendlerMinus(e: MouseEvent<HTMLButtonElement>): void {
    e.preventDefault();
    if (numOfFoto > 1) setNumOfFoto((prev) => prev - 1);
  }

  useEffect((): void => {
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
            <h5 className={style.headerMyCarSearch}>
              {t("photoCarousel.headerMyCarSearch")}
            </h5>
            <p className={style.markAndModelCar}>{currentPhoto?.car}</p>
            <div className={style.imgAndBtns}>
              {numOfFoto > 1 ? (
                <button
                  onClick={hendlerMinus}
                  className={style.buttonForGalerySwitch}
                  aria-label="Попереднє фото"
                >
                  <FiArrowLeftCircle className={style.svgForGalery} />
                </button>
              ) : (
                <button
                  onClick={hendlerMinus}
                  className={style.buttonForGalerySwitch}
                  disabled
                  aria-label="Попереднє фото"
                  aria-disabled="true"
                >
                  <FiArrowLeftCircle className={style.svgForGaleryDis} />
                </button>
              )}
              <img
                src={currentPhoto?.photo}
                alt={currentPhoto?.car ? `Фото ${currentPhoto.car}` : "Фото автомобіля"}
                className={style.galeryImg}
              />
              {numOfFoto < photoArray.length ? (
                <button
                  onClick={hendlerPlus}
                  className={style.buttonForGalerySwitch}
                  aria-label="Наступне фото"
                >
                  <FiArrowRightCircle className={style.svgForGalery} />
                </button>
              ) : (
                <button
                  onClick={hendlerPlus}
                  className={style.buttonForGalerySwitch}
                  disabled
                  aria-label="Наступне фото"
                  aria-disabled="true"
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
