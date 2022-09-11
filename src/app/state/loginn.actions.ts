export class Login {
  static readonly type = '[Loginn] Login';
  constructor(public payload:{mail :string, password :string, rememberMe :boolean}) { }
}
