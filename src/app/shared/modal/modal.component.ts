import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() buttonName: string = 'Save';
  @Input() modalTitle: string = 'General Modal';

  constructor(private readonly modalService: NgbModal) {}

  ngOnInit() {}

  closeModal() {
    this.modalService.dismissAll();
  }
}
