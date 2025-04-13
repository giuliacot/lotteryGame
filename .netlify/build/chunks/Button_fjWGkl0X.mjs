import { jsx } from 'react/jsx-runtime';
import { a as style } from './player.d1e9a737_DBF6pf3C.mjs';

const initReducer = {
  error: false,
  done: false,
  loading: false
};
function reducer(state, action) {
  switch (action.type) {
    case "set_done": {
      return { ...state, done: true, loading: false };
    }
    case "set_error": {
      return { ...state, error: true, loading: false };
    }
    case "set_loading": {
      return { ...state, loading: true };
    }
  }
  throw Error("Unknown action: " + action.type);
}

const Button = ({
  type,
  form,
  children,
  className,
  ...props
}) => {
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: `${style.button} ${className ?? ""}`,
      type,
      form,
      ...props,
      children
    }
  );
};

export { Button as B, initReducer as i, reducer as r };
