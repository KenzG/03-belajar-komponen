import Image from "next/image";

export default function Profile() {
    return (
        <Image
            src="https://imgur.com/l5wCajX.png"
            alt="Alter"
            width={500}
            height={500}
            style={{
                maxWidth: "100%",
                height: "auto",
                display: "block",
            }}
        />
    );
}