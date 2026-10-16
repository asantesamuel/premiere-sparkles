import React from "react";
import Image from "next/image";

const Products = () => (
  <section className="px-5 py-10 sm:px-10 sm:py-14 lg:px-16">
    <article className="salon-card mx-auto grid max-w-[1100px] overflow-hidden border border-[#eadfea] bg-white shadow-[0_16px_44px_rgba(52,29,52,0.08)] lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-[280px] bg-[#f5edf5] sm:min-h-[420px]">
        <Image
          src="/product.jpg"
          alt="Product"
          fill
          sizes="(max-width: 1024px) 100vw, 42vw"
          className="salon-card-image object-contain p-6 sm:p-10"
        />
      </div>
      <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12">
        <p className="salon-eyebrow">Premiere Sparkles Salon</p>
        <h2 className="mt-3 text-2xl font-semibold leading-tight text-[#321d32] sm:text-3xl">A Brief Summary Of The Product</h2>
        <div className="my-5 h-px w-14 bg-[#bd9a47]" />
        <p className="text-sm leading-7 text-[#5d535e] sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Et lacinia at penatibus
          pulvinar pretium scelerisque egestas. Cursus urna nisl turpis
          adipiscing nibh. Nunc quisque ipsum cras vitae cursus lacus.
          Sapien donec ac pellentesque sit sagittis morbi. Diam a dolor nec
          eu sapien donec curabitur sit aliquet. Mattis aliquam id in
          porttitor euismod aliquam nibh vel. Viverra pellentesque
          vestibulum fames in quis proin gravida viverra ultrices. Quam
          sagittis in risus pretium cras donec ut etiam. Fringilla
          scelerisque porttitor cursus porta ultrices interdum. Tincidunt
          sit m interdum. Sit lorem laoreet fusce dignissim lectus mi
          bibendum. Vel at eget lectus duis arcu aliquam. 1
        </p>
      </div>
    </article>
  </section>
);

export default Products;
