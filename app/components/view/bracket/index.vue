<script setup lang="ts">
const matches = [];
</script>

<template>
  <div class="pt-32 flex flex-col items-center">
    <div class="flex justify-center gap-4">
      <!-- Top16A -->
      <div class="flex flex-col items-center gap-6">
        <ViewBracketCard
          dancer-a="Dancer 1"
          dancer-b="Dancer 2"
        />
        <ViewBracketCard
          dancer-a="Dancer 3"
          dancer-b="Dancer 4"
        />
        <ViewBracketCard
          dancer-a="Dancer 5"
          dancer-b="Dancer 6"
        />
        <ViewBracketCard
          dancer-a="Dancer 7"
          dancer-b="Dancer 8"
        />
      </div>
      <!-- Top16B -->
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 1"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 2"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 3"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 4"
          />
        </div>
      </div>
      <!-- Top8 -->
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            dancer-a=""
            dancer-b=""
          />
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            dancer-a=""
            dancer-b=""
          />
        </div>
      </div>
      <!-- Top4 -->
      <div class="flex flex-col justify-center flex-grow">
        <ViewBracketCard
          dancer-a=""
          dancer-b=""
        />
      </div>
      <!-- Final -->
      <div class="flex flex-col justify-center flex-grow">
        <div>
          <ViewBracketCard
            dancer-a=""
            dancer-b=""
            hide-dancer-b
          />
        </div>
      </div>
      <!-- Top4 -->
      <div class="flex flex-col justify-center flex-grow">
        <ViewBracketCard
          dancer-a=""
          dancer-b=""
        />
      </div>
      <!-- Top8 -->
      <div class="flex flex-col justify-between flex-grow">
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            dancer-a=""
            dancer-b=""
          />
        </div>
        <div class="flex-1 flex flex-col justify-center">
          <ViewBracketCard
            dancer-a=""
            dancer-b=""
          />
        </div>
      </div>
      <!-- Top16B -->
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 5"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 6"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 7"
          />
          <ViewBracketCard
            dancer-a=""
            dancer-b="Guest 8"
          />
        </div>
      </div>
      <!-- Top16A -->
      <div class="flex flex-col">
        <div class="flex flex-col items-center gap-6">
          <ViewBracketCard
            dancer-a="Dancer 9"
            dancer-b="Dancer 10"
          />
          <ViewBracketCard
            dancer-a="Dancer 11"
            dancer-b="Dancer 12"
          />
          <ViewBracketCard
            dancer-a="Dancer 13"
            dancer-b="Dancer 14"
          />
          <ViewBracketCard
            dancer-a="Dancer 15"
            dancer-b="Dancer 16"
          />
        </div>
      </div>
    </div>
  </div>
</template>
