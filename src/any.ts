import axios from 'axios';
export {};
let url: string = "https://udemy-utils.herokuapp.com/api/v1/articles?token=token123";

axios.get(url).then(function(response){
  interface Articl{
    id: number;
    title: string;
    description: string;
  }
  let data: Articl[];
  data = response.data
  console.log(data);
});
