export default class Game{
    constructor(){
        this.gameId;
    }
    
    async addGame(name, url){
        let data;
        try {
            const req = await fetch(url, {
              method: 'POST',
              body: JSON.stringify(name),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            });
            data = await req.json();
          } catch (error) {
            this.alert(error);
            data = null;
          }

          return data;
    }

    async addScore(user, score, url) {
        try {
          const req = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ user, score }),
            headers: {
              'Content-type': 'application/json; charset=UTF-8',
            },
          });
    
          const data = await req.json();
        } catch (error) {
          this.alert(error);
        }
      }

    async fetchData(url) {
        let data ;
      try {
        const request = new Request(url);
        const response = await fetch(request);
         data = await response.json();
      } catch (error) {
        this.alert(error);
        data = null
      }
      return data.result;
    }
}