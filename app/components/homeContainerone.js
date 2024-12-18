const HomeContainerOne = () => {
  return (
    <div className="bg-mylightpurple flex flex-col md:flex-row justify-center items-center p-6 md:p-8 space-y-8 md:space-y-0 md:space-x-8 w-full h-auto md:h-[500px]">
      {/* Image Section */}
      <div
        className="h-[250px] w-[250px] md:h-[350px] md:w-[350px] xl:h-[400px] xl:w-[400px] bg-cover bg-center bg-no-repeat bg-black bg-opacity-10"
        style={{ backgroundImage: "url('/TIFA2.JPG')" }}></div>

      {/* Text Section */}
      <div className="text-black text-center text-[12px] md:text-[14px] md:text-left lg:text-[16px] xl:text-[18px] md:w-[350px] lg:w-[600px] xl:w-[800px] leading-relaxed">
        <p>
          At Premier Sparkle, beauty is more than skin-deep. It&apos;s about
          embracing your individuality and celebrating what makes you unique.
          Our goal is to create a safe, supportive space where you can explore
          your beauty, build confidence, and feel empowered. With years of
          expertise, we&apos;ve established a proven track record of delivering
          exceptional services. We&apos;ve been behind the scenes of some of
          Ghana&apos;s most iconic videos:
          <span className="font-bold text-slate-950"> KELVYN BOY&apos;S </span>
          &apos;Down Flat&apos;,
          <span className="font-bold text-slate-950">
            {" "}
            BLACK SHERIFF&apos;S
          </span>
          &apos;Gold Digga&apos;, and show-stopping collaborations with
          <span className="font-bold text-slate-950"> QUAMINA MP</span> and
          <span className="font-bold text-slate-950"> KWESI ARTHUR</span>, among
          others. Let’s journey together and experience the art of
          transformation with us.
        </p>
      </div>
    </div>
  );
};

export default HomeContainerOne;
