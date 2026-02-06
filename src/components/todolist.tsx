const baseUrl = 'https://i.imgur.com/';
const person = {
    name: 'Ying Ling Lui',
    imageId: 'l5wCajX',
    imageSize: 'b',
    imageUrl: 'https://imgur.com/l5wCajX.png',
    theme: {
        backgroundColor: 'black',
        color: 'white'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}'s Todos</h1>
            <img
                className="avatar"
                src={'${baseUrl}${person,imageId}${person,imageSize}.png'}
                alt={person.name}
            />
            <ul>
                <li>Improve The Teleportation Device</li>
                <li>Teleportation Lectures</li>
                <li>Works in Sommer's Lab</li>
            </ul>
        </div>
    );
}