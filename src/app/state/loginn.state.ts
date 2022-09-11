import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';

import { Login } from './loginn.actions';

export class LoginnStateModel {
//   items: TodoItem [] ;
}

@State<LoginnStateModel>({
  name: 'loginn',
  defaults : {
    items : []
  },
})
@Injectable()
export class LoginnState {

  @Action(Login)
  login( ctx: StateContext<LoginnStateModel>, action: Login) {
 
    
  }
}
