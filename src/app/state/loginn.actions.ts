export class LoginnAction {
  static readonly type = '[Loginn] Add item';
  constructor(public payload:{mail :string, password :string}) { }
}
