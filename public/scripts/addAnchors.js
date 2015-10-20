window.onload = function () {
  anchors.options = {
    placement: "left"
  }
  anchors.add().remove('h1');
  anchors.remove('#related-posts');
  anchors.remove('.related-posts > li > h3');
}
