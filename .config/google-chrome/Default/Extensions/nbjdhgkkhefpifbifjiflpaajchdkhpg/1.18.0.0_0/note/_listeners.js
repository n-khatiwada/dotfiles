'use strict';

$(function () {
  chrome.app.window.onClosed.addListener(function () {
    if (save) {
      InTheNote.save();
    }
  });
  chrome.storage.onChanged.addListener(function (changes, areaName) {
    if (changes.sortedMenuItems !== null) {
      InTheNote.setSortedMenuItems(function () {
        InTheNote.setWindowActions();
      });
    }
    if (changes.purchasedinapp !== null && changes.purchasedinapp !== undefined) {
      InTheNote.setPurchasedItems();
    }
    if (changes.isStoreOpen !== null && changes.isStoreOpen !== undefined) {
      setStoreState(changes.isStoreOpen.newValue);
    }
  });

  $(window).on('resize', function () {
    setTextarea();
    InTheNote.setSortedMenuItems(function () {
      InTheNote.setWindowActions();
    });
  });
  $(window).on('blur', function () {
    chrome.runtime.sendMessage({ func: "syncAllDelayed" });
    hideWindowActions();
  });

  (function sortableMenuElementsListeners() {
    var grabbed = undefined;
    $(".sortable").on('dragstart', function (event) {
      grabbed = event.target;
    });
    $(".toolbar").on('drop', function (event) {
      event.preventDefault();
      $("#customButtonsEndPoint").before(grabbed);
      grabbed = null;
      InTheNote.saveDelayed();
    }).on('dragover', function (event) {
      event.preventDefault();
    });
    $("#noteBox").on('drop', function (event) {
      if (grabbed) {
        event.preventDefault();
        $("#menuMenu").append(grabbed);
        grabbed = null;
      }
      InTheNote.saveDelayed();
    }).on('dragover', function (event) {
      if (grabbed) {
        event.preventDefault();
      }
    });
  })();

  $(".textFormat").click(function () {
    var role = $(this).data('role');
    document.execCommand(role, false, null);
  });
  $("#buttonTaskList").click(function () {
    TextFormat.taskList();
  });
  $(".fontbutton").each(function () {
    var fontfamily = $(this).attr('font-family');
    $(this).css('font-family', fontfamily).attr('title', fontfamily);
  }).click(function (event) {
    $("#noteBox").css('font-family', $(this).attr("font-family"));
    InTheNote.saveDelayed();
  });
  $(".fontsizebutton").click(function (event) {
    $("#noteBox").css("font-size", parseInt($("#noteBox").css('font-size')) + parseInt($(this).attr("font-size-change")));
    InTheNote.saveDelayed();
  });

  $("#colorPalette").click(function (evt) {
    $("#colorPalette").fadeOut(300);
  });

  $(".menubutton").click(function (event) {
    var menuId = $(this).data('menu');
    if (!$("#" + menuId).is(':visible')) {
      if ($(".menucollection").is(':visible')) {
        $(".menucollection").not("#" + menuId).hide(function () {
          $("#" + menuId).show("slow");
        });
      } else {
        $("#" + menuId).show("slow");
      }
    } else {
      $(".menucollection").hide("slow");
    }
  });
  $(".menucollection").mouseout(function () {
    clearTimeout(hidemenutimeout);
    hidemenutimeout = setTimeout(function () {
      $(".menucollection").hide("slow");
    }, 1500);
  }).mouseover(function () {
    clearTimeout(hidemenutimeout);
  });

  $("#buttonClose").click(function (event) {
    InTheNote.save().then(function () {
      window.close();
    });
  }).on('mousedown contextmenu mouseover', function () {
    showWindowActions();
  });

  $("#windowActionsBox").on('mouseout blur', function () {
    hideWindowActionsDelayed();
  }).on('mousein', function () {
    clearTimeout(hideWindowActionsTimeout);
  });

  $("#buttonMinimize").click(function () {
    if (!chrome.app.window.current().isMinimized()) {
      chrome.app.window.current().minimize();
    } else {
      chrome.app.window.current().restore();
    }
  });
  $("#buttonMaximize").click(function () {
    if (!chrome.app.window.current().isMaximized()) {
      chrome.app.window.current().maximize();
    } else {
      chrome.app.window.current().restore();
    }
  });

  $("#buttonAdd").click(function (event) {
    openNewNote();
  });
  $("#buttonDel").click(function (event) {
    $("#removeBox").fadeIn(200);
  });
  $("#removeCancel").click(function (event) {
    $("#removeBox").fadeOut(300);
  });
  $("#removeRemove").click(function (event) {
    InTheNote.remove();
  });
  $("#buttonCloseAll").click(function (event) {
    WindowManager.closeAllWindows();
  });
  $("#buttonSpeechToText").click(function (event) {
    Speech2Text.initiate();
  });
  $("#buttonAlwaysOnTop").click(function (event) {
    buttonYesNoChange(this, WindowManager.alwaysOnTopSwap());
  });
  $("#buttonGoToOptions").click(function (event) {
    event.preventDefault();
    WindowManager.openLink.call(this);
  });
  $("#buttonOpenStore").click(function (event) {
    event.preventDefault();
    WindowManager.openLink.call(this);
  });
  $("#buttonShareLink").click(function (event) {
    InTheNote.share(event);
  });
  $("#buttonPrint").click(function (event) {
    InTheNote.print();
  });

  $(".button-backcolor").click(function (event) {
    var selectedcolor = $(this).data("color");
    TextFormat.backColor(selectedcolor);
  });

  $("#notetextarea").on('keypress keyup', function (event) {
    InTheNote.saveDelayed();
  });

  (function functionalKeysListeners() {
    var k17Delay = null;
    var k17 = false;
    var k17selectionstart = null;
    var k17selectionend = null;
    var k17counter = 0;
    $(window).on('keydown keyup', function (event) {
      var k17Down = function k17Down() {
        var notetextarea = $("#notetextarea");
        var noteclickarea = $("#noteclickarea");
        if (k17 === false) {
          k17 = true;
          k17selectionstart = notetextarea.prop("selectionStart");
          k17selectionend = notetextarea.prop("selectionEnd");
          var context = notetextarea.html();
          var scrolltop = notetextarea.scrollTop();
          var context_url = urlize(context, { autoescape: false });
          notetextarea.hide();
          noteclickarea.show().css('height', notetextarea.css('height')).css('width', notetextarea.css('width')).html(context_url).scrollTop(scrolltop);
        }
        clearTimeout(k17Delay);
        k17Delay = setTimeout(k17Up, 1500);
      };
      var k17Up = function k17Up() {
        if (k17) {
          clearTimeout(k17Delay);
          var notetextarea = $("#notetextarea");
          var noteclickarea = $("#noteclickarea");
          var scrolltop = noteclickarea.scrollTop();
          noteclickarea.hide();
          notetextarea.show().scrollTop(scrolltop).prop("selectionStart", k17selectionstart).prop("selectionEnd", k17selectionend);
          k17 = false;
        }
      };

      switch (event.keyCode) {
        case 17:
          switch (event.type) {
            case "keydown":
              if (event.altKey === false && k17counter > 0) {
                k17Down();
              } else {
                k17counter++;
              }
              break;
            case "keyup":
              k17counter = 0;k17Up();
              break;
          }
          break;
        case 85:
          if (event.type == "keyup" && event.ctrlKey && event.shiftKey) {
            document.execCommand("strikeThrough", false, null);
          }
          break;
        case 188:
          if (event.type == "keydown" && event.ctrlKey) {
            event.preventDefault();
            $("#noteBox").css("font-size", parseInt($("#noteBox").css("font-size")) + 1);
            InTheNote.saveDelayed();
          }
          break;
        case 190:
          if (event.type == "keydown" && event.ctrlKey) {
            event.preventDefault();
            $("#noteBox").css("font-size", parseInt($("#noteBox").css("font-size")) - 1);
            InTheNote.saveDelayed();
          }
          break;
      }
    }).on("wheel", function (event) {
      if (event.ctrlKey) {
        event.preventDefault();
        if (event.originalEvent.deltaY > 0) {
          $("#noteBox").css("font-size", parseInt($("#noteBox").css("font-size")) - 1);
        } else if (event.originalEvent.deltaY < 0) {
          $("#noteBox").css("font-size", parseInt($("#noteBox").css("font-size")) + 1);
        }
        InTheNote.saveDelayed();
      }
    });
  })();

  $("#notetextarea").on("keydown", function (event) {
    switch (event.keyCode) {
      case 9:
        event.preventDefault();
        TextFormat.tabulationInsert();
        break;
    }
  });
});