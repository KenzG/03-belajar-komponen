import { getImageUrl } from '@/utils/utils';

type Person = {
  name: string;
  imageId: string;
};

function Avatar({ person, size }: { person: Person; size: number }) {
    return (
        <div className="flex flex-col items-center gap-2"> 
            <img
                className="avatar rounded-full border-1 border-zinc-200"
                src={getImageUrl(person)}
                alt={person.name} 
                width={size}
                height={size}
            />
            <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                {person.name}
            </p>
        </div>
    );
}

export default function Profile() {
    return (
        <div className="flex justify-center gap-8"> 
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