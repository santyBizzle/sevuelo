import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'request-byDestination',
  templateUrl: './request-byDestination.component.html',
  styleUrls: ['./request-byDestination.component.scss'],
})
export class RequestByDestinationComponent implements OnInit {
  requests: Request[];
  
  destination: string=null;

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    console.log('init');
  }

  previousState(): void {
    window.history.back();
  }

  /* getRequest(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.requestService.getRequest(Number.parseInt(id))
      .subscribe(request => this.req = request);
  }
*/
  getRequestByDestination(): void {
    //const destination = this.route.snapshot.paramMap.get('destination');
    console.log('enfront!!!!>>>>', this.destination);
    const d = 'quito';
    this.requestService
      .getResourceByDestination(this.destination)
      .subscribe((requests) => (this.requests = requests));
    console.log(this.requests);
  }
}
