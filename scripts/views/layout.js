const Layout = (function () {
  const template = `
       ${Header}
       <div id="flex-horizontal">
        ${Sidebar}
        ${Card_zone}
       </div>
       `;
  return {
    toString() {
      return template;
    },
    addListeners() {
      Card_zone.addListeners();
    },
  };
})();
