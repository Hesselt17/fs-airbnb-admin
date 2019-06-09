import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/models/booking';
import { ServiceProviderService } from 'src/app/services/service-provider.service';


@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProvidersComponent implements OnInit {

  public bookings: Array<Booking> = [];

  constructor(
    private bookingService: ServiceProviderService
  ) {
    const bookCallback = (err, bookings) => {
      if (err) {
        alert(err.error.message);
        return;
      }
      console.log(bookings);
      this.bookings = bookings;
    };

    this.bookingService.getAllBookings(bookCallback);
    console.log(this.bookings);

  }

  ngOnInit() {
  }

}