import { c as createComponent, r as renderTemplate, e as renderHead, f as renderSlot, b as createAstro } from './astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                        */

const $$Astro = createAstro();
const $$Ticket = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Ticket;
  Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><!-- <link rel="stylesheet" type="text/css" href="http://yui.yahooapis.com/3.18.1/build/cssreset/cssreset-min.css"> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;400;900&display=swap" rel="stylesheet">${renderHead()}</head> <body> <main class="container"> ${renderSlot($$result, $$slots["default"])} </main> </body></html>`;
}, "/Users/giuliatalamonti/Projects/lottery/src/layout/ticket.astro", void 0);

export { $$Ticket as $ };
