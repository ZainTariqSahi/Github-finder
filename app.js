//Init
const github=new Github;
const ui=new Ui;

//getting search values

const searchUser=document.getElementById('searchUser');

searchUser.addEventListener('keyup',(e)=>{
    const userText=e.target.value;
    if(userText!==''){
        github.getUser(userText).then(data=>{ if(data.profile.message==='Not Found'){
            //Show alert
            ui.showAlert('User not found','alert alert-danger')
        }else{
            //show profile
            ui.showProfile(data.profile)
            ui.showRepos(data.repos)
        }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
   
});