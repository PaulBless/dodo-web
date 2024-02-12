<script lang="ts">
// import { ref } from 'vue'
export default {
  name: 'Carousel',
}
</script>

<template>
  <div>
    <div class="relative w-full " data-carousel="slide">
          <!-- Carousel wrapper -->
          <div class="relative h-screen overflow-hidden md:h-screen ">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-indicators d-none">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 3"></button>
              </div>
              <div class="carousel-inner text-center ">
                <div class="carousel-item active ">
                  <img src="../assets/img/1.png" class="d-block w-100" alt="...">
                  <!-- <div class="carousel-caption d-none d-md-block">
                    <h5> Connect & Communicate Effortlessly </h5>
                    <p> Effortlessly connect and elevate your communication game with seamless interactions within your organization or group.
                    </p>
                  </div> -->
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/2.png" class="d-block w-100" alt="...">
                  <!-- <div class="carousel-caption d-none d-md-block">
                    <h5>IP Calling on the Go.</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div> -->
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/3.png" class="d-block w-100" alt="...">
                  <!-- <div class="carousel-caption d-none d-md-block">
                    <h5>Redefining the way you communicate</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div> -->
                </div>
                <div class="carousel-item">
                  <img src="../assets/img/4.png" class="d-block w-100" alt="...">
                  <!-- <div class="carousel-caption d-none d-md-block">
                    <h5>Unlock the Power of Clear Communication</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
    </div>
  </div>
</template>

<style scoped>
/*<!-- Carousel -->*/
.carousel-inner {
  height: fit-content;
  border-radius: 30px;
}

/* . */
.carousel-caption{
  bottom: 25%;
  text-align: center;
}
.carousel-caption h5 {
  font-weight: 600;
  margin-bottom: 56px;
}

/*<!-- Carousel Buttons -->*/
.carousel-indicators button  {

}
.carousel-indicators .active {
  bottom: 0;
  background-color: #3D76EB;
  height: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

</style>
