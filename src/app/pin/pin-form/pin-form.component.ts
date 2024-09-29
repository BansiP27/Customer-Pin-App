import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FileUploader } from 'ng2-file-upload';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { v4 as uuidv4 } from 'uuid';
import { CustomerList } from '../pin-list/pin-list';

@Component({
  selector: 'app-pin-form',
  templateUrl: './pin-form.component.html',
  styleUrls: ['./pin-form.component.scss'],
})
export class PinFormComponent implements OnInit {
  uploader!: FileUploader;
  hasBaseDropZoneOver!: boolean;

  customerList: CustomerList[] = JSON.parse(
    localStorage.getItem('customer-list')!
  );
  pinForm: FormGroup = new FormGroup({
    title: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    collaborators: new FormControl('', Validators.required),
    privacyStatus: new FormControl('private', Validators.required),
  });

  constructor(
    private readonly toastr: ToastrService,
    private readonly modalService: NgbModal,
    private readonly spinner: NgxSpinnerService
  ) {
    this.uploader = new FileUploader({
      url: '',
      allowedFileType: ['image'],
    });

    this.hasBaseDropZoneOver = false;
  }

  ngOnInit() {
    this.uploader.onWhenAddingFileFailed = () => {
      this.toastr.error('Please upload an image file!');
    };

    this.uploader.onAfterAddingFile = (fileItem: any) => {
      if (fileItem._file) {
        const reader = new FileReader();

        reader.onload = (event: any) => {
          this.pinForm.get('image')?.setValue(event.target.result);
        };

        reader.readAsDataURL(fileItem._file);
      }
    };
  }

  fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  onFileDelete(fileUploader: HTMLInputElement) {
    this.uploader.queue = [];
    fileUploader.value = '';
    this.pinForm.get('image')?.setValue('');
  }

  saveForm() {
    if (this.pinForm.invalid) {
      return this.pinForm.markAllAsTouched();
    }

    this.spinner.show();

    const customerList = JSON.parse(localStorage.getItem('pin-list')!) || [];

    customerList.push({
      ...this.pinForm.value,
      id: uuidv4(),
    });

    localStorage.setItem('pin-list', JSON.stringify(customerList));

    this.pinForm.reset();

    this.modalService.dismissAll();

    setTimeout(() => {
      this.spinner.hide();

      this.toastr.success('Pin created successfully!');
    }, 500);
  }
}
