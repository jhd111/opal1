import React from "react";

const MappAddress = () => {
  return (
    <div>
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.712485656213!2d74.17629698132286!3d32.18502700666244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2918f40c6fd3%3A0xd5529dd4aaa38531!2sOpal%20Institute%20-%20Official%20PTE%20Coaching%20Center-%20Pearson%20Vue%20Authorised%20Test%20Centre!5e0!3m2!1sen!2s!4v1748700152746!5m2!1sen!2s"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Gujranwala Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MappAddress;
