(function () {
  "use strict";

  var supportedLanguages = ["en", "zh"];
  var currentLanguage = "en";

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
    return browserLanguage.indexOf("zh") === 0 ? "zh" : "en";
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

    currentLanguage = language;
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en";

    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = getTranslation(dictionary, node.getAttribute("data-i18n"));
      if (typeof value === "string") {
        node.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (node) {
      var value = getTranslation(dictionary, node.getAttribute("data-i18n-alt"));
      if (typeof value === "string") {
        node.setAttribute("alt", value);
      }
    });

    document.querySelectorAll("[data-lang-option]").forEach(function (button) {
      var isActive = button.getAttribute("data-lang-option") === language;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function setupLanguageSwitcher() {
    applyLanguage(resolveLanguage());
    document.documentElement.classList.remove("i18n-pending");

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

  function setupMenu() {
    var toggle = document.querySelector("[data-menu-toggle]");
    var navigation = document.querySelector("[data-site-navigation]");
    if (!toggle || !navigation) {
      return;
    }

    var focusableSelector = "a[href], button:not([disabled])";
    var menuLabel = toggle.querySelector(".site-menu-button__label");

    function setMenu(open, focusFirst) {
      toggle.setAttribute("aria-expanded", String(open));
      navigation.classList.toggle("is-open", open);

      if (menuLabel) {
        menuLabel.setAttribute("data-i18n", open ? "nav.close" : "nav.menu");
        applyLanguage(currentLanguage);
      }

      if (open && focusFirst) {
        window.setTimeout(function () {
          var firstLink = navigation.querySelector("a[href]");
          if (firstLink) {
            firstLink.focus();
          }
        }, 180);
      }
    }

    toggle.addEventListener("click", function (event) {
      var opening = toggle.getAttribute("aria-expanded") !== "true";
      setMenu(opening, event.detail === 0);
      if (!opening && event.detail !== 0) {
        toggle.blur();
      }
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function (event) {
        setMenu(false, false);
        if (event.detail !== 0) {
          link.blur();
        }
      });
    });

    document.addEventListener("pointerdown", function (event) {
      if (navigation.classList.contains("is-open") && !navigation.contains(event.target) && !toggle.contains(event.target)) {
        setMenu(false, false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setMenu(false, false);
        toggle.focus();
      }

      if (event.key === "Tab" && navigation.classList.contains("is-open")) {
        var focusable = Array.prototype.slice.call(navigation.querySelectorAll(focusableSelector));
        if (!focusable.length) {
          return;
        }

        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) {
        setMenu(false, false);
      }
    });

    window.addEventListener("orientationchange", function () {
      setMenu(false, false);
      toggle.blur();
    });
  }

  function setupReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) {
      return;
    }

    if (!("IntersectionObserver" in window)) {
      items.forEach(function (item) { item.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -8%", threshold: 0.08 });

    items.forEach(function (item) { observer.observe(item); });
  }

  function framePath(settings, frameNumber) {
    var paddedNumber = String(frameNumber).padStart(settings.pad, "0");
    return settings.base + settings.prefix + paddedNumber + settings.ext;
  }

  function preloadFrame(path) {
    return new Promise(function (resolve) {
      var frame = new Image();
      frame.onload = resolve;
      frame.onerror = resolve;
      frame.src = path;
    });
  }

  function setupFrameAnimations() {
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var mobile = window.matchMedia && window.matchMedia("(max-width: 767px)").matches;
    var saveData = navigator.connection && navigator.connection.saveData;
    if (reduceMotion) {
      return;
    }

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

      var mobileSource = mobile && image.parentElement ? image.parentElement.querySelector("[data-frame-mobile-source]") : null;
      if (mobile) {
        var mobileBase = image.getAttribute("data-frame-base-mobile");
        var mobilePrefix = image.getAttribute("data-frame-prefix-mobile");
        var mobileExt = image.getAttribute("data-frame-ext-mobile");
        var mobileStart = parseInt(image.getAttribute("data-frame-start-mobile"), 10);
        var mobileCount = parseInt(image.getAttribute("data-frame-count-mobile"), 10);
        var mobilePad = parseInt(image.getAttribute("data-frame-pad-mobile"), 10);
        var mobileInterval = parseInt(image.getAttribute("data-frame-interval-mobile"), 10);

        settings.base = mobileBase !== null ? mobileBase : settings.base;
        settings.prefix = mobilePrefix !== null ? mobilePrefix : settings.prefix;
        settings.ext = mobileExt !== null ? mobileExt : settings.ext;
        settings.start = mobileStart || settings.start;
        settings.count = mobileCount || settings.count;
        settings.pad = mobilePad || settings.pad;
        settings.interval = mobileInterval || settings.interval;
      }

      if (!settings.base || settings.count < 2) {
        return;
      }

      var frameStep = mobile && !saveData ? 1 : 2;
      var initialCount = mobile ? (saveData ? 3 : 4) : 6;
      var playbackInterval = mobile ? Math.max(settings.interval, 150) : Math.max(settings.interval, 200);
      var initialBatch = [];
      var frameNumber = settings.start;
      var previousTime = 0;
      var animationId;

      for (var index = 0; index < initialCount; index += 1) {
        var initialFrame = settings.start + (index * frameStep);
        if (initialFrame > settings.count) {
          break;
        }
        initialBatch.push(preloadFrame(framePath(settings, initialFrame)));
      }

      Promise.all(initialBatch).then(function () {
        function animate(time) {
          if (!previousTime) {
            previousTime = time;
          }

          if (document.visibilityState === "visible" && time - previousTime >= playbackInterval) {
            frameNumber += frameStep;
            if (frameNumber > settings.count) {
              frameNumber = settings.start;
            }
            var nextFramePath = framePath(settings, frameNumber);
            if (mobileSource) {
              mobileSource.setAttribute("srcset", nextFramePath);
              image.setAttribute("src", nextFramePath);
            } else {
              image.src = nextFramePath;
            }
            previousTime = time;
          }

          animationId = window.requestAnimationFrame(animate);
        }

        animationId = window.requestAnimationFrame(animate);
      });

      var preloadRest = function () {
        for (var rest = settings.start + (initialCount * frameStep); rest <= settings.count; rest += frameStep) {
          preloadFrame(framePath(settings, rest));
        }
      };

      if ("requestIdleCallback" in window) {
        window.requestIdleCallback(preloadRest, { timeout: 2500 });
      } else {
        window.setTimeout(preloadRest, 1200);
      }

      window.addEventListener("pagehide", function () {
        if (animationId) {
          window.cancelAnimationFrame(animationId);
        }
      }, { once: true });
    });
  }

  function setupCasePreviews(panel) {
    var triggers = panel.querySelectorAll("[data-preview-trigger]");
    var images = panel.querySelectorAll("[data-preview-image]");

    triggers.forEach(function (trigger) {
      trigger.addEventListener("click", function () {
        var target = trigger.getAttribute("data-preview-trigger");
        triggers.forEach(function (item) {
          var activeTrigger = item === trigger;
          item.classList.toggle("is-active", activeTrigger);
          item.setAttribute("aria-pressed", String(activeTrigger));
        });
        images.forEach(function (image) {
          var active = image.getAttribute("data-preview-image") === target;
          image.classList.toggle("is-active", active);
          image.hidden = !active;
        });
      });
    });
  }

  function setupCaseDetails(panel) {
    var button = panel.querySelector("[data-case-details]");
    if (!button) {
      return;
    }

    var details = document.getElementById(button.getAttribute("aria-controls"));
    var label = button.querySelector("span");
    if (!details || !label) {
      return;
    }

    button.addEventListener("click", function () {
      var expanded = button.getAttribute("aria-expanded") === "true";
      var nextKey = expanded ? button.getAttribute("data-label-open-key") : button.getAttribute("data-label-close-key");
      button.setAttribute("aria-expanded", String(!expanded));
      details.hidden = expanded;
      label.setAttribute("data-i18n", nextKey);
      applyLanguage(currentLanguage);
    });
  }

  function setupWebCases() {
    var tabs = Array.prototype.slice.call(document.querySelectorAll("[data-case-tab]"));
    var panels = Array.prototype.slice.call(document.querySelectorAll("[data-case-panel]"));
    if (!tabs.length || !panels.length) {
      return;
    }

    function activateTab(tab) {
      var target = tab.getAttribute("data-case-tab");
      tabs.forEach(function (item) {
        var active = item === tab;
        item.classList.toggle("is-active", active);
        item.setAttribute("aria-selected", String(active));
        item.setAttribute("tabindex", active ? "0" : "-1");
      });
      panels.forEach(function (panel) {
        var active = panel.getAttribute("data-case-panel") === target;
        panel.classList.toggle("is-active", active);
        panel.hidden = !active;
      });
    }

    tabs.forEach(function (tab, index) {
      tab.setAttribute("tabindex", tab.classList.contains("is-active") ? "0" : "-1");
      tab.addEventListener("click", function () { activateTab(tab); });
      tab.addEventListener("keydown", function (event) {
        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
          return;
        }
        event.preventDefault();
        var direction = event.key === "ArrowRight" ? 1 : -1;
        var nextIndex = (index + direction + tabs.length) % tabs.length;
        activateTab(tabs[nextIndex]);
        tabs[nextIndex].focus();
      });
    });

    panels.forEach(function (panel) {
      setupCasePreviews(panel);
      setupCaseDetails(panel);
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupLanguageSwitcher();
    setupMenu();
    setupReveal();
    setupWebCases();
    setupFrameAnimations();
    document.documentElement.classList.add("is-ready");
  });
})();
