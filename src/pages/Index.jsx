import MapContainer from "../containers/MapContainer";
import SideBar from "../components/SideBar/SideBar";

const Index = () => {
  return (
    <div className="flex w-full">
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d397-34.5382551227085!2d-56.04419829999999!3d4.6760776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x86e50970ea4a829c!2zNMKwNDAnMzMuOSJOIDc0wrAwMiczOS4xIlc!5e0!3m2!1ses!2sar!4v1666718195397!5m2!1ses!2sar"

        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="flex w-full h-screen"
      ></iframe> */}
      <MapContainer />
    </div>
  );
};

export default Index;
