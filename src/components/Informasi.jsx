import React from "react";
import { styled } from "styled-components";

const Img = styled.img`
  width: 50%;
  padding-bottom: 5%;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 786px) {
    width: 300px;
    height: 300px;
    top: 250px;
  }
`;

const Informasi = () => {
  return (
    <section className="container flex flex-col pb-24 px-8 md:flex-row md:pb-2 md:max-w-7xl">
      <h1 className="text-2xl pb-10 font-bold font-serif text-orange-800 tracking-wide md:text-3xl">
        Beberapa Macam Enggang di Indonesia
      </h1>
      <div className="container">
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/rangkong_gading.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Rangkong Gading
          </h1>
          <p className="text-sm text-sky-800">
            Satu-satunya jenis enggang yang memiliki balung (casque), yang
            terbuat dari keratin padat. Burung ini merupakan jenis paling
            terancam punah di Indonesia.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/kangkareng_sulawesi.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Kangkareng Sulawesi
          </h1>
          <p className="text-sm text-sky-800">
            Pemilik nama lain Sulawesi Hornbill ini, adalah salah satu dari tiga
            jenis enggang endemik di Indonesia. Jika dibandingkan dengan enggang
            lainnya, mereka berukuran kecil.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/julang_sulawesi.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Julang Sulawesi
          </h1>
          <p className="text-sm text-sky-800">
            Jenis burung endemik dan terbesar di antara enggang yang berada di
            Pulau Sulawesi. Mereka juga memiliki nama lain, Sulawesi Red-knobbed
            Hornbill.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7  pb-10">
          <img
            src="./img/julang_sumba.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Julang Sumba
          </h1>
          <p className="text-sm text-sky-800">
            Merupakan salah satu dari tiga jenis enggang endemik di Indonesia,
            yang tersebar hanya di Pulau Sumba. Burung besar ini biasa hidup di
            kanopi hutan.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/enggang_jambul.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Enggang Jambul
          </h1>
          <p className="text-sm text-sky-800">
            Menjadi satu-satunya spesies enggang yang memiliki jambul seperti
            mahkota. Di hutan, mereka hidup dalam kelompok kecil; antara 3-8
            individu dan kelompok besar; 20 individu.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/enggang_papan.jpg"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Enggang Papan
          </h1>
          <p className="text-sm text-sky-800">
            Enggang besar Asia yang tersebar di Pulau Sumatera. Kebiasaannya
            menghabiskan hari dengan makan dan istirahat di kanopi hutan yang
            sedang berbuah.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/enggang_cula.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Kangkareng Hitam
          </h1>
          <p className="text-sm text-sky-800">
            Jenis kangkareng ini banyak menghabiskan waktu di kanopi hutan.
            Mereka adalah burung yang senang bersosialisasi dan setia dengan
            pasangannya.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/rangkong_gading.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Julang Jambul Hitam
          </h1>
          <p className="text-sm text-sky-800">
            Umumnya terbang bersama pasangannya ketika dewasa, atau dalam
            kelompok kecil; 3-30 individu. Namun saat remaja, mereka biasa
            terpisah dari kelompoknya dan suka bersuara keras untuk menarik
            perhatian lawan jenis.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/enggang_klihingan.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Enggang Klihingan
          </h1>
          <p className="text-sm text-sky-800">
            Bersifat sosialis, burung ini biasa hidup dalam kelompok antara 2-20
            individu. Kelompok burung ini banyak ditemui di bawah kanopi hutan.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/kangkareng_perutPutih.jpg"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Kangkareng Perut Putih
          </h1>
          <p className="text-sm text-sky-800">
            Tersebar luas di Asia, Kangkareng Perut Putih memiliki kemampuan
            survival yang tinggi karena mudah beradaptasi pada habitat yang
            bahkan telah berubah.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/julang_Emas.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Julang Emas
          </h1>
          <p className="text-sm text-sky-800">
            Membutuhkan area hutan yang luas dan tidak terganggu untuk melakukan
            kegemarannya; menjelajah. Sehingga mereka dianggap tidak toleran
            terhadap hilangnya habitat.
          </p>
        </div>
        <div className=" flex flex-col items-center  text-center leading-7 pb-10">
          <img
            src="./img/julang_Irian.png"
            className=" rounded-full border-4 border-y-sky-600 w-[50%] flex justify-center items-end "
          />
          <h1 className="py-2 text-2xl font-medium text-zinc-800">
            Julang Irian
          </h1>
          <p className="text-sm text-sky-800">
            Tersebar di ujung timur Indonesia, masyarakat lokal menyebutnya
            Kokomo. Meski Julang Irian sering terbang bersama pasangan, namun
            mereka juga suka bergabung dengan kelompok yang berjumlah hingga
            ratusan individu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Informasi;
