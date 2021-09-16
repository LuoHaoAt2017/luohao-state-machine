$(function() {
  $(document).on('click', '.router-link', function() {
    const name = $(this).html();
    $router.push({
      name: 'home',
      params: {
        title: name
      }
    });
  });
});