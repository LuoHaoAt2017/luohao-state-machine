$(function() {
  $(document).on('click', '.router-link', function() {
    const name = $(this).html();
    $router.push({
      name: 'about',
      params: {
        title: name
      }
    });
  });
});