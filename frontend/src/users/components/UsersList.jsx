import UserItem from "./UserItem";
import './UsersList.css';

export default function UsersList({ items }) {
    return (
        items.length === 0 ?

            <div>
                <h2>No users Found!</h2>
            </div>
            :
            <ul className="users-list">
                {
                    items.map(user =>
                        <UserItem
                            key={user.id}
                            id={user.id}
                            image={user.image}
                            name={user.name}
                            placeCount={user.places} />)
                }
            </ul>
    );
}