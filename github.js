class Github{
    constructor(){
        this.client_id='6230d8edf28a35323cdf';
        this.client_secret='ded8b52ac05f7b253ac107b8c1ab3b7a655eb4b0';  
        this.repos_count=5;
        this.repos_sort='created: asc'; 
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile=await profileResponse.json();
        const repos=await repoResponse.json();
        return{
            profile,
            repos
        }
    }
}