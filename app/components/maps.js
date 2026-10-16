import React from "react";

const Map = () => {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center lg:min-h-[520px]">
      <div className="h-full min-h-[320px] w-full">
        <iframe
          title="Map to Premiere Sparkles Salon in North Legon"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15880.80589968753!2d-0.20882642876632865!3d5.683995926072258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c540974acf7%3A0x447b5d25a869756d!2sNorth%20Legon!5e0!3m2!1sen!2sgh!4v1732280580286!5m2!1sen!2sgh"
          width={"100%"}
          height={"100%"}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  );
};

export default Map;
