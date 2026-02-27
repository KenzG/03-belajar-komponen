import { getImageUrl } from '@/utils/utils';

type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}

export default function Profile() {
    return (
        <div className="columns-3">
        <Avatar 
            size={100}
            person={{
                name: 'Jack Cooper',
                imageId: 'XmhgzOX'
            }}
        />
        <Avatar
            size={100}
            person={{
                name: 'Kuben Blisk',
                imageId: 'HRmGv0a'
            }}
        />
        <Avatar 
            size={100}
            person={{
                name: 'VIPER',
                imageId: 'k3e2iXb'
            }}
        />
        </div>
    );
}