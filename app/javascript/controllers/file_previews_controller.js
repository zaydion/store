import { Controller } from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['featuredImageInput', 'featuredImage']
  connect() {}

  preview(event) {
    const file = this.featuredImageInputTarget.files[0]
    const reader = new FileReader()

    reader.onloadend = (event) => {
      this.featuredImageTarget.src = event.target.result
    }

    if (file) {
      reader.readAsDataURL(file)
    } else {
      this.featuredImageTarget.src = ''
    }

    this.featuredImageTarget.style.height = '400px'
    this.featuredImageTarget.style.width = '400px'
  }
}
