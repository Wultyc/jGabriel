<template>
  <div>
    <PageHero path="Contact"/>
    <!-- Contact Start -->
    <section class="section pb-0" id="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center">
            <div class="container-title text-center mb-4 pb-2">
              <div class="titles">
                <h2 class="title text-capitalize mb-4">Contact Me</h2>
                <p
                  class="pera-title para-desc-600 text-light-muted mb-0 mx-auto"
                >
                  Obviously I'm a Web Designer. Experienced with all stages of
                  the development cycle for dynamic web projects.
                </p>
                <span></span>
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->

        <div class="row">
          <div class="col-md-4 mt-4 pt-2">
            <div class="contact-detail text-center">
              <div class="icon">
                <i data-feather="phone" class="fea icon-md"></i>
              </div>
              <div class="content mt-4">
                <h5 class="title">Phone</h5>
                <p class="text-light-muted">
                  Promising development turmoil inclusive education
                  transformative community
                </p>
                <a href="tel:+152534-468-854" class="text-primary"
                  >+152 534-468-854</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="contact-detail text-center">
              <div class="icon">
                <i data-feather="mail" class="fea icon-md"></i>
              </div>
              <div class="content mt-4">
                <h5 class="title">Email</h5>
                <p class="text-light-muted">
                  Promising development turmoil inclusive education
                  transformative community
                </p>
                <a href="mailto:contact@example.com" class="text-primary"
                  >contact@example.com</a
                >
              </div>
            </div>
          </div>
          <!--end col-->

          <div class="col-md-4 mt-4 pt-2">
            <div class="contact-detail text-center">
              <div class="icon">
                <i data-feather="map-pin" class="fea icon-md"></i>
              </div>
              <div class="content mt-4">
                <h5 class="title">Location</h5>
                <p class="text-light-muted">
                  C/54 Northwest Freeway, Suite 558, <br />Houston, USA 485
                </p>
                <a
                  href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                  class="map-popup-view text-primary"
                  >View on Google map</a
                >
              </div>
            </div>
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->

    <section class="section pt-5">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-12">
            <div class="custom-form mb-sm-30">
              <div id="message"></div>
              <form
                method="post"
                action="php/contact.php"
                name="contact-form"
                id="contact-form"
              >
                <div class="row">
                  <div class="col-lg-6">
                    <div class="row">
                      <div class="col-lg-12 col-md-6">
                        <div class="form-group">
                          <input
                            name="name"
                            id="name"
                            type="text"
                            class="form-control border rounded"
                            placeholder="First Name :"
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-lg-12 col-md-6">
                        <div class="form-group">
                          <input
                            name="email"
                            id="email"
                            type="email"
                            class="form-control border rounded"
                            placeholder="Your email :"
                          />
                        </div>
                      </div>
                      <!--end col-->
                      <div class="col-lg-12">
                        <div class="form-group">
                          <input
                            name="subject"
                            id="subject"
                            class="form-control border rounded"
                            placeholder="Your subject :"
                          />
                        </div>
                      </div>
                      <!--end col-->
                    </div>
                    <!--end row-->
                  </div>
                  <!--end col-->

                  <div class="col-lg-6">
                    <div class="form-group">
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        class="form-control border rounded"
                        placeholder="Your Message :"
                      ></textarea>
                    </div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
                <div class="row">
                  <div class="col-sm-12 text-right">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn btn-primary rounded"
                      value="Send Message"
                    />
                    <div id="simple-msg"></div>
                  </div>
                  <!--end col-->
                </div>
                <!--end row-->
              </form>
              <!--end form-->
            </div>
            <!--end custom-form-->
          </div>
          <!--end col-->
        </div>
        <!--end row-->
      </div>
      <!--end container-->
    </section>
    <!--end section-->
    <!-- Contact End -->
  </div>
</template>

<script>
import Vue from "vue";
import PageHero from '../components/PageHero'

export default Vue.extend({
    components: {
        PageHero,
    }
});
</script>

<style>
</style>