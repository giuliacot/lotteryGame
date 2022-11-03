import axios from 'axios'

export async function addPlayers(values: Record<string, unknown>) {
  try {
    await axios.post(
      `https://sheet.best/api/sheets/b11dcb32-ec76-4542-8794-abfe56afb99f`,
      values
    )
  } catch (err) {
    console.error(err)
    throw Error('Sheet the best api not working!')
  }
}
