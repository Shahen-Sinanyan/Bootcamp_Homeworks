class TV {
    constructor (brand, channel = 1, volume = 50) {
        this.brand = brand;
        this.channel = channel;
        this.volume = volume;
    }
    changeVolume (volumeLvl) {
        if (volumeLvl > 100) {
            this.volume = 100;
        } else if (volumeLvl < 0) {
            this.volume = 0;
        } else {
            this.volume = volumeLvl;
        }
        console.log( `volume: ${this.volume}`);
    }
    setChannel (channelNumber) {
        if (channelNumber <= 50 && channelNumber >= 0) {
            this.channel = channelNumber;
        }
        console.log( `channel: ${this.channel}`);
    }
    resetTV () { 
      this.volume = 50 ; // this.volume = this.constructor.volume;
      this.channel = 1 ;// this.channel = this.constructor.channel;
       console.log('The TV reseted; volume: 50; channel: 1')
    }
    status () {
        console.log (`${this.brand} at channel ${this.channel}, volume ${this.volume}`);
    }
}

let tv = new TV('Sony');
tv.changeVolume(300);
tv.changeVolume(33);
tv.setChannel(190);
tv.setChannel(3);
tv.resetTV()
tv.status()