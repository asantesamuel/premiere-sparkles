import React from "react";

const Map = () => {
  return (
    <div className="flex justify-center items-center h-[400px]  md:h-[450px] md:w-full">
      <div className="  h-full w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63530.85763518723!2d-0.22723773564652416!3d5.614390374723309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9de5b3531e01%3A0xae38286a31fcaa10!2sSparkle%20Nails%20Lounge!5e0!3m2!1sen!2sgh!4v1730994046347!5m2!1sen!2sgh"
          width={"100%"}
          height={"100%"}
          allowfullscreen=""
          loading="eager"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;
