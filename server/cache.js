function Cache(type){
    /*TASK:
    ** 1: set timer with each set function as well to maintain cache for some period of time, set res [] once timer expires 
    */
    const store = {
        // _newsRes - private
        // newsRes  -  public
        _newsRes: {},
        set newsRes(res){
            //set timer as well to maintain cache for some set of time
            this._newsRes = {...res, ...{cache:true}};
        },
        get newsRes(){
            return this._newsRes;
        }
    };
    return store;
}

module.exports = Cache();