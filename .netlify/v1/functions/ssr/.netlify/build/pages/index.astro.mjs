import { c as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_DdE926XU.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$Ticket } from '../chunks/ticket_5OXFaLNW.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "TicketLayout", $$Ticket, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="ticket"> <div class="qrcodeWrapper"> <div class="qrcodeInfo"> <h1 class="hGrande">How to win something</h1> <p class="pGrande">Scan the QR code and follow the instruction!</p> </div> <div class="qrcodeElementContainer"> ${renderComponent($$result2, "QRCode", null, { "client:only": true, "client:component-hydration": "only", "client:component-path": "/Users/giuliatalamonti/Projects/lottery/src/components/Qrcode/QRcode", "client:component-export": "QRCode" })} </div> </div> </div> ` })}`;
}, "/Users/giuliatalamonti/Projects/lottery/src/pages/index.astro", void 0);

const $$file = "/Users/giuliatalamonti/Projects/lottery/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
