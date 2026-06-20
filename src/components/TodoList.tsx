import type { TodoItemType } from "../types";
import { TodoItem } from "./TodoItem";

type TodoItemProps = {
    items: TodoItemType[];
    onRemoveItem: (id: string) => void;
}
    
export const TodoList = ({ items, onRemoveItem }: TodoItemProps) => {
    return (
        <div className="flex flex-col gap-4">
            {items.map((item) => (
                <TodoItem key={item.id} item={item} onRemove={onRemoveItem} />
            ))}
        </div>
    );
}