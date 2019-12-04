import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form-reactive',
  templateUrl: './user-form-reactive.component.html',
  styleUrls: ['./user-form-reactive.component.scss']
})
export class UserFormReactiveComponent implements OnInit {

  /**
   * Fonctionne mais non recommandé.
   * @deprecated Juste pour exemple.
   */
  formSansFormBuilder = new FormGroup({
    name: new FormControl('', Validators.required),
    value: new FormControl(0, [Validators.min(0), Validators.max(500)]),
    addresses: new FormArray([
      new FormGroup({
        nb: new FormControl(null),
        street: new FormControl(null),
        city: new FormControl(null)
      })
    ])
  });

  /**
   * Recommandé.
   * @deprecated Juste pour exemple.
   */
  formAvecBuilder = this.fb.group({
    name: ['', Validators.required],
    value: [0, [Validators.min(0), Validators.max(500)]],
    addresses: this.fb.array([
      this.fb.group({
        nb: null,
        street: null,
        city: null
      })
    ])
  });

  /** Notre vrai formulaire. */
  form = this.fb.group({
    username: [null, Validators.required]
  });

  constructor(
      private readonly router: Router,
      private readonly fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    for (const elt of Object.values(this.form.controls)) {
      elt.markAsTouched();
    }
    // ou
    Object.values(this.form.controls).forEach(elt => elt.markAsTouched());

    if (this.form.valid) {
      // Vrai process.
      // this.api.create(this.form.value)
      //     .subscribe(e => this.router.navigate(['..', e.id, 'details']));
    }
  }

  get name() {
    return this.form.controls.username;
  }

}
