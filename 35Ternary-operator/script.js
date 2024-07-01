const age = 19

// using ternary operator

const canVote = age > 18? console.log('You can vote!'): console.log('You still have time')

// MultipleStatements

const auth = true

let redirect;

if (auth){
    alert('Welcome to the dashboard')
    redirect = '/dashboard';
}else{
    alert('Access Denied');
    redirect = '/login'
}

// Assign a conditional value to a variable

const redirect_page = auth ? (alert('Welcome to Dashboard'), '/dashboard') : (alert('Access Denied'), '/login')

console.log(redirect_page)


auth ? console.log('Welcome to the dashboard') : null;
 
auth && console.log('Welcome to the dashboard')