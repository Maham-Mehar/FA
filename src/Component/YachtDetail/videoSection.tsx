const VideoSection = () => {
    return (
        <section className="max-w-7xl mx-auto ">
            <div className="flex justify-center">
                <div className="relative w-full h-[320px] md:h-[410px] lg:h-[440px] xl:h-[520px] overflow-hidden shadow-lg">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/Kh_faBPmQ4E"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    )
}
export default VideoSection;