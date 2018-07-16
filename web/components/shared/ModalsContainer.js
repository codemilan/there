// @flow
import { Container } from 'unstated'

type State = {
  activeIds: Set<string>,
}

export class ModalsContainer extends Container<State> {}

// TODO: Manage modals to close the most recent one on ESC key
