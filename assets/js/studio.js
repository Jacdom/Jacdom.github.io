(function () {
  "use strict";

  var supportedLanguages = ["en", "zh"];

  function readSavedLanguage() {
    try {
      return window.localStorage && window.localStorage.getItem("studio-language");
    } catch (error) {
      return null;
    }
  }

  function saveLanguage(language) {
    try {
      if (window.localStorage) {
        window.localStorage.setItem("studio-language", language);
      }
    } catch (error) {
      return;
    }
  }

  function resolveLanguage() {
    var saved = readSavedLanguage();
    if (saved && supportedLanguages.indexOf(saved) !== -1) {
      return saved;
    }

    var browserLanguage = (navigator.language || navigator.userLanguage || "en").toLowerCase();
    if (browserLanguage === "zh" || browserLanguage.indexOf("zh-cn") === 0) {
      return "zh";
    }

    return "en";
  }

  function getTranslation(dictionary, key) {
    return key.split(".").reduce(function (value, part) {
      return value && value[part];
    }, dictionary);
  }

  function applyLanguage(language) {
    var dictionary = window.STUDIO_I18N && window.STUDIO_I18N[language];
    if (!dictionary) {
      return;
    }

    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = getTranslation(dictionary, node.getAttribute("data-i18n"));
      if (value) {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      var isActive = button.getAttribute("data-lang-option") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setupLanguageSwitcher() {
    var language = resolveLanguage();
    applyLanguage(language);

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      button.addEventListener("click", function () {
        var nextLanguage = button.getAttribute("data-lang-option");
        if (supportedLanguages.indexOf(nextLanguage) === -1) {
          return;
        }

        saveLanguage(nextLanguage);
        applyLanguage(nextLanguage);
      });
    });
  }

  function framePath(settings, frameNumber) {
    var paddedNumber = String(frameNumber).padStart(settings.pad, "0");
    return settings.base + settings.prefix + paddedNumber + settings.ext;
  }

  function setupFrameAnimations() {
    document.querySelectorAll("[data-frame-animation]").forEach(function (image) {
      var settings = {
        base: image.getAttribute("data-frame-base") || "",
        prefix: image.getAttribute("data-frame-prefix") || "",
        ext: image.getAttribute("data-frame-ext") || ".jpg",
        start: parseInt(image.getAttribute("data-frame-start"), 10) || 1,
        count: parseInt(image.getAttribute("data-frame-count"), 10) || 1,
        pad: parseInt(image.getAttribute("data-frame-pad"), 10) || 4,
        interval: parseInt(image.getAttribute("data-frame-interval"), 10) || 120
      };

      if (!settings.base || settings.count < 2) {
        return;
      }

      var frameNumber = settings.start;
      var preloadLimit = Math.min(settings.count, 8);
      for (var index = 1; index <= preloadLimit; index += 1) {
        var preloadImage = new Image();
        preloadImage.src = framePath(settings, index);
      }

      window.setInterval(function () {
        frameNumber = frameNumber >= settings.count ? settings.start : frameNumber + 1;
        image.src = framePath(settings, frameNumber);
      }, settings.interval);
    });
  }

  function setupWebCases() {
    var tabs = document.querySelectorAll("[data-case-tab]");
    if (!tabs.length) {
      return;
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var target = tab.getAttribute("data-case-tab");

        tabs.forEach(function (item) {
          var isActive = item === tab;
          item.classList.toggle("is-active", isActive);
          item.setAttribute("aria-selected", String(isActive));
        });

        document.querySelectorAll("[data-case-panel]").forEach(function (panel) {
          var isActivePanel = panel.getAttribute("data-case-panel") === target;
          panel.classList.toggle("is-active", isActivePanel);
          panel.hidden = !isActivePanel;
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLanguageSwitcher();
    setupWebCases();
    setupFrameAnimations();
  });
})();
