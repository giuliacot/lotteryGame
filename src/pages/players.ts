type PlayerRecord = { fields: { nickname: string } };

export async function POST({ request }: { request: Request }) {
	const data = await request.json();
	const addPlayerUrl = `https://api.airtable.com/v0/${
		import.meta.env.AIRTABLE_BASE_ID
	}/${import.meta.env.AIRTABLE_TABLE_ID}`;

	const fields: PlayerRecord = { fields: { ...data } };

	const response = await fetch(addPlayerUrl, {
		method: "POST",
		headers: {
			authorization: `Bearer ${import.meta.env.AIRTABLE_API_SECRET}`,
			"Content-type": "application/json",
		},
		body: JSON.stringify(fields),
	});

	const responseData = await response.json();

	if (responseData.error)
		return new Response(JSON.stringify(responseData), { status: 500 });

	return new Response(JSON.stringify(responseData), { status: 200 });
}

// TODO: adds get methods for Poll
