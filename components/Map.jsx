function Map() {
  return (
    <div className="mt-20">
      <h2 className="headingColor">موقعنا على الخريطه</h2>
      <span className="headingBorderColor"></span>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14497.524914025693!2d46.678291!3d24.713789!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d489399%3A0xba974d1c98e79fd5!2z2KfZhNix2YrYp9i2INin2YTYs9i52YjYr9mK2Kk!5e0!3m2!1sar!2sus!4v1716423316659!5m2!1sar!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          className="w-full h-[600px]"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Map;
