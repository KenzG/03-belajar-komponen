import { getImageUrl } from '@/utils/utils';

interface ProfileProps {
  name: string;
  imageId: string;
  profession: string;
  awardsCount: number;
  awardsList: string;
  discovery: string;
}

export default function MyProfile({ name, imageId, profession, awardsCount, awardsList, discovery }: ProfileProps) {
    return (
        <section className="profile border p-4 rounded-lg mb-4">
            <h2 className="text-xl font-bold">{name}</h2>
            
            <img
                className="avatar rounded-full"
                src={getImageUrl({ imageId }, 100)} 
                alt={name}
                width={100}
                height={100}
            />
            
            <ul className="mt-2">
                <li><b>Profession: </b>{profession}</li>
                <li><b>Awards: {awardsCount} </b>({awardsList})</li>
                <li><b>Discoveries: </b>{discovery}</li>
            </ul>
        </section>
    );
}