import { Component, OnInit } from '@angular/core';
import { Request } from '../request.model';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.scss'],
})
export class RequestsComponent implements OnInit {
  requests: Request[];

  selectedRequest: Request;

  constructor(private requestService: RequestService) {}

  ngOnInit(): void {
    //   this.getRequests();
    this.getRequestsPreview();
  }

  getRequests(): void {
    this.requestService
      .getRequests()
      .subscribe((requests) => {(this.requests = requests)}

      
      );
  }

  getRequestsPreview(): void {
    this.requestService.getRequestsPreview().subscribe((requests) => {
      this.requests = requests;
      console.log('preview>> ', requests);
    });
    this.getRequests();
  }
  deleteRequest(id: string): void {
    console.log('a eliminar >> ', id);

    const refres = this.requestService
      .deleteRequest(Number.parseInt(id))
      .subscribe((request) => {
        this.selectedRequest = request;
        this.ngOnInit();
      });
    this.getRequests();
  }
}
