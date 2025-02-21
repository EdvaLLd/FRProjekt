import { BankUser } from "./BankUser";

export function getUsers(): BankUser[]{
    let users:BankUser[] = [];
    let counter: number = 0;
    let continueSearching: boolean = true;
    while(continueSearching)
    {
      let user = sessionStorage.getItem('user' + counter);
      counter++;
      if(user){
        const parsedUser = JSON.parse(user);
        users.push(parsedUser);
      }
      else{
        continueSearching = false;
      }
    }
    console.log(users);
    return users;
  }
  export function populateBank(){
    addUser({
      name: 'John',
      balance: 100,
      id: 0
    });
    addUser({
      name: 'Mark',
      balance: 1000,
      id: 1
    });
    addUser({
      name: 'Lisa',
      balance: 0,
      id: 2
    });
    addUser({
      name: 'Susy',
      balance: 200,
      id: 3
    });
  }

  export function addUser(user: BankUser){
    const jsonString: string = JSON.stringify(user, null, 2);
    sessionStorage.setItem('user' + user.id, jsonString);
  }

  export function getUser(id:number): BankUser
  {
    let user = sessionStorage.getItem('user' + id);
    if(user){
      const parsedUser = JSON.parse(user);
      return parsedUser;
    }
    return {name: '', balance: 0, id: 0};
  }