import { getImageUrl } from '@/utils/utils';
import Card from './card';

export default function MyProfileV2() {
    return (
        <Card>
            <div className="flex flex-col items-center text-center">
                <h2 className="text-xl font-bold mb-4">Photo</h2>
                <img
                    className="avatar rounded-full border-2 border-zinc-100 shadow-sm"
                    src={getImageUrl({ imageId: 'bOGByD0'}, 100)}
                    alt="Natalie Paquette"
                    width={100}
                    height={100}
                />
                <p className="mt-4 text-zinc-600">Natalie Paquette</p>
                <div className="mt-4">
                    <h3 className="font-bold">About</h3>
                    <p className="text-sm text-zinc-500 max-w-[200px]">
                        Natalie Paquette known as "Wattson" currently as Lecturer in Somer's University, Olympus
                    </p>
                </div>
            </div>
        </Card>
    );
}