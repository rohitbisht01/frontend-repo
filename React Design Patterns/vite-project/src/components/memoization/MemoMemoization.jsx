// One common use case for useMemo is to optimize the rendering of large lists. Consider this code:

import { useMemo } from "react";

// The List component is rendering a list of items that first have to be filtered, then sorted, and finally rendered. This can be an expensive operation, especially if the list is very large.

const List = ({ items }) => {
  const filteredItems = useMemo(() => {
    items.filter((item) => item.isActive);
  }, [items]);

  const sortedItems = useMemo(() => {
    filteredItems.sort((a, b) => a.date - b.date);
  }, [filteredItems]);

  const renderedItems = useMemo(() => {
    sortedItems.map((item) => <Item key={item.id} item={item} />);
  }, [sortedItems]);

  return <div>{renderedItems}</div>;
};

const MemoMemoization = () => {
  return (
    <div>
      <List items={items} />
    </div>
  );
};

export default MemoMemoization;
