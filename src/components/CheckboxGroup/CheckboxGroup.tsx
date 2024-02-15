import { Checkbox, List, ListItem } from "@mui/joy";
import { useCallback, useEffect, useState } from "react";
import { CheckboxGroupProps } from "./definitions";

const CheckboxGroup = ({ options, onChange }: CheckboxGroupProps) => {
  const [checkedItems, setCheckedItems] = useState<typeof options>([]);

  const handleChange = useCallback((option: (typeof options)[number]) => {
    setCheckedItems((prevItems) => {
      const matchingItemIndex = prevItems.findIndex(
        (item) => item.value === option.value
      );

      if (matchingItemIndex > -1) {
        // remove option
        const newItems = [...prevItems];
        newItems.splice(matchingItemIndex, 1);
        return newItems;
      }

      // add option
      return [...prevItems, option];
    });
  }, []);

  useEffect(() => {
    onChange(checkedItems.map((item) => item.label));
  }, [checkedItems, onChange]);

  return (
    <List size="sm" color="danger">
      {options.map((option) => {
        const isChecked =
          checkedItems.findIndex((item) => item.value === option.value) > -1;
        return (
          <ListItem key={option.value}>
            <Checkbox
              label={option.label}
              checked={isChecked}
              onChange={() => handleChange(option)}
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckboxGroup;
