import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { SeriesModel } from './series.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    
    public img ="../assets/img.jpg";
    
    formValue !: FormGroup;
    seriesObj:SeriesModel=new SeriesModel();
    web_series:any;
    showAdd !: boolean;
    showUpdate !: boolean;


    constructor(private formBuilder:FormBuilder,
      private api:ApiService,private router:Router)
    {

    }

    fetchweb_series(series:any)
  {
    this.router.navigate(['/series',series.image,series.Series_name,series.Streaming_Partner,series.director,series.seasons,series.ep_count,series.genre,series.imdb_rating,series.desc,series.airing_date]);
    
    
  }


    ngOnInit()
    {
      this.router.routeReuseStrategy.shouldReuseRoute=()=>false;
      this.formValue=this.formBuilder.group({
        Series_name:[''],
        Image:[''],
        Streaming_Partner:[''],
        director:[''],
        seasons:[''],
        ep_count:[''],
        genre:[''],
        imdb_rating:[''],
        desc:[''],
        airing_date:[''],  
    });
    this.getAllSeriesDetails();
  }

  clickAddweb_series(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }

  postseriesDetails() {
    this.seriesObj.image = this.formValue.value.image;
    this.seriesObj.Series_name = this.formValue.value.Series_name;
    this.seriesObj.Streaming_Partner = this.formValue.value.Streaming_Partner;
    this.seriesObj.director = this.formValue.value.director;
    this.seriesObj.seasons = this.formValue.value.seasons;
    this.seriesObj.ep_count = this.formValue.value.ep_count;
    this.seriesObj.genre = this.formValue.value.genre;
    this.seriesObj.imdb_rating = this.formValue.value.imdb_rating;
    this.seriesObj.desc = this.formValue.value.desc;
    this.seriesObj.airing_date = this.formValue.value.airing_date;
    this.api.postweb_series(this.seriesObj).subscribe(
      res => {
        console.log(res);
        alert("Series Added !");
        this.getAllSeriesDetails();
        let close = document.getElementById("cancel");
        close?.click();
        this.formValue.reset();

      },
      err => {
        alert("something went wrong !");
        this.getAllSeriesDetails();

      }
    )
  }
    getAllSeriesDetails()
    {
      this.api.getAllweb_series().subscribe(
        res=>{
          this.web_series=res;
        }
      )
    }
    deleteweb_series(series: any) {
      this.api.deleteweb_series(series.id).subscribe(
        res => {
          alert("Series deleted");
          this.getAllSeriesDetails();
        }
      )
    }
    
    editweb_series(data: any) {
    
      this.seriesObj.id = data.id;
      this.showAdd=false;
      this.showUpdate=true;

      this.formValue.controls['image'].setValue(data.image);
      this.formValue.controls['Series_name'].setValue(data.Series_name);
      this.formValue.controls['Streaming_Partner'].setValue(data.Streaming_Partner);
      this.formValue.controls['director'].setValue(data.director);
      this.formValue.controls['seasons'].setValue(data.seasons);
      this.formValue.controls['ep_count'].setValue(data.ep_count);
      this.formValue.controls['genre'].setValue(data.genre);
      this.formValue.controls['imdb_rating'].setValue(data.imdb_rating);
      this.formValue.controls['desc'].setValue(data.desc);
      this.formValue.controls['airing_date'].setValue(data.airing_date);  
    }

    updateweb_series() {
      
    this.seriesObj.image = this.formValue.value.image;  
    this.seriesObj.Series_name = this.formValue.value.Series_name;
    this.seriesObj.Streaming_Partner = this.formValue.value.Streaming_Partner;
    this.seriesObj.director = this.formValue.value.director;
    this.seriesObj.seasons = this.formValue.value.seasons;
    this.seriesObj.ep_count = this.formValue.value.ep_count;
    this.seriesObj.genre = this.formValue.value.genre;
    this.seriesObj.imdb_rating = this.formValue.value.imdb_rating;
    this.seriesObj.desc = this.formValue.value.desc;
    this.seriesObj.airing_date = this.formValue.value.airing_date;
  
      this.api.updateweb_series(this.seriesObj, this.seriesObj.id).subscribe(
        res => {
          console.log(res);
          alert("Series Updated successfully!");
          this.getAllSeriesDetails();
          let close = document.getElementById("cancel");
          close?.click();
          this.formValue.reset();
  
        },
        err => {
          alert("something went wrong !");
          this.getAllSeriesDetails();
  
        }
      )
    }
  
}



