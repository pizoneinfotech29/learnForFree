import {InMemoryDbService} from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService{
  createDb(){
    let bookDetails=[
      {id:100, name:'angular by maxi', category:'angular'},
      {id:101, name:'react by jhon', category:'react'},
      {id:102, name:'angular by anu', category:'angular'},
      {id:103, name:'javascript by maxi', category:'javascript'}
    ];
    return {books:bookDetails};
  }
}
