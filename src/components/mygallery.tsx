import MyProfile from "./myprofile";

export default function MyGallery() {
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Notable Scientists</h1>

            <MyProfile
                name="Yin Ling Lui"
                imageId="l5wCajX"
                profession="Physicist"
                awardsCount={2}
                awardsList="Physics Noble Award, Teleportation Device Award"
                discovery="Alternate Time Travel Device"
            />

            <MyProfile
                name="Reene Blasey"
                imageId="fwckz7H"
                profession="Senior Scientist Pilot"
                awardsCount={2}
                awardsList="Phase Tech Award, Temporal Portal Device Award"
                discovery="Portal Device"
            />
        </div>
    )
}