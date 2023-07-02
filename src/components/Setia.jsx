import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Love from "./Love";

const Setia = () => {
  return (
    <section className="container flex flex-col pb-24 px-8 md:flex-row md:pb-2 md:max-w-7xl">
        <div id="kiri" className="flex-1 relative py-7 pb-8">
          <Canvas>
            <Stage environment="city" intensity={0.7}>
              <Love />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
            <ambientLight intensity={0.2} />
            <directionalLight position={[3, 2, 1]} />
            {/* <Bola /> */}
          </Canvas>
        </div>
        <div
          id="kanan"
          className="flex-1 flex-col items-center justify-end gap-5 mt-[10%] leading-7"
        >
          <h1 className="text-5xl px-6 font-bold  text-[#2460a4]">Love Story</h1>
          <p className="font-sans px-6">
            Enggang hanya memiliki satu pasangan selama hidupnya
            (monogami). Setelah menemukan lubang sarang yang tepat, sang betina
            akan masuk dan mengurung diri. Butuh sekitar 180 hari bagi Enggang
            untuk menghasilkan satu anak. Bersama Enggang jantan, lubang sarang
            akan ditutup menggunakan adonan berupa tanah liat yang dibubuhi
            kotorannya. Celah sempit disisakan pada lubang penutup untuk
            mengambil hantaran makanan dari sang jantan, dan juga untuk menjaga
            suhu dan kebersihan di dalam sarang. Di dalam sarang, sang betina
            akan meluruhkan sebagian bulu terbangnya (moulting) untuk membuat
            alas demi menjaga kehangatan telur. Burung betina tidak akan dapat
            terbang dan bergantung sepenuhnya pada sang jantan, sampai sang anak
            keluar dari sarang. Tahap bertelur, mengerami, menetas, sampai anak
            siap keluar dari sarang membutuhkan waktu selama enam bulan.
          </p>
        </div>
    </section>
  );
};

export default Setia;
