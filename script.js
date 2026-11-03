(function () {
  var S = window.SITE;
  function $(i) { return document.getElementById(i); }
  function el(t, c, x) { var e = document.createElement(t); if (c) e.className = c; if (x != null) e.textContent = x; return e; }
  function okLink(u) {
    try { var x = new URL(u); return x.protocol === "https:" && (x.hostname === "maps.app.goo.gl" || x.hostname === "g.co" || /(^|\.)google\.[a-z.]+$/.test(x.hostname)); }
    catch (e) { return false; }
  }

  // Buttons
  var wa = "https://wa.me/" + S.phone + "?text=" + encodeURIComponent("Hi Cake Stories, I'd like to order a cake.");
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = wa; });
  document.querySelectorAll("[data-call]").forEach(function (a) { a.href = "tel:+" + S.phone; });
  document.querySelectorAll("[data-map]").forEach(function (a) { a.href = S.mapsUrl; });

  // Hero
  var arch = $("arch");
  if (S.hero) { var h = el("img"); h.src = S.hero; h.alt = "A cake made by Cake Stories"; arch.appendChild(h); }
  else arch.appendChild(el("div", "mono", "CS"));

  // Gallery
  var g = $("galbox");
  if (!S.gallery.length) {
    for (var k = 0; k < 6; k++) { var f0 = el("figure"); f0.appendChild(el("div", "ph", "Photo coming soon")); g.appendChild(f0); }
  }
  S.gallery.forEach(function (it) {
    var f = el("figure"), b = el("button", "im"); b.type = "button";
    b.setAttribute("aria-label", "View larger: " + (it.cap || "custom cake"));
    var im = el("img"); im.loading = "lazy"; im.src = it.img; im.alt = it.cap || "Custom cake by Cake Stories";
    b.appendChild(im);
    b.onclick = function () { $("lbimg").src = im.src; $("lbimg").alt = im.alt; $("lb").showModal(); };
    f.appendChild(b);
    if (it.cap) f.appendChild(el("figcaption", null, it.cap));
    g.appendChild(f);
  });
  $("lbx").onclick = function () { $("lb").close(); };
  $("lb").onclick = function (e) { if (e.target === $("lb")) $("lb").close(); };

  // Flavours
  S.flavours.forEach(function (x) {
    var li = el("li"); li.appendChild(el("b", null, x.name)); li.appendChild(el("span", null, x.desc)); $("fl").appendChild(li);
  });

  // Prices
  S.prices.forEach(function (x) {
    var r = el("div", "row"), n = el("span", "n", x.name);
    if (x.note) n.appendChild(el("small", null, x.note));
    r.appendChild(n); r.appendChild(el("span", "lead")); r.appendChild(el("span", "p", x.price));
    $("prices").appendChild(r);
  });
  $("pricenote").textContent = S.priceNote || "";

  // Hours
  S.hours.forEach(function (x) {
    var li = el("li"); li.appendChild(el("span", null, x.days)); li.appendChild(el("span", null, x.time)); $("hours").appendChild(li);
  });

  // Reviews
  var box = $("revbox");
  if (!S.reviews.length) box.appendChild(el("p", "empty", "Reviews coming soon."));
  S.reviews.forEach(function (r) {
    var q = el("blockquote"), n = Math.max(1, Math.min(5, r.stars | 0));
    var s = el("div", "stars", "★".repeat(n) + "☆".repeat(5 - n)); s.setAttribute("aria-label", n + " out of 5 stars");
    q.appendChild(s); q.appendChild(el("p", null, r.text)); q.appendChild(el("cite", null, r.name));
    if (r.url && okLink(r.url)) {
      q.appendChild(document.createElement("br"));
      var a = el("a", "gl", "View on Google"); a.href = r.url; a.target = "_blank"; a.rel = "noopener"; q.appendChild(a);
    }
    box.appendChild(q);
  });
})();
