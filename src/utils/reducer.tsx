export const initReducer = {
  error: false,
  done: false,
  loading: false,
}

export function reducer(
  state: { error: boolean; done: boolean },
  action: { type: string }
) {
  switch (action.type) {
    case 'set_done': {
      return { ...state, done: true, loading: false }
    }
    case 'set_error': {
      return { ...state, error: true, loading: false }
    }
    case 'set_loading': {
      return { ...state, loading: true }
    }
  }
  throw Error('Unknown action: ' + action.type)
}
