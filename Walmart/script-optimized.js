// 优化版：使用纯 JavaScript 替代 jQuery，减小依赖
document.addEventListener("DOMContentLoaded", () => {
  const quizSection = document.getElementById("quiz-section");
  if (quizSection) {
    quizSection.style.display = "none";
    quizSection.style.opacity = 0;
  }

  // 初始化评论区
  initComments();
});

function isQuestionAnswered(questionNumber) {
  const radios = document.getElementsByName("q" + questionNumber);
  for (let i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

function startQuiz() {
  const quizSection = document.getElementById("quiz-section");
  const giftImage = document.querySelector(".product-img");
  const benefitsWrap = document.querySelector(".benefits-wrap");
  const headerSection = document.getElementById("header-section");

  giftImage.style.transform = "scale(0.9)";
  giftImage.classList.add("shrunk");
  headerSection.classList.add("quiz-active");

  benefitsWrap.style.transition = "opacity 0.4s ease";
  benefitsWrap.style.opacity = 0;
  setTimeout(() => {
    benefitsWrap.style.display = "none";
  }, 400);

  quizSection.style.display = "block";
  setTimeout(() => {
    quizSection.classList.add("active");
  }, 10);

  const firstStep = document.getElementById("question1");
  if (firstStep) {
    firstStep.style.display = "block";
    setTimeout(() => firstStep.classList.add("active"), 10);
  }
}

function nextQuestion(current) {
  if (!isQuestionAnswered(current)) {
    alert("Please select an answer to continue.");
    return;
  }

  const currEl = document.getElementById("question" + current);
  const nextEl = document.getElementById("question" + (current + 1));

  currEl.classList.remove("active");
  setTimeout(() => {
    currEl.style.display = "none";

    if (nextEl) {
      nextEl.style.display = "block";
      setTimeout(() => nextEl.classList.add("active"), 10);
    }
  }, 300);
}

function showLoading() {
  const quizSection = document.getElementById("quiz-section");
  const loading = document.getElementById("quiz-loading");
  const result = document.getElementById("quiz-result");
  const msgs = ["msg1", "msg2", "msg3"];

  quizSection.classList.remove("active");
  setTimeout(() => {
    quizSection.style.display = "none";
    loading.style.display = "block";

    msgs.forEach((id, i) => {
      setTimeout(() => document.getElementById(id).classList.add("show"), i * 1500);
    });

    setTimeout(() => {
      loading.style.display = "none";
      result.style.display = "block";
      setTimeout(() => result.classList.add("active"), 10);
    }, 5500);
  }, 300);
}

// 评论区功能 - 纯 JavaScript 实现
var text_remaining = 6;
var visible = 5;

function orderBy(elements, keySelector, order) {
  return Array.from(elements).sort(function (a, b) {
    const aVal = keySelector(a);
    const bVal = keySelector(b);
    if (order === "newest") {
      return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
    } else if (order === "oldest" || order === "top") {
      return aVal < bVal ? 1 : aVal > bVal ? -1 : 0;
    }
  });
}

function initComments() {
  setTimeout(function () {
    const sortingBoxP = document.querySelector(".sorting-box > p");
    if (sortingBoxP) sortingBoxP.textContent = "130 comments";

    const startComs = document.querySelectorAll(".start-coms");
    startComs.forEach(el => el.classList.remove("start-coms"));
  }, 250);

  // Textarea 点击事件
  const textarea = document.querySelector(".add-comment textarea");
  if (textarea) {
    textarea.addEventListener('click', function () {
      document.querySelector(".add-comment").classList.add("active");
    });

    // Textarea 输入事件
    textarea.addEventListener('keyup', function () {
      const text_length = this.value.length;
      const commentBtn = document.querySelector(".comment-button-right button");

      if (text_length <= 0) {
        commentBtn.classList.add("disabled");
        commentBtn.disabled = true;
      } else {
        commentBtn.classList.remove("disabled");
        commentBtn.disabled = false;
      }

      text_remaining = 6 - text_length;
      const charMsg = document.querySelector(".comment-button-left p");
      if (charMsg) {
        charMsg.textContent = "Write " + text_remaining + " more characters to post to Facebook";
      }

      const checkbox = document.querySelector(".comment-button-left [type=checkbox]");
      if (checkbox && checkbox.checked) {
        if (text_remaining <= 0) {
          charMsg.style.display = "none";
          commentBtn.classList.remove("disabled");
          commentBtn.disabled = false;
        } else {
          charMsg.style.display = "block";
          commentBtn.classList.add("disabled");
          commentBtn.disabled = true;
        }
      }
    });
  }

  // Checkbox 变化事件
  const checkbox = document.querySelector(".comment-button-left [type=checkbox]");
  if (checkbox) {
    checkbox.addEventListener('change', function () {
      const charMsg = document.querySelector(".comment-button-left p");
      const commentBtn = document.querySelector(".comment-button-right button");

      if (this.checked && text_remaining > 0) {
        charMsg.style.display = "block";
        commentBtn.classList.add("disabled");
        commentBtn.disabled = true;
      } else {
        charMsg.style.display = "none";
        commentBtn.classList.remove("disabled");
        commentBtn.disabled = false;
      }
    });
  }

  // 排序按钮点击
  const sortBtn = document.querySelector('.sort > button');
  if (sortBtn) {
    sortBtn.addEventListener('click', function () {
      const dropdown = this.nextElementSibling;
      if (dropdown) {
        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
      }
    });
  }

  // 排序选项点击
  const dropdownBtns = document.querySelectorAll('.dropdown-sort button');
  dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      const sortType = this.dataset.sort;
      const sort_by = sortType === "top" ? "likes" : "order";

      this.parentElement.style.display = "none";

      const selected = this.parentElement.querySelector(".selected");
      if (selected) selected.classList.remove("selected");
      this.classList.add("selected");

      const sortBtnSpan = document.querySelector(".sort > button span");
      if (sortBtnSpan) {
        sortBtnSpan.textContent = this.querySelector("span").textContent;
      }

      const sortComs = document.querySelectorAll(".sort-coms");
      const mainComments = document.querySelector(".main-comments");
      const sorted = orderBy(sortComs, function (el) {
        return +el.dataset[sort_by];
      }, sortType);

      sorted.forEach(el => mainComments.appendChild(el));

      const loadingSvg = document.querySelector(".inner-sorting-box > svg");
      if (loadingSvg) {
        loadingSvg.style.display = "inline-block";
        setTimeout(() => loadingSvg.style.display = "none", 200);
      }

      sortComs.forEach(el => el.style.display = "none");
      for (let i = 0; i < visible && i < sortComs.length; i++) {
        const hidden = mainComments.querySelectorAll(":scope > .sort-coms:not([style*='display: block'])")[0];
        if (hidden) hidden.style.display = "block";
      }
    });
  });

  // 加载更多按钮
  const loadMoreBtn = document.querySelector('.load-more');
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', function () {
      const mainComments = document.querySelector(".main-comments");
      const hidden = mainComments.querySelectorAll(".sort-coms:not([style*='display: block'])");
      const elem = hidden.length < 5 ? hidden.length : 5;

      for (let i = 0; i < elem; i++) {
        if (hidden[i]) hidden[i].style.display = "block";
      }

      visible = visible + elem;
      const allSortComs = document.querySelectorAll(".sort-coms");
      if (visible >= allSortComs.length) {
        this.classList.add("end-coms");
        this.disabled = true;
        const span = this.querySelector("span");
        if (span) span.textContent = "Loading...";
      }
    });
  }

  // 评论按钮点击
  const commentBtn = document.querySelector(".comment-button-right button");
  if (commentBtn) {
    commentBtn.addEventListener('click', function () {
      alert("Comments are disabled by the author.");
    });
  }

  // 评论元数据按钮
  const metaBtns = document.querySelectorAll(".comment-meta button");
  metaBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      alert("Action prohibited. You are not authenticated.");
    });
  });
}
