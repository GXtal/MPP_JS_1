const maxLevels=[[30,30,40,45,50,50],
                [NaN,NaN,55,60,70,80],
                [NaN,NaN,NaN,70,80,90]];

class Character{
    constructor(id,name, type, rarity) {
        this.id = id;//generated
        this.name=name;//inputed
        this.rarity=rarity;//choose
        this.type=type;//choose
        this.level=1;
        this.elite=0;
    }      
    
    getMaxLevel()
    {        
        return maxLevels[this.elite][this.rarity-1];
    }

    levelChange(newLevel)
    {
        if((newLevel>0)&&(newLevel<=this.getMaxLevel()))
        {
            this.level=newLevel;
        }
    }

    eliteChange(newElite)
    {
        let oldElite=this.elite;
        this.elite=newElite;
        if(this.getMaxLevel())
        {
            this.level=1;
        }
        else
        {
            this.elite=oldElite;
        }
    }
}


module.exports = Character