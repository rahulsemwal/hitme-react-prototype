function Cache(type){
    /*TASK:
    ** 1: set timer with each set function as well to maintain cache for some period of time, set res [] once timer expires 
    */
    const store = {
        _active: false,
        _newsRes: {},
        _timestamp:null,
        _timeDiffInMin: 2,
        _create: function(res){
            this._timestamp = new Date(); 
            this.newsRes = {...res, ...{cache:true}};
            this.active = true; 
        },
        _destroy: function(){
            this._timestamp= null;
            this.newsRes = {};
            this.active = false;
        },
        _isCacheOver:function(){
            let curr_timeStamp = new Date();
            let sub = 0;
            sub = curr_timeStamp - this._timestamp;// miliseconds
            sub = sub/1000/60;// min
            if(sub >= this._timeDiffInMin){
                this._destroy();
            }
        },
        _isDataEmpty: function(){
            if(!this.newsRes.article.length) this._destroy()
        },
        set active(res){
            this._active = res;
        },
        get active(){
            if(this._active) this._isCacheOver(), this._isDataEmpty;
            return this._active;
        },
        set newsRes(res){
            this._newsRes = res;
        },
        get newsRes(){
            return this._newsRes;
        }
    };
    return store;
}

module.exports = Cache();