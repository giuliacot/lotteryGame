import { c as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, b as createAstro, d as renderComponent } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useReducer } from 'react';
import { r as reducer, i as initReducer, B as Button } from '../chunks/Button_fjWGkl0X.mjs';
import { s as style, a as style$1 } from '../chunks/poll.62248e32_CUoEBJao.mjs';
import 'clsx';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const PollLoadingSpinner = () => {
  return /* @__PURE__ */ jsxs("div", { className: style["poll-loading-spinner"], children: [
    /* @__PURE__ */ jsx("span", { className: style.dot }),
    /* @__PURE__ */ jsx("span", { className: style.dot }),
    /* @__PURE__ */ jsx("span", { className: style.dot })
  ] });
};

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
const Poll = ({ names }) => {
  const [participants, setParticipants] = useState(names);
  useReducer(reducer, initReducer);
  const [winner, setWinner] = useState(null);
  const [animationOn, setAnimationToggle] = useState(false);
  const PULL_LEVER_DURATION = 1e3;
  const triggerAnimation = () => {
    setAnimationToggle(true);
    setTimeout(() => {
      setAnimationToggle(false);
      setWinner(null);
    }, PULL_LEVER_DURATION);
  };
  const handlePoll = () => {
    triggerAnimation();
    setTimeout(() => {
      const randomNumber = getRandomIntInclusive(1, participants?.length ?? 1);
      setWinner(participants?.at(randomNumber)?.nickname ?? "");
    }, 2e3);
  };
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("div", { className: style$1.main, children: [
    /* @__PURE__ */ jsx("h1", { className: "hGrande", children: "Who is the next frontend buddy?" }),
    /* @__PURE__ */ jsxs("section", { className: style$1.slotMachineWrap, children: [
      /* @__PURE__ */ jsx("div", { className: style$1.slotMachineDisplay, children: /* @__PURE__ */ jsx("div", { className: style$1.slotMachineLever, children: /* @__PURE__ */ jsx("div", { className: style$1.slotMachineLeverHandle, children: /* @__PURE__ */ jsx(
        "div",
        {
          className: animationOn ? `${style$1.slotMachineLeverStick} ${style$1.animationLever}` : `${style$1.slotMachineLeverStick}`
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("div", { className: style$1.slotMachineScreen, children: /* @__PURE__ */ jsxs("p", { className: style$1.slotMachineWinner, children: [
        animationOn && /* @__PURE__ */ jsx(PollLoadingSpinner, {}),
        winner && !animationOn && /* @__PURE__ */ jsx(
          "span",
          {
            className: `${!animationOn ? style$1.slotMachineWinnerName : style$1.hideWinnerPlayer}`,
            children: winner
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: style$1.slotMachineKeyboard, children: [
        /* @__PURE__ */ jsx("div", { className: style$1.slotMachineKeyboardFront }),
        /* @__PURE__ */ jsx("div", { className: style$1.slotMachineKeyboardButton }),
        /* @__PURE__ */ jsx("div", { className: style$1.slotMachineKeyboardLeft }),
        /* @__PURE__ */ jsx("div", { className: style$1.slotMachineKeyboardRight })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Button, { className: style$1.drawTheWinner, onClick: () => handlePoll(), children: "Draw the next frontend buddy ✨" })
  ] }) });
};

const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;400;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/giuliatalamonti/Projects/lottery/src/layout/main.astro", void 0);

const $$Poll = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch(
    `https://api.airtable.com/v0/${""}/${""}`,
    {
      headers: {
        authorization: `Bearer ${""}`
      }
    }
  );
  const { records } = await response.json();
  const listOfPartecipants = records?.map(
    (partecipant) => partecipant.fields
  );
  return renderTemplate`${renderComponent($$result, "Main", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "PollComponent", Poll, { "names": listOfPartecipants, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/giuliatalamonti/Projects/lottery/src/components/Poll/Poll", "client:component-export": "Poll" })} ` })}`;
}, "/Users/giuliatalamonti/Projects/lottery/src/pages/poll.astro", void 0);
const $$file = "/Users/giuliatalamonti/Projects/lottery/src/pages/poll.astro";
const $$url = "/poll";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Poll,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
