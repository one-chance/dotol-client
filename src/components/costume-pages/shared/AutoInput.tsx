import { useState } from 'react';

import { FlexView, Input } from '@components/common';
import { Colors } from '@styles/index';

const example = [`풍월요괴고1`, `풍월요괴고2`, `풍월요괴고3`, `랫서판다`];

export default function AutoInput() {
  const [value, setValue] = useState(``);
  const [list, setList] = useState<string[]>([]);

  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  const [keyDown, setKeyDown] = useState<boolean>(false);

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (keyDown) {
      return setKeyDown(false);
    }

    setValue(e.target.value);
    updateSuggestions(e.target.value);
  };

  const updateSuggestions = (test: string) => {
    if (test === ``) return setList([]);

    const regex = new RegExp(`^${test}`, `i`);
    setList(example.filter(element => regex.test(element)));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === `ArrowDown` && list.length - 1 > selectedIndex) {
      setKeyDown(true);
      e.preventDefault();
      setSelectedIndex(selectedIndex + 1);
    } else if (e.key === `ArrowUp` && selectedIndex > -1) {
      e.preventDefault();
      setKeyDown(true);
      setSelectedIndex(selectedIndex - 1);
    } else if (e.key === `Enter`) {
      // list[selectedIndex] 값으로 함수 실행
    }
  };

  return (
    <FlexView css={{ position: `relative` }}>
      <Input
        value={list[selectedIndex] ?? value}
        onInput={inputValue}
        onKeyDown={handleKeyDown}
      />

      {list.length > 0 && (
        <ul
          css={{
            position: `absolute`,
            marginTop: `40px`,
            width: `100%`,
            backgroundColor: Colors.white,
            border: `1px solid lightgray`,
            borderRadius: `4px`,
            padding: 0,
          }}
        >
          {list?.map((name, index) => (
            <li
              key={index}
              css={{
                backgroundColor:
                  list[selectedIndex] === name
                    ? Colors.background
                    : Colors.white,
                lineHeight: `30px`,
                padding: `0 10px`,
                listStyle: `none`,
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      )}
    </FlexView>
  );
}
