'use client'
import React, { useEffect } from "react";
import Swiper from "swiper";


export default function Recomendations() {
  const props = [
    { image: 'https://mail.google.com/mail/u/0?ui=2&ik=0ec3fcc32b&attid=0.2&permmsgid=msg-f:1773151690277399329&th=189b801157de2b21&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-WhKDMoQY3EikXOyuoWi2Dg83-SlN_d14wCgKKV5qrZxf06kz_vjBxmFqSQx9GyEaKuNsUla1n8NRjD7rUSpdO0U_m0tCkl_eya9_07fcqBWvIytK-ONtctFA&disp=emb&realattid=ii_lku77o141' },
    { image: 'https://mail.google.com/mail/u/0?ui=2&ik=0ec3fcc32b&attid=0.3&permmsgid=msg-f:1773151690277399329&th=189b801157de2b21&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8cFoM0L9pQwoWXpf-xP_fA_NLawbHlcl9v1RkA6M968cPAL1dqUGe7YEFi1eypQHIZZaKonNI1s8YB_3ayxaPUFvwQ9WenXzPGh8ZzMgBTmbP9xbuUvcyWel0&disp=emb&realattid=ii_lku77tvf2' },
    { image: 'https://mail.google.com/mail/u/0?ui=2&ik=0ec3fcc32b&attid=0.4&permmsgid=msg-f:1773151690277399329&th=189b801157de2b21&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8yjWBdKFV4YT2YZBJPYhNzAN9P_FeA074CjjPqGed5yCevz4ncGjoFkwwGzXkt0CDg_KHaB2fTnm9pf5JUlnWMadl0stW1hQSP10Stp3YA6x3LjI6BaQUVtgc&disp=emb&realattid=ii_lku77wz13' },
    { image: 'https://mail.google.com/mail/u/0?ui=2&ik=0ec3fcc32b&attid=0.1&permmsgid=msg-f:1773151690277399329&th=189b801157de2b21&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-C_bnCRv4JrpNZYhQTO64uu92tKYma5rdkGwaAUvvYBF-XEMwPPFlfJ0o1EwQy8JU_2Sq_O-Q8WcYLFoM-B1YfygTGhbjKv2BQ_eQKjWZk5dwc4H6K7bT7byo&disp=emb&realattid=ii_lku77gum0' },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      new Swiper(".swiper-container", {
        slidesPerView: "auto",
        spaceBetween: 0, // Mantém o espaço entre os slides como 0
        direction: "horizontal",
        loop: true,
      });
    }
  }, []);
  
  return (
    <div className="">
      <div className="max-w-screen-xl mx-auto p-4  mb-10 overflow-x-hidden  bg-gradient-to-r from-slate-300 to-slate-200 rounded-3xl shadow-md">
        <h1 className="text-3xl font-bold text-center mb-8">Recomendações</h1>
        <div className="swiper-container">
          <div className="swiper-wrapper flex">
            {props.map(({ image }, i) => (
              <div
                key={i}
                className="swiper-slide flex-shrink-0 p-2 w-full sm:w-1/2 md:w-1/2 lg:w-1/1 mr-2" // Adicione a classe "mr-2" para reduzir a margem entre os elementos
              >
                <img
                  src={image}
                  alt={`Recomendação ${i + 1}`}
                  className="w-full h-auto max-w-2xl max-h-96" // Classe para ajustar o tamanho da imagem
                />
              </div>
            ))}
          </div>
          <div className="swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  );
  
  
}
