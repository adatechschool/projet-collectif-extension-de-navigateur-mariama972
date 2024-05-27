function hop(n){
    if (n<=1){
        return 1;
    }
    else  {
        //for (let i=2; i<=n ; i++){
            return hop(n-1) + hop(n-2) + hop(n-3);
        //}
        
    }
}

console.log(hop(5));