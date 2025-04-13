export { renderers } from '../renderers.mjs';

async function POST({ request }) {
  const data = await request.json();
  const addPlayerUrl = `https://api.airtable.com/v0/${""}/${""}`;
  const fields = { fields: { ...data } };
  const response = await fetch(addPlayerUrl, {
    method: "POST",
    headers: {
      authorization: `Bearer ${""}`,
      "Content-type": "application/json"
    },
    body: JSON.stringify(fields)
  });
  const responseData = await response.json();
  if (responseData.error)
    return new Response(JSON.stringify(responseData), { status: 500 });
  return new Response(JSON.stringify(responseData), { status: 200 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
