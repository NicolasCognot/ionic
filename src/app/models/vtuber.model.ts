export class Vtuber {
    id?: string;
    language: string;
    streamingPlatform: string;
    graduated: boolean;
    pictureLink: string;
    wave: string;
    agency: string;
    dateDebut: string;
    fanName: string;
    lore: string;
    artist: string;
    name: string;

    constructor() {
        this.language = '';
        this.streamingPlatform = '';
        this.graduated = false;
        this.pictureLink = '';
        this.wave = '';
        this.agency = '';
        this.dateDebut = '';
        this.fanName = '';
        this.lore = '';
        this.artist = '';
        this.name = '';
    }
}
