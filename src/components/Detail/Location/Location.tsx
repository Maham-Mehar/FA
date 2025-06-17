import { DescriptionData } from '@/data/Detail';
import { GoogleMap, LoadScript, Circle } from "@react-google-maps/api";

const Location = () => {

    const mapContainerStyle = {
            width: "100%",
            height: "300px",
            borderRadius: "8px",
        };
    
        const center = {
            lat: 46.1603,
            lng: -1.1511,
        };
    
        const options = {
            disableDefaultUI: true,
            zoomControl: true,
        };
    
        const circleOptions = {
            strokeColor: "#022252",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#022252",
            fillOpacity: 0.2,
            radius: 20000,
        };

    return (
        <div>
            {DescriptionData.map((item, index) => (
                <div key={index}>
                    <div className='flex items-center gap-2 mt-[16px]'>
                        {item.iconl && <item.iconl className="text-[#012A50] text-[24px]" />}
                        <p className='text-[#001B48] font-extrabold text-[19px] font-plusjakarta'>{item.location}</p>
                    </div>
                    <div className='mt-[16px] flex items-center gap-1'>
                        <p className='text-[#005292] font-medium text-[19px] font-plusjakarta'>{item.locationmap}</p>
                        <p className='text-[#005292] font-medium text-[19px] font-plusjakarta underline cursor-pointer'>{item.loc}</p>
                    </div>
                    <div className='mt-[16px] pb-[16px]'>
                        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
                            <GoogleMap mapContainerStyle={mapContainerStyle} zoom={9} center={center} options={options}>
                                <Circle center={center} options={circleOptions} />
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Location;