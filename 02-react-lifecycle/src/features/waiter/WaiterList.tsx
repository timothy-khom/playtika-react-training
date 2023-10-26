import {WaiterI} from "./type";
import {WaiterItem} from "./WaiterItem";

interface WaiterListPropsI {
    list: WaiterI[];
    editWaiter: (waiter: WaiterI) => void;
    deleteWaiter: (id: number) => void;
}

export function WaiterList({list, deleteWaiter, editWaiter}: WaiterListPropsI): React.ReactElement {
    return (
        <table>
            <thead>
            <tr>
                <th>Id</th>
                <th>firstName</th>
                <th>phone</th>
            </tr>
            </thead>
            <tbody>
            {list.map((waiter) => (
                <WaiterItem
                    waiter={waiter}
                    key={waiter.id}
                    deleteWaiter={deleteWaiter}
                    editWaiter={editWaiter}
                />
            ))}
            </tbody>
        </table>
    );
}