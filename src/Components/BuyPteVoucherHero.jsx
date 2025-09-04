import BuyPteVoucher from "../assets/BuyPteVoucher.png";
import p1 from "../assets/images/home/p1.png";
import p2 from "../assets/images/home/p2.png";
import p3 from "../assets/images/home/p3.png";
import p4 from "../assets/images/home/p4.png";
import comptia from "../assets/images/home/comptia.png";

const BuyPteVoucherHero = () => {
  return (
    <div className="relative">
      <img src={BuyPteVoucher} alt="" />
      <div className="w-[90%] md:w-[80%] lg:w-[75%] xl:w-[83%] bg-white relative md:absolute rounded-md md:left-[10%] lg:left-[13%] xl:left-[8.5%] 2xl:left-[8.5%] mt-10 md:bottom-8 lg:-bottom-16 xl:-bottom-14 2xl:bottom-24 grid grid-cols-3 md:grid-cols-5 gap-4 shadow-md mx-auto py-4 px-2">
        {[p1, p4, p2, p3, comptia].map((val, i) => (
          <div key={i} className="flex justify-center items-center">
            <img
              src={val}
              alt=""
              className="w-[100px] md:w-[120px] lg:w-[130px] xl:w-[140px] object-contain"
            />
          </div>
        ))}
      </div>
      </div>
  );
};

export default BuyPteVoucherHero;
