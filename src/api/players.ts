import axios from 'axios'

export async function addPlayers(
  values: Record<string, unknown>
): Promise<unknown> {
  try {
    return await axios.post(
      `https://sheet.best/api/sheets/b11dcb32-ec76-4542-8794-abfe56afb99f`,
      //`https://sheet.best/api/sheets/b11dcb32-ec76-4542-8794-abfe56afb99`,

      values
    )
  } catch (err) {
    console.error(err)
    throw Error('POST Sheet the best api not working!')
  }
}

export async function getPlayers() {
  try {
    const result = await axios.get(
      `https://sheet.best/api/sheets/b11dcb32-ec76-4542-8794-abfe56afb99f`
    )
    return result.data
  } catch (err) {
    console.error(err)
    throw Error('GET Sheet the best api not working!')
  }
}
