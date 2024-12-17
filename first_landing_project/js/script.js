$(document).ready(function () {
  // map_01부터 map_06까지 클릭 이벤트 처리
  $(".map_01, .map_02, .map_03, .map_04, .map_05, .map_06").on(
    "click",
    function () {
      // 클릭 시 info-btn의 텍스트를 "1st Lucy - Intro"로 변경
      $(".info-btn").text("1st Lucy - Intro");
    }
  );
});

function showSetlist() {
  alert("셋리스트를 확인하세요!");
}
