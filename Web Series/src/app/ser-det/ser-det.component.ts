import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-ser-det',
  templateUrl: './ser-det.component.html',
  styleUrls: ['./ser-det.component.css']
})
export class SerDetComponent {
  public sSeries_name:any;
  public simage:any;
  public sStreaming_Partner:any;
  public sdirector:any;
  public sseasons:any;
  public sep_count:any;  
  public sgenre:any;
  public simdb_rating:any;
  public sdesc:any;
  public sairing_date:any;

    constructor(private route : ActivatedRoute){
  
    }
    ngOnInit()
    {
      let Series_name= this.route.snapshot.paramMap.get('Series_name');
      this.sSeries_name=Series_name;

      let image= this.route.snapshot.paramMap.get('simage');
      this.simage=image;
  
      let Streaming_Partner= this.route.snapshot.paramMap.get('Streaming_Partner');
      this.sStreaming_Partner=Streaming_Partner;
  
      let director = this.route.snapshot.paramMap.get('director');
      this.sdirector=director;
  
      let seasons = this.route.snapshot.paramMap.get('seasons');
      this.sseasons=seasons;
      
      let ep_count = this.route.snapshot.paramMap.get('ep_count');
      this.sep_count=ep_count;

      let genre= this.route.snapshot.paramMap.get('genre');
      this.sgenre=genre;
  
      let imdb_rating = this.route.snapshot.paramMap.get('imdb_rating');
      this.simdb_rating=imdb_rating;
  
      let desc = this.route.snapshot.paramMap.get('desc');
      this.sdesc=desc;
      
      let airing_date = this.route.snapshot.paramMap.get('airing_date');
      this.sairing_date=airing_date;

    }
  
}
