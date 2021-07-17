<template>
    <!-- Contact Start -->
  <section class="section pb-0" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <div class="container-title text-center mb-4 pb-2">
            <div class="titles">
              <h2 class="title text-capitalize mb-4">Contact Me</h2>
              <p class="pera-title para-desc-600 text-light-muted mb-0 mx-auto">
                I'm very happy you decided to contact me. Please fill the form bellow with your message.
              </p>
              <span></span>
            </div>
          </div>
        </div>
        <!--end col-->
      </div>
      <!--end row-->
    </div>
    <!--end container-->

    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-12">
          <div class="custom-form mb-sm-30">
            <div id="message"></div>
            <form id="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" data-netlify-recaptcha="true">
              <div class="row">
                <div class="col-lg-6">
                  <div class="row">
                    <div class="col-lg-12 col-md-6">
                      <div class="form-group">
                        <input name="name" id="name" type="text" class="form-control border rounded" placeholder="First Name :"/>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-lg-12 col-md-6">
                      <div class="form-group">
                        <input name="email" id="email" type="email" class="form-control border rounded" placeholder="Your email :"/>
                      </div>
                    </div>
                    <!--end col-->
                    <div class="col-lg-12">
                      <div class="form-group">
                        <input name="subject" id="subject" class="form-control border rounded" placeholder="Your subject :"/>
                      </div>
                    </div>
                    <!--end col-->
                  </div>
                  <!--end row-->
                </div>
                <!--end col-->

                <div class="col-lg-6">
                  <div class="form-group">
                    <textarea name="comments" id="comments" rows="4" class="form-control border rounded" placeholder="Your Message :"></textarea>
                  </div>
                </div>
                <!--end col-->
              </div>
              <!--end row-->
              <div class="row">
                <div data-netlify-recaptcha="true"></div>
              </div>
              <!--end row-->
              <div class="row mb-4">
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
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend( {
    name: "ContactForm"
})
</script>

<style>

</style>