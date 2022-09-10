import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { LoginnAction } from './loginn.actions';

export class LoginnStateModel {
//  public items: string[];
}

const defaults = {
  items: []
};

@State<LoginnStateModel>({
  name: 'loginn',
  defaults
})
@Injectable()
export class LoginnState {
  @Action(LoginnAction)
  add({ getState, setState }: StateContext<LoginnStateModel>, { payload }: LoginnAction) {
    const state = getState();
   // setState({ items: [ ...state.items, payload ] });
  }
}
