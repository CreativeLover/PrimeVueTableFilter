<template>
  <div class="text-center">
    <div class="h-full pt-2 pb-6 px-5 rounded w-full md:block md: hidden">
      <div
        class="uppercase ml-12 mr-12 grid grid-cols-12 text-theme-1 font-extrabold -mb-3 text-sm xl:text-base lg:text-xs sm:text-xs flex items-center"
      >
        <span class="col-span-2">
          <div class="ml-3 flex justify-center">
            ATHLETE
            <br />
            CATEGORY
          </div>
        </span>
        <span class="2xl:ml-6 col-span-2">
          <div
            class="3xl:flex pl-3 xl:flex justify-start 2xl:ml-0 xl:ml-1 lg:-ml-1 lg:flex justify-start md:flex justify-start"
          >
            CSE Defense
            <br />
            SCORE
          </div>
        </span>
        <span class="col-span-2 2xl:ml-3">
          <div class="flex justify-start ml-2">
            <span>
              CSE Defense
              <br />
              SCORE
              <span class="text-10">+</span>
              Arm Velo
            </span>
          </div>
        </span>
        <span class="col-span-2">
          <div class="grid grid-cols-12 xl:-m-2 lg:m-0">
            <span class="lg:col-span-1 md:col-span-2"></span>
            <span
              class="2xl:col-span-6 xl:ml-1 lg:col-span-8 lg:m-0 md:col-span-9"
            >
              CSE Defense
              <br />
              SCORE
              <span class="text-10">+</span>
              H - H
            </span>
          </div>
        </span>
        <span class="col-span-2">
          <div class="grid grid-cols-12 xl:-m-2 lg:m-0">
            <span class="lg:col-span-1 md:col-span-1"></span>
            <span class="2xl:col-span-6 lg:col-span-7 md:col-span-9">
              CSE Defense
              <br />
              SCORE
              <span class="text-10">+</span>
              H - 1
            </span>
          </div>
        </span>
        <span class="col-span-2">
          <div class="">
            <span>
              CSE Defense
              <br />
              SCORE
              <span class="text-10">+</span>
              Pop Time
            </span>
          </div>
        </span>
      </div>

      <!-- NATIONAL -->
      <div class="flex flex-row mt-6 bg-1 w-full h-56 rounded-lg">
        <div
          class="transform -rotate-90 translate-x-11 translate-y-2 ml-2 font-bold text-2xl text-white pt-18 uppercase font-sans pl-6"
        >
          national
        </div>

        <div class="flex-1 -ml-24 pr-6">
          <div
            class="flex items-center bg-white w-full h-12 rounded mt-6 lg:text-sm md:text-xs"
          >
            <div class="grid grid-cols-12 w-full mr-6">
              <div
                class="col-span-2 -ml-3 font-extrabold xl:text-base lg:text-sm md:text-xs"
              >
                2022-2023
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥65</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥62 + ≥59 mph</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥62 + ≥11.9 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥62 + ≤2.9 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2">≥62 + ≤1.8 sec</div>
            </div>
          </div>

          <div
            class="flex items-center bg-white w-full h-12 rounded mt-4 lg:text-sm md:text-xs"
          >
            <div class="grid grid-cols-12 w-full mr-6">
              <div
                class="col-span-2 -ml-3 font-extrabold xl:text-base lg:text-sm md:text-xs"
              >
                2024-2026
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥62</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥59 + ≥58 mph</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥59 + ≥12.2 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥59 + ≤2.95 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2">≥59 + ≤1.84 sec</div>
            </div>
          </div>

          <div
            class="flex items-center bg-white w-full h-12 rounded mt-4 lg:text-sm md:text-xs"
          >
            <div class="grid grid-cols-12 w-full mr-6">
              <div
                class="col-span-2 -ml-3 font-extrabold xl:text-base lg:text-sm md:text-xs"
              >
                *All Academic
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥60</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥57 + ≥57 mph</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>57 + ≥12.5 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2 flex justify-around">
                <span>≥57 + ≤3.0 sec</span>
                <span>or</span>
              </div>
              <div class="col-span-2">≥57 + ≤1.89 sec</div>
            </div>
          </div>
        </div>
      </div>
      <!-- End NATIONAL -->
      <!-- Regional -->
      <!-- End Regional -->
    </div>

    <!-- Mobile Design -->
    <div class="bg-1 md:hidden pt-2 pb-6 px-3 rounded w-full">
      <div class="bg-theme-1 w-full h-auto rounded p-3">
        <div class="text-white font-extrabold text-xl uppercase mb-3">
          national
        </div>
        <!-- Rect First Text -->
        <div class="bg-white rounded-md">
          <div class="text-theme-1 uppercase pt-2">
            <span class="flex justify-center font-bold text-base">
              2022-2023 graduates
            </span>
            <div class="pt-2">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex justify-center">
                  cse defense score
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥65
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    arm velocity
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥62
                  <span class="text-10">+</span>
                  ≥59 mph
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">H-H</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥62
                  <span class="text-10">+</span>
                  ≤11.9 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">h-1</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥62
                  <span class="text-10">+</span>
                  ≤2.9 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2 pb-3">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">pop time</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥62
                  <span class="text-10">+</span>
                  ≤1.8 sec
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- End RECT -->
        <!-- Second RECT -->
        <div class="bg-white rounded-md mt-3">
          <div class="text-theme-1 uppercase pt-2">
            <span class="flex justify-center font-bold text-base">
              2024-2026 graduates
            </span>
            <div class="pt-2">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex justify-center">
                  cse defense score
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥62
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    arm velocity
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥59
                  <span class="text-10">+</span>
                  ≥58 mph
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">H-H</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥59
                  <span class="text-10">+</span>
                  ≤12.2 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">h-1</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥59
                  <span class="text-10">+</span>
                  ≤2.95 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2 pb-3">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">pop time</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥59
                  <span class="text-10">+</span>
                  ≤1.84 sec
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END Second RECT -->

        <!-- Third RECT -->
        <div class="bg-white rounded-md mt-3">
          <div class="text-theme-1 uppercase pt-2">
            <span class="flex justify-center font-bold text-base">
              2024-2026 graduates
            </span>
            <div class="pt-2">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex justify-center">
                  cse defense score
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥60
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    arm velocity
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥57
                  <span class="text-10">+</span>
                  ≥57 mph
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">H-H</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥57
                  <span class="text-10">+</span>
                  ≤12.5 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">h-1</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥57
                  <span class="text-10">+</span>
                  ≤3.0 sec
                </div>
              </div>
            </div>
            <div class="grid grid-cols-12 pt-2">
              <span
                class="col-span-5 border-dashed border-t ml-2 mt-3 border-10"
              ></span>
              <span class="col-span-2 text-10 normal-case">or</span>
              <span
                class="col-span-5 border-dashed border-t mr-2 mt-3 border-10"
              ></span>
            </div>
          </div>

          <div class="text-theme-1 uppercase pt-2 pb-3">
            <div class="">
              <div class="grid grid-cols-12 text-xs font-bold">
                <div class="col-span-7 ml-4 flex flex-col justify-start">
                  cse defense score
                  <span>
                    <span class="text-10">+</span>
                    <span class="pl-1">pop time</span>
                  </span>
                </div>
                <div class="col-span-1 flex justify-end items-center">
                  <font-awesome-icon
                    class="cursor-pointer text-10"
                    :icon="['fa', 'right-long']"
                  />
                </div>
                <div class="col-span-4 flex items-center justify-start pl-5">
                  ≥57
                  <span class="text-10">+</span>
                  ≤1.89 sec
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END Third RECT -->
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>
<style scoped></style>
