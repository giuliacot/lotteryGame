import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useReducer } from 'react';
import { s as style } from '../chunks/player.d1e9a737_DBF6pf3C.mjs';
import { r as reducer, i as initReducer, B as Button } from '../chunks/Button_fjWGkl0X.mjs';
import { s as style$1, a as style$2 } from '../chunks/player.b1bd205f_BKEOfbIX.mjs';
import { $ as $$Ticket } from '../chunks/ticket_5OXFaLNW.mjs';
export { renderers } from '../renderers.mjs';

const InfoBox = ({
  type,
  children
}) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: `${style.container} ${type === "error" ? style.error : type === "warning" ? style.warning : style.info}`,
      children
    }
  );
};

const Input = ({ placeholder, name, className }) => {
  return /* @__PURE__ */ jsx(
    "input",
    {
      className: `${style$1.input} ${className}`,
      type: "text",
      placeholder,
      name
    }
  );
};
const Label = ({ children, labelFor }) => {
  return /* @__PURE__ */ jsx("label", { className: style$1.label, htmlFor: labelFor, children });
};
const InputWithLabel = {
  Label,
  Input
};

const Player = () => {
  const [state, dispatch] = useReducer(reducer, initReducer);
  const setPlayers = async (nickname) => {
    try {
      const response = await fetch("/players", {
        method: "POST",
        body: JSON.stringify({
          nickname
        })
      });
      console.log(response);
      const addedPlayer = await response.json();
      if (addedPlayer) {
        dispatch({ type: "set_done" });
      }
    } catch (e) {
      console.error(e);
      dispatch({ type: "set_error" });
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const formParticipant = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );
    if (typeof formParticipant.nickname === "string") {
      setPlayers(formParticipant.nickname);
      dispatch({ type: "set_loading" });
    }
  };
  if (state.done) {
    return /* @__PURE__ */ jsx(InfoBox, { type: "info", children: "Well done and thanks to participate!" });
  }
  return /* @__PURE__ */ jsxs("div", { className: style$2.playerInsertWrapper, children: [
    /* @__PURE__ */ jsx("h1", { className: "hPiccolo", children: "Give us your name to be extracted for a terrific gift!" }),
    state.loading ? /* @__PURE__ */ jsx("span", { children: "Loading..." }) : /* @__PURE__ */ jsxs(
      "form",
      {
        className: style$2.nicknameForm,
        id: "getNickname",
        onSubmit: handleSubmit,
        children: [
          /* @__PURE__ */ jsx(InputWithLabel.Label, { labelFor: "nickname", children: "Nickname" }),
          /* @__PURE__ */ jsx(
            InputWithLabel.Input,
            {
              id: "nickname",
              placeholder: "A funny nickname of yours",
              name: "nickname",
              className: "input"
            }
          ),
          /* @__PURE__ */ jsx(Button, { type: "submit", form: "getNickname", className: style$2.playerBtn, children: "Let's play!" })
        ]
      }
    ),
    state.error && /* @__PURE__ */ jsx(InfoBox, { type: "error", children: "Oh no! I can't add your name :( " })
  ] });
};

const $$Player = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "TicketLayout", $$Ticket, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="ticketContent"> ${renderComponent($$result2, "Player", Player, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/giuliatalamonti/Projects/lottery/src/components/Player/Player", "client:component-export": "Player" })} </div> ` })}`;
}, "/Users/giuliatalamonti/Projects/lottery/src/pages/player.astro", void 0);

const $$file = "/Users/giuliatalamonti/Projects/lottery/src/pages/player.astro";
const $$url = "/player";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Player,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
